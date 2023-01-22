import Myform from "./components/Form";
import { Input } from "./components/Input.styled";
import Global from "./components/Global";
import StyledButton from "./components/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup.string().required().min(2),
  age: yup.number().positive().integer().max(150).required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
    alert("success");
  };
  return (
    <div>
      <Global />
      <Myform onSubmit={handleSubmit(submitForm)}>
        <Input
          type="text"
          name="firstName"
          placeholder="Name"
          {...register("firstName")}
        />
        <p style={{ color: "red", width: "300px" }}>
          {errors.firstName?.message}
        </p>
        <Input type="text" name="age" placeholder="Age" {...register("age")} />
        <p style={{ color: "red", width: "300px" }}>
          {errors.age && "Age should be a valid"}
        </p>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          {...register("email")}
        />
        <p style={{ color: "red", width: "300px" }}>{errors.email?.message}</p>
        <Input
          type="text"
          name="password"
          placeholder="password"
          {...register("password")}
        />
        <p style={{ color: "red", width: "300px" }}>
          {errors.password?.message}
        </p>

        <Input
          type="text"
          name="confirmPassword"
          placeholder="confirm password"
          {...register("confirmPassword")}
        />
        <p style={{ color: "red", width: "300px" }}>
          {errors.confirmPassword && "Passwords should match"}
        </p>

        <StyledButton>Register</StyledButton>
      </Myform>
    </div>
  );
}

export default App;
