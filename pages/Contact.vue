<template>
  <main>
    <div class="container">
      <section class="row">
        <div class="col-md-6 order-md-1 pl-md-5">
          <h1 class="title">
            Contact
          </h1>
          <dl class="contact-address d-flex flex-wrap">
            <dt>
              Phone
            </dt>
            <dd>
              <a href="tel:0412345678">04 1234 5678</a>
            </dd>
            <dt>
              Email
            </dt>
            <dd>
              <a href="mailto:fake@email.com">fake@email.com</a>
            </dd>
            <dt>
              Location
            </dt>
            <dd>
              Providence House <br>
              341 Gregory Tce, <br>
              Spring Hill Q 4000
            </dd>
          </dl>
        </div>
        <div class="col-md-6">
          <img src="/images/entrance.jpg" class="img-fluid rounded-circle">
        </div>
      </section>
    </div>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.4205016971255!2d153.02411711505664!3d-27.456165282896603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9159f09d414b83%3A0xc0b0db93ddd72f47!2sProvidence%20House!5e0!3m2!1sen!2sau!4v1585995387252!5m2!1sen!2sau"
      width="100%"
      height="450"
      frameborder="0"
      style="border:0;"
      class="my-5"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    />
  </main>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang="scss">
.contact-address {

  dt {
    width: 100px;
  }

  dd {
    width: calc(100% - 100px);
    flex-grow: 1;
  }
}
</style>
