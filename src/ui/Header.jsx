import UserAvatar from "../features/authentication/UserAvatar";
import useUser from "../features/authentication/useUser";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const { user, isLoading } = useUser();

  return (
    <header className="fixed left-auto right-0 top-0 z-30 h-14 w-full border-b border-b-secondary-200 bg-secondary-0 px-4 py-2 lg:mr-64 lg:w-[calc(100%-256px)]">
      <div className="flex items-center justify-between">
        {isLoading ? (
          "Loading..."
        ) : (
          <>
            <UserAvatar user={user} />
            <HeaderMenu />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
