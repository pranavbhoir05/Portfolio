import React from "react";

function Hero({ darkMode }) {
  return (
    <section
      className={`min-h-screen ${
        darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col md:flex-row">
        
        <div className="relative w-full md:w-1/2">
          <img
            src="/pranav.jpeg"
            alt="Pranav Bhoir"
            className="
              w-full
              h-[90vh]
              object-cover
              grayscale
              hover:grayscale-0
              transition-all
              duration-500
            "
          />

         <div className="absolute bottom-8 left-8">
            <p className="text-xs tracking-[0.3em] text-amber-400 uppercase">
              MERN Stack Developer
            </p>

            <h1 className=" text-cyan-800 text-5xl md:text-7xl font-black leading-none mt-2">
              Pranav
              <br />
              Bhoir
            </h1>
          </div>
        </div>
    <div className="w-full md:w-1/2 flex flex-col justify-center px-10 py-20">
      <h2 className="text-4xl font-bold mb-6">
        About Me
      </h2>

      <p className="text-zinc-400 leading-8">
        MERN Stack Developer with experience building REST APIs and
        full-stack web applications using React.js, Node.js,
        Express.js, MongoDB, Mongoose and JWT Authentication.
      </p>

      <p className="text-zinc-400 leading-8 mt-4">
        Built a Blog Application and a YouTube-style Backend API
        project while learning industry-standard backend
        development practices.
      </p>
    </div>

      </div>
    </section>
  );
}

export default Hero;