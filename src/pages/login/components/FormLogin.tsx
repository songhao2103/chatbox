import { useFormik } from "formik";
import * as Yup from "yup";
import InputCommon from "../../../components/common/InputCommon";
import ButtonCommon from "../../../components/common/ButtonCommon";
import { useLogin } from "../../../hooks/tanstack-query/auth";
import { IFromLogin } from "../../../interface/form";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();
  const loginMutation = useLogin();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Email is not in correct format."
        ),
      password: Yup.string().required("Password is required"),
    }),

    onSubmit: async (values, { setErrors }) => {
      try {
        const credentials: IFromLogin = { ...values };
        const response = await loginMutation.mutateAsync({
          endpoint: "/auth/login",
          credentials,
        });

        console.log(response);

        if (response.success) {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
        setErrors((error as any).errors);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <InputCommon
          type="text"
          placeholder="Email"
          name="email"
          id="email"
          formik={formik}
          label="Email"
        />
      </div>

      <div>
        <InputCommon
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          formik={formik}
          label="Password"
        />
      </div>
      <div className="mt-6">
        <ButtonCommon bgcColor="#24786D" message="Login" isSubmit={true} />
      </div>
    </form>
  );
};

export default FormLogin;
