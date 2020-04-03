<template>
  <header class="text-center">
    <nuxt-link to="/" class="navbar-brand">
      <img alt="Brett Jacobson, Psychologist" src="/images/logo.png" srcset="/images/logo.png 1x, /images/logo@2x.png 2x">
    </nuxt-link>

    <nav class="nav justify-content-center mt-3">
      <li class="nav-item">
        <nuxt-link to="/about" class="nav-link">
          <span>About</span>
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/" class="nav-link">
          <span>Referrals</span>
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/" class="nav-link">
          <span>FAQ</span>
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/contact" class="nav-link">
          <span>Contact</span>
        </nuxt-link>
      </li>
    </nav>
  </header>
</template>
