import { FunctionComponent, ElementType } from 'react'
import { KVO } from '../core/Types'
import AnticonRight from './anticon-right.svg'
import BellOutlined from './bell-outlined.svg'
import CrownFilled from './crown-filled.svg'
import EllipsisOutlined from './ellipsis-outlined.svg'
import HeartFilled from './heart-filled.svg'
import Logo from './logo.svg'
import PlusOutlined from './plus-outlined.svg'
import SearchOutlined from './search-outlined.svg'
import StarFilled from './star-filled.svg'
import UnorderedListOutlined from './unordered-list-outlined.svg'

type CarlosIconName =
  | 'anticon-right'
  | 'bell-outlined'
  | 'crown-filled'
  | 'ellipsis-outlined'
  | 'heart-filled'
  | 'logo'
  | 'plus-outlined'
  | 'search-outlined'
  | 'star-filled'
  | 'unordered-list-outlined'

const CarlosIcons: KVO<FunctionComponent<ElementType>> = {
  'anticon-right': AnticonRight,
  'bell-outlined': BellOutlined,
  'crown-filled': CrownFilled,
  'ellipsis-outlined': EllipsisOutlined,
  'heart-filled': HeartFilled,
  logo: Logo,
  'plus-outlined': PlusOutlined,
  'search-outlined': SearchOutlined,
  'star-filled': StarFilled,
  'unordered-list-outlined': UnorderedListOutlined,
}

export { CarlosIcons, CarlosIconName }
