import { combineReducers } from '../../../../../Library/Caches/typescript/2.9/node_modules/redux';
import StatsReducer from './stats-reducer';
import ConditionReducer from './listing-condition-reducer';
import ListingByTypeReducer from './listing-by-type-reducer';
import ListingBySymbolsReducer from './listing-by-symbols-reducer';
import ListingTotalsReducer from './listing-totals-reducer';
import ProfilesBySymbolsReducer from './profiles-by-symbols-reducer';
import VendorsBySymbolsReducer from './vendors-by-symbols-reducer';

// Adds keys to our global applicatons state.
const rootReducer = combineReducers({
  stats: StatsReducer,
  condition: ConditionReducer,
  listingByType: ListingByTypeReducer,
  listingBySymbols: ListingBySymbolsReducer,
  listingTotals: ListingTotalsReducer,
  profilesBySymbols: ProfilesBySymbolsReducer,
  vendorsBySymbols: VendorsBySymbolsReducer
});

export default rootReducer;
