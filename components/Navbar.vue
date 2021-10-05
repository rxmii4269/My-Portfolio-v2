<template>
  <CBox
    id="navbar-header"
    as="header"
    position="fixed"
    background-color="rgba(0, 10, 33, 0.85)"
    w="100%"
    filter="none !important"
    backdrop-filter="blur(10px)"
    z-index="11"
    :transform="
      hide
        ? 'translateY(-100%); transition: all 0.3s ease-in-out;'
        : 'translateY(0); transition: all 0.3s ease-in-out;'
    "
  >
    <CBox
      as="nav"
      h="100px"
      :px="['10px', '10px', '50px']"
      d="flex"
      align-items="center"
      justify-content="space-between"
      shadow="lg"
      flex-grow="1"
    >
      <CLink
        mt="2"
        as="nuxt-link"
        to="/"
        mr="auto"
        font-weight="bold"
        :_focus="{ outline: '2px dashed #76e4f7', outlineOffset: '3px' }"
        title="Home"
      >
        <CPseudoBox
          class="animate__animated animate__fadeInDown"
          w="40px"
          h="40px"
        >
          <Logo />
        </CPseudoBox>
      </CLink>
      <CFlex
        :d="['none', 'none', 'flex']"
        :flex-wrap="['nowrap', 'wrap', 'nowrap']"
      >
        <CList
          d="flex"
          flex-direction="row"
          as="ol"
          list-style="none"
          color="gray.400"
          align-items="center"
          :flex-wrap="['wrap', 'wrap', 'nowrap']"
        >
          <CListItem
            class="nav-list-wrapper animate__animated animate__fadeInDown"
            font-size="0.9rem"
            mx="5px"
            counter-increment="item 1"
            ><CLink
              as="nuxt-link"
              :_focus="{ outline: '2px dashed #76e4f7', outlineOffset: '3px' }"
              :_hover="{ color: 'var(--blue)' }"
              p="10px"
              class="nav-list"
              to="/#about"
              title="About Me"
              >About</CLink
            ></CListItem
          >
          <CListItem
            class="nav-list-wrapper animate__animated animate__fadeInDown"
            font-size="0.9rem"
            mx="5px"
            counter-increment="item 1"
            ><CLink
              as="nuxt-link"
              :_focus="{ outline: '2px dashed #76e4f7', outlineOffset: '3px' }"
              :_hover="{ color: 'var(--blue)' }"
              p="10px"
              class="nav-list"
              to="/#jobs"
              title="Job Experience"
              >Experience</CLink
            ></CListItem
          >
          <CListItem
            class="nav-list-wrapper animate__animated animate__fadeInDown"
            font-size="0.9rem"
            mx="5px"
            counter-increment="item 1"
            ><CLink
              as="nuxt-link"
              :_focus="{ outline: '2px dashed #76e4f7', outlineOffset: '3px' }"
              :_hover="{ color: 'var(--blue)' }"
              p="10px"
              class="nav-list"
              to="/#projects"
              title="Projects"
              >Work</CLink
            ></CListItem
          >
          <CListItem
            class="nav-list-wrapper animate__animated animate__fadeInDown"
            font-size="0.9rem"
            mx="5px"
            counter-increment="item 1"
            ><CLink
              as="nuxt-link"
              :_focus="{ outline: '2px dashed #76e4f7', outlineOffset: '3px' }"
              :_hover="{ color: 'var(--blue)' }"
              p="10px"
              class="nav-list"
              to="/#contact"
              title="Get In Touch"
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
          :_focus="{ bg: 'rgba(118, 228, 247, 0.2)', outline: 'none' }"
          :_active="{ bg: 'unset' }"
          class="animate__animated animate__fadeInDown"
          >Resume</CButton
        >
      </CFlex>
      <CIconButton
        icon="bars"
        bg="var(--blue)"
        color="blue.900"
        aria-label="menu-button"
        :display="['block', 'block', 'none']"
        @click="toggleDrawer"
      />
      <CDrawer
        :is-open="isOpen"
        placement="right"
        :on-close="close"
        background-color="blue.900"
      >
        <CDrawerOverlay />
        <CDrawerContent background-color="blue.900">
          <CDrawerCloseButton color="gray.400" />
          <CDrawerHeader
            border-bottom-width="1px"
            border-color="gray.500"
            color="gray.400"
            >Menu</CDrawerHeader
          >
          <CDrawerBody>
            <CList
              d="flex"
              flex-direction="column"
              as="ol"
              list-style="none"
              color="gray.400"
              :flex-wrap="['wrap', 'wrap', 'nowrap']"
              font-size="2.4rem"
              spacing="3"
            >
              <CListItem
                class="nav-list-wrapper"
                mx="5px"
                counter-increment="item 1"
                ><CLink
                  as="nuxt-link"
                  :_focus="{
                    outline: '2px dashed #76e4f7',
                    outlineOffset: '3px',
                  }"
                  :_hover="{ color: 'var(--blue)' }"
                  p="10px"
                  class="nav-list animate__animated animate__fadeInDown"
                  to="/#about"
                  title="About Me"
                  >About</CLink
                ></CListItem
              >
              <CListItem
                class="nav-list-wrapper"
                mx="5px"
                counter-increment="item 1"
                ><CLink
                  as="nuxt-link"
                  :_focus="{
                    outline: '2px dashed #76e4f7',
                    outlineOffset: '3px',
                  }"
                  :_hover="{ color: 'var(--blue)' }"
                  p="10px"
                  class="nav-list animate__animated animate__fadeInDown"
                  to="/#jobs"
                  title="Job Experience"
                  >Experience</CLink
                ></CListItem
              >
              <CListItem
                class="nav-list-wrapper"
                mx="5px"
                counter-increment="item 1"
                ><CLink
                  as="nuxt-link"
                  :_focus="{
                    outline: '2px dashed #76e4f7',
                    outlineOffset: '3px',
                  }"
                  :_hover="{ color: 'var(--blue)' }"
                  p="10px"
                  class="nav-list animate__animated animate__fadeInDown"
                  to="/#projects"
                  title="Projects"
                  >Work</CLink
                ></CListItem
              >
              <CListItem
                class="nav-list-wrapper"
                mx="5px"
                counter-increment="item 1"
                ><CLink
                  as="nuxt-link"
                  :_focus="{
                    outline: '2px dashed #76e4f7',
                    outlineOffset: '3px',
                  }"
                  :_hover="{ color: 'var(--blue)' }"
                  p="10px"
                  class="nav-list animate__animated animate__fadeInDown"
                  to="/#contact"
                  title="Get In Touch"
                  >Contact</CLink
                ></CListItem
              >
            </CList>
            <CButton
              as="a"
              href="/resume.pdf"
              variant="outline"
              size="lg"
              :py="['1.1rem', 'inherit']"
              :px="['1rem', 'inherit']"
              :ml="['0px', '0px', '15px']"
              :width="['100%', 'inherit']"
              mt="1rem"
              color="#76e4f7"
              border-color="#76e4f7"
              :_hover="{ bg: 'rgba(118, 228, 247, 0.2)' }"
              :_active="{ bg: 'unset' }"
              >Resume</CButton
            >
          </CDrawerBody>
        </CDrawerContent>
      </CDrawer>
    </CBox>
  </CBox>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      hide: false,
      lastScrollTop: 0,
    }
  },
  mounted() {
    this.handleScroll()
  },
  methods: {
    toggleDrawer() {
      this.isOpen = !this.isOpen
    },
    close() {
      this.isOpen = false
    },
    handleScroll() {
      if (!this.hide) {
        window.addEventListener('scroll', this.scrollListener)
      }
    },
    scrollListener() {
      const scrollTop = window.scrollY
      if (scrollTop > this.lastScrollTop) {
        this.hide = true
      } else {
        this.hide = false
      }
      this.lastScrollTop = scrollTop
    },
  },
}
</script>
<style>
.nav-list:before {
  content: '0' counter(item) '.';
  counter-increment: item;
  margin-right: 5px;
  text-align: right;
  color: #76e4f7;
}
.animate__animated.animate__fadeInDown:first-of-type {
  --animate-delay: 0.9s;
  --animate-duration: 0.3s;
}

.animate__animated.animate__fadeInDown:nth-of-type(2) {
  --animate-delay: 1.2s;
  --animate-duration: 0.5s;
}

.animate__animated.animate__fadeInDown:nth-of-type(3) {
  --animate-delay: 1.4s;
  --animate-duration: 0.7s;
}

.animate__animated.animate__fadeInDown:nth-of-type(4) {
  --animate-delay: 1.5s;
  --animate-duration: 0.9s;
}

.animate__animated.animate__fadeInDown:last-of-type {
  --animate-delay: 1.7s;
  --animate-duration: 1.2s;
}
</style>
