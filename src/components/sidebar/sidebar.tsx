import './sidebar.scss';

export const Sidebar = (props: PropsWithClassName) => {
  const { className } = props;
  return <div className={`sidebar ${className}`} />;
};
