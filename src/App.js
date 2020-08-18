import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Header from './components/Header';
import ShareNews from './components/ShareNews';
import Footer from './components/Footer';

function App() {
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
		}
	]

	const showProducts = ()=>(
		products.map( (product, index)=>(
			<Col key={`product-card-${index}`} xs={12} sm={6} md={3}>
				<div className="product-card">
					<div className="title">{product.title}</div>
					<div className="description">{product.description}</div>
					<div className="initial-price">{product["initial-price"]}</div>
					<div className="final-price">{product["final-price"]}</div>
					<div className="split-price">{product["split-price"]}</div>
					<Button className="gray-link" block variant="link">Comprar</Button>
				</div>
			</Col>
		))
	)
	return (
		<>
			<Header />			
			<Container fluid className="content"><Row>
				<Col xs={12}><p className="text-center text-bold page-title">Sua seleção especial</p></Col>
				{ showProducts() }
				<Col xs={12} className="text-center">
					<Button className="gray-link" variant="link">Ainda mais produtos aqui!</Button>
				</Col>
				<ShareNews />
			</Row></Container>
			<Footer />
		</>
	);
}

export default App;
