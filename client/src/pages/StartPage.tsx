import React, { useState, type FormEvent, type ChangeEvent } from 'react';
import logo from '../assets/images/logo.svg'
//import Auth from '../utils/auth';
//import { login } from '../api/authAPI';
//import type { UserLogin } from '../interfaces/UserLogin';

const HomePage: React.FC = () => {
  // State to store login data
  const [loginData, setLoginData] = useState<any>({
    username: '',
    password: '',
  });

  // State to store error messages
  const [error, setError] = useState<string | null>(null);

  // Handle changes in input fields
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to login', err);
      setError('Failed to login: ' + (err as Error).message);
    }
  };


  //agregar buscador
  //mandar a llamar a la travelApi
  //formatear la data
  //mostrar en las tarjetas
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
                  <img src={logo} alt="Dream Holiday Logo" className="img-fluid" style={{ maxWidth: "100px" }} />
                </div>
                <h2 className="text-center fw-bold">Log In</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Username:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      value={loginData.username || ''}
                      onChange={handleChange}
                      placeholder="Enter username"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={loginData.password || ''}
                      onChange={handleChange}
                      placeholder="Enter password"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Log In
                  </button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <p className="text-center mt-3">
                  Don’t have an account? <a href="/signup" className="text-primary">Sign Up!</a>
                </p>
              </div>

              {/* Right: Description */}
              <div className="col-md-6 d-flex flex-column justify-content-center p-4">
                <h2 className="fw-bold">Your one-stop vacation planner!</h2>
                <p className="mt-3">
                  We’re here to help you plan, solve, and enjoy your vacations without the need for paying someone else to do it! 
                  You are your own planner, at your time, on your schedule!
                </p>
                <p className="mt-2">
                  Here in <strong>Dream Holiday</strong>, we know how expensive vacations can be. Between flights, hotel rooms, and so many places to go, 
                  we’ve gathered all our greatest minds and came up with a solution.
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

export default HomePage;
