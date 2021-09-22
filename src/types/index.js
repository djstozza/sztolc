// @flow
// export type RefType = null | (HTMLElement & { changeCallback: Function })
export type RefObject = { current: ?HTMLElement }

export type SectionBase = {
  id: string,
  title: string,
  icon: string
}

export type Social = {
  name: string,
  url: string,
  icon: string
}

export type BasicInfo = {
  name: string,
  titles: string[],
  social: Social[],
  image: string
} & SectionBase

export type About = {
  description: string
} & SectionBase

export type Icon = {
  name: string,
  className: string
}

export type Skills = {
  icons: Icon[]
} & SectionBase

export type Job = {
  company: string,
  title: string,
  years: string,
  description: string[],
  technologies: string[],
  image: string
}

export type Experience = {
  jobs: Job[]
} & SectionBase

export type Link = {
  name: string,
  url: string
}

export type Project = {
  id: string,
  title: string,
  description: string[],
  images: string[],
  projectLink: Link,
  githubLinks: Link[],
  referenceLinks: Link[],
  technologies: string[]
}

export type Projects = {
  projects: Project[]
} & SectionBase

export type Data = {
  basicInfo: BasicInfo,
  about: About,
  skills: Skills,
  experience: Experience,
  projects: Projects
}
