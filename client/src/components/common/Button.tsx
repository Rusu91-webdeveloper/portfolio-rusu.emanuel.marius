import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Loading from "./Loading";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  isLoading?: boolean;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  isLoading = false,
  className = "",
  as = "button",
  disabled,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-primary-600 text-white hover:bg-primary-700 disabled:bg-primary-300",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-300",
    outline:
      "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 disabled:border-primary-300 disabled:text-primary-300",
  };

  const sizes = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const Component = as;

  return (
    <Component
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}>
      {isLoading ? (
        <>
          <Loading size="small" />
          <span className="ml-2">{children}</span>
        </>
      ) : (
        children
      )}
    </Component>
  );
};

export default Button;
