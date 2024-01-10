"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Electronic Shop- E Commerce Application",
    description: `"Revolutionize the digital retail landscape with my E-commerce Application project. Seamlessly blending an intuitive interface, responsive design, and advanced features, this application offers users a delightful and secure shopping experience. Key highlights include robust search, secure checkout, personalized accounts, and dynamic inventory management. Explore the future of online retail through this project, showcasing expertise in React,Redux,MongoDB."`,
    image: "/images/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Admin Dashboard-E Commerce Application ",
    description: `"Highlighting my Admin Dashboard project, a pivotal component of the E-commerce Application. This tool empowers administrators with real-time control over product listings, inventory, and order management. With an intuitive interface and powerful features, the Admin Dashboard streamlines operations. Key functionalities include inventory updates and user management, all accessible through a user-friendly interface. Experience efficient e-commerce management through this project, showcasing proficiency in React,Redux,MongoDB."`,
    image: "/images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Real Estate Application",
    description: `"Discover the future of real estate with my innovative application. This project redefines property hunting, offering users an intuitive search experience, interactive maps, and virtual tours. From detailed listings to secure transactions, this application represents a leap forward in the real estate technology landscape. Experience the future of property exploration and transactions, showcasing expertise in Next.js,Auth0,MongoDB."`,
    image: "/images/projects/project3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Introducing my Food Ordering Application project, where convenience meets culinary delight. This app redefines dining with a user-friendly interface, extensive restaurant choices, and seamless ordering. From personalized profiles to real-time order tracking, this project ensures a delightful and efficient dining experience. Immerse yourself in the future of food tech, showcasing proficiency in React,Redux,MongoDB.",
    image: "/images/projects/project4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Youtube Clone",
    description: "Explore my YouTube Clone Application project, a React-based creation that mirrors the iconic video-sharing platform. With a sleek interface, responsive design, and dynamic content delivery, this project offers users an immersive video-watching experience. Dive into the world of React development, where user engagement and seamless video playback take center stage. Unleash the power of modern web technologies with this YouTube Clone, showcasing expertise in React and associated tools.",
    image: "/images/projects/project5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Portfolio",
    description: "Presenting my Portfolio Application, meticulously designed with HTML and CSS to showcase skills, projects, and personality. With a clean and visually appealing layout, this project emphasizes simplicity and elegance. Dive into the art of web development, where HTML structures and CSS styles converge to create a captivating digital presence. Explore the fusion of design and code, reflecting proficiency in crafting engaging user experiences.",
    image: "/images/projects/project6.png",
    tag: ["All", "Web"],
    gitUrl: "https://eshankhairwar.github.io/Resume/",
    previewUrl: "https://eshankhairwar.github.io/Resume/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;