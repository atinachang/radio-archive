import { Fragment, useState } from 'react';
import {Link} from 'react-router-dom';

import Field from './Field';

// how do i get the user to kick to the /upload page after logging in?
// getting 500 error upon login

const Login = (props) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
  const [ error, setError ] = useState('');


	// this is currently making a new user, but i want it to check the user and proceed?
	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
   const response = await fetch("/api/users/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }

      props.getUser();
    } catch (err) {
			console.log(err.message);
			setError(err.message)
    }
	};
	
	return (
		<Fragment>
			<form onSubmit={handleSubmit} className="ui form error">
						<Field
					label="Email"
					required
					value={email}
					name="Email Address"
					onChange={e => setEmail(e.target.value)}
					/>
					<Field
					name="password"
					label="Password"
					id={password}
					type="password"
					required
					value={password}
					onChange={e => setPassword(e.target.value)}
					/>
					{error && <div className="ui error message">{error}</div>}

					
					<button type="submit" className="ui submit button">			
						Sign In
						</button>
		</form>


		</Fragment>
	)
}


export default Login