<template>
    <CTabs d="flex" :flex-direction="['column', 'row', 'row']" variant="line" orientation="vertical">
        <CTabList border-style="none" class="jobs-list">
            <CTab v-for="(experience, index) in experiences" :key="index">
                {{ experience.title }}
            </CTab>
        </CTabList>
        <CTabPanels margin-left="20px">
            <CTabPanel v-for="(experience, index) in experiences" :key="index" class="animate__animated animate__fadeIn">
                <CHeading mb="2px" as="h3" color="gray.400" font-size="20px">
                    {{ experience.subtitle }}
                    <CText as="span" color="var(--blue)">@ </CText>
                    <CLink color="var(--blue)" :href="experience.link" :title="experience.title" is-external>
                        {{ experience.title }}
                    </CLink>
                </CHeading>
                <CText mb="25px" color="gray.400" font-size="14px">
                    {{ experience.date }}
                </CText>
                <CList class="details" color="gray.500">
                    <CListItem v-for="(detail, index) in experience.details" :key="index">
                        {{ detail }}
                    </CListItem>
                </CList>
                <!-- Learn more links -->
                <template v-if="experience.learnMoreLinks">
                    <CText color="gray.400" font-size="18px">
                        Learn More
                    </CText>
                    <CList class="details">
                        <CListItem v-for="learnMore in experience.learnMoreLinks" :key="index">
                            <CLink color="var(--blue)" :href="learnMore.href" is-external>
                                {{ learnMore.title }}
                            </CLink>
                        </CListItem>
                    </CList>

                </template>
            </CTabPanel>
            <CTabPanel class="animate__animated animate__fadeIn">
                <CHeading mb="2px" as="h3" color="gray.400" font-size="20px">Front End Developer
                    <CText as="span" color="var(--blue)">@ </CText>
                    <CLink color="var(--blue)" href="https://knightfoxapps.com" title="KnightFox App Design" is-external>
                        KnightFox App Design</CLink>
                </CHeading>
                <CText mb="25px" color="gray.400" font-size="14px">May 2021 - Present</CText>
                <CList class="details" color="gray.500">
                    <CListItem>Write modern, performat, maintainable and clean code for a diverse
                        array of clients.
                    </CListItem>
                    <CListItem>
                        Work with a variety of frameworks, programming languages, and
                        platforms such as JavaScript, TypeScript, Vue and AWS.
                    </CListItem>
                    <CListItem>
                        Communicate with fellow engineers on a daily basis to carry out the
                        tasks assigned.
                    </CListItem>
                </CList>
            </CTabPanel>
            <CTabPanel class="animate__animated animate__fadeIn">
                <CHeading mb="2px" as="h3" color="gray.400" font-size="20px">
                    Junior Front End Developer
                    <CText as="span" color="var(--blue)">@ </CText>
                    <CLink color="var(--blue)" href="https://1on1lms.com" is-external
                        title="One on One Educational Services">
                        One on One Educational Services
                    </CLink>
                </CHeading>
                <CText mb="25px" color="gray.400" font-size="14px">
                    September 2020 - May 2021
                </CText>
                <CList class="details" color="gray.500">
                    <CListItem>Fullfilled UI/UX design stories from the design team.</CListItem>
                    <CListItem>Implemented new features on the Learning Management System (LMS) to
                        support e-learning in
                        <CLink color="var(--blue)" href="https://bahamas.1on1lms.com/" title="Bahamas LMS" :_focus="{
                            outline: '2px dashed #76e4f7',
                            outlineOffset: '3px',
                        }" is-external>Bahamas</CLink>
                        and
                        <CLink color="var(--blue)" href="https://onex.co/" :_focus="{
                            outline: '2px dashed #76e4f7',
                            outlineOffset: '3px',
                        }" title="OneX LMS" is-external>Jamaica</CLink>.
                    </CListItem>
                    <CListItem>Contributed to the
                        <CLink color="var(--blue)" href="https://beta.flowstudy.co" title="Flow Study" :_focus="{
                            outline: '2px dashed #76e4f7',
                            outlineOffset: '3px',
                        }" :_hover="{
    textDecoration: 'underline',
}" is-external>
                            Flow Study Platform
                        </CLink>
                        fullilling UI/UX user stories as well as implementing new features
                        and bug fixes.
                    </CListItem>
                </CList>
            </CTabPanel>
        </CTabPanels>
    </CTabs>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            experiences: [
                {
                    title: 'Aeon Technology Solutions',
                    subtitle: 'Head of Engineering',
                    date: 'June 2022 - Present',
                    details: [
                        'Manage a team of engineers to deliver high quality software solutions.',
                        'Work with a variety of frameworks, programming languages, and platforms such as JavaScript, TypeScript, Vue, React, Python, and AWS.',
                        'Communicate with clients on a daily basis to carry out the tasks assigned.',
                    ],
                    link: 'https://aeontsolutions.com',
                    learnMoreLinks: [
                        {
                            href: 'https://aeontsolutions.com',
                            title: 'Aeon Technology Solutions - Company Website',
                        }
                    ]
                },
                {
                    title: 'Speur Professional Services',
                    subtitle: 'Front End Developer',
                    date: 'July 2021 - Present',
                    details: [
                        'Write modern, performat, maintainable and clean code for a diverse array of clients.',
                        'Work with a variety of frameworks, programming languages, and platforms such as Java, Oracle SQL, Spring Boot',
                        'Communicate with fellow engineers on a daily basis to carry out the tasks assigned.',
                    ],
                },
                {
                    title: 'Knightfox App Design',
                    subtitle: 'Front End Developer',
                    date: 'May 2021 - Present',
                    details: [
                        'Write modern, performat, maintainable and clean code for a diverse array of clients.',
                        'Work with a variety of frameworks, programming languages, and platforms such as JavaScript, TypeScript, Vue and AWS.',
                        'Communicate with fellow engineers on a daily basis to carry out the tasks assigned.',
                    ],
                    link: 'https://knightfoxapps.com',
                    learnMoreLinks: [
                        {
                            href: 'https://my.baymac.net',
                            title: 'Baymac',
                        },
                        {
                            href: 'https://www.goffahglobal.com',
                            title: 'Goffah Global',
                        },
                        {
                            href: 'https://my.atlautomotive.com/',
                            title: 'My ATL Automotive',
                        }
                    ]
                },
                {
                    title: 'One on One Educational Services',
                    subtitle: 'Junior Front End Developer',
                    date: 'September 2020 - May 2021',
                    details: [
                        'Fullfilled UI/UX design stories from the design team.',
                        'Implemented new features on the Learning Management System (LMS) to support e-learning in Bahamas and Jamaica.',
                        'Contributed to the Flow Study Platform fullilling UI/UX user stories as well as implementing new features and bug fixes.',
                    ],
                    link: 'https://www.oneononelms.com/',
                    learnMoreLinks: [
                        {
                            href: 'https://bahamas.1on1lms.com/',
                            title: 'Bahamas LMS',
                        },
                        {
                            href: 'https://www.oneacademy.com',
                            title: 'OneAcademy LMS',
                        },
                        {
                            href: 'https://beta.flowstudy.co',
                            title: 'Flow Study',
                        },
                    ]
                },
            ],
        }
    },
})
</script>
