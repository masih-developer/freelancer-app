import { BeatLoader } from "react-spinners";

const Loading = ({ size = 15, color = "rgb(var(--color-primary-900))" }) => {
  return <BeatLoader size={size} color={color} />;
};

export default Loading;
