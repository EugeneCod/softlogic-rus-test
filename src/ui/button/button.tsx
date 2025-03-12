import { PropsWithChildren } from 'react';
import './button.scss';

export const Button = (props: PropsWithChildren & PropsWithClassName) => {
  const { children, className = '' } = props;
  return (
    <button type="button" className={`button ${className}`}>
      {children}
    </button>
  );
};
