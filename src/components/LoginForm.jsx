import { useForm } from "react-hook-form";
import { useState } from "react";
import RegisterForm from "./Register";
import Title from "./Title";

export default function LoginForm() {
  const [showRegister, setShowRegister] = useState(false);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setShowRegister(true);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));

  if (showRegister) {
    return <RegisterForm />;
  }

  return (
    <>
      <Title isRegister={false} />
      <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { require: "Email is required" })}
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password", { require: "Password is required" })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <button className="button" type="submit">
          Sign in
        </button>
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
          <button className="login_form_link" onClick={handleRegisterClick}>
            <strong> Create an account</strong>
          </button>
        </p>
      </form>
    </>
  );
}
