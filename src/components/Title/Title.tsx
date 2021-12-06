import React, { ReactNode } from 'react'
import { Typography } from 'antd'
import {
  styledClasses,
  StyledProps,
  omitStyledProps,
} from '../../styled-props/StyledProps'

interface copyable {
  text: string 
  onCopy: () => void
  icon: React.ReactNode
  tooltips: false | [React.ReactNode, React.ReactNode]
}

interface editable {
  icon: ReactNode
  tooltip: boolean | ReactNode
  editing: boolean
  maxLength: number
  autoSize: boolean | { minRows: number; maxRows: number }
  onStart: () => void
  onChange: (type: string) => void
  onCancel: () => void
  onEnd: () => void
}

interface ellipsis {
  rows: number
  expandable: boolean
  suffix: string
  symbol: ReactNode
  tooltip: boolean | ReactNode
  onExpand: (arg0: any) => any
  // eslint-disable-next-line no-shadow
  onEllipsis: (ellipsis: unknown) => any
}

interface TitleProps extends StyledProps {
  /** className to be appended to default className */
  className?: string

  /** Code style */
  code?: boolean

  /** Whether to be copyable, customize it via setting an object */
  copyable?: boolean | copyable

  /** Deleted line style */
  delete?: boolean

  /** Disabled content */
  disabled?: boolean

  /** If editable. Can control edit state when is object */
  editable?: editable

  /** Display ellipsis when text overflows, can configure rows and expandable by using object */
  ellipsis?: boolean | Omit<ellipsis, 'expandable' | 'rows' | 'onExpand'>

  /** Set content importance. Match with h1, h2, h3, h4, h5 */
  level?: number

  /** Marked style */
  mark?: boolean

  /** Set the handler to handle click event */
  onClick?: (event: any) => void

  /** Italic style */
  italic?: boolean

  /** Content type */
  type?: 'secondary' | 'success' | 'warning' | 'danger'

  /** Underlined style */
  underline?: boolean
}

export const Title: React.FC<TitleProps> = props => {
  return <Typography.Title {...omitStyledProps(props)} className={styledClasses(props)} />
}
