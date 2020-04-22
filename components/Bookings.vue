<template>
  <section class="bookings flare d-flex align-items-center py-6">
    <div class="pr-lg-5">
      <h2>
        Bookings
      </h2>
      <p>Asymmetrical wolf pork belly woke fixie disrupt hell of pitchfork. VHS hella tumeric.</p>
      <p class="font-weight-bold">I'm currently accepting new clients.</p>
      <nuxt-link to="/contact" class="btn btn-secondary" tag="button">
        Book an appointment
      </nuxt-link>
    </div>
    <img src="/images/bookings.jpg" width="300" height="300">
  </section>
</template>

<style lang="scss">
.flare.bookings {

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
