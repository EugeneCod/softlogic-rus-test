import './select.scss';
import ArrowDownIcon from '@/assets/images/icons/caret-down.svg';

interface SelectProps extends PropsWithClassName {
  initialValue: string;
}

export const Select = (props: SelectProps) => {
  const { className = '', initialValue } = props;

  return (
    <div className={`select ${className}`}>
      <button className="select__trigger">
        <img className="select__trigger-icon" src={ArrowDownIcon} alt="Стрелка вниз" />
      </button>
      <span className="select__value">{initialValue}</span>
    </div>
  );
};
