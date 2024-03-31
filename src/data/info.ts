export const info = {
  name: "Josh Rudesill",
  brief_description:
    "I'm a full stack developer with an obsession for learning.",
  role: "Full Stack Developer",
  picture: "/image.png",
  picture_alt: "Josh Rudesill",
  location: "Hudson, WI USA",
  cv: "/resume.pdf",

  about: {
    description: `I'm a full stack developer with a passion for building things to solve problems and for learning.
    I have a solid foundation in software because of my time working with a mentor for a year and more importantly my time at Prime Digital Academy where I earned a Fullstack Software Engineering Certification (April 2024 expected).
    I excel in building web applications using React (Next.js), Node.js (Express), SQL (MariaDB, PostgreSQL) and No-SQL (MongoDB).
    I'm known for always continuing to learn and teaching others when I can.
    Looking for a your next dev? Look no further.`,
    education: [
      {
        title: "Fullstack Software Engineering Certification",
        date: "November 2023 - April 2024",
        location: "Prime Digital Academy",
        thesis:
          "Immersion program teaching modern technologies such as JavaScript, React, Node, and SQL. Additional training in diversity, equity, & inclusion, public speaking and presentations, and real-world client work",
      },
    ],
    experience: [
      {
        title: "Mentorship w/ Staff Software Engineer",
        date: "August '22 - August '23",
        location: "Remote",
        description:
          "Building production level projects and learning how to work in a real development environment from a Staff Software Engineer with 10+ years of experience. Learning how to be ready to tackle any task especially ones outside of my current stack",
      },
      {
        title: "Workflow Software Developer + CAD Operator",
        date: "April '21 - August '22",
        location: "The Vomela Companies",
        description: `I was part of a team that created and maintained a C# plugin to extend our CAD program Rhino3D.
        With around 150 separate job-specific features, the plugin reduced errors by 95% and sped up many
        routine daily tasks by over 90%. I also created and maintained a custom web app built using react for data centralization and managing project progress within a team of 5 and created production files for commercial printing and cutting following company standards.`,
      },
    ],

    skills: ["JavaScript", "React", "Node.js", "MongoDB", "Prank Mastery"], // not used yet
  },

  projects: [
    {
      title: "Chess2",
      date: "2023",
      description:
        "Chess2 is a web application for playing live chess with anyone around the world or for playing against a chess engine (Stockfish 11). It has matchmaking for finding someone to play with (if anyone is online). ",
      link: "https://github.com/joshrudesill/chess2",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Next.js",
        "Tailwind",
        "Socket.io",
        "Express",
      ],
      img_alt: "Chess2",
      img_path: "/chess2.jpg",
    },
    {
      title: "ParchEZ",
      date: "2024",
      description:
        "ParchEZ is a site to play with the board game parcheesi with friends. Simply create an account then create a game and send the code to your friends so they can join!",
      link: "https://github.com/joshrudesill/parcheesi",
      tech: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Tailwind",
        "Socket.io",
        "Express",
      ],
      img_alt: "ParchEZ",
      img_path: "/parchez.svg",
    },
    {
      title: "Jewel Scheduler",
      date: "2022",
      description:
        "A web app for creating and managing schedules for your business",
      link: "https://github.com/joshrudesill/Jewel",
      tech: ["React", "Node.js", "MongoDB", "Next.js", "Tailwind", "Express"],
      img_alt: "Jewel",
      img_path: "jewel.jpg",
    },
  ],

  contact: {
    email: "joshrudesill@gmail.com",
    linkedin: "https://www.linkedin.com/in/josh-rudesill/",
    github: "https://github.com/joshrudesill",
  },
};
