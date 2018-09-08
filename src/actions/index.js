import axios from 'axios';
import { FETCH_SCOPES } from './types';

export function fetchScopes() {
  const response = axios.get('http://localhost:8080/scope/list');
  return {
    type: FETCH_SCOPES,
    payload: response
  }
}
