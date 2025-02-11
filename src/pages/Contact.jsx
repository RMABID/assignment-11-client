import { useEffect } from "react";
import ContactUs from "../components/ContactUs";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact - Historical Artifacts Tracker";
  }, []);
  return (
    <section className="py-14">
      <ContactUs></ContactUs>
    </section>
  );
};

export default Contact;
