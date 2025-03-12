import './icon-button.scss';

interface IconButtonProps extends PropsWithClassName {
  size?: 'medium' | 'small';
  iconSrc: string;
}

export const IconButton = (props: IconButtonProps) => {
  const { size = 'medium', iconSrc, className = '' } = props;

  return (
    <button type="button" className={`icon-button ${size} ${className}`}>
      <img className="icon-button__image" src={iconSrc} alt="Кнопка" />
    </button>
  );
};
