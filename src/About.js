import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Image from 'material-ui-image'
import Background from './Corgeek.jpg';
import NavBar from './NavBar';

export class About extends React.Component{
	render() {
		return(
			<div>
				<NavBar/>
				<h1> This is the About Page </h1>
				<h1> This is the About Page </h1>
				<h1> This is the About Page </h1>
			</div>
			)
	}
}