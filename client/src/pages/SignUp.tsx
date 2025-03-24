import React, { useState } from "react";
//import "./SignUp.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // mensaje de success o error

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // para no cargar de nuevo la pag (se necesita?)

    try {
      // TODO: Cambiar por el endpoint real
      const response = await fetch("/sign-up", {
        //fetch para enviar al endpoint signup
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          password,
        }),
      });

      const data = await response.json(); // esto lo convierte a json

      if (response.ok) {
        setMessage("Sign up successful"); // mensaje si todo sale bien

        //TO DO: aquí va el código para redireccionar cuando se haga sign in
      } else {
        setMessage(`Error: ${data.message || "Something's gone wrong"}`); //si algo sale mal
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setMessage("Hubo un problema con el servidor.");
    }
  };

  return (
    <div className="sign-up-page">
      hellos
      {/* <div className="sign-up-form">
        <h1>
          <b>Sign Up</b>
        </h1>
        <form id="form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {message && <p>{message}</p>}
      </div> */}
    </div>
  );
}

export default SignUp;
