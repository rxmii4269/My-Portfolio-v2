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
        <CHeading mb="20px" as="h3" color="gray.400" font-size="22px"
          >Weather App</CHeading
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
          Get your current weather and 5 day forecast with an elegant and clean
          interface.
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
          <CListItem>TailWindCSS</CListItem>
          <CListItem>PWA</CListItem>
          <CListItem>Open Weather API</CListItem>
          <CListItem>Maps Geocoding API</CListItem>
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
            href="https://github.com/rxmii4269/weather-app"
            title="Weather App Github"
            is-external
            :_hover="{ color: 'var(--blue)' }"
          >
            <CIcon font-size="20px" name="github"></CIcon>
          </CLink>
          <CLink
            color="gray.400"
            href="https://weather.rmtech.tk"
            is-external
            title="Weather App Github"
            :_hover="{ color: 'var(--blue)' }"
          >
            <CIcon font-size="20px" name="external-link-alt" />
          </CLink>
        </CFlex>
      </CBox>
    </CBox>
    <CBox class="project-image">
      <CLink
        href="https://weather.rmtech.tk"
        is-external
        title="Weather App Website"
      >
        <CBox max-width="700px" d="block">
          <nuxt-picture
            src="/weather.rmtech.tk.png"
            quality="100"
            format="webp"
            alt="Weather App preview"
            sizes="xxl:100vw 2xl:100vw xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
            loading="lazy"
          ></nuxt-picture>
        </CBox>
      </CLink>
    </CBox>
  </CListItem>
</template>
