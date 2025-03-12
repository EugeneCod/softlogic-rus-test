import './search-input.scss';
import SearchIcon from '@/assets/images/icons/search.svg';

export const SearchInput = (props: PropsWithClassName) => {
  const { className = '' } = props;

  return (
    <div className={`search-input ${className}`}>
      <button className="search-input__button" type="button">
        <img className="search-input__button-icon" src={SearchIcon} alt="Кнопка поиска" />
      </button>
      <input placeholder="Поиск медиа файлов по названию или ID" className="search-input__field" />
    </div>
  );
};
