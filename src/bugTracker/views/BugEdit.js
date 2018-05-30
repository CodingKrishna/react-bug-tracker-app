import React, { Component } from 'react';

class BugEdit extends Component{
	txtNewBugNameRef = React.createRef();
	render(){
		let { addNew } = this.props; 
		return(
			<section className="edit">
				<label htmlFor="">Bug Name :</label>
				<input type="text" ref={this.txtNewBugNameRef} />
				<input type="button" value="Add New" onClick={() => addNew(this.txtNewBugNameRef.current.value)}/>
			</section>
		)
	}
}
export default BugEdit;