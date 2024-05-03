import React from 'react'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [name, setName] = useState(null);
  const [isValidEmail, setIsValidEmail] = useState("");
  const [isValidPhoneNo, setIsValidPhoneNo] = useState("");
  const [isValidName, setIsValidName] = useState("");
  const [sent, setSent]= useState(null);
  const [disabled, setDisabled]= useState(true);


  const sendEmail = (e) => {
    e.preventDefault();
    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Regular expression for validating phone number format (10 digits)
    const phoneRegex = /^\d{10}$/;
     if(name){
      if (emailRegex.test(email)) {
        if(phoneRegex.test(phoneNo)){
          setDisabled(false);
          emailjs
        .sendForm('service_yowffxa', 'template_yd3g5k8', form.current, {
          publicKey: '-b2pTfSDtenykJA5N',
        })
        
        .then(
          (response) => {
            console.log('SUCCESS!');
            setSent(response);
            setDisabled(true);
          },
          (error) => {
            console.log('FAILED...', error.text);
            setSent("Failed to send email.");
            setDisabled(true);
          },
        );
        setIsValidPhoneNo(" ");
  
        }else{
          setIsValidPhoneNo("please enter a valid phoneNo");
  
        }
        setIsValidEmail(" ");
        // Proceed with form submission or other actions
      } else {
        setIsValidEmail("Please enter valid email address");
      }
  
      setIsValidName(" ");
     }else{
      setIsValidName("Please enter your name");
     }
  };

  return (
<div className="contact" id="contact">
    <div className="hd2">
    <button className="hd" >Contact</button>
    </div>

    <div className="form">
     <div className="send">
      <i className="fa-solid fa-envelope"></i>
      <a href="mailto:nhlapob78@gmail.com">nhlapob78@gmail.com</a><br/><br/>
      <i className="fa-solid fa-phone"></i>
      <a href="tel:0659803536">0659803536</a>
     </div> 

    <hr/>
    
    <form ref={form} onSubmit={sendEmail}>
      <p>Leave a message</p>
      <div className="formFields">
     <div className='validate'>{isValidName}</div> 
        <label>Name</label><br/>
        <input type="text"
         name="user_name"
          placeholder="enter name"
          onChange={(e)=>{setName(e.target.value)}}/>
      </div>
<br/>
      <div className="formFields">
      <div className='validate'>{isValidEmail}</div> 
        <label>Email</label><br/>
        <input type="text"
         name="user_email"
          placeholder="enter email"
          onChange={(e)=>{setEmail(e.target.value)}}
          />
      </div>
<br/>
      <div className="formFields">
      <div className='validate'>{isValidPhoneNo}</div> 
        <label>PhoneNo</label><br/>
        <input type="text" 
        name="user_phoneno"
         placeholder="enter phone number"
         onChange={(e)=>{setPhoneNo(e.target.value)}}
         />
      </div>
<br/>
      <div className="formFields">
        <label>Decription</label><br/>
        <textarea id="enquary" name="message" rows="10" cols="50"></textarea>
      </div>
<br/>
      <div className="formFields">
       {disabled ? (<>
        <button name="submit" value="submit">submit</button>
      
       </>): 
        (<>
       <button name="submit" value="submit" disabled>
       <div className="spinner"></div></button>
       </>)
       
       }
      </div>
    </form>
  </div>

  <div className={`Thanks ${sent ? 'open': ''}`}>
    {sent==="Failed to send email." ? ( <>
      <h1>Failed to send email.<br/>Please check all input fields and try again.</h1>
    <button onClick={()=>{setSent(null)}}>Okay</button> 
    </> ) : (<>
      <h1>Thanks for contacting me {name}.<br/>I will get back to you shortly.</h1>
    <button onClick={()=>{setSent(null)}}>Okay</button> 
    </>)
    }
  </div>
</div>
  )
}

export default Contact
