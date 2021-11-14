import { Overlay } from "./styled";

interface OverlayProps extends React.HTMLAttributes<HTMLDivElement> {}

const OverlayForSidebar: React.FC<OverlayProps> = (props) => {
  return <Overlay {...props} />;
};

export default OverlayForSidebar;
