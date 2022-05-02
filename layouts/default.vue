<template>
  <div class="container">
    <CThemeProvider>
      <CReset />
      <CBox font-family="body" as="main">
        <CFlex
          as="section"
          min-height="100vh"
          height="100%"
          direction="column"
          bg="blue.900"
        >
          <NavBar />
          <LeftSideBar />
          <Nuxt />

          <RightSideBar />
          <Footer />
        </CFlex>
      </CBox>
    </CThemeProvider>
  </div>
</template>
<script>
import { CThemeProvider, CReset, CBox } from '@chakra-ui/vue'
import RightSideBar from '~/components/RightSideBar.vue'
import LeftSideBar from '~/components/LeftSideBar.vue'
import NavBar from '~/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    CThemeProvider,
    CReset,
    CBox,
    RightSideBar,
    LeftSideBar,
    NavBar
},
  methods: {},
}
</script>
<style lang="css">
body {
  counter-reset: item;
  -moz-osx-font-smoothing: grayscale;
}
body::-webkit-scrollbar {
  width: 12px;
}
body::-webkit-scrollbar-thumb {
  background-color: #2d3748;
  border: 3px solid #000a21;
  border-radius: 10px;
}
body::-webkit-scrollbar-track {
  background-color: #000a21;
}
::selection {
  background-color: #003182;
  color: #cbd5e0;
}
.clist:after {
  content: '';
}
:root {
  --blue: #76e4f7;
}
:focus {
  outline: rgb(118, 228, 247) dashed 2px;
  outline-offset: 3px;
  box-shadow: none !important;
}
.vertical {
  writing-mode: vertical-rl;
}
</style>
