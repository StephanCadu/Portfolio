import React, { FunctionComponent } from "react";
import Nav from "../components/Nav";

interface ContactProps {}
 
const Contact: FunctionComponent<ContactProps> = () => {
  return (
    <div className="outContainer">
      <Nav />
    </div>
  );
}
 
export default Contact;