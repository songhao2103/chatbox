import { useMemo, useState, memo } from "react";
import { FormikProps } from "formik";
import * as icons from "lucide-react";
import Icon from "./Icon.tsx";

//interface props
interface InputCommonProps {
  type: string;
  iconName?: keyof typeof icons;
  iconColor?: string;
  iconSize?: number;
  label?: string;
  placeholder: string;
  formik: FormikProps<T>;
  name: string;
  id: string;
}

//Conponent
const InputCommon: React.FC<InputCommonProps> = ({
  label,
  iconSize,
  iconColor,
  iconName,
  placeholder,
  formik,
  name,
  id,
  type,
}) => {
  //state
  const [showPassword, setShowPassword] = useState(false);

  const inputType = useMemo(() => {
    return type === "password" ? (showPassword ? "text" : "password") : type;
  }, [showPassword]);

  return (
    <>
      {label && (
        <label className="block mb-2 font-bold text-bv-14 text-Green">
          {label}
        </label>
      )}
      <div className="relative">
        {iconName && (
          <div className="absolute left-[16px] top-[50%] translate-y-[-50%]">
            <Icon
              name={iconName}
              color={iconColor || "#000"}
              size={iconSize || 20}
            />
          </div>
        )}
        <input
          type={inputType}
          placeholder={placeholder}
          name={name}
          id={id}
          value={formik?.values[name]}
          onChange={formik?.handleChange} // <-- handleChange
          onBlur={formik?.handleBlur} // <-- handleBlur
          className="w-full py-3 border-[1px] border-strokeM rounded-[12px] outline-none pr-4"
          style={iconName ? { paddingLeft: "44px" } : { paddingLeft: "16px" }}
        />

        {type === "password" && (
          <div
            className="absolute right-4 top-[50%] translate-y-[-50%]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <Icon name="Eye" color="#1C1C1E" size={20} />
            ) : (
              <Icon name="EyeOff" color="#1C1C1E" size={20} />
            )}
          </div>
        )}
      </div>
      {formik?.errors[name] && formik?.touched[name] && (
        <p className="mt-1 text-sm text-red-500">
          {formik?.errors[name] as string}
        </p>
      )}
    </>
  );
};

export default memo(InputCommon);
