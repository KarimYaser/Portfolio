import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/done.json";
import contactAnimation from "../../../public/animation/contact.json";

function Contact() {
  const [state, handleSubmit] = useForm("xdoqepga");
  return (
    <section className="contact">
      <h1 className="title">
        <span className="icon-mail"></span>Contact Us
      </h1>
      <p className="subtitle">
        Contact us for more information and Get notified when I publlish
        something new
      </p>
      <div
        style={{ alignItems: "center", justifyContent: "space-between" }}
        className="flex"
      >
        <form className="" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Adress: </label>
            <input
              type="email"
              placeholder="Email Adress"
              id="email"
              name="email"
              autoComplete="off"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" disabled={state.submitting}>
            {state.submitting ? "submitting" : "submit"}
          </button>
          {state.succeeded && (
            <h1
              className="flex"
              style={{ color: "var(--title)", marginTop: "2rem" }}
            >
              <Lottie
                loop={false}
                animationData={doneAnimation}
                style={{ height: 50 }}
              />
              Your message has been sent sucessfully !
            </h1>
          )}
        </form>
        <div style={{ marginTop: "-15rem" }} className="animation ">
          <Lottie animationData={contactAnimation} style={{ height: 300 }} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
