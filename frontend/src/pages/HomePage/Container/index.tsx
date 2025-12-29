import Sun from "./Sun";
import "./container.css";

interface Props {
  children?: React.ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div id="homepage-container" className="w-full h-screen relative">
      <Sun />
      <div>{children}</div>
    </div>
  );
}
