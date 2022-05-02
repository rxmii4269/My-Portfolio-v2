<template>
    <CBox
            w="40px"
            position="fixed"
            bottom="0px"
            left="auto"
            right="40px"
            z-index="10"
            color="gray.300"
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
                bg: 'gray.300',
              }"
            >
              <CListItem>
                <CLink
                  my="2px"
                  mx="auto"
                  p="10px"
                  line-height="18px"
                  letter-spacing="0.1em"
                  class="vertical"
                  href="mailto:romainemurray6@gmail.com"
                  is-external
                  :_hover="{ color: 'var(--blue)' }"
                  >romainemurray6@gmail.com
                </CLink>
              </CListItem>
            </CList>
          </CBox>
</template>
<script lang="ts">
import Vue from 'vue';
import {
  CBox, CList, CListItem, CLink,
} from '@chakra-ui/vue';

export default Vue.extend({
  components: {
    CBox,
    CList,
    CListItem,
    CLink,
  },
});
</script>
