import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Container, Row, Col, Button } from 'react-bootstrap';

import ShareNews from './ShareNews';
import ProductCard from './ProductCard';
import { getProducts } from '../actions/creators';

const Content = ({ products, getProducts, actualURL, nextURL, loading }) =>{
	const showProducts = ()=>(
		products.length > 0 && products.map( (product, index)=>(
			<ProductCard product={product} key={`product-card-${index}`} />
		))
	)
	useEffect( ()=>{
		getProducts( actualURL );
	}, [ getProducts, actualURL ] )
	return(
	<Container fluid className="content"><Row>
		<Col xs={12}><p className="text-center text-bold page-title">Sua seleção especial</p></Col>
		{ showProducts() }
		<Col xs={12} className="text-center more-products">
			<Button disabled={loading} className="gray-link more-products" variant="link" onClick={()=>getProducts(nextURL)}>{`${loading ? 'Carregando...' : 'Ainda mais produtos aqui!'}`}</Button>
		</Col>
		<ShareNews />
	</Row></Container>
)}

const stateToProps = state => state;

const dispatchToProps = dispatch => ({
	getProducts: ( URL ) => {
		dispatch( getProducts( URL ) );
	},
});

export default connect( stateToProps, dispatchToProps )(Content);