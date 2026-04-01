import React from 'react'
import Cards from './components/Cards'

const App = () => {

  const users = [
  {
    id: 1,
    name: "Vimal Jass",
    role: "UI/UX Designer",
    company: "Epic Coders",
    price: "$55/hr",
    status: "Available",
    skills: ["UI", "UX", "Photoshop"],
    extraSkills: "+4",
    description: "Creative UI/UX designer with modern design skills.",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 2,
    name: "Rahul Sharma",
    role: "Frontend Developer",
    company: "Tech Studio",
    price: "$40/hr",
    status: "Available",
    skills: ["React", "JavaScript", "CSS"],
    extraSkills: "+3",
    description: "Frontend developer focused on React and performance.",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 3,
    name: "Ankit Verma",
    role: "Backend Developer",
    company: "DevCore",
    price: "$60/hr",
    status: "Busy",
    skills: ["Node.js", "MongoDB", "API"],
    extraSkills: "+5",
    description: "Backend expert building scalable APIs.",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    role: "Graphic Designer",
    company: "Design Hub",
    price: "$35/hr",
    status: "Available",
    skills: ["Illustrator", "Photoshop", "Branding"],
    extraSkills: "+2",
    description: "Creative graphic designer for branding and visuals.",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 5,
    name: "Aman Gupta",
    role: "Full Stack Developer",
    company: "CodeCraft",
    price: "$70/hr",
    status: "Available",
    skills: ["React", "Node.js", "MongoDB"],
    extraSkills: "+6",
    description: "Full stack dev building complete web apps.",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 6,
    name: "Priya Singh",
    role: "Mobile App Developer",
    company: "Appify",
    price: "$50/hr",
    status: "Busy",
    skills: ["Flutter", "Dart", "Firebase"],
    extraSkills: "+4",
    description: "Cross-platform mobile app developer.",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 7,
    name: "Karan Mehta",
    role: "DevOps Engineer",
    company: "CloudOps",
    price: "$65/hr",
    status: "Available",
    skills: ["AWS", "Docker", "CI/CD"],
    extraSkills: "+5",
    description: "DevOps engineer for scalable deployments.",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 8,
    name: "Neha Arora",
    role: "Content Writer",
    company: "WriteRight",
    price: "$25/hr",
    status: "Available",
    skills: ["SEO", "Blogs", "Copywriting"],
    extraSkills: "+3",
    description: "Content writer specializing in SEO content.",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 9,
    name: "Rohit Yadav",
    role: "Data Analyst",
    company: "DataWorks",
    price: "$45/hr",
    status: "Busy",
    skills: ["Python", "SQL", "Power BI"],
    extraSkills: "+4",
    description: "Data analyst turning data into insights.",
    image: "https://via.placeholder.com/60"
  },
  {
    id: 10,
    name: "Simran Kaur",
    role: "UI Developer",
    company: "PixelSoft",
    price: "$42/hr",
    status: "Available",
    skills: ["HTML", "CSS", "React"],
    extraSkills: "+2",
    description: "UI developer crafting responsive interfaces.",
    image: "https://via.placeholder.com/60"
  }
]

users.forEach(function(elem){
  console.log(elem.name)
})


  return (
    <div className="parent">
 {
   users.map(function(elem, idx){
    return <div key={idx}>
      <Cards name ={elem.name} role={elem.role} company={elem.company} price={elem.price} status={elem.status} skills={elem.skills} extraSkills={elem.extraSkills} description={elem.description} image={elem.image} />
    </div>
  })
 }
    
</div>
  )
}

export default App