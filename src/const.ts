export const Setting = {
  PlaceCardCount: 312
};

export enum AppRoute {
Main = '/',
Favorites = '/favorites',
Login = '/login',
Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}
