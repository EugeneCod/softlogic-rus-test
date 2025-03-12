import { CardList, ControlBar, Sidebar } from '@/components';
import './main-layout.scss'

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <Sidebar className="main-layout__sidebar" />
      <ControlBar className="main-layout__control-bar" />
      <CardList className="main-layout__card-list" />
    </div>
  );
};
