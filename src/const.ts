import {City} from './types/offer';

export const URL_MARKER_DEFAULT = '/img/pin.svg';
export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export const CITIES: City[] = [
  {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  {
    'name': 'Cologne',
    'location': {
      'latitude': 50.938361,
      'longitude': 6.959974,
      'zoom': 13
    }
  },
  {
    'name': 'Brussels',
    'location': {
      'latitude': 50.846557,
      'longitude': 4.351697,
      'zoom': 13
    }
  },
  {
    'name': 'Amsterdam',
    'location': {
      'latitude': 52.37454,
      'longitude': 4.897976,
      'zoom': 13
    }
  },
  {
    'name': 'Hamburg',
    'location': {
      'latitude': 53.550341,
      'longitude': 10.000654,
      'zoom': 13
    }
  },
  {
    'name': 'Dusseldorf',
    'location': {
      'latitude': 51.225402,
      'longitude': 6.776314,
      'zoom': 13
    }
  }
];

export const SORT_OPTIONS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
] satisfies Record<SortOption, string>;

export const enum SortOption {
  Popular,
  PriceLowToHigh,
  PriceHighToLow,
  TopRatedFirst,
}

export enum AppRoute {
 Main = '/',
 Favorites = '/favorites',
 Login = '/login',
 Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
 Offers = '/offers',
 Reviews = '/comments',
 Favorites = '/favorite',
 Login = '/login',
 Logout = '/logout',
}

export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
  User = 'USER',
  Offer = 'OFFER',
  Review = 'REVIEW',
  Favorite = 'FAVORITE',
}

export const enum RequestStatus {
  Idle,
  Loading,
  Success,
  Failed,
}

export enum PlaceCardClass {
  Favorites = 'favorites',
  NearPlaces = 'near-places',
  Cities = 'cities',
}
