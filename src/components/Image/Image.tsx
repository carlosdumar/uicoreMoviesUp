import React from 'react'
import { Image as AImage, ImageProps as AImageProps } from 'antd'
import {
  styledClasses,
  StyledProps,
  omitStyledProps,
} from '../../styled-props/StyledProps'

import styles from './Image.css'

interface ImageProps extends StyledProps, AImageProps {
  /** className to be appended to default className */
  className?: string

  /** Make image round */
  round?: boolean
}

export const Image: React.FC<ImageProps> = props => {
  const { round } = props
  return (
    <AImage
      {...omitStyledProps(props)}
      className={styledClasses(props, styles.image, round ? styles.round : '')}
    />
  )
}
