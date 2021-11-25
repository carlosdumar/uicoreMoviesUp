import { HTMLAttributes } from 'react';
import { Assign } from 'utility-types';
import { CarlosIconName, CarlosIcons } from './CarlosIcons';
import { StyledProps } from '../styled-props/StyledProps';
declare type IconName = CarlosIconName;
interface IconProps extends Assign<HTMLAttributes<HTMLHeadingElement>, Omit<StyledProps, 'children'>> {
    name: IconName;
    size?: number;
}
declare function Icon(props: IconProps): JSX.Element | null;
export { IconName, CarlosIcons, Icon, IconProps };
