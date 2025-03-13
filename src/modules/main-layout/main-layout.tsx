import { CardList, ControlBar, Sidebar } from '@/components';
import './main-layout.scss';

export const MainLayout = (props: PropsWithClassName) => {
  const { className } = props;
  return (
    <div className={`main-layout ${className}`}>
      <Sidebar className="main-layout__sidebar" />
      <ControlBar className="main-layout__control-bar" />
      <CardList className="main-layout__card-list" />
    </div>
  );
};
