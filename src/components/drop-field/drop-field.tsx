import './drop-field.scss';
import PhotoFilmImage from '@/assets/images/photo-film.svg';

export const DropField = () => {
  return (
    <div className="drop-filed">
      <img className="drop-filed__image" src={PhotoFilmImage} alt={PhotoFilmImage} />
      <button className="drop-filed__button" type="button">
        Файлы
      </button>
      <p className="drop-filed__text">или перетащите их в эту область</p>
    </div>
  );
};
