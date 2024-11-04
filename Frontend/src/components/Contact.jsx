import React from "react";
import Navbar from "./Navbar";


function Contact() {
  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center items-center">
        <div className="w-[400px] ">
          <h1 className="text-2xl font-bold mb-10">Contact Us</h1>
          <form>
            <label htmlFor="name" >Name</label><br />
            <input type="text" placeholder="enter your name" /><br /><br />
            <label htmlFor="email">Email</label><br />
            <input type="email" placeholder="enter your email" /><br /><br />
            <label htmlFor="message">Message</label><br />
            <textarea name="message" id="message" placeholder="Your message.."></textarea><br />
            <button className="bg-blue-500 text-white px-3 py-1 rounded-md mt-10">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
