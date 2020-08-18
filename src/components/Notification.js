import React from 'react';
import { Toast } from 'react-bootstrap';
import { connect } from 'react-redux';
import { HIDE_TOAST } from '../actions/types';

const Notification =({ isToastVisible, toastType, toastText, hideToast, toastErrors })=>(
	<Toast 
		className={`toast-message toast-${toastType}`} 
		show={ isToastVisible } 
		delay={5000} 
		autohide 
		onClose={ hideToast }>
		<Toast.Body>
			<h4><b>{ toastType.toUpperCase() }</b></h4>
			<h5>{ toastText }</h5>
			{ 
				toastErrors && toastErrors.map( erro =>(
					<li>{erro}</li>
				)) 
			}
		</Toast.Body>
	</Toast>
)

const stateToProps = state => state;

const dispatchToProps = dispatch => ({
	hideToast: ()=>{
		dispatch({ type: HIDE_TOAST })
	},
});

export default connect( stateToProps, dispatchToProps )(Notification);