<template>
  <div class="w3-top">
    <div class="w3-bar w3-red w3-card w3-left-align w3-large">
      <a
        class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red"
        title="Toggle Navigation Menu"
        @click="toggleMenu"
        ><i class="fa fa-bars"></i
      ></a>
      <a href="#" class="w3-bar-item w3-button w3-padding-large w3-white">
        {{ $t('home') }}
      </a>
      <a
        href="#faq"
        class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
      >
        {{ $t('faq') }}
      </a>
      <a
        href="#volunteer"
        class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
      >
        {{ $t('volunteer') }}
      </a>
      <a
        href="https://secure.actblue.com/donate/cam4a"
        target="_blank"
        class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
      >
        {{ $t('donate') }}
      </a>
      <nuxt-link
        v-if="$i18n.locale != 'es'"
        :to="switchLocalePath('es')"
        class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white w3-right"
      >
        Español
      </nuxt-link>
      <nuxt-link
        v-if="$i18n.locale != 'en'"
        :to="switchLocalePath('en')"
        class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white w3-right"
      >
        English
      </nuxt-link>
    </div>

    <div
      id="navDemo"
      class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large"
    >
      <a href="#faq" class="w3-bar-item w3-button w3-padding-large">FAQ</a>
      <a href="#volunteer" class="w3-bar-item w3-button w3-padding-large">
        {{ $t('volunteer') }}
      </a>
      <a
        href="https://secure.actblue.com/donate/cam4a"
        class="w3-bar-item w3-button w3-padding-large"
      >
        {{ $t('donate') }}
      </a>
      <nuxt-link
        v-if="$i18n.locale != 'es'"
        :to="switchLocalePath('es')"
        class="w3-bar-item w3-button w3-padding-large"
      >
        Español
      </nuxt-link>
      <nuxt-link
        v-if="$i18n.locale != 'en'"
        :to="switchLocalePath('en')"
        class="w3-bar-item w3-button w3-padding-large"
      >
        English
      </nuxt-link>
    </div>
  </div>
</template>

<script>
// Used to toggle the menu on small screens when clicking on the menu button
export default {
  methods: {
    toggleMenu() {
      const x = document.getElementById('navDemo')
      if (!x.className.includes('w3-show')) {
        x.className += ' w3-show'
      } else {
        x.className = x.className.replace(' w3-show', '')
      }
    },
  },
}
</script>

<style>
.w3-bar,
h1,
button {
  font-family: 'Libre Franklin Extrabold', sans-serif;
}
</style>
