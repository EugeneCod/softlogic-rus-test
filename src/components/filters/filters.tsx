import './filters.scss';
import FileImageIcon from '@/assets/images/icons/file-image.svg';
import FileVideoIcon from '@/assets/images/icons/file-video.svg';
import { Button } from '@/ui';

export const Filters = (props: PropsWithClassName) => {
  const { className } = props;
  return (
    <div className={`filters ${className}`}>
      <div className="filters__btns-group">
        <button type="button" className="filters__button">
          <img className="filters__button-image" src={FileImageIcon} alt={FileImageIcon} />
          Фото
        </button>
        <button type="button" className="filters__button">
          <img className="filters__button-image" src={FileVideoIcon} alt={FileImageIcon} />
          Видео
        </button>
      </div>
      <Button size="full" variant="outline">
        Сбросить фильтр
      </Button>
      {/* <button className="filters__reset-btn"></button> */}
    </div>
  );
};
