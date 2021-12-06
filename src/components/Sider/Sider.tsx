import React, { CSSProperties, ReactNode } from 'react'
import { Layout, LayoutProps } from 'antd'
import {
    styledClasses,
    StyledProps,
    omitStyledProps,
  } from '../../styled-props/StyledProps'

interface SiderProps extends StyledProps, LayoutProps {

    /** Breakpoints of the responsive layout */
    breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

    className?:	string

    /** To set the current status	 */
    collapsed?:	boolean
    
    /** Width of the collapsed sidebar, by setting to 0 a special trigger will appear */
    collapsedWidth?: number

    /** Whether can be collapsed */
    collapsible?: 	boolean

    /** To set the initial status	 */
    defaultCollapsed?: boolean

    /** Reverse direction of arrow, for a sider that expands from the right	 */
    reverseArrow?: boolean

    /** To customize the styles	 */
    style?:	CSSProperties

    /** Color theme of the sidebar */
    theme?:	'light' | 'dark'

    /** Specify the customized trigger, set to null to hide the trigger	 */
    trigger?: ReactNode
    
    /** Width of the sidebar */
    width?:	number | string

    /** To customize the styles of the special trigger that appears when collapsedWidth is 0 */
    zeroWidthTriggerStyle?:	object

    /** The callback function, executed when breakpoints changed	 */
    onBreakpoint?: (broken: any) => Record<string, unknown>

    /** The callback function, executed by clicking the trigger or activating the responsive layout	 */
    onCollapse?: (collapsed: any, type: any) => Record<string, unknown>	
}

export const Sider:React.FC<SiderProps> = (props) => {
    return (
        <Layout.Sider {...omitStyledProps(props)} className={styledClasses(props)} />
    )
}