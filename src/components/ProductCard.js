import React from 'react';
import { Col, Button, Image } from 'react-bootstrap';

const ProductCard = ({ product }) =>(
	<Col xs={12} sm={6} md={4} lg={3}>
		<div className="product-card">
			<Image src={product.image} className="w-100" alt={product.name} />
			<div className="title text-bold">{ product.name }</div>
			<div className="description">{ product.description }</div>
			<div className="oldPrice">{`De R$ ${product.oldPrice.toFixed(2)}`}</div>
			<div className="price text-bold">{`Por R$ ${product.price.toFixed(2)}`}</div>
			<div className="installments">{`Ou ${product.installments.count}x de R$ ${product.installments.value.toFixed(2)}`}</div>
			<Button className="gray-link" block variant="link">Comprar</Button>
		</div>
	</Col>
)

export default ProductCard;