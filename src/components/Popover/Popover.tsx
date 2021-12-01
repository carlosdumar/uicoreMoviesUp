import React from 'react'
import { Popover as APopover, PopoverProps as APopoverProps } from 'antd'
import {
  styledClasses,
  StyledProps,
  omitStyledProps,
} from '../../styled-props/StyledProps'

interface PopoverProps extends Omit<StyledProps, 'color'>, APopoverProps {
  /** className to be appended to default className */
  className?: string
}

export const Popover: React.FC<PopoverProps> = props => {
  return <APopover {...omitStyledProps(props)} className={styledClasses(props)} />
}
