import { Spacing } from '../core/Spacing';
import { Color } from '../core/Color';
import { KVO } from '../core/Types';
import { FlexProps } from './flex/FlexProps';
import { BorderProps } from './border/BorderProps';
import { FontSize, FontProps } from './font/FontProps';
import { PaddingProps } from './padding/PaddingProps';
import { MarginProps } from './margin/MarginProps';
/**
 * Styled Props: Define reusable styles across components using props.
 */
export interface StyledProps {
    /** Component width */
    width?: string | number;
    /** Component height*/
    height?: string | number;
    /** Component margin. Usually used for containers */
    margin?: Spacing | MarginProps;
    /** Component padding. Usually used for containers */
    padding?: Spacing | PaddingProps;
    /** Component font size */
    font?: FontSize | FontProps;
    /** Render component as inline block */
    inline?: boolean;
    /** Text color */
    color?: Color;
    /** Background color */
    background?: Color;
    /**
     * Component border. Support boolean (default 1px grey solid) or BorderProps
     *  border={true}
     *  border={{ top: true, color: Color.GREEN_ACHS }}
     */
    border?: boolean | BorderProps;
    /** Component flex layout */
    flex?: boolean | FlexProps;
    /** Optional class name */
    className?: string;
}
export declare const styledClasses: (props: StyledProps, ...classes: string[]) => string;
/** Return all props that are not styled props */
export declare function omitStyledProps(props: KVO, ...ignoredProps: string[]): KVO;
