import React from 'react'

export const NavbarMenu = (props) => {
	return (
		<>
			<p><a href='#home' onClick={props.onClick}>Home</a></p>
			<p><a href='#wgpt3' onClick={props.onClick}>What is GPT</a></p>
			<p><a href='#possibility' onClick={props.onClick}>Open AI</a></p>
			<p><a href='#future' onClick={props.onClick}>Case study</a></p>
			<p><a href='#blog' onClick={props.onClick}>Library</a></p>
		</>
	);
};
export default NavbarMenu;
