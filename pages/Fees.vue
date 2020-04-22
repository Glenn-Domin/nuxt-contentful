<template>
  <main class="container px-4 px-md-5">
    <div style="text-align: left;">
      <h1 class="title">
        Fees
      </h1>
      <p>Fees content.</p>
    </div>
    <bookings />
  </main>
</template>

<script>
import bookings from '@/components/Bookings'
export default {
  name: 'Fees',
  components: {
    bookings
  },
  head () {
    return {
      title: 'Fees'
    }
  }
}
</script>
