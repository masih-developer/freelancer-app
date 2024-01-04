import { createPortal } from "react-dom";
import Loading from "./Loading";

const WrapperLoading = () => {
  return createPortal(
    <div className="fixed z-50 flex h-screen w-full items-center justify-center bg-secondary-0">
      <Loading size={20} />
    </div>,
    document.body,
  );
};

export default WrapperLoading;
