const Table = ({ children }) => {
    return (
        <div className="mx-auto p-5 mt-5 rounded-lg overflow-x-auto">
            <table className="text-secondary-700 w-full">{children}</table>
        </div>
    );
};

export default Table;

const TableHeader = ({ children }) => {
    return <thead>{children}</thead>;
};

const TableBody = ({ children }) => {
    return <tbody>{children}</tbody>;
};

const TableRow = ({ children, ...props }) => {
    return <tr {...props}>{children}</tr>;
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
