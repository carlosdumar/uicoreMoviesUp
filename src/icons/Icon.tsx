import React, { ElementType, HTMLAttributes } from 'react'
import { Assign } from 'utility-types'
import { CarlosIconName, CarlosIcons } from './CarlosIcons'
import { StyledProps, styledClasses, omitStyledProps } from '../styled-props/StyledProps'

type IconName = CarlosIconName

interface IconProps
  extends Assign<HTMLAttributes<HTMLHeadingElement>, Omit<StyledProps, 'children'>> {
  name: IconName
  size?: number
}

function Icon(props: IconProps) {
  const name = props.name as string
  const size = props.size || 16
  const CarlosIcon: ElementType | undefined = CarlosIcons[name]

  if (CarlosIcon) {
    return (
      <span {...omitStyledProps(props, 'name', 'size')} className={styledClasses(props)}>
        <CarlosIcon width={size} height={size} />
      </span>
    )
  } else {
    return null
  }
}

export { IconName, CarlosIcons, Icon, IconProps }
