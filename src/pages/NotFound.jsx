import { HiArrowRight } from "react-icons/hi";
import useBackPage from "../hooks/useBackPage";

const NotFound = () => {
  const goToBackPage = useBackPage();
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="conainer">
        <div className="mx-auto flex max-w-screen-sm flex-col items-center justify-center rounded-lg p-5 text-center shadow-md shadow-error/20">
          <h2 className="text-xl font-bold text-primary-900 sm:text-2xl">
            صفحه ای که دنبالش بودید، پیدا نشد.
          </h2>
          <button
            className="mt-5 flex h-7 items-center gap-1 text-center font-medium text-error outline-primary-800 sm:text-lg"
            onClick={goToBackPage}
          >
            <HiArrowRight />
            <span>برگشت</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
