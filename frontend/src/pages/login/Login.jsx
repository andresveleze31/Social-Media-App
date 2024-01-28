import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

function Login() {

    const { login } = useContext(AuthContext);

    const handleLogin = () => {
      login();
    }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome to CircleHub</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            fugiat! Temporibus recusandae ducimus autem vel dolorem earum
            tempore, officiis nihil id, nobis voluptatem quas maiores
            perferendis sit doloribus voluptate deserunt.
          </p>
          <span>Dont you have an account?</span>
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h2>Login</h2>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />

            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
