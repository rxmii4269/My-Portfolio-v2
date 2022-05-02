<template>
  <CBox
    w="40px"
    position="fixed"
    bottom="0px"
    left="40px"
    right="auto"
    z-index="10"
    color="gray.400"
    :d="['none', 'none', 'inherit']"
  >
    <CList
      d="flex"
      flex-direction="column"
      spacing="3"
      align-items="center"
      m="0"
      p="0"
      class="clist"
      :_after="{
        display: 'block',
        width: '1px',
        height: '90px',
        margin: '0px auto',
        bg: 'gray.400',
      }"
    >
      <CListItem>
        <CLink
          :_hover="{ color: 'var(--blue)' }"
          href="https://github.com/rxmii4269"
          title="github"
        >
          <CIcon font-size="25px" name="github" />
        </CLink>
      </CListItem>
      <CListItem mb="3">
        <CLink
          :_hover="{ color: 'var(--blue)' }"
          href="https://www.linkedin.com/in/romaine-murray-a497a4194/"
          is-external
          title="linkedIn"
        >
          <CIcon font-size="25px" name="linkedin-in" />
        </CLink>
      </CListItem>
    </CList>
  </CBox>
</template>
<script lang="ts">
import Vue from 'vue';
import {
  CBox, CList, CListItem, CLink, CIcon,
} from '@chakra-ui/vue';

export default Vue.extend({
  components: {
    CBox,
    CIcon,
    CLink,
    CList,
    CListItem,
  },
});
</script>
