<template>
  <main class="container px-4 px-md-5">
    <div style="text-align: left;">
      <h1 class="title">
        Treatment
      </h1>
      <p>Heirloom gochujang street art 8-bit vice umami meditation butcher lomo quinoa echo park XOXO. Deep v paleo jianbing poutine af. Man bun semiotics kitsch artisan, pug palo santo lo-fi ethical authentic tattooed.</p>
      <p>Occupy venmo sartorial hoodie asymmetrical chillwave, four loko tote bag. Neutra ethical truffaut, literally venmo tattooed whatever crucifix tousled occupy.</p>

      <section class="my-5">
        <h2>Man bun gluten-free bitters</h2>
        <div class="col-lg-10 mx-auto px-0">
          <ul class="mt-3">
            <li>Snackwave mixtape</li>
            <li>Truffaut chillwave meggings</li>
            <li>Health goth typewriter</li>
            <li>Asymmetrical hammock</li>
            <li>Thundercats</li>
            <li>Viral humblebrag</li>
            <li>Activated charcoal</li>
            <li>Organic succulents</li>
          </ul>
        </div>
      </section>
    </div>
    <bookings />
  </main>
</template>

<script>
import bookings from '@/components/Bookings'
export default {
  name: 'Treatment',
  components: {
    bookings
  },
  head () {
    return {
      title: 'Treatment',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'tdescription', name: 'description', content: 'the treatment description' }
      ]
    }
  }
}
</script>
