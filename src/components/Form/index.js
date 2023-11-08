import { useState } from "react";
import Field from "./Field";

const Form = ({ fields, name, data = {}, onSubmit, bordered = false }) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      // Handle file inputs
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      // For other inputs, update the formData state as usual
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formData);
      }}
    >
      {fields.map((field, index) => (
        <Field
          key={index}
          label={field.label}
          type={field.type}
          name={field.name}
          options={field.options}
          value={formData[field.name]}
          onChange={handleChange}
          bordered={bordered}
        />
      ))}

      <button
        type="submit"
        className="capitalize bg-pale-purple hover:bg-vivid-cyanBlue px-4 py-2 rounded-full text-primary transition-colors duration-300 ease-in-out"
      >
        {name}
      </button>
    </form>
  );
};

export default Form;
