import * as React from "react";
import { useNavigate } from "react-router-dom";

interface IScrollNavigate {
  id: string;
  path?: string;
  onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
}

const useScrollNavigate = () => {
  const navigate = useNavigate();

  const handleNavigate = ({ 
    id, 
    path, 
    onOpenChange
    }: IScrollNavigate) => {
    navigate(path ?? "/", {
      state: {
        scrollTo: id,
      },
    });
    
    if (onOpenChange) {
      onOpenChange(false);
    } 
  };

  return handleNavigate;
};

export default useScrollNavigate;