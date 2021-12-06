import React from 'react'
import { Layout, LayoutProps } from 'antd'
import {
    styledClasses,
    StyledProps,
    omitStyledProps,
  } from '../../styled-props/StyledProps'

interface ContentProps extends StyledProps, LayoutProps {

}

export const Content:React.FC<ContentProps> = (props) => {
    return (
        <Layout.Content {...omitStyledProps(props)} className={styledClasses(props)} />
    )
}