import React from "react";
import { Layout, LayoutProps } from "antd";
import {
    styledClasses,
    StyledProps,
    omitStyledProps,
  } from '../../styled-props/StyledProps'

interface HeaderProps extends StyledProps,  LayoutProps {
    /** className to be appended to default className */
  className?: string
}

export const Header:React.FC<HeaderProps> = (props) => {
    return (
        <Layout.Header {...omitStyledProps(props)} className={styledClasses(props)} />
    )
}