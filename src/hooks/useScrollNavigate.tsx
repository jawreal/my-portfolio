import * as React from "react";
import { useNavigate } from "react-router-dom";

interface IScrollNavigate {
  id: string;
  onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
}

const useScrollNavigate = () => {
  const navigate = useNavigate();

  const handleNavigate = ({ id, onOpenChange }: IScrollNavigate) => {
    navigate(`/${id}`);
    
    if (onOpenChange) {
      onOpenChange(false);
    } 
    
    setTimeout(() => {
      const element = document.querySelector(`${id}`);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return handleNavigate;
};

export default useScrollNavigate;