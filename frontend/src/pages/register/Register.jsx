import { Link } from "react-router-dom";
import "./register.scss";

function Register() {
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
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Fullname" />

            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
