import React from 'react';
import Form from 'react-bootstrap/Form';

const InputControl =({ text, name, value, handleChange, inputType, placeholder, ...props })=>(
	<Form.Group {...props}>
		<Form.Label>{text}</Form.Label>
		<Form.Control 
			type={inputType}
			value={value} 
			onChange={ e=> handleChange( name, e.target.value ) } 
			placeholder={placeholder}
		/>
	</Form.Group>
)

export default InputControl;