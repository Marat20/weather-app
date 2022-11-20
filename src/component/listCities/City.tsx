import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { deleteCity } from '../../redux/slices/citiesSlice';
import { useAppDispatch } from '../../redux/redux-hooks';
import { CityParam } from '../../models/models';

export const City = ({
  temp,
  cityName,
  country,
  condition,
  icon,
  id,
}: CityParam) => {
  const dispatch = useAppDispatch();

  return (
    <li className='city'>
      <Button
        type='primary'
        shape='circle'
        icon={<CloseOutlined />}
        size='large'
        onClick={() => dispatch(deleteCity(id))}
      />
      <h2 className='city-name'>
        <span>{cityName}</span>
        <sup>{country}</sup>
      </h2>
      <div className='city-temp'>
        {temp}
        <sup>°C</sup>
      </div>
      <figure>
        <img className='city-icon' src={icon} alt={condition} />
        <figcaption>{condition}</figcaption>
      </figure>
    </li>
  );
};
