<template>
  <main class="container px-4 px-md-5">
    <section>
      <hgroup class="home-heading my-6">
        <h1 class="home-flare py-5">
          I'm baby humblebrag pinterest photo booth, organic tousled brunch 90's man
        </h1>
        <h2 class="h3">
          Franzen typewriter plaid viral shoreditch
        </h2>
      </hgroup>
      <p>Hi, my name's Brett. Welcome. You've taken a big step coming here!</p>
      <p>Counselling and Psychology can sometimes feel clinical and impersonal. Thundercats shabby chic banh mi, taiyaki hexagon seitan cliche pug enamel pin keffiyeh photo booth drinking vinegar 90's intelligentsia.</p>
    </section>
    <section class="home-bookings home-flare d-flex align-items-center py-6">
      <div class="pr-lg-5">
        <h2>
          Bookings
        </h2>
        <p>Asymmetrical wolf pork belly woke fixie disrupt hell of pitchfork. VHS hella tumeric.</p>
        <p>I'm currently accepting new clients.</p>
        <nuxt-link to="/" class="btn btn-secondary" tag="button">
          Book an appointment
        </nuxt-link>
      </div>
      <img src="/images/bookings.jpg" width="300" height="300">
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home',
  head () {
    return {
      title: 'Brett Jacobson, Psychologist',
      titleTemplate: '%s'
    }
  }
}
</script>

<style lang="scss">
.home-heading {
  text-align: center;
  max-width: 620px;
  margin-left: auto;
  margin-right: auto;
  line-height: 2;
}

.home-flare {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -20%;
    left: -15%;
    z-index: -1;
    width: 140%;
    height: 140%;
    background-image: url('/images/flare-1-blue2.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    opacity: 0.25;
  }

  h1,
  h2 {
    line-height: 1.5;
  }
}

.home-bookings {

  &::before {
    background-image: url('/images/flare-blocky2.png');
    top: 15px;
    left: -48px;
    width: calc(100% + 1px);
    height: 100%;
    background-size: 100% 80%;
    opacity: 0.2;
  }

  img {
    flex-shrink: 0;
    border-radius: 50%;
  }
}
</style>
