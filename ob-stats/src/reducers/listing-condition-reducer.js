/**
 * Reducers are pure functions that don't can NOT modify state.
 * Redux Promise sees the payload property and if its a promise, stops the action
 * to dispatch a new one with the resolved request. It simply unwinds the promise
 * for us for cleaner, simpler code.
 */
import { GET_STATS_LISTINGS_CONDITION } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case GET_STATS_LISTINGS_CONDITION:
      return action.payload;

    default:
      return state;
  }
}
