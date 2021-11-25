export interface FlexProps {
    inline?: boolean;
    /** Component children flex layout content alignment */
    align?: 'center-center' | 'baseline' | 'flex-start' | 'flex-end';
    /** Component children flex layout content distribution */
    distribution?: 'space-between' | 'space-evenly' | 'space-around' | 'flex-start' | 'left' | 'right' | 'flex-end' | 'unset' | 'center';
    direction?: 'column' | 'row';
}
