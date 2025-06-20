import CitiesList from '../../components/cities-list/cities-list';
import {useAppSelector} from '../../hooks';
import {City} from '../../types/offer';

type MainEmptyProps = {
citiesList: City[];
};

function MainEmpty({citiesList}: MainEmptyProps): JSX.Element {
  const activeCity = useAppSelector((state) => state.activeCity);

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <CitiesList citiesList={citiesList} />
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in {activeCity.name}</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainEmpty;
