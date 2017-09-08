/* Npm import */


/* Local import */
import fakePupils from './data';
import { normalizeData } from './utils';


/* Code */
const pupils = normalizeData(fakePupils);
export const regex = /(https?:)?\/\/?[^'"<>]+?\.(jpg|jpeg|gif|png)/g;


/* InitialState */
const initialState = {
  loading: true,
  form: {
    display: false,
    review: false,
    type: '',
    id: '',
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
const UPDATE_PUPIL = 'pupil-update';
const DELETE_PUPIL = 'pupil-delete';
const UPDATE_PUPILS = 'pupils-update';
const UPDATE_FIELD = 'form-field-update';
const HIDE_FORM = 'form-hide';


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
          id: Math.max(...state.pupils.allIds) + 1,
        },
      };

    case UPDATE_PUPIL:
      return {
        ...state,
        form: {
          ...state.form,
          display: true,
          type: 'update',
          id: action.id,
          inputs: {
            name: state.pupils.byId[action.id].name,
            picture: state.pupils.byId[action.id].picture,
            email: state.pupils.byId[action.id].email,
          },
        },
      };

    case DELETE_PUPIL:
    {
      const { allIds, byId } = state.pupils;
      const newIds = allIds.filter(id => id !== action.id);
      const newList = {};
      newIds.forEach((id) => {
        newList[id] = byId[id];
      });

      return {
        ...state,
        pupils: {
          allIds: newIds,
          byId: newList,
        },
      };
    }

    case UPDATE_PUPILS:
    {
      const { name, email } = state.form.inputs;
      let { picture } = state.form.inputs;

      if (!picture.trim()) picture = 'http://newsroom.almonds.com/sites/default/files/default_images/avatar-placeholder-female.jpg';

      if (!name.trim()
      || !email.trim()
      || !picture.match(regex)) {
        return {
          ...state,
          form: {
            ...state.form,
            review: true,
          },
        };
      }

      const { id } = state.form;

      if (state.form.type === 'new') {
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

      if (state.form.type === 'update') {
        const currentPupil = {
          ...state.pupils.byId[id],
          name,
          email,
          picture,
        };

        return {
          ...state,
          pupils: {
            ...state.pupils,
            byId: {
              ...state.pupils.byId,
              [id]: currentPupil,
            },
          },
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

    case HIDE_FORM:
      return {
        ...state,
        form: initialState.form,
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

export const updatePupil = id => ({
  type: UPDATE_PUPIL,
  id,
});

export const deletePupil = id => ({
  type: DELETE_PUPIL,
  id,
});

export const updatePupils = () => ({
  type: UPDATE_PUPILS,
});

export const changeField = ({ field, value }) => ({
  type: UPDATE_FIELD,
  field,
  value,
});

export const hideForm = () => ({
  type: HIDE_FORM,
});


/* Export */
export default reducer;
