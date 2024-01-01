import Loading from "./Loading";

const PageLoading = ({ offsetTop = 56 }) => {
  return (
    <div
      className={`flex min-h-[calc(100vh-${offsetTop}px)] w-full items-center justify-center`}
    >
      <Loading size={18} />
    </div>
  );
};

export default PageLoading;
