import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ShareNews = () =>(
	<Col xs={12} className="share-news">
		<p className="text-center text-bold">Compartilhe a novidade</p>
		<p className="text-center">Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
		<Container fluid>
			<Row as={Form}>
				<Form.Group as={Col} sm={12} md={6}>
					<Form.Label>Nombre do seu amigo:</Form.Label>
					<Form.Control placeholder="Nome do Amigo"></Form.Control>
				</Form.Group>
				<Form.Group as={Col} sm={12} md={6}>
					<Form.Label>E-mail:</Form.Label>
					<Form.Control type='email' placeholder="E-mail"></Form.Control>
				</Form.Group>
				<Col xs={12} className="text-center">
					<Button className="gray-link send-button" variant="link">Enviar agora</Button>
				</Col>
			</Row>
		</Container>
	</Col>
)

export default ShareNews;