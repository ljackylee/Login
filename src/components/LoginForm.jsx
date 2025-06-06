import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clickSubmit = (e) => {
    e.preventDefault();
    alert(`Your information: \nEmail :${email} \nPassword: ${password}`);
  };
  return (
    <form className="login_form" onSubmit={clickSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button" type="submit">Sign in</button>
      <button className="google_button">
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google"
          width="20"
        />
        Sign in with Google
      </button>
      <p className="login_form_p">
        Need an account?
        <a className="login_form_link" href="https://www.google.com">
          <strong> Create an account</strong>
        </a>
      </p>
    </form>
  );
}
