type ButtonType = "button" | "reset" | "submit";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className: string;
  type: ButtonType;
  title?: string;
  onClick: React.MouseEventHandler;
}

const Button: React.FC<IButton> = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

export default Button;
