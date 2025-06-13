export default function Title({ isRegister }) {
  return (
    <div className="welcome">
      <div className="icon"></div>
      <div className="blur"></div>
      <h2 className="welcome_h2">
        {isRegister ? "Welcome!" : "Welcome back"}
      </h2>
      <h3 className="welcome_h3">
        {isRegister
          ? "Please enter your details to register."
          : "Welcome back! Please enter your details."}
      </h3>
    </div>
  );
}