<template>
  <main class="container px-4 px-md-5">
    <div class="row">
      <div class="col-lg-5 pr-lg-4 mb-5">
        <img src="/images/not-brettie.jpg" class="img-fluid">
      </div>
      <div class="col-lg-7 pl-lg-4">
        <h1 class="title">
          About Brett
        </h1>
        <p>Wayfarers ramps shoreditch palo santo taxidermy. Pour-over +1 street art selvage truffaut. Yr franzen ugh chambray pabst microdosing crucifix iPhone twee gochujang everyday carry.</p>
        <p>Cred brunch knausgaard bushwick activated charcoal normcore. Dreamcatcher four dollar toast organic jianbing pok pok raw denim try-hard williamsburg sartorial iPhone.</p>

        <h2 class="h4 mt-4 mt-lg-5">
          Qualifications
        </h2>
        <p>Sartorial lyft knausgaard vaporware. Unicorn ugh mustache cornhole. Cold-pressed offal salvia lumbersexual palo santo seitan keffiyeh microdosing drinking vinegar vape iPhone farm-to-table direct trade. Yr tumeric tbh man bun shaman snackwave chia etsy pug coloring book tofu. 3 wolf moon cronut air plant disrupt dreamcatcher hell of. Chicharrones fixie pug raw denim slow-carb pinterest.</p>

        <h2 class="h4 mt-4 mt-lg-5">
          Williamsburg fashion
        </h2>
        <p>Sustainable yr williamsburg fashion axe keytar. La croix cardigan actually chia. Swag narwhal meditation, hot chicken post-ironic tote bag subway tile mumblecore snackwave skateboard banjo photo booth next level. Ennui iPhone letterpress raclette waistcoat synth post-ironic DIY semiotics yr franzen. Meggings squid kickstarter, prism la croix hell of stumptown occupy normcore pitchfork salvia banh mi.</p>

        <h2 class="h4 mt-4 mt-lg-5">
          Pop-up before they sold out
        </h2>
        <p>Selvage organic enamel pin shabby chic, pop-up before they sold out ramps you probably haven't heard of them blog. Paleo etsy mumblecore celiac lomo hot chicken wayfarers normcore four dollar toast farm-to-table pitchfork lyft iPhone 90's semiotics.</p>
        <p>Truffaut VHS quinoa gluten-free hell of health goth single-origin coffee lo-fi heirloom wolf vice 8-bit la croix put a bird on it. Skateboard retro raw denim hashtag occupy cliche authentic unicorn single-origin coffee cornhole celiac polaroid. Glossier brunch readymade green juice XOXO gastropub, pabst tumeric polaroid coloring book iceland listicle tumblr chambray meggings.</p>
      </div>
    </div>
    <bookings />
  </main>
</template>

<script>
import bookings from '@/components/Bookings'
export default {
  name: 'About',
  components: {
    bookings
  },
  head () {
    return {
      title: 'About',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'adescription', name: 'description', content: 'the about description' }
      ]
    }
  }
}
</script>
