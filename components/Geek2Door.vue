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
      <CBox :text-align="['center', 'center', 'right', 'right']">
        <CText my="10px" color="var(--blue)" font-size="18px" font-weight="500"
          >Featured Project</CText
        >
        <CHeading mb="20px" as="h3" color="gray.400" font-size="24px"
          >Geek2Door</CHeading
        >
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
          Match interns to internships and vice-versa all with one simple click.
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
          :justify-content="['center', 'flex-end', 'flex-end']"
        >
          <CListItem>Vue</CListItem>
          <CListItem>Nuxt.js</CListItem>
          <CListItem>Buefy</CListItem>
          <CListItem>Flask</CListItem>
          <CListItem>PostgreSQL</CListItem>
        </CList>
        <CFlex
          class="project-links"
          align-items="center"
          position="relative"
          mt="10px"
          color="gray.400"
          :justify-content="['center', 'center', 'flex-end']"
        >
          <CLink
            color="gray.400"
            href="https://github.com/rxmii4269/Geek2Door-Frontend"
            is-external
            title="Geek2Door Frontend Github"
            :_hover="{ color: 'var(--blue)' }"
          >
            <CIcon font-size="20px" name="github"></CIcon>
          </CLink>
          <CLink
            color="gray.400"
            href="https://geek2door.rmtech.tk"
            title="Geek2Door"
            is-external
            :_hover="{ color: 'var(--blue)' }"
          >
            <CIcon font-size="20px" name="arrow-up-right-from-square" />
          </CLink>
        </CFlex>
      </CBox>
    </CBox>
    <CBox class="project-image">
      <CLink href="https://geek2door.rmtech.tk" is-external title="Geek2Door">
        <CBox max-width="700px" d="block">
          <nuxt-picture
            src="/geek2door.rmtech.tk.png"
            quality="100"
            format="webp"
            sizes="xxl:100vw 2xl:100vw xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
            alt="geek2door image"
            loading="lazy"
          ></nuxt-picture>
        </CBox>
      </CLink>
    </CBox>
  </CListItem>
</template>
