"use client"

interface ButtonProps {
  type: "accent" | "contour",
  label: string,
  className?: string,
  click?: () => void,
}


const Button = (props: ButtonProps) => {
  const { type, label, className, click } = props;
  
  return (
    <button
      className={`flex px-4 py-3 border-2 rounded-full font-dmsans text-button2 
        ${type === "contour" ? "bg-white border-neutrals-6 text-neutrals-2" : "bg-primary-blue border-primary-blue text-neutrals-8"} 
        ${className}`}
        onClick={click}
    >
      {label}
    </button>
  )
}

export default Button