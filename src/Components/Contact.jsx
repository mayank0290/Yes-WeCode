import React from "react";

const Form = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form>
          <div>
            <label>Name</label>
            <input type="name" placeholder="type your name here" />
          </div>
          <div>
            <label>E-mail</label>
            <input type="email" placeholder="enter your email abc@xyz.com" />
          </div>
          <div>
            <label>Message</label>
            <input type="text" placeholder="write your message..." />
          </div>
         <button type="button">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Form;
