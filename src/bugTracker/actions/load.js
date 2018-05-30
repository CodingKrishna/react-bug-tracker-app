import axios from 'axios';

export function load(){
	return function(dispatch){
		console.log(arguments);
		axios.get('http://localhost:3030/bugs')
			.then(response => response.data)
			.then(bugs => dispatch({ type : 'LOAD', payload : bugs}));
	};
}