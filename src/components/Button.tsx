type ButtonProps = {
  buttonType?: "secondary" | "primary";
  children: React.ReactNode;
  onClick: () => Promise<void>;
};

const Button = ({ buttonType, children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`h-[45px] bg-[#473a2b] text-white hover:bg-[#322618] rounded-[5px] cursor-pointer w-full ${
        buttonType === "secondary" ? "opacity-[85%]" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
