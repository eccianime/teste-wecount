import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ProductCard = ({ product }) =>(
	<Col xs={12} sm={6} md={4} lg={3}>
		<div className="product-card">
			<div className="title text-bold">{ product.title }</div>
			<div className="description">{ product.description }</div>
			<div className="initial-price">{ product["initial-price"] }</div>
			<div className="final-price text-bold">{ product["final-price"] }</div>
			<div className="split-price">{ product["split-price"] }</div>
			<Button className="gray-link" block variant="link">Comprar</Button>
		</div>
	</Col>
)

export default ProductCard;