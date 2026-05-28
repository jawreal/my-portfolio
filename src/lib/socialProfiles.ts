import { FaLinkedin, FaFacebook } from 'react-icons/fa';
import { type IconType } from 'react-icons'; 
import { SiGithub } from 'react-icons/si';

interface ISocialProfile {
  link: string;
  icon: IconType;
  text: string;
}

const socialProfiles: ISocialProfile[] = [
  {
    link: "https://www.facebook.com/share/1EL17RDNWU/", 
    icon: FaFacebook, 
    text: "Facebook"
  }, 
  {
    link: "https://www.linkedin.com/in/jorell-relleve-63a7793a5/?lipi=urn%3Ali%3Apage%3Ap_mwlite_my_network%3Ba%2FvmrQZ8QWWL3zA2PC6ruw%3D%3D", 
    icon: FaLinkedin, 
    text: "LinkedIn"
  }, 
  {
    link: "https://github.com/jawreal", 
    icon: SiGithub,  
    text: "GitHub"
  }, 
]

export { socialProfiles, type ISocialProfile };