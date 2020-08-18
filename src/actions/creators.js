import * as aTypes from './types';
import axios from 'axios';

export const getProducts = ( URL )=>{
	async function getProducts( URL ) {
		return await axios.get( `http://${URL}` );
	}
	return ( dispatch, getState ) =>{
		dispatch({ type: aTypes.SET_LOADING, loading: true });
		getProducts( URL )
			.then( response =>{
				const { products, nextPage } = response.data;
				const newProducts = getState().products.concat(products);
				dispatch({ type: "CHANGE_DATA", products: newProducts, nextURL: nextPage })
		})
	}
}