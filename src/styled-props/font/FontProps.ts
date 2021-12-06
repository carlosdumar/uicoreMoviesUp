export type FontSize = 'xsmall' | 'small' | 'normal' | 'medium' | 'large'

export type FontWeight = 'light' | 'bold' | 'semi-bold'

export type TextAlignment = 'left' | 'center' | 'right'

export type LineHeight = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'

export interface FontProps {
  size?: FontSize
  mono?: boolean
  italic?: boolean
  weight?: FontWeight
  align?: TextAlignment
  line?: LineHeight
}
