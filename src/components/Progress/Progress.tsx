import React from 'react'
import { Progress as AProgress, ProgressProps as AProgressProps } from 'antd'
import cx from 'classnames'
import {
  styledClasses,
  omitStyledProps,
  StyledProps,
} from '../../styled-props/StyledProps'

import styles from './Progress.css'

interface ProgressProps extends Omit<StyledProps, 'width'>, AProgressProps {
  /** className to be appended to default className */
  className?: string

  /** To set the canvas width of the circular progress, unit: px */
  width?: number
}

export const Progress: React.FC<ProgressProps> = props => {
  const { width, background } = props

  return (
    <AProgress
      {...omitStyledProps(props)}
      className={cx(styledClasses(props), {
        [styles.backgroundBlack]: background === 'black',
      })}
      width={width}
    />
  )
}
