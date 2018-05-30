export function bugsReducer(currentState = [], action){
	if (action.type === 'LOAD'){
		return action.payload;
	}
	if (action.type === 'ADD_NEW'){
		let newBug = action.payload;
		return [...currentState, newBug];
	}
	if (action.type === 'TOGGLE'){
		let bugToToggle = action.payload.oldBug,
			toggledBug = action.payload.newBug;
		return currentState.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
	}
	if (action.type === 'REMOVE'){
		let bugsToRemove = action.payload;
		return currentState.filter(bug => !bugsToRemove.find(b => b.id === bug.id));
	}
	if (action.type === 'UPDATE'){
		return action.payload;
	}
	return currentState;
}