import { FunctionComponent, ElementType } from 'react'
import { KVO } from '../core/Types'
import AnticonRight from './anticon-right.svg'

type CarlosIconName = 'anticon-right'

const CarlosIcons: KVO<FunctionComponent<ElementType>> = {
  'anticon-right': AnticonRight,
}

export { CarlosIcons, CarlosIconName }
