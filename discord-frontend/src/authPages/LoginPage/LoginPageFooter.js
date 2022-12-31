import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";

// responsible for submitting the logini request

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();
  const handlePushToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <>
      <div>
        <CustomPrimaryButton
          label="Log in"
          additionalStyles={{ marginTop: "30px" }}
          disabled={!isFormValid}
          onClick={handleLogin}
        />
      </div>
      <RedirectInfo
        text="Need an accout? "
        redirectText="Create an account"
        additionalStyle={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
};

export default LoginPageFooter;
