<template>
  <div>
    <Navbar />
    <Header />
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
}
</script>

<style>
body,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Libre Franklin Bold Medium', sans-serif;
}

.fa-anchor,
.fa-coffee {
  font-size: 200px;
}
</style>
