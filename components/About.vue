<template>
  <CBox id="about" as="section" max-width="900px" py="100px" my="0px" mx="auto">
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
    <CBox
      :d="['flex', 'grid', 'grid']"
      grid-template-columns="3fr 2fr"
      :gap="['0px', '50px']"
      :flex-direction="['column', 'unset', 'unset']"
      :align-items="['center', 'unset']"
    >
      <CBox>
        <CBox :px="['1rem', '1rem', '0rem']">
          <CText color="gray.500"
            >Hello! My name is Romaine and I enjoy creating things that live on
            the internet. My interest in web development began when I took a web
            development course just to gain extra credits and ended up falling
            in love with the whole process of creating amazing and useful web
            apps ranging from quirky to useful utilitarian.</CText
          >
          <CText color="gray.500" mb="4"
            >Fast-foward to today, and I've had the privilege of working at
            <CLink href="https://1on1lms.com/" is-external color="var(--blue)"
              >a start-up</CLink
            >
            that really helped me with sharpening and honing my skills as a
            software engineer. My main focus these days is building accessible,
            inclusive products and digital experiences at
            <CLink
              href="http://knightfoxapps.com/"
              is-external
              color="var(--blue)"
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
            :key="stack.index"
            position="relative"
            margin-bottom="10px"
            pl="20px"
            font-size="0.887rem"
          >
            {{ stack }}
          </CListItem>
        </CList>
      </CBox>
      <CBox position="relative" max-width="300px">
        <CBox border-radius="3px" class="me">
          <nuxt-picture
            format="webp"
            quality="100"
            width="300"
            height="300"
            src="/me.jpg"
            alt="me"
            class="image-me"
            sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
          ></nuxt-picture
        ></CBox>
      </CBox>
    </CBox>
  </CBox>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'About',

  data() {
    return {
      techStack: [
        'JavaScript (ES6+)',
        'Vue',
        'Node.js',
        'Flask',
        'Tailwindcss',
        'Buefy',
        'Bulma',
        'Chakra UI',
      ],
    }
  },
})
</script>
<style>
.about:before {
  position: relative;
  bottom: 1px;
  counter-increment: section 1;
  content: '0' counter(section) '.';
  margin-right: 10px;
  color: var(--blue);
  font-size: 25px;
}
.about:after {
  content: '';
  display: block;
  position: relative;
  width: 300px;
  height: 1px;
  margin-left: 20px;
  background-color: #2d3748;
}
.skills li:before {
  content: '▹';
  position: absolute;
  left: 0px;
  color: var(--blue);
  line-height: 12px;
  font-size: 1rem;
}

.me {
  position: relative;
  z-index: 1;
}

.me:after {
  content: '';
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
</style>