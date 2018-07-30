/*
* This contains action creators. Action creators return redux actions. Each action
* contains a type describing the purpose of the action and an optional payload
* to go along with it.
*/
import axios from 'axios';

const ROOT_SEARCH_URL = 'https://search.ob1.io';
const SEARCH = 'search';
const STATS = 'stats';
const LISTINGS = 'listings';
const PROFILES = 'profiles';
const VENDORS = 'vendors';
const SYMBOLS = 'symbols';
const NSFW = 'nsfw';
const CONDITION = 'condition';
const TYPE = 'type';

export const GET_STATS_LISTINGS_NSFW = 'GET_STATS_LISTINGS_NSFW';
export const GET_STATS_LISTINGS_CONDITION = 'GET_STATS_LISTINGS_CONDITION';
export const GET_STATS_LISTINGS_TYPE = 'GET_STATS_LISTINGS_TYPE';
export const GET_STATS_LISTINGS_SYMBOL = 'GET_STATS_LISTINGS_SYMBOL';
export const GET_STATS_LISTINGS_TOTALS = 'GET_STATS_LISTINGS_TOTALS';
export const GET_STATS_PROFILES_SYMBOLS = 'GET_STATS_PROFILES_SYMBOLS';
export const GET_STATS_VENDORS_SYMBOLS = 'GET_STATS_VENDORS_SYMBOLS';

/*
* EXAMPLE USING REDUX PROMISE. This is here as an example of using redux-promise, but
* all subsequent actions will use redux-thunk.
*/
export function getStatsListingsNSFW_Promise() {
  const url = `${ROOT_SEARCH_URL}/${STATS}/${LISTINGS}/${NSFW}`;

  const request = axios.get(url);

  console.log('Request:', request);

  // Vanilla redux expects us to return a plain javascript object.
  return {
    type: GET_STATS_LISTINGS_NSFW,
    payload: request
  };
}

/*
* Listing counts by nsfw/sfw.
*/
export function getStatsListingsNSFW_Thunk() {
  const url = `${ROOT_SEARCH_URL}/${STATS}/${LISTINGS}/${NSFW}`;

  const request = axios.get(url);

  console.log('Request:', request);

  // Thunk returns a function rather than a plain action.
  return dispatch => {
    request.then(({ data }) => {
      console.log('dispatch data:', data);
      dispatch({ type: GET_STATS_LISTINGS_NSFW, payload: data });
    });
  };
}

/*
* Listing counts by condition of item.
*/
export function getStatsListingsCondition() {
  const url = `${ROOT_SEARCH_URL}/${STATS}/${LISTINGS}/${CONDITION}`;

  const request = axios.get(url);

  console.log('Request:', request);

  // Thunk returns a function rather than a plain action.
  return dispatch => {
    request.then(({ data }) => {
      console.log('condition data:', data);
      dispatch({ type: GET_STATS_LISTINGS_CONDITION, payload: data });
    });
  };
}

/*
* Listing counts by type:
ex: "cryptocurrency": 15,
    "digital_good": 1168,
    "physical_good": 7445,
    "service": 162
*/
export function getStatsListingsType() {
  const url = `${ROOT_SEARCH_URL}/${STATS}/${LISTINGS}/${TYPE}`;

  const request = axios.get(url);

  console.log('Request:', request);

  // Thunk returns a function rather than a plain action.
  return dispatch => {
    request.then(({ data }) => {
      console.log('type data:', data);
      dispatch({ type: GET_STATS_LISTINGS_TYPE, payload: data });
    });
  };
}

/*
* Listing counts by symbol ('ZEC', 'BCH', etc.):
*/
export function getStatsListingsSymbol() {
  const url = `${ROOT_SEARCH_URL}/${STATS}/${LISTINGS}/${SYMBOLS}`;

  const request = axios.get(url);

  console.log('Request:', request);

  // Thunk returns a function rather than a plain action.
  return dispatch => {
    request.then(({ data }) => {
      console.log('symbol data:', data);
      dispatch({ type: GET_STATS_LISTINGS_SYMBOL, payload: data });
    });
  };
}

/*
* Retrieves all listing search data including 'total/active' listings, etc.
*/
export function getStatsListingsTotals() {
  const url = `${ROOT_SEARCH_URL}/${SEARCH}/${LISTINGS}`;

  const request = axios.get(url);

  console.log('Request:', request);

  // Thunk returns a function rather than a plain action.
  return dispatch => {
    request.then(({ data }) => {
      console.log('listings count:', data.results.total);
      dispatch({
        type: GET_STATS_LISTINGS_TOTALS,
        payload: data.results.total
      });
    });
  };
}

/*
* Counts for profiles per currency type.
*/
export function getStatsProfilesSymbol() {
  const url = `${ROOT_SEARCH_URL}/${STATS}/${PROFILES}/${SYMBOLS}`;

  const request = axios.get(url);

  console.log('Request:', request);

  // Thunk returns a function rather than a plain action.
  return dispatch => {
    request.then(({ data }) => {
      console.log('profiles per symbol count:', data);
      dispatch({ type: GET_STATS_PROFILES_SYMBOLS, payload: data });
    });
  };
}

/*
* Counts for vendors per currency type.
*/
export function getStatsVendorsSymbol() {
  const url = `${ROOT_SEARCH_URL}/${STATS}/${VENDORS}/${SYMBOLS}`;

  const request = axios.get(url);

  console.log('Request:', request);

  // Thunk returns a function rather than a plain action.
  return dispatch => {
    request.then(({ data }) => {
      console.log('vendors per symbol count:', data);
      dispatch({ type: GET_STATS_VENDORS_SYMBOLS, payload: data });
    });
  };
}
