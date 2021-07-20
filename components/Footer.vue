<template>
  <CBox as="footer" mb="1rem" :d="['block', 'block', 'none']">
    <CFlex gap="1rem" color="gray.400" as="footer" justify-content="center">
      <CLink
        :_hover="{ color: 'var(--blue)' }"
        href="https://github.com/rxmii4269"
        is-external
        title="My Github"
        mx="0.5rem"
      >
        <CIcon font-size="25px" name="github" />
      </CLink>
      <CLink
      title="My LinkedIn Profile"
        :_hover="{ color: 'var(--blue)' }"
        href="https://www.linkedin.com/in/romaine-murray-a497a4194/"
        is-external
        mx="0.5rem"
      >
        <CIcon font-size="25px" name="linkedin-in"></CIcon>
      </CLink>
    </CFlex>
  </CBox>
</template>