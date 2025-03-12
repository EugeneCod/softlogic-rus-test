import { PropsWithChildren } from 'react';
import './container.scss';

export const Container = (props: PropsWithChildren) => {
  const { children } = props;
  return <div className="container">{children}</div>;
};
