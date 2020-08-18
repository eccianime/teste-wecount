import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ShareNews from './ShareNews';
import ProductCard from './ProductCard';

const Content = () =>{
	const products = [
		{
			"title": "Product Number 0",
			"description": "Product long description number 0 just to make more than one like of text.",
			"initial-price": "De: R$ 212.00",
			"final-price": "Por: R$ 176.00",
			"split-price": "ou R$ 10x de R$ 17.60",
		},
		{
			"title": "Product Number 0",
			"description": "Product long description number 0 just to make more than one like of text.",
			"initial-price": "De: R$ 212.00",
			"final-price": "Por: R$ 176.00",
			"split-price": "ou R$ 10x de R$ 17.60",
		},
		{
			"title": "Product Number 0",
			"description": "Product long description number 0 just to make more than one like of text.",
			"initial-price": "De: R$ 212.00",
			"final-price": "Por: R$ 176.00",
			"split-price": "ou R$ 10x de R$ 17.60",
		},
		{
			"title": "Product Number 0",
			"description": "Product long description number 0 just to make more than one like of text.",
			"initial-price": "De: R$ 212.00",
			"final-price": "Por: R$ 176.00",
			"split-price": "ou R$ 10x de R$ 17.60",
		},
		{
			"title": "Product Number 0",
			"description": "Product long description number 0 just to make more than one like of text.",
			"initial-price": "De: R$ 212.00",
			"final-price": "Por: R$ 176.00",
			"split-price": "ou R$ 10x de R$ 17.60",
		},
		{
			"title": "Product Number 0",
			"description": "Product long description number 0 just to make more than one like of text.",
			"initial-price": "De: R$ 212.00",
			"final-price": "Por: R$ 176.00",
			"split-price": "ou R$ 10x de R$ 17.60",
		}
	]

	const showProducts = ()=>(
		products.map( (product, index)=>(
			<ProductCard product={product} key={`product-card-${index}`} />
		))
	)
	return(
	<Container fluid className="content"><Row>
		<Col xs={12}><p className="text-center text-bold page-title">Sua seleção especial</p></Col>
		{ showProducts() }
		<Col xs={12} className="text-center more-products">
			<Button className="gray-link more-products" variant="link">Ainda mais produtos aqui!</Button>
		</Col>
		<ShareNews />
	</Row></Container>
)}

export default Content;