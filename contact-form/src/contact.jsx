import React, { useState } from "react";
function Contact(){

    return(
        <div>
            <h1 className="mainHeading">Contact Us</h1>
            <form className="forms">
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username"/>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email"/>
                    <label htmlFor="message">Write a message</label>
                    <input type="text" name="message" />
                </div>
            </form>
            <button className="btn" type="Submit">Send ➤</button>
        
       </div>

    )
}
export default Contact;