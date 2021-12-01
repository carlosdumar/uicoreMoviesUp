import React, { ReactNode } from 'react'
import { List as AList } from 'antd'
import {
  omitStyledProps,
  styledClasses,
  StyledProps,
} from '../../styled-props/StyledProps'

interface ListProps extends StyledProps {
  /** Toggles rendering of the border around the list */
  bordered?: boolean

  /** DataSource array for list */
  dataSource?: any[]

  /** Shows a loading indicator while the contents of the list are being fetched */
  loading?: boolean

  /** className to be appended to default className */
  className?: string

  /** Pagination config, hide it by setting it to false */
  pagination?: boolean | object

  renderItem?: (item: any) => ReactNode

  /** Size of list */
  size?: 'default' | 'large' | 'small'
}

export const List: React.FC<ListProps> = props => {
  return <AList {...omitStyledProps(props)} className={styledClasses(props)} />
}
