import React,{useRef,useState} from 'react'
import emailjs from 'emailjs-com'; 
import './contact.css'
import phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"

const Contact = () => {
  const formRef=useRef();
  const [done,setDone]=useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault();
    emailjs.sendForm("service_sqv6azh","template_y10zo7k",formRef.current,"64zD6-p6GzC-N1OS8").then((result)=>{
      console.log(result.text);
      setDone(false);
    },(error)=>{
      console.log(error);
    })

  }
  return (
    <div className="c">
        <div className="c-bg">

        </div>
        <div className="c-wrapper">
        <div className="c-left">
<h1 className="c-title">Contact Me for any Queries</h1>
    <div className="c-info">
        <div className="c-info-item">
            <img src={phone} alt="" className="c-icon" />
            +91 8897277989
        </div>
        <div className="c-info-item">
            <img src={Email} alt="" className="c-icon" />
            20pa1a05e7@vishnu.edu.in
        </div>
        <div className="c-info-item">
            <img src={Address} alt="" className="c-icon" />
            Bhimavaram
        </div>
    </div>
        </div>
        <div className="c-right">

        <p className="c-desc">
            <b>What’s your Query?</b> Get in touch. Always available for
            colab if you have goodidea for a project move along with me.
          </p>
          
          <form ref={formRef} onSubmit={handleSubmit}> 
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>


        </div>
      
        </div>
        
    </div>
  )
}

export default Contact