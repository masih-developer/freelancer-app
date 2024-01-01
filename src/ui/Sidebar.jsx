const Sidebar = ({ children }) => {
  return (
    <aside className="fixed bottom-0 right-0 top-0 hidden w-64 overflow-y-auto bg-secondary-0 p-5 shadow-md lg:block">
      <ul className="flex flex-col gap-2">{children}</ul>
    </aside>
  );
};

export default Sidebar;
