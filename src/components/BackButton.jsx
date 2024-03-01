

import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/documents"); 
  };

  return (
    <div className="button__wrapper">
      <button onClick={handleNavigation} className="button__link">
        Назад к списку
      </button>
      
    </div>
  );
}
