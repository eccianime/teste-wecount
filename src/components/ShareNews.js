import React from 'react';
import { connect } from 'react-redux';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import InputControl from './InputControl';

import { CHANGE_FORM_VALUE, SHOW_TOAST } from '../actions/types';

const ShareNews = ({name, email, handleChange, showToast}) =>{
	const validateForm = ()=>{
		let message, 
			errors = [],
			mailrule = (/(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/);
		if( !name.length ){
			errors = errors.concat(`Nome não pode ficar vazío.`);
		}
		if( !email.length ){
			errors = errors.concat(`E-mail não pode ficar vazío.`);
		}
		if( !mailrule.test(email) ){
			errors = errors.concat(`E-mail não tem formato xxx@xxx.com.`);
		}
		if( !errors.length ){
			message = `Formulário validado com sucesso.`;
		}else{
			message = `Formulário tem os seguintes erros: `;
		}
		showToast( message, errors );
	}
	return(
		<Col xs={12} className="share-news">
			<p className="text-center text-bold">Compartilhe a novidade</p>
			<p className="text-center">Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
			<Container fluid>
				<Row as={Form}>
					<InputControl 
						as={Col} 
						sm={12} 
						md={6} 
						text="Nombre do seu amigo:" 
						name="name"
						value={name}
						handleChange={handleChange}
						inputType='text'
						placeholder="Nome do Amigo"
					/>
					<InputControl 
						as={Col} 
						sm={12} 
						md={6} 
						text="E-mail:" 
						name="email"
						value={email}
						handleChange={handleChange}
						inputType='email'
						placeholder="E-mail"
					/>
					<Col xs={12} className="text-center">
						<Button onClick={validateForm} className="gray-link send-button" variant="link">Enviar agora</Button>
					</Col>
				</Row>
			</Container>
		</Col>
	)
}

const stateToProps = state => state;

const dispatchToProps = dispatch => ({
	handleChange: ( name, value ) => {
		dispatch({ type: CHANGE_FORM_VALUE, name, value });
	},
	showToast: ( message, errors )=>{
		dispatch({ type: SHOW_TOAST, message, errors })
	}
});

export default connect( stateToProps, dispatchToProps )( ShareNews );