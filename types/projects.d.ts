interface ProjectLinks {
  url: string;
  title: string;
  icons: string[];
}

interface Project {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  links: ProjectLinks[];
  image: string;
}

export default Project;
