import React from 'react'
import { Tabs as ATabs, TabsProps as ATabProps } from 'antd'
import {
  StyledProps,
  omitStyledProps,
  styledClasses,
} from '../../styled-props/StyledProps'

interface TabsProps extends StyledProps, ATabProps {
  /** className to be appended to default className */
  className?: string
}

export const Tabs: React.FC<TabsProps> = props => {
  return <ATabs {...omitStyledProps(props)} className={styledClasses(props)} />
}
