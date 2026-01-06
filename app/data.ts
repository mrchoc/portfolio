type Project = {
  name: string
  description: string
  link: string
  image_url: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Agentic Configuration Remediation',
    description:
      'Building agentic workflows to automate configuration monitoring and remediation',
    link: 'https://github.com/Config-Guardians',
    image_url: 'https://images.mrchoc.net/images/project-1.jpg',
    id: 'project1',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Apple',
    title: 'Site Reliability Engineer',
    start: 'Present',
    link: 'https://apple.com',
    id: 'work1',
  },
  {
    company: 'Netvirta',
    title: 'DevOps Engineer',
    start: '2025',
    link: 'https://netvirta.com',
    id: 'work2',
  },
  {
    company: 'Ensign Infosecurity',
    title: 'DevOps Engineer',
    start: '2024',
    link: 'https://ensigninfosecurity.com/',
    id: 'work3',
  },
  {
    company: 'SMU Whitehats Society',
    title: 'Technology Director',
    start: '2023',
    link: 'https://whitehats.computing.smu.edu.sg',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Building a homelab as a broke college student',
    description: 'A deep dive into the why and how of getting into homelabbing',
    link: '/blog/building-a-homelab',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/mrchoc',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ryan-loh-3400521b3',
  },
  {
    label: 'Resume',
    link: '/resume.pdf',
  },
]

export const EMAIL = 'ryanloh28@yahoo.com.sg'
