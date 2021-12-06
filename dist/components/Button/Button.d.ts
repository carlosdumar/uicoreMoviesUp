import React from 'react';
import { ButtonProps as AButtonProps } from 'antd';
import { StyledProps } from '../../styled-props/StyledProps';
interface ButtonProps extends StyledProps, AButtonProps {
    /** className to be appended to default className */
    className?: string;
}
export declare const Button: React.FC<ButtonProps>;
export {};
