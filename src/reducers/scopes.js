import { FETCH_SCOPES } from '../actions/types';

export default function (state = [], action) {
  switch(action.type) {
    case FETCH_SCOPES:
      const scopes = action.payload.meta.map(scope => scope.name);
      return [...state, ...scopes];
    default: return state;
  }
}
