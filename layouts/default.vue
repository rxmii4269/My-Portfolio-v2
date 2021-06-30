<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox font-family="body" as="main">
          <CFlex
            as="section"
            min-height="100vh"
            height="100%"
            direction="column"
            bg="blue.900"
          >
            <Navbar />
            <CReset />
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
                  bg: 'gray.500',
                }"
              >
                <CListItem>
                  <CLink
                    :_hover="{ color: 'var(--blue)' }"
                    href="https://github.com/rxmii4269"
                  >
                    <CIcon font-size="25px" name="github" />
                  </CLink>
                </CListItem>
                <CListItem>
                  <CLink
                    :_hover="{ color: 'var(--blue)' }"
                    href="https://www.linkedin.com/in/romaine-murray-a497a4194/"
                    is-external
                  >
                    <CIcon font-size="25px" name="linkedin-in" />
                  </CLink>
                </CListItem>
              </CList>
            </CBox>
            <Nuxt />
            <CBox
              w="40px"
              position="fixed"
              bottom="0px"
              left="auto"
              right="40px"
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
                  bg: 'gray.500',
                }"
              >
                <CListItem>
                  <CLink
                    my="2px"
                    mx="auto"
                    p="10px"
                    line-height="18px"
                    letter-spacing="0.1em"
                    writing-mode="vertical-rl"
                    href="mailto:romainemurray6@gmail.com"
                    is-external
                    :_hover="{ color: 'var(--blue)' }"
                    >romainemurray6@gmail.com
                  </CLink>
                </CListItem>
              </CList>
            </CBox>
          </CFlex>
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>
<script>
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox,
} from '@chakra-ui/vue'

export default {
  name: 'App',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
  },
}
</script>
<style lang="css">
.clist:after {
  content: '';
}
:root {
  --blue: #76e4f7;
}
</style>
