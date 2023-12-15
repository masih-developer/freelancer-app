import useUser from "../features/authentication/useUser";

const Owner = () => {
    const { data: res } = useUser();
    console.log(res);
    return <div>Owner</div>;
};

export default Owner;
