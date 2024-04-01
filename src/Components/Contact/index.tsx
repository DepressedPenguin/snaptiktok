import "./style.css";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  // STATE FOR MESSAGE SENT
  const [sentmessage, Setsentmessage] = useState<Boolean>(false);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_dy493v9", "template_as8b29a", form.current, {
          publicKey: "Rdi4mnc2w1slZpWbU",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  // ONCLICK FOR SUBMIT
  function onClickSentMessage() {
    Setsentmessage(true);
  }

  return (
    <>
      {sentmessage ? (
        <div className="alert alert-success">MESSAGE SENT!</div>
      ) : null}
      <form ref={form} onSubmit={sendEmail}>
        <div className="form_container">
          <div className="contact_headline">
            <h1>Contact Us - Snaptiktok</h1>
          </div>
          <div className="form_zone">
            <p>
              If you have any questions or would like to report errors, please
              contact us below.
            </p>
            <hr />
            {/* NAME */}
            <div className="form_grp_name">
              <i className="fa fa-user user_icon"></i>
              <input
                name="user_name"
                type="text"
                placeholder="Name"
                className="form-control"
              />
            </div>
            {/* EMAIL */}
            <div className="form_grp_email">
              <i className="fa fa-envelope-o addres_icon "></i>
              <input
                name="user_email"
                type="text"
                placeholder="Email"
                className="form-control"
              />
            </div>
            {/* MEESAGE */}
            <div className="form_grp_message">
              <i className="fa fa-pencil pen_icon"></i>
              <textarea
                placeholder="Message"
                className="text_area form-control"
                name="message"
              ></textarea>
            </div>
          </div>
          {/* MY OWN CCAPTCHA */}
          {/* <div className="captcha">
            <div className="captcha_place">
              <div className="captcha_elements">ABCSA1</div>
              <div className="captcha_elements">
                <input type="text" placeholder="Code" />
              </div>
              <div className="captcha_elements">
                <button>DONE</button>
              </div>
            </div>
          </div> */}
          <div className="submit_btn">
            <input onClick={onClickSentMessage} type="submit" value="Send" />
          </div>
        </div>
      </form>
    </>
  );
}
