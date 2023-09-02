<template>
  <CBox
    id="jobs"
    v-animate-onscroll="'animate__animated animate__fadeInRight'"
    as="section"
    max-width="700px"
    margin="0px auto"
    padding="100px 0px"
    :px="['1rem', '1rem', '0']"
  >
    <CHeading
      d="flex"
      align-items="center"
      position="relative"
      margin="10px 0px 40px"
      w="100%"
      font-size="32px"
      :white-space="['', 'nowrap', 'nowrap']"
      line-height="1.1"
      color="gray.400"
      class="experience"
      :flex-wrap="['wrap', 'wrap', 'nowrap']"
    >
      Where I've Worked
    </CHeading>
    <CFlex :min-height="['inherit', 'inherit', '340px']">
      <ExperienceTabs />
    </CFlex>
  </CBox>
</template>
<script lang="ts">
import Vue from 'vue';
import {
  CBox,
  CFlex,
  CTab,
  CTabs,
  CTabPanels,
  CTabPanel,
  CList,
  CListItem,
  CLink,
  CText,
  CTabList,
  CHeading,
} from '@chakra-ui/vue';

export default Vue.extend({
  name: 'ExperienceSection',
  components: {
    CBox,
    CFlex,
    CTab,
    CTabs,
    CTabPanels,
    CTabPanel,
    CList,
    CListItem,
    CLink,
    CText,
    CTabList,
    CHeading,
  },
});
</script>
<style lang="scss">
#jobs {
  .experience:before {
    position: relative;
    bottom: 1px;
    counter-increment: section 2;
    content: "0" counter(section) ".";
    margin-right: 10px;
    color: var(--blue);
    font-size: 25px;
  }
  .experience:after {
    content: "";
    display: block;
    position: relative;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: #2d3748;
  }

  .jobs-list > button {
    border-left: 2px solid transparent;
    border-bottom: none;
    transition: border-left 0.2s ease-in;
  }
  .jobs-list > button:not([aria-selected="true"]) {
    color: #a0aec0;
    border-color: transparent;
  }
  .jobs-list > button[aria-selected="true"] {
    color: var(--blue);
    border-color: currentColor;
  }
  .jobs-list > button:focus {
    box-shadow: none;
    outline: none;
  }

  .jobs-list > button:hover {
    color: var(--blue);
    background-color: #112240;
  }

  .details > li {
    margin-bottom: 10px;
    position: relative;
    padding-left: 30px;
  }
  .details > li:before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: var(--blue);
  }
  .animate__animated.animate__fadeIn {
    --animate-delay: 0.2s;
  }
}
</style>
