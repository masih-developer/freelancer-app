const UserAvatar = ({ user }) => {
  const { avatarUrl, name } = user;

  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <img
        src={avatarUrl ? avatarUrl : "/images/user.jpg"}
        alt=""
        className="size-10 rounded-full"
      />
      <h3 className="font-medium">{name}</h3>
    </div>
  );
};

export default UserAvatar;
