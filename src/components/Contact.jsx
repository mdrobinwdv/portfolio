import { FaFacebook, FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_u31mjpn', 
      'template_q8enf58',  
      e.target,
      'F_FATFZng5Hj9jiMD'   
    )
    .then(() => {
      alert("Message sent successfully ✅");
    })
    .catch((error) => {
      console.log("ERROR",error)
      alert("Failed to send ❌");
    });

    e.target.reset();
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-8 bg-purple-200 p-5">

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center">Contact Me</h1>

      {/* Description */}
      <p className="text-center text-base md:text-lg max-w-xl">
        Feel free to contact me for any project or collaboration.
      </p>

      {/* Contact Info */}
      <div className="text-base md:text-lg flex flex-col gap-2 text-center">
        <p><span className="font-semibold">Email :</span> robinkhan1r66@gmail.com</p>
        <p><span className="font-semibold">Phone :</span> 01752162066</p>
        <p><span className="font-semibold">Location :</span> Kalihati, Tangail</p>
      </div>

      {/* Social Links */}
      <div className="flex gap-5 text-2xl md:text-3xl">
        <a 
          href="https://www.facebook.com/robinkhan.robinkhan.946179" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:scale-110 transition"
        >
          <FaFacebook />
        </a>

        <a 
          href="https://github.com/mdrobinwdv" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black hover:scale-110 transition"
        >
          <FaGithub />
        </a>
      </div>

      {/* Contact Form */}
      <form onSubmit={sendEmail} className="w-full max-w-md flex flex-col gap-4">

        <input 
          type="text" 
          name="name"
          placeholder="Your Name" 
          className="p-3 rounded-lg border outline-none"
          required
        />

        <input 
          type="email" 
          name="email"
          placeholder="Your Email" 
          className="p-3 rounded-lg border outline-none"
          required
        />

        <textarea 
          name="message"
          placeholder="Your Message"
          className="p-3 rounded-lg border h-32 outline-none"
          required
        />

        <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>

      </form>

    </div>
  )
}

export default Contact;