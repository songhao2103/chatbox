import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import InputCommon from "../../../components/common/InputCommon";
import ButtonCommon from "../../../components/common/ButtonCommon";
import { useRegister } from "../../../hooks/tanstack-query/auth";
import { IFormRegister } from "../../../interface/form";

const FormRegister = () => {
  const navigate = useNavigate();
  const registerMutation = useRegister(); // Gọi hook
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Name is required"),
      email: Yup.string()
        .required("Email is required")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Email is not in correct format."
        ),
      password: Yup.string().required("Password is required"),
      confirmPassword: Yup.string()
        .required("Password is required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: async (values, { setErrors }) => {
      try {
        const credentials: IFormRegister = { ...values };
        const response = await registerMutation.mutateAsync({
          endpoint: "/auth/register",
          credentials,
        });

        console.log(response);

        if (response.success) {
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
        setErrors((error as any).errors);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-y-4">
        <div>
          <InputCommon
            type="text"
            placeholder="Name"
            name="userName"
            id="userName"
            formik={formik}
            label="Name"
          />
        </div>
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
        <div>
          <InputCommon
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            id="confirmPassword"
            formik={formik}
            label="Confirm password"
          />
        </div>
      </div>

      <div className="mt-6">
        <ButtonCommon
          bgcColor="#24786D"
          message="Create account"
          isSubmit={true}
        />
      </div>
    </form>
  );
};

export default FormRegister;
