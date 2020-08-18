import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Header(){
	const buttons = [
		"Conheça a Linx",
		"Ajude o Algoritmo",
		"Seus Produtos",
		"Compartilhe",
	]
	const showButtons = ()=>(
		buttons.map( ( button, index ) =>(
			<Button key={`nav-button-${index}`} size="sm" variant="link" className="button-white">{button}</Button>
		))
	)
	return(
		<header className='bg-gray text-center text-white'>
			<h5>uma seleção de produtos</h5>	
			<h1>Especial para você</h1> 
			<small>Todos os produtos desta lista selecionados a partir da sua navegação. Aproveite!</small>
			<nav>{ showButtons() }</nav>
		</header>
	)
}