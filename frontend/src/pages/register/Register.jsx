import { Link } from "react-router-dom";
import "./register.scss";
import { useState } from "react";
import axios from "axios"

function Register() {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  })

  const [err, setErr] = useState(null);

  function handleChange(e){
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  async function handleClick(e){
    e.preventDefault();

    //TODO Change ENV
    try{
      await axios.post("http://localhost:8800/api/auth/register", inputs)
    }
    catch(err){
      setErr(err.response.data);
    }

  }


  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>CircleHub</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            fugiat! Temporibus recusandae ducimus autem vel dolorem earum
            tempore, officiis nihil id, nobis voluptatem quas maiores
            perferendis sit doloribus voluptate deserunt.
          </p>
          <span>Do you have an account?</span>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h2>Register</h2>
          <form action="">
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Fullname"
              name="name"
              onChange={handleChange}
            />

            {err && err}

            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
