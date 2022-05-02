<template>
  <CBox as="main" flex-grow="1" :px="['50px', '0px', '150px', '']">
    <IntroJumbotron />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </CBox>
</template>
<script lang="ts">
import Vue from 'vue'
import IntroJumbotron from '@/components/Jumbotron.vue'
export default Vue.extend({
  name: 'Index',
  data() {
    return {}
  },
  components: {
    IntroJumbotron
  },

  head() {
    return {
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://romainemurray.rmtech.tk/',
        },
      ],
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: "Romaine Murray's portfolio",
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Learn about my endeavours as a developer and what I have built',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://romainemurray.rmtech.tk/icon.png',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://romainemurray.rmtech.tk',
        },
        {
          property: 'og:locale',
          content: 'en_US',
        },
      ],
    }
  },
  mounted() {
    if (this.$route.hash) {
      this.$nextTick(() =>
        document
          .getElementById(this.$route.hash.split('#')[1])
          ?.scrollIntoView({ behavior: 'smooth' })
      )
    }
  },
})
</script>
