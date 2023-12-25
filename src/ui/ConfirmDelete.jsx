import Loading from "./Loading";

const ConfirmDelete = ({ title, onAccept, onClose, isPending }) => {
  return (
    <>
      <div className="mb-10 mt-3">
        <p className="text-secondary-700">
          آیا از حذف پروژه{" "}
          <span className="font-bold text-secondary-900 underline">
            {title}
          </span>{" "}
          اطمینان دارید؟
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button className="app-btn w-32 basis-1/2" onClick={onClose}>
          لغو
        </button>
        {isPending ? (
          <div className="flex basis-1/2 items-center justify-center">
            <Loading size={10} color="rgb(var(--color-error))" />
          </div>
        ) : (
          <button
            className="basis-1/2 rounded-lg p-2 text-red-500 shadow-lg shadow-red-500/20 ring-1 ring-red-500 duration-300 hover:bg-red-500 hover:text-white"
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
