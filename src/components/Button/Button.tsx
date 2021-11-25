import React from 'react'
import { Button as AButton } from 'antd'
import {
  styledClasses,
  omitStyledProps,
  StyledProps,
} from '../../styled-props/StyledProps'
import styles from './Button.module.css'

interface ButtonProps extends StyledProps {
  /** className to be appended to default className */
  className?: string

  /** Can be set to primary ghost dashed link text default */
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'
}
export const Button: React.FC<ButtonProps> = props => {
  return (
    <AButton
      {...omitStyledProps(props)}
      className={styledClasses(props, styles.button)}
    />
  )
}
