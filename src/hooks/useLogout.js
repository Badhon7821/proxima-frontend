import { useAuthContext } from "./useAuthContext";

const useLogout = () => {
  const { dispatch: logOutDispatch } = useAuthContext();
  const logout = () => {
    localStorage.removeItem("user");

    logOutDispatch({ type: "LOGOUT" });
  };
  return { logout };
};

export default useLogout;
