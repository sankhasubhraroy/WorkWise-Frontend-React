const FormToggle = ({ formType, setFormType }) => {
  const toggleForm = () => {
    formType === "login" ? setFormType("register") : setFormType("login");
  };

  return (
    <div className="FORM-TOGGLE">
      <p className="text-secondary">
        {formType === "login"
          ? "Don’t have an account? "
          : "Already have an account? "}
        <span
          onClick={toggleForm}
          className="underline cursor-pointer text-black"
        >
          {formType === "login" ? "Join here" : "Register"}
        </span>
      </p>
    </div>
  );
};

export default FormToggle;
