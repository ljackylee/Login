import { useForm } from "react-hook-form";
import Title from "./Title";

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Title isRegister={true} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstName", {
            required: "First Name is required",
            minLength: 4,
            maxLength: 20,
          })}
          type="text"
          placeholder="First Name"
        />
        <input
          {...register("lastName", {
            required: "Last Name is required",
            minLength: 2,
            maxLength: 20,
          })}
          type="text"
          placeholder="Last Name"
        />
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          placeholder="Email"
        />
        <input
          {...register("phoneNumber", {
            required: "Phone Number is required",
            min: 10,
          })}
          type="number"
          placeholder="Phone Number"
        />
        <input
          {...register("password", {
            required: "Password is required",
            min: 8,
            max: 20,
          })}
          type="password"
          placeholder="Password"
        />
        <input
          {...register("ConfirmPassword", {
            required: "Please reenter your password",
            min: 8,
            max: 20,
          })}
          type="password"
          placeholder="Confirm Password"
        />
        <div className="radio_group">
          <p className="radio_group_p">Please select your gender</p>
          <div className="radio_options">
            <label className="radio_label">
              <input {...register("gender")} type="radio" value="male" />
              Male
            </label>
            <label className="radio_label">
              <input {...register("gender")} type="radio" value="female" />
              Female
            </label>
            <label className="radio_label">
              <input {...register("gender")} type="radio" value="other" />
              Other
            </label>
          </div>
        </div>
        <input type="submit" />
      </form>
    </>
  );
}
