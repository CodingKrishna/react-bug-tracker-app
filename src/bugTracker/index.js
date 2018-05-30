import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import bugActionCreators from './actions';
import BugStats from './views/BugStats';
import BugSort from './views/BugSort';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';


class BugTracker extends Component{
	componentDidMount(){
		this.props.load();
	}
	render(){
		let { bugs, addNew, toggle, removeClosed, sort } = this.props;
		return(
			<div>
				<BugStats bugs={bugs} />
				<BugSort {...{bugs, sort}}/>
				<BugEdit addNew={addNew} />
				<BugList {...{bugs, toggle, removeClosed}} />
			</div>
		)
	}
}

/*let BugTracker = ({ bugs, addNew, toggle, removeClosed, sort }) => (
	<div>
		<BugStats bugs={bugs} />
		<BugSort {...{bugs, sort}}/>
		<BugEdit addNew={addNew} />
		<BugList {...{bugs, toggle, removeClosed}} />
	</div>
);*/

export default connect(
	(state) => ({bugs : state.bugState}), 
	(dispatch) => bindActionCreators(bugActionCreators, dispatch)
)(BugTracker);
