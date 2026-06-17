function Contact() {
  return (
    <div>
    <div className= "text-4xl font-bold mb-10 ">
      <h2>Contact :</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
     <button
  onClick={() =>
    window.open("https://github.com/pranavbhoir05", "_blank")
  }
  className="
    w-full
    bg-orange-400
    p-6
    rounded-2xl
    font-bold
     hover:bg-orange-500
    transition
  "
>
  GitHub
</button>
     <button
  onClick={() =>
    window.open("mailto:pranavbhoirmoonyt@gmail.com", "_blank")
  }
  className="
  text-blue-900
    w-full
    bg-white
    p-6
    rounded-2xl
    font-bold
    hover:bg-zinc-200
    transition
  "
> Email
  
</button>
     <button
  onClick={() =>
    window.open("/public/PRANAV_BHOIR_Mern_Developer.pdf", "_blank")
  }
  className="
    w-full
    bg-green-700
    p-6
    rounded-2xl
    font-bold
     hover:bg-green-500
    transition
  " 
>
  Resume
</button>
      
    </div>
    </div>
  );
}

export default Contact;