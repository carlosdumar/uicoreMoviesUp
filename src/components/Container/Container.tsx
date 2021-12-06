import React, { HTMLAttributes } from 'react'
import {
  styledClasses,
  StyledProps,
  omitStyledProps,
} from '../../styled-props/StyledProps'

interface ContainerProps extends HTMLAttributes<HTMLDivElement>, StyledProps {
  /** className to be appended to default className */
  className?: string

  /** Popover target element */
  children?: React.ReactNode
}

export const Container: React.FC<ContainerProps> = props => {
  return <div {...omitStyledProps(props)} className={styledClasses(props)} />
}
