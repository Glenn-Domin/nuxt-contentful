<template>
  <main>
    <div class="container">
      <section class="row mb-5">
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
              <p>
                Providence House <br>
                341 Gregory Tce <br>
                Spring Hill Q 4000
              </p>
              <small class="d-block">
                Providence House is located within the Canossian Sisters of Charity premises situated alongside the Holy Family Child Care Centre. Access is easy for those with low mobility as Reception and a private counselling room are on the ground floor.
              </small>
            </dd>
          </dl>
        </div>
        <div class="col-md-6">
          <img
            src="/images/entrance.jpg"
            width="450"
            height="450"
            alt="Entrance to Providence House"
            class="img-fluid rounded-circle"
          >
        </div>
      </section>
      <section>
        <h2>Book an Appointment</h2>
        <p>Please <a href="tel:0412345678">call</a>, <a href="mailto:fake@email.com">email</a> or complete the form below to enquire or make an appointment.</p>
        <div class="alert alert-info" role="alert">
          Brett Jacobson is doing remote sessions during the COVID-19 pandemic.
        </div>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          class="row"
        >
          <div class="col-md-6">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                class="form-control"
                required
              >
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                class="form-control"
                required
                inputmode="email"
              >
            </div>
            <div class="form-group mb-md-0">
              <label for="phone">Phone</label>
              <input
                id="phone"
                type="phone"
                name="phone"
                class="form-control"
                required
                inputmode="tel"
              >
            </div>
          </div>
          <div class="col-md-6 d-md-flex flex-column">
            <div class="form-group flex-grow-1 d-md-flex flex-column">
              <label for="message">Message</label>
              <textarea id="message" name="message" class="form-control flex-grow-1" required />
            </div>
            <button type="submit" class="btn btn-primary">
              Enquire
            </button>
          </div>
        </form>
      </section>
    </div>

    <div class="position-relative overflow-hidden">
      <a class="skip-to-content-link mt-3" href="#afterIframe">
        Skip iframe content
      </a>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.4205016971255!2d153.02411711505664!3d-27.456165282896603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9159f09d414b83%3A0xc0b0db93ddd72f47!2sProvidence%20House!5e0!3m2!1sen!2sau!4v1585995387252!5m2!1sen!2sau"
        width="100%"
        height="450"
        frameborder="0"
        class="mt-5 border-0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      />
      <p id="afterIframe" class="sr-only" aria-hidden="true" />
    </div>
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
    font-size: 1rem;
  }

  dd {
    width: calc(100% - 100px);
    flex-grow: 1;
  }
}
</style>
