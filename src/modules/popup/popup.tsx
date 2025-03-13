import { FileAdditionForm, Filters } from '@/components';
import './popup.scss';

export const Popup = () => {
  return (
    <div className="popup">
      <Filters className="popup__filters" />
      <FileAdditionForm className="popup__file-addition-form" />
    </div>
  );
};
