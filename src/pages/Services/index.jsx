import style from './Service.module.css';
import { Caption, switchPage } from '../../components/SwitchPage';

<switchPage />;

export const Services = () => {
  return (
    <services className={`${style.root} container`}>
      <Caption />
    </services>
  );
};
