<template>
  <main>
    <section class="">
      <hgroup class="home-heading my-6">
        <h1 class="home-flare py-5 mb-6">
          I'm baby humblebrag pinterest photo booth, organic tousled brunch 90's man
        </h1>
        <h2>Franzen typewriter plaid viral shoreditch</h2>
      </hgroup>
      <p>Hi, my name's Brett. Welcome. You've taken a big step coming here!</p>
      <p>Counselling and Psychology can sometimes feel clinical and impersonal. Thundercats shabby chic banh mi, taiyaki hexagon seitan cliche pug enamel pin keffiyeh photo booth drinking vinegar 90's intelligentsia.</p>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home'
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
    left: -5%;
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
</style>
