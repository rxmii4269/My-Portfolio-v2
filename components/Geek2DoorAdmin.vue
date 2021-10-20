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
      <CBox :text-align="['center', 'center', 'left', 'left']">
        <CText my="10px" color="var(--blue)" font-size="18px" font-weight="500"
          >Featured Project</CText
        >
        <CHeading mb="20px" as="h3" color="gray.400" font-size="24px"
          >Geek2Door Admin</CHeading
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
          Monitor information on students and internships alike from
          <CLink
            color="var(--blue)"
            href="https://geek2door.rmtech.tk"
            title="Geek2Door Admin"
            is-external
            >Geek2Door</CLink
          >
          in central area.
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
          :justify-content="['center', 'flex-start', 'flex-start']"
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
          :justify-content="['center', 'center', 'flex-start']"
        >
          <CLink
            color="gray.400"
            href="https://github.com/rxmii4269/Geek2Door-Admin"
            title="Geek2Door Admin github"
            is-external
            :_hover="{ color: 'var(--blue)' }"
          >
            <CIcon font-size="20px" name="github"></CIcon>
          </CLink>
          <CLink
            color="gray.400"
            href="https://admin.geek2door.rmtech.tk"
            title="Geek2Door Admin Website"
            is-external
            :_hover="{ color: 'var(--blue)' }"
          >
            <CIcon font-size="20px" name="external-link-alt" />
          </CLink>
        </CFlex>
      </CBox>
    </CBox>
    <CBox class="project-image">
      <CLink
        href="https://admin.geek2door.rmtech.tk"
        is-external
        title="Geek2Door Admin Website"
      >
        <CBox max-width="700px" d="block">
          <nuxt-picture
            src="/admin.geek2door.rmtech.tk.png"
            quality="100"
            format="webp"
            alt="geek2door admin image"
            loading="lazy"
          ></nuxt-picture>
        </CBox>
      </CLink>
    </CBox>
  </CListItem>
</template>
