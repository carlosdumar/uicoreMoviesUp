import React, { FC } from 'react'
import { Anchor as AAnchor, AnchorProps as AAnchorProps } from 'antd'
import {
  StyledProps,
  styledClasses,
  omitStyledProps,
} from '../../styled-props/StyledProps'

interface AnchorProps extends StyledProps, AAnchorProps {
  /** className to be appended to default className */
  className?: string
}

export const Anchor: FC<AnchorProps> = props => {
  return <AAnchor {...omitStyledProps(props)} className={styledClasses(props)} />
}
