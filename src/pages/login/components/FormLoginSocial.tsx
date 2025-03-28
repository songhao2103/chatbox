import iconFacebook from "../../../../public/icons/Facebook.svg";
import iconGoogle from "../../../../public/icons/social-google.svg";

const FormLoginSocial = () => {
  return (
    <>
      <div className="group flex items-center justify-center w-full py-2 gap-x-3 border-normal rounded-[8px] sm:hover:bg-Green sm:cursor-pointer sm:active:scale-[98%]">
        <img src={iconFacebook} alt="" />
        <p className="group-hover:sm:text-White text-bv-16 ">
          Login by Facebook
        </p>
      </div>
      <div className="group flex items-center justify-center w-full py-2 gap-x-3 border-normal rounded-[8px] sm:hover:bg-Green sm:cursor-pointer mt-2 sm:active:scale-[98%]">
        <img src={iconGoogle} alt="" />
        <p className="group-hover:sm:text-White text-bv-16 ">Login by Google</p>
      </div>
    </>
  );
};

export default FormLoginSocial;
