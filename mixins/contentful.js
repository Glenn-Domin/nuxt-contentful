import { createClient } from '~/plugins/contentful.js'
const client = createClient()

const GETDATA = {
  // `env` is available in the context object
  asyncData ({ env }) {
    return Promise.all([
      // fetch the owner of the blog
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: 'home',
        order: '-sys.createdAt'
      })
    ]).then(([entries, posts]) => {
      // return data that should be available
      // in the template
      return {
        person: entries.items[0],
        posts: posts.items
      }
    }).catch(console.error)
  },
  methods: {
    parseFullDescription (json) {
      let parsed = ''
      parsed += this.navigateTree(json.description.content, parsed)
      return parsed || ''
    },
    navigateTree (json, parsed) {
      let navigatedText = parsed || ''
      let tag = ''
      json.forEach((element) => {
        if (element.content) {
          if (element.nodeType) {
            tag = this.chooseElement(element.nodeType)
            navigatedText += tag
          }
          if (element.nodeType === 'embedded-asset-block') {
            navigatedText += this.getImage(element.data)
          } else {
            navigatedText += this.navigateTree(element.content, parsed)
          }
          if (tag) {
            navigatedText += this.closeTag(tag)
            tag = ''
          }
        } else if (element.value) {
          if (element.marks.length && element.marks[0].type) {
            tag = this.formatText(element.marks[0].type)
            navigatedText += tag
          }
          navigatedText += element.value
          if (tag) {
            navigatedText += this.closeTag(tag)
            tag = ''
          }
        }
      })
      return navigatedText
    },
    getImage (data) {
      const url = data.target.fields.file.url
      const width = data.target.fields.file.details.image.width
      const height = data.target.fields.file.details.image.height
      return `<img src="${url}" width="${width}" height="${height}">`
    },
    chooseElement (element) {
      switch (element) {
        case 'text':
          return ''
        case 'paragraph':
          return '<p>'
        case 'unordered-list':
          return '<ul>'
        case 'ordered-list':
          return '<ol>'
        case 'list-item':
          return '<li>'
        case 'document':
          return ''
        case 'embedded-asset-block':
          return ''
        default:
          return ''
      }
    },
    formatText (element) {
      switch (element) {
        case 'bold':
          return '<strong>'
        case 'italic':
          return '<em>'
        default:
          return ''
      }
    },
    closeTag (tag) {
      switch (tag) {
        case '<p>':
          return '</p>'
        case '<ul>':
          return '</ul>'
        case '<ol>':
          return '</ol>'
        case '<li>':
          return '</li>'
        case '<strong>':
          return '</strong>'
        case '<em>':
          return '</em>'
        default:
          return ''
      }
    }
  }
}

export default GETDATA
