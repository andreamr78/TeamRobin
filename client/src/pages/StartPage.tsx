import React, { useState, type FormEvent, type ChangeEvent } from 'react';
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';

//arreglar el logo

function StartPage(){
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // const [validated] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);
  const [loginUser] = useMutation(LOGIN_USER);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      //const response = await loginUser(userFormData);
      const { data } = await loginUser({
        variables: {...userFormData }
      });

      Auth.login(data.login.token);

    } catch (err) {
      console.error(err);
      //setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
      //savedBooks: [],
    });
  };

  return (
    <div 
      className="d-flex justify-content-center align-items-center vh-100 bg-cover" 
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="row bg-light bg-opacity-75 p-4 rounded shadow-lg">
              
              {/* Left: Login Form */}
              <div className="col-md-6 d-flex flex-column justify-content-center p-4">
                <div className="text-center mb-3">
                  <img alt="Dream Holiday Logo" className="img-fluid" style={{ maxWidth: "100px" }} />
                </div>
                <h2 className="text-center fw-bold">Log In</h2>
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Username:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      value={userFormData.username || ''}
                      onChange={handleInputChange}
                      placeholder="Enter username"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={userFormData.password || ''}
                      onChange={handleInputChange}
                      placeholder="Enter password"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Log In
                  </button>
                </form>
                {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
                <p className="text-center mt-3">
                  Don't have an account? <a href="/signup" className="text-primary">Sign Up!</a>
                </p>
              </div>

              {/* Right: Description */}
              <div className="col-md-6 d-flex flex-column justify-content-center p-4">
                <h2 className="fw-bold">Your one-stop vacation planner!</h2>
                <p className="mt-3">
                  We're here to help you plan, solve, and enjoy your vacations without the need for paying someone else to do it! 
                  You are your own planner, at your time, on your schedule!
                </p>
                <p className="mt-2">
                  Here in <strong>Dream Holiday</strong>, we know how expensive vacations can be. Between flights, hotel rooms, and so many places to go, 
                  we've gathered all our greatest minds and came up with a solution.
                </p>
                <p className="mt-2 fw-bold">
                  The best places, the best tours, but most importantly, the best prices!
                </p>
                <p className="mt-2 fst-italic">Happy Holidays!</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
