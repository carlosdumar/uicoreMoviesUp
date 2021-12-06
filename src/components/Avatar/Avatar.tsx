import React from 'react'
import { Avatar as AAvatar, AvatarProps as AAvatarProps } from 'antd'
import {
  StyledProps,
  omitStyledProps,
  styledClasses,
} from '../../styled-props/StyledProps'

interface AvatarProps extends StyledProps, AAvatarProps {
  /** className to be appended to default className */
  className?: string
}

export const Avatar: React.FC<AvatarProps> = props => {
  return <AAvatar {...omitStyledProps(props)} className={styledClasses(props)} />
}
