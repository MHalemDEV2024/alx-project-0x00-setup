import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, className = "" }) => {
  return (
    <button
      className={`bg-blue-500 text-white px-4 py-2 ${className} transition duration-200 hover:bg-blue-600`}
    >
      {title}
    </button>
  );
};

export default Button;
