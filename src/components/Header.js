import React, {Fragment} from 'react';
import { Link, Route, Switch } from "react-router-dom";
import AddShow from './AddShow';

const Header = () => {
	return (
		<Fragment>
			<div className="ui secondary pointing menu">
				<Link to="/">
				<h1>
					Radio Archive
				</h1>
				</Link>
				<div className="right menu">
					<h3>
						<Link to="/login">Upload/Admin</Link>
					</h3>
				</div>
			</div>

		</Fragment>
	)

}

export default Header;