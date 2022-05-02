<template>
  <CListItem
    class="project-list"
    position="relative"
    :display="['flex', 'flex', 'flex', 'grid']"
    :flex-direction="['column', 'column', 'column']"
    gap="10px"
    grid-template-columns="repeat(12,1fr)"
    align-items="center"
  >
    <CBox class="project-content">
      <CBox :text-align="['center', 'center', textAlign, textAlign]">
        <CText my="10px" color="var(--blue)" font-size="18px" font-weight="500"
          >Featured Project</CText
        >
        <CHeading mb="20px" as="h3" color="gray.400" font-size="24px" :ml="isOdd ? '3rem': ''">{{
          project.title
        }}</CHeading>
        <CBox
          box-shadow="0 10px 30px -15px #1A202C"
          transition="all 0.25s cubic-bezier(0.645,0.045,0.355,1)"
          position="relative"
          z-index="2"
          p="25px"
          border-radius="4px"
          bg="#112240"
          color="gray.400"
          font-size="16px"
        >
          {{ project.description }}
        </CBox>
        <CList
          class="project-tech-list"
          d="flex"
          flex-wrap="wrap"
          position="relative"
          z-index="2"
          mt="25px"
          mb="10px"
          p="0"
          color="gray.400"
          :justify-content="['center', iconAlign, iconAlign]"
        >
          <CListItem v-for="stack in project.techStack" :key="stack">
            {{ stack }}
          </CListItem>
        </CList>
        <CFlex
          class="project-links"
          align-items="center"
          position="relative"
          mt="10px"
          color="gray.400"
          :justify-content="['center', 'center', iconAlign]"
        >
          <CLink
            v-for="(link, index) in project.links"
            :key="link.title + index"
            color="gray.400"
            :href="link.url"
            is-external
            :title="link.title"
            :_hover="{ color: 'var(--blue)' }"
          >
            <CIcon font-size="20px" v-if="project.icons" :name="project.icons[index]" />
          </CLink>
        </CFlex>
      </CBox>
    </CBox>
    <CBox class="project-image">
      <CLink :href="project.link" is-external :title="project.title">
        <CBox max-width="700px" d="block">
          <img
            :src="require(`@/assets/${project.image}`)"
            :alt="project.title + 'image'"
            loading="lazy"
          />
        </CBox>
      </CLink>
    </CBox>
  </CListItem>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
import {
  CListItem,
  CBox,
  CText,
  CHeading,
  CList,
  CFlex,
  CLink,
  CIcon,
} from '@chakra-ui/vue';
import Project from '@/types/projects.d';

export default Vue.extend({
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true,
      default: () => ({}),
    },
    index: {
      type: Number,
    },
  },
  components: {
    CListItem,
    CBox,
    CText,
    CHeading,
    CList,
    CFlex,
    CLink,
    CIcon,
  },
  computed: {
    isOdd() {
      return this.index % 2 === 0;
    },
    textAlign() {
      return this.index % 2 === 0 ? 'right' : 'left';
    },
    iconAlign() {
      return this.index % 2 === 0 ? 'flex-end' : 'flex-start';
    },
  },
});
</script>
