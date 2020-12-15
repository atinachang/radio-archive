import React, {Fragment} from 'react';
import { Link } from "react-router-dom";

const Header = ({home}) => {


	return (
		<Fragment>
			<div className="ui secondary pointing menu">
				<Link to={home}>
				<h1>
					Radio Archive
				</h1>
				</Link>
				<div className="right menu">
					<h3>
						<Link to={`${home}/login`}>Admin</Link>
					</h3>
				</div>
			</div>

		</Fragment>
	)

}

export default Header;