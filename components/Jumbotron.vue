<template>
    <CFlex
            as="section"
            flex-direction="column"
            align-items="flex-start"
            justify-content="center"
            min-height="100vh"
            w="100%"
            mt="100px"
            px="10px"
            class="animate__animated animate__fadeInUp"
          >
            <CHeading as="h1" size="sm" mb="5" color="var(--blue)"
              >Hi, my name is</CHeading
            >
            <CHeading
              as="h2"
              size="xl"
              :font-size="['40px', '80px', '80px']"
              color="gray.300"
              >Romaine Murray.
            </CHeading>
            <CHeading
              as="h2"
              :font-size="['40px', '80px', '80px']"
              color="gray.500"
            >
              I build things for the web.</CHeading
            >
            <CText max-width="500px" color="gray.500" mt="20px"
        >I'm a Jamaica-based software engineer who specializes in building
        exceptional digital experiences using modern frontend libraries.
        Currently, I'm a freelancer working for
        <CLink
          href="http://knightfoxapps.com/"
          is-external
          color="var(--blue)"
          title="KnightFox App Design"
          >KnightFox App Design</CLink
        >
        focused on building accessible and performant, and user friendly
        products.</CText
      >
      <CButton
        href="mailto:romainemurray6@gmail.com"
        as="a"
        variant="outline"
        size="lg"
        py="1.7rem"
        px="1.5rem"
        mt="50px"
        color="var(--blue)"
        border-color="var(--blue)"
        :_hover="{ bg: 'rgba(118, 228, 247, 0.2)' }"
        :_active="{ bg: 'rgba(118, 228, 247, 0.2)' }"
        :align-self="['center', 'center', 'unset']"
        >Get In Touch</CButton
      >
          </CFlex>
</template>
<script lang="ts">
import Vue from 'vue';
import {
  CFlex, CButton, CLink, CHeading, CText,
} from '@chakra-ui/vue';

export default Vue.extend({
  name: 'IntroJumbotron',
  components: {
    CFlex,
    CButton,
    CHeading,
    CLink,
    CText,
  },
});
</script>
