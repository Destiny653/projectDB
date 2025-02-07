import React from 'react';

const Button = ({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none";
  
  const variants = {
    default: "bg-sky-600 text-white hover:bg-sky-700",
    outline: "border border-sky-200 bg-transparent hover:bg-sky-100 text-sky-700",
    ghost: "hover:bg-sky-100 hover:text-sky-700",
    link: "text-sky-600 underline-offset-4 hover:underline",
    icon: "h-10 w-10 p-0"
  };
  
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 text-sm",
    lg: "h-12 px-8 text-lg",
    icon: "h-10 w-10"
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
