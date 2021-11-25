export declare type FontSize = 'xsmall' | 'small' | 'normal' | 'medium' | 'large';
export declare type FontWeight = 'light' | 'bold' | 'semi-bold';
export declare type TextAlignment = 'left' | 'center' | 'right';
export declare type LineHeight = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
export interface FontProps {
    size?: FontSize;
    mono?: boolean;
    italic?: boolean;
    weight?: FontWeight;
    align?: TextAlignment;
    line?: LineHeight;
}
