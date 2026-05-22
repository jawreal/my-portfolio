interface IProjectsData {
  title: string; 
  imgSrc: string;
}

const projectsData: IProjectsData[] = [
  { title: "CSJDM-PNP Logistic Dept - Firearm Tracker", imgSrc: "/pnp_landing.jpg" }, 
  { title: "CDSGA Thesis Archive with AI Chatbot Assistance", imgSrc: "/archive_landing.png" }, 
  { title: "Kaypian Barangay Management System", imgSrc: "/brgy_landing.png" }, 
  { title: "Neuro-Quiz - AI Generated Interactive Quiz", imgSrc: "/pnp_landing.jpg" }, 
]


export { projectsData, type IProjectsData };