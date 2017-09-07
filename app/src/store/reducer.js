/* Npm import */


/* Local import */
import fakePupils from './data';
import { normalizeData } from './utils';


/* Code */
const pupils = normalizeData(fakePupils);


/* InitialState */
const initialState = {
  loading: true,
};


/* Types */
const GET_DATA = 'data-get';


/* Reducer */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        pupils,
        loading: false,
      };

    default:
      return state;
  }
};


/* Action creators */
export const getData = () => ({
  type: GET_DATA,
});


/* Export */
export default reducer;
