import './card.scss';
import PhotoFilmIcon from '@/assets/images/icons/photo-film.svg';
import GearIcon from '@/assets/images/icons/gear.svg';
import ChartNetworkIcon from '@/assets/images/icons/chart-network.svg';
import EyeIcon from '@/assets/images/icons/eye.svg';
import FileImageIcon from '@/assets/images/icons/file-image.svg';
import FileVideoIcon from '@/assets/images/icons/file-video.svg';
import MobilePhoneIcon from '@/assets/images/icons/mobile-phone.svg';
import SeatBeltIcon from '@/assets/images/icons/seat-belt.svg';
import SleepIcon from '@/assets/images/icons/sleep.svg';
import TrashIcon from '@/assets/images/icons/trash.svg';
import { IconButton } from '@/ui';

type Tags = 'forest' | 'frames' | 'spans';

export interface CardProps {
  title: string;
  fileType: 'Фото' | 'Видео';
  date: string;
  tags: Tags[];
  imageSrc: string;
  numberOfFiles: number;
}

const tagsData: Record<Tags, { text: string; style: string }> = {
  forest: {
    text: 'Лес',
    style: 'green',
  },
  frames: {
    text: 'Кадры',
    style: 'orange',
  },
  spans: {
    text: 'Полеты',
    style: 'red',
  },
};

const neuronetList = [
  { iconSrc: TrashIcon },
  { iconSrc: SeatBeltIcon },
  { iconSrc: MobilePhoneIcon },
  { iconSrc: SleepIcon },
  { iconSrc: TrashIcon },
  { iconSrc: SeatBeltIcon },
];

export const Card = (props: CardProps) => {
  const { title, fileType, date, tags, imageSrc, numberOfFiles } = props;

  const fileIconSrc = fileType === 'Фото' ? FileImageIcon : FileVideoIcon;

  return (
    <li className="card">
      <div className="card__top">
        <div className="card__title-block">
          <img className="card__title-image" src={PhotoFilmIcon} alt="Фото/видео" />
          <span className="card__title">{title}</span>
        </div>
        <img className="card__image" src={imageSrc} alt={imageSrc} />
      </div>

      <div className="card__bottom">
        <div className="card__row">
          <div className="card__props-left-col">
            <span className="card__props-key">ID</span>
          </div>
          <div className="card__props-right-col">
            <span className="card__props-value">663с7…a2d1</span>
            <button className="card__props-copy-btn" type="button" />
          </div>
        </div>
        <div className="card__row">
          <div className="card__props-left-col">
            <span className="card__props-key">Тип файлов</span>
            <img className="card__file-icon" src={fileIconSrc} alt={fileType} />
            <span className="card__props-value">{fileType}</span>
          </div>
          <div className="card__props-right-col">
            <span className="card__props-key">Кол-во файлов</span>
            <span className="card__props-value">{numberOfFiles}</span>
          </div>
        </div>
        <div className="card__row">
          <div className="card__props-left-col">
            <span className="card__props-key">Дата добавления</span>
          </div>
          <div className="card__props-right-col">
            <span className="card__props-value">{date}</span>
          </div>
        </div>
        <div className="card__row">
          <div className="card__props-left-col">
            <span className="card__props-key">Теги</span>
          </div>
          <div className="card__props-right-col">
            <ul className="card__tags-list">
              {tags.map((tag, index) => (
                <li
                  className={`card__tags-list-item card__tags-list-item_${tagsData[tag].style}`}
                  key={index}>
                  #{tagsData[tag].text}
                </li>
              ))}
            </ul>
            <button className="card__unwrap-btn" type="button" />
          </div>
        </div>
        <div className="card__row">
          <div className="card__props-left-col">
            <span className="card__props-key">Нейросети</span>
          </div>
          <div className="card__props-right-col">
            <ul className="card__neuronet-list">
              {neuronetList.map(({ iconSrc }, index) => (
                <li className={`card__neuronet-list-item`} key={index}>
                  <img src={iconSrc} alt={iconSrc} />
                </li>
              ))}
            </ul>
            <button className="card__unwrap-btn" type="button" />
          </div>
        </div>
        <div className="card__row">
          <div className="card__props-left-col">
            <span className="card__props-key">Количество</span>
            <img
              className="card__chart-network-icon"
              src={ChartNetworkIcon}
              alt={ChartNetworkIcon}
            />
            <span className="card__props-value card__props-value_blue">12</span>
            <IconButton iconSrc={EyeIcon} size={'small'} />
          </div>
          <div className="card__props-right-col">
            <span className="card__props-key">Управление</span>
            <IconButton iconSrc={GearIcon} size={'small'} />
          </div>
        </div>
      </div>
    </li>
  );
};
