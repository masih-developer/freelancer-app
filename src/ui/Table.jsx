const Table = ({ children }) => {
  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="w-full text-secondary-700">{children}</table>
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
