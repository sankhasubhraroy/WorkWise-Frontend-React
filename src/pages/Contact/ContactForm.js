import Form from "../../components/Form";
import { contactFields } from "../../utils/constants";

const ContactForm = () => {
  return (
    <div>
      <h1 className="font-secondary font-extrabold text-4xl">Get in touch</h1>

      <Form fields={contactFields} name="contact" bordered />
    </div>
  );
};

export default ContactForm;
