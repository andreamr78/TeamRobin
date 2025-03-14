import React from "react";
import logo from "../assets/images/logo.svg";

const Home: React.FC = () => {
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
                <form>
                  <div className="mb-3">
                    <label className="form-label">Username:</label>
                    <input type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Log In
                  </button>
                </form>
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

export default Home;
