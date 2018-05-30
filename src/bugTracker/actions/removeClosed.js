import axios from 'axios';

export function removeClosed(){
	return function(dispatch, getState){
		let bugsToRemove = getState().bugState.filter(bug => bug.isClosed);
		let promises = bugsToRemove.map(bug => 
			axios.delete(`http://localhost:3030/bugs/${bug.id}`)
				.then(response => response.data)
		)
		Promise
			.all(promises)
			.then(() => dispatch({ type : 'REMOVE', payload : bugsToRemove}));
	}
}