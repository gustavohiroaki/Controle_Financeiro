import { Overlay } from "./styled";

interface OverlayProps {
  fnCall: () => any;
}

const OverlayForSidebar: React.FC<OverlayProps> = ({ fnCall }) => {
  return <Overlay onClick={() => fnCall()} />;
};

export default OverlayForSidebar;
