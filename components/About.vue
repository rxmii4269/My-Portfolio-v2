<template>
  <CBox
    id="about"
    v-animate-onscroll="'animate__animated animate__fadeInLeft'"
    as="section"
    max-width="900px"
    py="100px"
    my="0px"
    mx="auto"
  >
    <CHeading
      d="flex"
      align-items="center"
      position="relative"
      mt="10px"
      mx="0px"
      mb="40px"
      w="100%"
      font-size="32px"
      class="about"
      white-space="nowrap"
      line-height="1.1"
      color="gray.400"
      :px="['1rem', '1rem', '0']"
      >About Me</CHeading
    >
    <CGrid
      :d="['flex', 'grid', 'grid']"
      grid-template-columns="3fr 2fr"
      :gap="['30px']"
      :flex-direction="['column', 'unset', 'unset']"
      :align-items="['center', 'unset']"
    >
      <CBox>
        <CBox :px="['1rem', '1rem', '0rem']">
          <CText color="gray.500">
            Hello! My name is Romaine and I enjoy creating things that live on
            the internet. My interest in web development began when I took a web
            development course just to gain extra credits and ended up falling
            in love with the whole process of creating amazing and useful web
            apps ranging from quirky to utilitarian
          </CText>
          <CText color="gray.500" mb="4"
            >Fast-foward to today, and I've had the privilege of working at
            <CLink
              href="https://1on1lms.com/"
              is-external
              color="var(--blue)"
              title="One on One Educational Services"
              >a start-up</CLink
            >
            that really helped me with sharpening and honing my skills as a
            software engineer. My main focus these days is building accessible,
            inclusive products and digital experiences at
            <CLink
              href="https://knightfoxapps.com/"
              is-external
              color="var(--blue)"
              title="KnightFox App Design"
              >KnightFox App Design</CLink
            >
            for a variety of clients.</CText
          >
          <CText color="gray.500"
            >Here are a few technologies I've been working with recently:</CText
          >
        </CBox>
        <CList
          d="grid"
          grid-template-columns="repeat(2, minmax(140px, 200px))"
          mt="20px"
          :ml="['1rem', '0', '0']"
          overflow="hidden"
          list-style="none"
          color="gray.400"
          class="skills"
        >
          <CListItem
            v-for="stack in techStack"
            :key="stack"
            position="relative"
            margin-bottom="10px"
            pl="20px"
            font-size="0.887rem"
          >
            {{ stack }}
          </CListItem>
        </CList>
      </CBox>
      <CBox
        border-radius="3px"
        class="me"
        max-width="300px"
        max-height="300px"
        position="relative"
      >
        <img
          src="@/assets/me.webp"
          alt="Portrait of Romaine Murray"
          class="image-me"
          loading="lazy"
        />
      </CBox>
    </CGrid>
  </CBox>
</template>
<script lang="ts">
import Vue from 'vue';
import {
  CBox,
  CHeading,
  CGrid,
  CText,
  CLink,
  CList,
  CListItem,
} from '@chakra-ui/vue';

export default Vue.extend({
  name: 'AboutMe',
  components: {
    CBox,
    CHeading,
    CGrid,
    CText,
    CLink,
    CList,
    CListItem,
  },
  data() {
    return {
      techStack: [
        'JavaScript (ES6+)',
        'Vue',
        'Node.js',
        'Flask',
        'FastAPI',
        'React',
        'Nuxt.js',
        'LangChain',
        'Tailwindcss',
        'Buefy',
        'Bulma',
        'Chakra UI',
        'Typescript',
        'Java',
        'SpringBoot',
        'Oracle SQL',
      ],
    };
  },
});
</script>
<style>
.about:before {
  position: relative;
  bottom: 1px;
  counter-increment: section;
  content: "0" counter(section) ".";
  margin-right: 10px;
  color: var(--blue);
  font-size: 25px;
}
.about:after {
  content: "";
  display: block;
  position: relative;
  width: 300px;
  height: 1px;
  margin-left: 20px;
  background-color: #2d3748;
}
.skills li:before {
  content: "▹";
  position: absolute;
  left: 0px;
  color: var(--blue);
  line-height: 12px;
  font-size: 1rem;
  top: 5px;
}

.image-me {
  border-radius: 3px;
}

.me {
  position: relative;
  z-index: 1;
}

.me:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 320px;
  border-radius: 4px;
  border: 2px solid #76e4f7;
  top: 20px;
  left: 20px;
  max-height: 100%;
  z-index: -1;
}
@media screen and (max-width: 320px) {
  .me:after {
    left: 7px;
  }
}
@media screen and (max-width: 768px) {
  .me::after {
    left: 5px;
  }
}
</style>
