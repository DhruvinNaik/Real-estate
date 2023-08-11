import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import styles from "../login/styles.module.css";
function SignIn() {
    const navigate=useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  // const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', credentials);

      if (response && response.data) {
        // Successful sign-in
        const { userObj, auth } = response.data;
        localStorage.setItem('user', JSON.stringify(userObj));
        localStorage.setItem('token', auth);
		// setUsernameInHero(userObj.username);
        alert(`Welcome, ${userObj.username}!`);
        navigate('/');
      } else {
        console.error('Invalid response from server');
      }
    } 
    
    
    catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
  };




  return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSignIn}>
						<h1>Login to Your Account</h1>
						<input
							type="username"
							placeholder="Username"
							name="username"
							onChange={handleOnChange}
							value={credentials.username}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleOnChange}
							value={credentials.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
//   return (
//     <form>
//       <h3>Sign In</h3>
//       <div>
//         <label>Username</label>
//         <input
//           type="text"
//           name="username"
//           value={credentials.username}
//           onChange={handleOnChange}
//         />
//       </div>
//       <div>
//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           value={credentials.password}
//           onChange={handleOnChange}
//         />
//       </div>
//       <div>
//         <button type="submit" onClick={handleSignIn}>
//           Sign In
//         </button>
//       </div>
//     </form>
//   );
// }

export default SignIn;