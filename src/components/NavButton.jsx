import { useNavigate } from "react-router-dom";

export const NavButton = ({ page, text, color }) => {
  const navigate = useNavigate();

  const colorStyles = {
    blue: "bg-blue-400 hover:bg-blue-500 focus:ring-blue-300 text-gray-900",
    green: "bg-green-400 hover:bg-green-500 focus:ring-green-300 text-gray-900",
    orange:
      "bg-orange-400 hover:bg-orange-500 focus:ring-orange-300 text-gray-900",
    purple:
      "bg-purple-400 hover:bg-purple-500 focus:ring-purple-300 text-gray-900",
    red: "bg-red-400 hover:bg-red-500 focus:ring-red-300 text-gray-900",
    indigo:
      "bg-indigo-400 hover:bg-indigo-500 focus:ring-indigo-300 text-gray-900",
    teal: "bg-teal-400 hover:bg-teal-500 focus:ring-teal-300 text-gray-900",
  };

  const buttonStyle = colorStyles[color] || colorStyles.blue;

  return (
    <button
      onClick={() => navigate(page)}
      className={`m-5 px-4 py-2 rounded-lg font-medium ${buttonStyle} focus:outline-none focus:ring-2 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-md`}
      aria-label={`Navigate to ${text} page`}
    >
      {text}
    </button>
  );
};
