<template>
  <CBox
    id="projects"
    as="section"
    max-width="900px"
    py="100px"
    :px="['1rem', '1rem', '0']"
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
      class="projects"
      white-space="nowrap"
      line-height="1.1"
      color="gray.400"
      :flex-wrap="['wrap', 'wrap', 'nowrap']"
      >Some Things I've Built
    </CHeading>
    <CList padding="0" margin="0">
      <Geek2Door v-animate-onscroll="'animate__animated animate__fadeInLeft'" />
      <Geek2DoorAdmin
        v-animate-onscroll="'animate__animated animate__fadeInRight'"
      />
      <QuizApp v-animate-onscroll="'animate__animated animate__fadeInLeft'" />
      <WeatherApp
        v-animate-onscroll="'animate__animated animate__fadeInRight'"
      />
      <CUTC v-animate-onscroll="'animate__animated animate__fadeInLeft'" />
    </CList>
  </CBox>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Projects',

  data() {
    return {}
  },
})
</script>
<style>
.projects:before {
  position: relative;
  bottom: 1px;
  counter-increment: section 3;
  content: '0' counter(section) '.';
  margin-right: 10px;
  color: var(--blue);
  font-size: 25px;
}
.projects:after {
  content: '';
  display: block;
  position: relative;
  width: 300px;
  height: 1px;
  margin-left: 20px;
  background-color: #2d3748;
}
@media screen and (min-width: 500px) and (max-width: 681px) {
  .projects:after {
    width: calc(100% - 400px);
  }
}
.project-list:not(:last-of-type) {
  margin-bottom: 100px;
}

.project-content {
  position: relative;
  grid-area: 1/1/-1/7;
}

.project-links a {
  display: flex;
  align-items: center;
  padding: 10px;
}

.project-list:nth-of-type(2n + 1) .project-links {
  /* justify-content: flex-end; */
  margin-left: 0;
}

/* .project-list:nth-of-type(2n + 1) .project-tech-list {
  justify-content: flex-end;
} */

.project-list:nth-of-type(2n + 1) .project-tech-list li {
  margin: 0px 0px 5px 20px;
}

.project-tech-list li {
  margin: 0px 20px 5px 0px;
}

.project-list:nth-of-type(2n + 1) .project-image {
  grid-column: 1/8;
}

.project-list .project-image {
  box-shadow: 0 10px 30px -15px #1a202c;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  grid-area: 1/6/-1/-1;
  position: relative;
  z-index: 1;
}

.project-list:nth-of-type(2n + 1) .project-content {
  grid-column: 7/ -1;
  text-align: right;
}
</style>