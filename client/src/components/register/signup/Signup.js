import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import styles from "../signup/styles.module.css";
function Signup() {
  const [user, setUser] = useState({
		username: "",
		
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();
 

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', user);
      console.log('Successfully registered!', response.data);

      // Save userObj and auth token to localStorage
      localStorage.setItem('user', JSON.stringify(response.data.userObj));
      localStorage.setItem('token', response.data.auth);

      alert('Account created successfully!');
      navigate('/');
    } 
    
    catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				alert('Account Already created!');
			}
		}
  };
  return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="User Name"
							name="username"
							onChange={handleOnChange}
							value={user.username}
							required
							className={styles.input}
						/>
						
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleOnChange}
							value={user.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleOnChange}
							value={user.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

//   return (
//     <form>
//       <h3>Sign Up</h3>
//       <div>
//         <label>UserName:</label>
//         <input
//           type="text"
//           name="username"
//           value={user.username}
//           placeholder="Username"
//           onChange={handleOnChange}
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={user.password}
//           placeholder="Enter password"
//           onChange={handleOnChange}
//         />
//       </div>
//       <div>
//         <button type="submit" onClick={handleSubmit}>
//           Sign Up
//         </button>
//       </div>
//       <p>
//         Already registered? <Link to="/login">Sign In</Link>
//       </p>
//     </form>
//   );
// }

export default Signup;