function Skills({darkMode}) {
  const skills = [
  {
    title: "Frontend",
    tech: "React.js, JavaScript, Tailwind CSS",
  },
  {
    title: "Backend",
    tech: "Node.js, Express.js",
  },
  {
    title: "Database",
    tech: "MongoDB, Mongoose",
  },
  {
    title: "Authentication",
    tech: "JWT, Refresh Tokens",
  },
  {
    title: "Tools",
    tech: "Git, GitHub, Postman",
  },
  {
    title: "Deployment",
    tech: "Vercel, Render",
  },
];

  return (
    <div className="py-20 px-[10%]"> 
    <h2 className="text-4xl font-bold mb-10">
    Core Skills
  </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {skills.map((skill) => (
  <div
    key={skill.title}
    className={`p-6 rounded-lg border ${
      darkMode
        ? "bg-zinc-800 border-zinc-700 text-white"
        : "bg-zinc-100 border-zinc-300 text-black"
    }`}
  >
            <h3 className="text-amber-600 uppercase text-sm tracking-wider mb-2">
          {skill.title}
        </h3>

        <p>{skill.tech}</p>
      </div>
        ))}
      </div>
    </div> 
  );  
}

export default Skills;