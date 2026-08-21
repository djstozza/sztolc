declare module 'react-vertical-timeline-component' {
  import type { ComponentType, ReactNode, CSSProperties } from 'react'

  export const VerticalTimeline: ComponentType<{ children?: ReactNode }>

  export const VerticalTimelineElement: ComponentType<{
    className?: string,
    date?: ReactNode,
    dateClassName?: string,
    iconStyle?: CSSProperties,
    icon?: ReactNode,
    children?: ReactNode
  }>
}
