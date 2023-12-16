import Loading from "./Loading";

const ConfirmDelete = ({ title, onAccept, onClose, isPending }) => {
    return (
        <>
            <div className="border-b border-secondary-200 pb-1">
                <h3 className="text-lg font-medium text-red-500">
                    حذف {title}؟
                </h3>
            </div>
            <div className="mt-3 mb-10">
                <p className="text-secondary-700">
                    آیا از حذف{" "}
                    <span className="font-bold text-secondary-900">
                        {title}
                    </span>{" "}
                    اطمینان دارید؟
                </p>
            </div>
            <div className="flex items-center gap-2">
                <button className="basis-1/2 app-btn w-32" onClick={onClose}>
                    لغو
                </button>
                {isPending ? (
                    <div className="flex items-center justify-center basis-1/2">
                        <Loading size={10} color="rgb(var(--color-error))" />
                    </div>
                ) : (
                    <button
                        className="basis-1/2 rounded-lg p-2 ring-1 hover:text-white hover:bg-red-500 duration-300 ring-red-500 text-red-500 shadow-lg shadow-red-500/20"
                        onClick={onAccept}
                    >
                        تایید
                    </button>
                )}
            </div>
        </>
    );
};

export default ConfirmDelete;
