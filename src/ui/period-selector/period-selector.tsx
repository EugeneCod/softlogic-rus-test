import './period-selector.scss';
import SwapRightIcon from '@/assets/images/icons/swap-right.svg';
import CalendarIcon from '@/assets/images/icons/calendar.svg';

export const PeriodSelector = (props: PropsWithClassName) => {
  const { className = '' } = props;

  return (
    <div className={`period-selector ${className}`}>
      <div className="period-selector__title-container">
        <span className="period-selector__title">Период</span>
      </div>

      <div className="period-selector__peroiods-container">
        <div className="period-selector__periods">
          <span className="period-selector__peroiod">Дата с</span>
          <img className="period-selector__swap-icon" src={SwapRightIcon} alt="Стрелка влево" />
          <span className="period-selector__peroiod">Дата по</span>
        </div>
        <button type="button" className="period-selector__datepicker">
          <img className="period-selector__calendar-icon" src={CalendarIcon} alt="Календарь" />
        </button>
      </div>
    </div>
  );
};
