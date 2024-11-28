interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "danger";
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  children,
}) => {
  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-3 py-2 rounded-md transition ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
