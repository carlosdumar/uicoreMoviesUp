import React from 'react';
import { StyledProps } from '../../styled-props/StyledProps';
interface ButtonProps extends StyledProps {
    /** className to be appended to default className */
    className?: string;
    /** Can be set to primary ghost dashed link text default */
    type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
}
export declare const Button: React.FC<ButtonProps>;
export {};
