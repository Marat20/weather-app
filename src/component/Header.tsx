import { useAppSelector } from '../redux/redux-hooks';
import { Search } from './listCities/Search';

export const Header = () => {
  const validCity = useAppSelector((state) => state.cities.validCity);

  return (
    <section className='top-banner'>
      <div className='container'>
        <h1 className='heading'>Simple Weather App</h1>
        <Search validCity={validCity} />
      </div>
    </section>
  );
};
