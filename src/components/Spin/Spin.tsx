import React from 'react'
import { Space as ASpin, SpaceProps as ASpinProps } from 'antd'
import {
  omitStyledProps,
  StyledProps,
  styledClasses,
} from '../../styled-props/StyledProps'

interface SpinProps extends StyledProps, ASpinProps {
  /** className to be appended to default className */
  className?: string
}

export const Spin: React.FC<SpinProps> = props => {
  return <ASpin {...omitStyledProps(props)} className={styledClasses(props)} />
}
