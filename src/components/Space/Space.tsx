import React from 'react'
import { Space as ASpace, SpaceProps as ASpaceProps } from 'antd'
import {
  omitStyledProps,
  StyledProps,
  styledClasses,
} from '../../styled-props/StyledProps'

interface SpaceProps extends StyledProps, ASpaceProps {
  /** className to be appended to default className */
  className?: string
}

export const Space: React.FC<SpaceProps> = props => {
  return <ASpace {...omitStyledProps(props)} className={styledClasses(props)} />
}
