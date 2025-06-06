import LoginForm from './LoginForm';

export default function LeftLogin() {
  return (
    <section className="left_login">
      <div className="welcome">
        <div className="icon"></div>
        <div className="blur"></div>
        <h2 className="welcome_h2">Welcome back</h2>
        <h3 className="welcome_h3">Welcome back! Please enter your details.</h3>
      </div>
      <LoginForm />
    </section>
  );
}