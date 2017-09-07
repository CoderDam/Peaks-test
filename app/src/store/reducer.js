/* Npm import */


/* Local import */
import fakePupils from './data';
import { normalizeData } from './utils';


/* Code */
const pupils = normalizeData(fakePupils);


/* InitialState */
const initialState = {
  loading: true,
  form: {
    display: false,
    type: '',
    inputs: {
      name: '',
      picture: '',
      email: '',
    },
  },
};


/* Types */
const GET_DATA = 'data-get';
const ADD_PUPIL = 'pupil-add';
const UPDATE_PUPILS = 'pupils-update';
const UPDATE_FIELD = 'form-field-update';


/* Reducer */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        pupils,
        loading: false,
      };

    case ADD_PUPIL:
      return {
        ...state,
        form: {
          ...state.form,
          display: true,
          type: 'new',
        },
      };

    case UPDATE_PUPILS:
    {
      if (state.form.type === 'new') {
        const { name, email, picture } = state.form.inputs;
        const lastId = Math.max(...state.pupils.allIds);
        const id = lastId + 1;
        const newPupil = {
          id,
          name,
          email,
          picture,
        };
        const newPupils = {
          allIds: [...state.pupils.allIds, id],
          byId: {
            ...state.pupils.byId,
            [id]: newPupil,
          },
        };

        return {
          ...state,
          pupils: newPupils,
          form: initialState.form,
        };
      }

      return state;
    }

    case UPDATE_FIELD:
      return {
        ...state,
        form: {
          ...state.form,
          inputs: {
            ...state.form.inputs,
            [action.field]: action.value,
          },
        },
      };

    default:
      return state;
  }
};


/* Action creators */
export const getData = () => ({
  type: GET_DATA,
});

export const addPupil = () => ({
  type: ADD_PUPIL,
});

export const updatePupils = () => ({
  type: UPDATE_PUPILS,
});

export const changeField = ({ field, value }) => ({
  type: UPDATE_FIELD,
  field,
  value,
});


/* Export */
export default reducer;
