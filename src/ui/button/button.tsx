import { PropsWithChildren } from 'react';
import './button.scss';

interface ButtonProps extends PropsWithChildren, PropsWithClassName {
  variant?: 'primary' | 'outline';
  size?: 'auto' | 'full';
}

export const Button = (props: ButtonProps) => {
  const { children, className = '', variant = 'primary', size = 'auto' } = props;
  return (
    <button type="button" className={`button ${className} button_${variant} button_${size}`}>
      {children}
    </button>
  );
};
