import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "phoenix07081",
        "template_zkh9xci",
        form.current,
        "XNO8jwYDvsyjpywJl"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            alert(
              "Thanks! Your email sent successfully, I will contact you soon."
            );
          }
        },
        (error) => {
          console.log(error);
          alert(
            "Fail to send your email. You can contact me through phone number 0961 048 128."
          );
        }
      );
  };

  return (
    <div>
      <h3 className="pb-3 text-orange-primary">Send me an email</h3>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2"
      >
        <div className="sm:col-span-2">
          <input
            className="transition-all"
            type="text"
            name="subject"
            placeholder="Your subject"
          />
        </div>
        <div>
          <input
            className="transition-all"
            type="text"
            name="user_name"
            placeholder="Your name"
          />
        </div>
        <div>
          <input
            className="transition-all"
            type="email"
            name="user_email"
            placeholder="Your email"
          />
        </div>
        <div className="sm:col-span-2">
          <textarea
            className="transition-all"
            type="text"
            rows="5"
            cols="50"
            name="message"
            placeholder="Your message..."
          />
        </div>
        <input
          className="sm:col-span-2 font-bold hover:opacity-75 transition-all"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}

export default ContactUs;
