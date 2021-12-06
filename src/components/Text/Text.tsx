import React, { ReactNode } from 'react'
import { Typography } from 'antd'
import { Icon, IconName, IconProps } from '../../icons/Icon'
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
interface TextProps extends StyledProps {
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

  ellipsis?: boolean | Omit<ellipsis, 'expandable' | 'rows' | 'onExpand'>

  /** Keyboard style */
  keyboard?: boolean

  /** Marked style */
  mark?: boolean

  /** Set the handler to handle click event */
  onClick?: (event: any) => void

  /** Bold style */
  strong?: boolean

  /** Italic style */
  italic?: boolean

  /** Content type */
  type?: 'secondary' | 'success' | 'warning' | 'danger'

  /** Underlined style */
  underline?: boolean

  /** className to be appended to default className */
  className?: string

  /** Left icon */
  icon?: IconName

  /** Optional props for left icon */
  iconProps?: Omit<IconProps, 'name'>

  /** Right icon */
  rightIcon?: IconName

  /** Optional props for right icon */
  rightIconProps?: Omit<IconProps, 'name'>
}

export const Text: React.FC<TextProps> = props => {
  const { icon, iconProps, children, rightIcon, rightIconProps } = props

  return (
    <Typography.Text
      {...omitStyledProps(
        Object.assign({}, props),
        'icon',
        'iconProps',
        'rightIcon',
        'rightIconProps'
      )}
      className={styledClasses(props)}
    >
      {icon && <Icon name={icon} {...iconProps} />}
      {children}
      {rightIcon && <Icon name={rightIcon} size={22} {...rightIconProps} />}
    </Typography.Text>
  )
}
