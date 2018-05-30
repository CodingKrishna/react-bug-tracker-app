export function decrement(delta){
	return { type : 'DECREMENT' , payload : delta };
}