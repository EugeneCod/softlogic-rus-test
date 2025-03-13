import { Button, Input } from '@/ui';
import { DropField } from '@/components';
import './file-addition-form.scss';
import PhotoFilmIcon from '@/assets/images/icons/photo-film.svg';
import FileImageIcon from '@/assets/images/icons/file-image.svg';
import FileVideoIcon from '@/assets/images/icons/file-video.svg';

export const FileAdditionForm = (props: PropsWithClassName) => {
  const { className } = props;
  return (
    <div className={`file-addition-form ${className}`}>
      <div className="file-addition-form__header">
        <p className="file-addition-form__title-block">
          <img
            className="file-addition-form__title-image"
            src={PhotoFilmIcon}
            alt={PhotoFilmIcon}
          />
          Добавление медиа файлов
        </p>
        <button type="button" className="file-addition-form__close-btn"></button>
      </div>
      <div className="file-addition-form__main">
        <div className="stepper">
          <div className="stepper__step stepper__step_active">
            <div className="stepper__info-container">
              <span className="stepper__step-number">1</span>
              <span className="stepper__step-title">Файлы</span>
            </div>
            <div className="stepper__step-line"></div>
          </div>
          <div className="stepper__step">
            <div className="stepper__step-line"></div>
          </div>
        </div>
        <p className="file-addition-form__notification">
          Перед загрузкой файлов ознакомьтесь с <span>Требованиями</span> к фото и видео
        </p>
        <div className="form-input">
          <label className="form-input__label" htmlFor="name">
            Название файлов
          </label>
          <Input placeholder="Введите название для этих файлов" id="name" />
        </div>
        <div className="file-addition-form__filters-block">
          <span className="file-addition-form__filters-block-label">Тип файлов</span>
          <div className="file-addition-form__filters-block-buttons">
            <button type="button" className="file-addition-form__filters-block-button">
              <img
                className="file-addition-form__filters-block-button-image"
                src={FileImageIcon}
                alt={FileImageIcon}
              />
              Фото
            </button>
            <button type="button" className="file-addition-form__filters-block-button">
              <img
                className="file-addition-form__filters-block-button-image"
                src={FileVideoIcon}
                alt={FileVideoIcon}
              />
              Видео
            </button>
          </div>
        </div>
        <DropField />
        <div className="file-addition-form__btns-block">
          <Button variant="outline">Отменить</Button>
          <Button>Далее</Button>
        </div>
      </div>
    </div>
  );
};
