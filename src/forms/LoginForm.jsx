import { useForm } from "react-hook-form";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
    const user = { email: "x@example.com", password: "12345678" };

    const found = formData.email === user.email && formData.password === user.password;
    
    if(!found) {
      setError("root.random", {message: "Invalid Email or Password", type: "error"});
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Login Details">
          <Field label="Email" error={errors.email}>
            {/* the name is important to the react hook form to uniquely identify */}
            <input
              {...register("email", {
                required: "Email is required.",
              })}
              type="email"
              className={`p-2 border box-border w-[300px] rounded-md ${
                !!errors.email ? "border-red-500" : "border-gray-200"
              }`}
              name="email"
              id="email"
              placeholder="Enter Email"
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long.",
                },
                required: "Password is required.",
              })}
              type="password"
              className={`p-2 border box-border w-[300px] rounded-md ${
                !!errors.password ? "border-red-500" : "border-gray-200"
              }`}
              name="password"
              id="password"
              placeholder="Enter Password"
            />
          </Field>
        </FieldSet>
        <div>{errors?.root?.random?.message}</div>
        <button className="text-md text-white cursor-pointer p-1 border rounded-lg bg-purple-500 m-auto">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
