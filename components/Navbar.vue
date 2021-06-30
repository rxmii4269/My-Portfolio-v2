<template>
  <CBox
    as="nav"
    h="100px"
    px="50px"
    d="flex"
    align-items="center"
    justify-content="space-between"
    shadow="lg"
    bg="blue.900"
    backdrop-filter="blur(10px)"
  >
    <CLink
      mt="2"
      as="nuxt-link"
      to="/"
      font-weight="bold"
      :_focus="{ outline: '2px dashed #76e4f7', outlineOffset: '3px' }"
    >
      <CPseudoBox w="40px" h="40px"> <Logo /> </CPseudoBox>
    </CLink>
    <CFlex>
      <CList
        d="flex"
        flex-direction="row"
        as="ol"
        list-style="none"
        color="gray.400"
        align-items="center"
      >
        <CListItem
          class="nav-list-wrapper"
          font-size="0.9rem"
          mx="5px"
          counter-increment="item 1"
          ><CLink
            as="nuxt-link"
            :_focus="{ outline: '2px dashed #76e4f7', outlineOffset: '3px' }"
            p="10px"
            class="nav-list"
            to="/#about"
            >About</CLink
          ></CListItem
        >
        <CListItem
          class="nav-list-wrapper"
          font-size="0.9rem"
          mx="5px"
          counter-increment="item 1"
          ><CLink
            as="nuxt-link"
            :_focus="{ outline: '2px dashed #76e4f7', outlineOffset: '3px' }"
            p="10px"
            class="nav-list"
            to="/#jobs"
            >Experience</CLink
          ></CListItem
        >
        <CListItem
          class="nav-list-wrapper"
          font-size="0.9rem"
          mx="5px"
          counter-increment="item 1"
          ><CLink
            as="nuxt-link"
            :_focus="{ outline: '2px dashed #76e4f7', outlineOffset: '3px' }"
            p="10px"
            class="nav-list"
            to="/#projects"
            >Work</CLink
          ></CListItem
        >
        <CListItem
          class="nav-list-wrapper"
          font-size="0.9rem"
          mx="5px"
          counter-increment="item 1"
          ><CLink
            as="nuxt-link"
            :_focus="{ outline: '2px dashed #76e4f7', outlineOffset: '3px' }"
            p="10px"
            class="nav-list"
            to="/#contact"
            >Contact</CLink
          ></CListItem
        >
      </CList>
      <CButton
        as="a"
        href="/resume.pdf"
        variant="outline"
        size="sm"
        py="1.1rem"
        px="1rem"
        ml="15px"
        color="#76e4f7"
        border-color="#76e4f7"
        :_hover="{ bg: 'rgba(118, 228, 247, 0.2)' }"
        >Resume</CButton
      >
    </CFlex>
  </CBox>
</template>
<script>
export default {
  mounted() {
    const animeLinks = this.$el.getElementsByClassName('nav-list-wrapper')
    this.$anime({
      targets: animeLinks,
      translate: 270,
      delay: this.$anime.stagger(300, { easing: 'easeInQuad' }),
      loop: true,
    })
  },
}
</script>
<style>
.nav-list:before {
  content: '0' counter(item) '.';
  margin-right: 5px;
  text-align: right;
  color: #76e4f7;
}
</style>
