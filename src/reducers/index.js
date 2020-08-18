import * as aTypes from '../actions/types';
import { initialData } from '../store/initialData';

const appReducer = (state = initialData, action) => {
	switch (action.type) {
		case aTypes.CHANGE_DATA:
			return {	...state,
				products: action.products,
				nextURL: action.nextURL,
				loading: false,
			}
		case aTypes.SET_LOADING:
			return {	...state,
				loading: true,
			}
		case aTypes.CHANGE_FORM_VALUE:
			return {	...state,
				[action.name]: action.value
			}
		case aTypes.HIDE_TOAST:
			return {	...state,
				isToastVisible: false,
				toastType: "",
				toastText: "",
			}
		case aTypes.SHOW_TOAST:
			return {	...state,
				isToastVisible: true,
				toastType: !action.errors.length ? 'sucesso' : 'error',
				toastText: action.message,
				toastErrors: action.errors
			}
		default: return {...state }
	}
};

export default appReducer;