import { loginFields, registerFields } from "../../utils/constants";
import Form from "../Form";
import authImage from "../../assets/images/auth.png";
import { useState } from "react";
import UserToggle from "./UserToggle";
import Button from "../Button";
import { BiArrowBack } from "react-icons/bi";
import FormToggle from "./FormToggle";
import { HiOutlineMail } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";

const Auth = ({ mode = "login", user = "consumer" }) => {
  const [userType, setUserType] = useState(user);
  const [formType, setFormType] = useState(mode);
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((current) => current + 1);
  };

  const prevStep = () => {
    setStep((current) => current - 1);
  };

  return (
    <div className="AUTH flex max-md:flex-col">
      <div
        className="w-120 h-144 max-md:w-full max-md:h-max bg-vivid-purple bg-left-bottom bg-no-repeat p-4"
        style={{
          backgroundImage: `url(${authImage})`,
          backgroundSize: "0%",
        }}
      >
        <UserToggle userType={userType} setUserType={setUserType} />
      </div>

      <div className="w-80 h-144 max-md:w-full bg-blushPurple p-4">
        {step === 1 && (
          <div className="relative h-full flex flex-col">
            <div className="HEADING my-16">
              <h1 className="font-secondary font-semibold text-2xl text-secondary">
                Join us today
              </h1>
            </div>

            <div className="BUTTON-CONTAINER flex flex-col gap-4">
              <Button
                advance
                padding
                icon={<HiOutlineMail />}
                text="Continue with email"
                background="white"
                hover="#e9e6ed"
                onClick={nextStep}
              />

              <Button
                advance
                padding
                icon={<FcGoogle />}
                text="Continue with google"
                background="white"
                hover="#e9e6ed"
              />
            </div>

            <div className="TERMS absolute bottom-0">
              <p className="text-primary text-xs font-light">
                By joining, you agree to the WorkWise Terms of Service and to
                occasionally receive emails from us. Please read our Privacy
                Policy to learn how we use your personal data.
              </p>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="relative h-full flex flex-col">
            <Button icon={<BiArrowBack />} text="back" onClick={prevStep} />

            <div className="HEADING mt-8">
              <h1 className="font-secondary font-semibold text-2xl text-secondary">
                {formType === "login"
                  ? "Login to your account"
                  : "Create a new account"}
              </h1>
            </div>

            <div className="FORM-CONTAINER">
              <Form
                fields={formType === "login" ? loginFields : registerFields}
                name={formType}
              />
            </div>

            {formType === "login" && (
              <div className="self-end">
                <p className="underline cursor-pointer">Forget Passsword?</p>
              </div>
            )}

            <div className="absolute bottom-0">
              <FormToggle formType={formType} setFormType={setFormType} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
