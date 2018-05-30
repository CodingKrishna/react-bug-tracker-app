import axios from 'axios';
export function addNew(bugName){
	return function(dispatch){
		let newBugData = {
			id : 0, 
			name : bugName, 
			isClosed : false, 
			createdAt : new Date()
		};
		axios.post('http://localhost:3030/bugs', newBugData)
			.then(response => response.data)
			.then(newBug => dispatch({ type : 'ADD_NEW', payload : newBug}));
	}
}