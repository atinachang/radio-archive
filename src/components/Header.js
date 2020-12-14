import React, {Fragment} from 'react';
import { Link} from "react-router-dom";

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
						<Link to="/login">Admin</Link>
					</h3>
				</div>
			</div>

		</Fragment>
	)

}

export default Header;