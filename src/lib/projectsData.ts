interface IProjectsData {
  title: string; 
  imgSrc: string;
}

const projectsData: IProjectsData[] = [
  { title: "CSJDM-PNP Logistic Dept - Firearm Tracker", imgSrc: "/pnp_landing.jpg" }, 
  { title: "CDSGA Thesis Archive with AI Chatbot Assistance", imgSrc: "/pnp_landing.jpg" }, 
  { title: "Kaypian Barangay Management System", imgSrc: "/pnp_landing.jpg" }, 
  { title: "Neuro-Quiz - AI Generated Interactive Quiz", imgSrc: "/pnp_landing.jpg" }, 
]


export { projectsData, type IProjectsData };