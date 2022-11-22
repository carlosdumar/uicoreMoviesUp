import React, { FC } from 'react'
import { Anchor , AnchorLinkProps as AAnchorLinkProps } from 'antd'
import {
  StyledProps,
  omitStyledProps,
  styledClasses,
} from '../../styled-props/StyledProps'

interface LinkProps extends StyledProps, AAnchorLinkProps {
    /** className to be appended to default className */
  className?: string
  title: React.ReactNode;
}

const { Link: ALink } = Anchor;

export const Link:FC<LinkProps> = props => {
    return <ALink {...omitStyledProps(props)} className={styledClasses(props)} title={props.title} />
}