import React from 'react'
import { Layout as ALayout, LayoutProps as ALayoutProps } from 'antd'
import { StyledProps, omitStyledProps, styledClasses } from '../../styled-props/StyledProps'

interface LayoutProps extends StyledProps, ALayoutProps {
    /** className to be appended to default className */
  className?: string
}

export const Layout:React.FC<LayoutProps> = (props) => {
    return (
        <ALayout {...omitStyledProps(props)} className={styledClasses(props)} />
    )
}