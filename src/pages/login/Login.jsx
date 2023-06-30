import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrappre">
        <div className="loginLeft">
          <h3 className="loginLogo"> FaceBook </h3>
          <span className="loginDesc">
            Connect with friends and the world around you on FaceBook.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" >
            <input
              placeholder="Email"
              type="email"
             
              className="loginInput"
            />
            <input
              placeholder="Password"
              type="password"
             
              minLength="6"
              required
              className="loginInput"
            />
            <button className="loginButton" type="submit" >
              Log In
            </button>
            <span className="loginForgot"> Forgot Pasword</span>
            <button className="loginRegisterButton">
               Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
