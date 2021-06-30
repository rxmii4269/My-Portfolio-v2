<template>
  <CBox
    id="contact"
    as="section"
    max-width="600px"
    margin="0px auto 100px"
    text-align="center"
    py="100px"
  >
    <CHeading
      font-size="27px"
      class="whats-next"
      d="block"
      mb="20px"
      color="var(--blue)"
    >
      What's Next</CHeading
    >
    <CHeading font-size="4rem" color="gray.400">Get In Touch</CHeading>
    <CText font-size="lg" color="gray.500">
      Although I'm not currently looking for any new opportunities, my inbox is
      always open. Whether you have a question or just want to say hi, I'll try
      my best to get back to you!
    </CText>
    <CButton
      as="a"
      href="mailto:romainemurray6@gmail.com"
      variant="outline"
      size="lg"
      border-color="var(--blue)"
      mt="50px"
      line-height="1"
      p="1.25rem 1.75rem"
      color="var(--blue)"
      :_hover="{ bg: 'rgba(118, 228, 247, 0.2)' }"
      :_active="{ bg: 'rgba(118, 228, 247, 0.2)' }"
      >Say Hello</CButton
    >
  </CBox>
</template>
<style>
.whats-next:before {
  bottom: 0px;
  font-size: 19px;
  counter-increment: section 4;
  content: '0' counter(section) '.';
  margin-right: 10px;
  color: var(--blue);
}
</style>