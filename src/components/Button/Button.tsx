import React from 'react'
import { Button as AButton, ButtonProps as AButtonProps } from 'antd'
import {
  styledClasses,
  omitStyledProps,
  StyledProps,
} from '../../styled-props/StyledProps'
import styles from './Button.module.css'

interface ButtonProps extends StyledProps, AButtonProps {
  /** className to be appended to default className */
  className?: string
}
export const Button: React.FC<ButtonProps> = props => {
  return (
    <AButton
      {...omitStyledProps(props)}
      className={styledClasses(props, styles.button)}
    />
  )
}
