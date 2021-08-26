<template>
  <CBox
    id="jobs"
    v-animate-onscroll="'animate__animated animate__fadeInRight'"
    as="section"
    max-width="700px"
    margin="0px auto"
    padding="100px 0px"
    :px="['1rem', '1rem', '0']"
  >
    <CHeading
      d="flex"
      align-items="center"
      position="relative"
      margin="10px 0px 40px"
      w="100%"
      font-size="32px"
      white-space="nowrap"
      line-height="1.1"
      color="gray.400"
      class="experience"
      :flex-wrap="['wrap', 'wrap', 'nowrap']"
    >
      Where I've Worked
    </CHeading>
    <CFlex :min-height="['inherit', 'inherit', '340px']">
      <CTabs
        d="flex"
        :flex-direction="['column', 'row', 'row']"
        variant="line"
        orientation="vertical"
      >
        <CTabList border-style="none" class="jobs-list">
          <CTab>KnightFox App Design</CTab>
          <CTab>One on One Educational Services</CTab>
        </CTabList>
        <CTabPanels margin-left="20px">
          <CTabPanel class="animate__animated animate__fadeIn">
            <CHeading mb="2px" as="h3" color="gray.400" font-size="20px"
              >Front End Developer
              <CText as="span" color="var(--blue)">@ </CText
              ><CLink
                color="var(--blue)"
                href="https://knightfoxapps.com"
                title="KnightFox App Design"
                is-external
                >KnightFox App Design</CLink
              >
            </CHeading>
            <CText mb="25px" color="gray.400" font-size="14px"
              >May 2021 - Present</CText
            >
            <CList class="details" color="gray.500">
              <CListItem
                >Write modern, performat, maintainable and clean code for a
                diverse array of clients.
              </CListItem>
              <CListItem>
                Work with a variety of frameworks, programming languages, and
                platforms such as JavaScript, TypeScript, Vue and AWS.
              </CListItem>
              <CListItem>
                Communicate with fellow engineers on a daily basis to carry out
                the tasks assigned.
              </CListItem>
            </CList>
          </CTabPanel>
          <CTabPanel class="animate__animated animate__fadeIn">
            <CHeading mb="2px" as="h3" color="gray.400" font-size="20px">
              Junior Front End Developer
              <CText as="span" color="var(--blue)">@ </CText>
              <CLink
                color="var(--blue)"
                href="https://1on1lms.com"
                is-external
                title="One on One Educational Services"
              >
                One on One Educational Services
              </CLink>
            </CHeading>
            <CText mb="25px" color="gray.400" font-size="14px">
              September 2020 - May 2021
            </CText>
            <CList class="details" color="gray.500">
              <CListItem
                >Fullfilled UI/UX design stories from the design
                team.</CListItem
              >
              <CListItem
                >Implemented new features on the Learning Management System
                (LMS) to support e-learning in
                <CLink
                  color="var(--blue)"
                  href="https://bahamas.1on1lms.com/"
                  title="Bahamas LMS"
                  :_focus="{
                    outline: '2px dashed #76e4f7',
                    outlineOffset: '3px',
                  }"
                  is-external
                  >Bahamas</CLink
                >
                and
                <CLink
                  color="var(--blue)"
                  href="https://onex.co/"
                  :_focus="{
                    outline: '2px dashed #76e4f7',
                    outlineOffset: '3px',
                  }"
                  title="OneX LMS"
                  is-external
                  >Jamaica</CLink
                >.</CListItem
              >
              <CListItem
                >Contributed to the
                <CLink
                  color="var(--blue)"
                  href="https://beta.flowstudy.co"
                  title="Flow Study"
                  :_focus="{
                    outline: '2px dashed #76e4f7',
                    outlineOffset: '3px',
                  }"
                  :_hover="{
                    textDecoration: 'underline',
                  }"
                  is-external
                >
                  Flow Study Platform
                </CLink>
                fullilling UI/UX user stories as well as implementing new
                features and bug fixes.
              </CListItem>
            </CList>
          </CTabPanel>
        </CTabPanels>
      </CTabs>
    </CFlex>
  </CBox>
</template>
<style lang="scss">
#jobs {
  .experience:before {
    position: relative;
    bottom: 1px;
    counter-increment: section 2;
    content: '0' counter(section) '.';
    margin-right: 10px;
    color: var(--blue);
    font-size: 25px;
  }
  .experience:after {
    content: '';
    display: block;
    position: relative;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: #2d3748;
  }

  .jobs-list > button {
    border-left: 2px solid transparent;
    border-bottom: none;
    transition: border-left 0.2s ease-in;
  }
  .jobs-list > button:not([aria-selected='true']) {
    color: #a0aec0;
    border-color: transparent;
  }
  .jobs-list > button[aria-selected='true'] {
    color: var(--blue);
    border-color: currentColor;
  }
  .jobs-list > button:focus {
    box-shadow: none;
    outline: none;
  }

  .jobs-list > button:hover {
    color: var(--blue);
    background-color: #112240;
  }

  .details > li {
    margin-bottom: 10px;
    position: relative;
    padding-left: 30px;
  }
  .details > li:before {
    content: '▹';
    position: absolute;
    left: 0px;
    color: var(--blue);
  }
  .animate__animated.animate__fadeIn {
    --animate-delay: 0.2s;
  }
}
</style>