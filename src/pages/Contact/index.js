import BreadCrumb from "../../components/BreadCrumb";
import Map from "../../components/Map";
import ContactForm from "./ContactForm";
import Info from "./Info";

const Contact = () => {
  return (
    <>
      <BreadCrumb />
      <Info />
      <section className="my-16">
        <div className="container flex max-md:flex-col gap-8 justify-between">
          <div className="MAP-CONTAINER h-120 w-144 max-md:h-80 max-md:w-full">
            <Map coordinates={[23.6889, 86.9661]} />
          </div>

          <div className="FORM-CONTAINER w-160 max-md:w-full">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
