import { Button, IconButton, PeriodSelector, SearchInput, Select } from '@/ui';
import './control-bar.scss';
import ListIcon from '@/assets/images/icons/list-solid.svg';

export const ControlBar = (props: PropsWithClassName) => {
  const { className = '' } = props;
  return (
    <div className={`control-bar ${className}`}>
      <SearchInput className="control-bar__search" />
      <Select initialValue="Все нейросети" className="control-bar__select-neuronet" />
      <Select initialValue="Все теги" className="control-bar__select-tags" />
      <Select initialValue="Тип файлов" className="control-bar__select-type-of-files" />
      <PeriodSelector className="control-bar__select-period" />
      <div className="control-bar__buttons-container">
        <IconButton iconSrc={ListIcon} className="control-bar__switch-view" />
        <Button className="control-bar__create-btn">Добавить</Button>
      </div>
    </div>
  );
};
