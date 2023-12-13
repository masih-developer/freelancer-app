import { HiArrowRight } from "react-icons/hi";
import useBackPage from "../hooks/useBackPage";

const NotFound = () => {
    const goToBackPage = useBackPage();
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="conainer">
                <div className="text-center rounded-lg p-5 shadow-md max-w-screen-sm mx-auto flex items-center justify-center flex-col shadow-error/20">
                    <h2 className="text-xl sm:text-2xl text-primary-900 font-bold">
                        صفحه ای که دنبالش بودید، پیدا نشد.
                    </h2>
                    <button
                        className="flex text-center gap-1 mt-5 items-center outline-primary-800 h-7 sm:text-lg font-medium text-error"
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
