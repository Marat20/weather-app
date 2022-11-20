import { City } from './City';
import { useAppSelector } from '../../redux/redux-hooks';

export const Cities = () => {
  const cities = useAppSelector((state) => state.cities.cities);

  return (
    <section className='ajax-section'>
      <div className='container'>
        <ul className='cities'>
          {cities &&
            cities.map((city) => {
              return <City key={city.id} {...city} />;
            })}
        </ul>
      </div>
    </section>
  );
};
