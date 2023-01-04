import React, { FunctionComponent } from "react";
import Nav from "./Nav";

interface ContactProps {}
 
const Contact: FunctionComponent<ContactProps> = () => {
  return (
    <div className="outContainer">
      <Nav />
    </div>
  );
}
 
export default Contact;