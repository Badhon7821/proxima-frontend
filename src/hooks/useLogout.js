import { useAuthContext } from "./useAuthContext";
import { useProjectsContext } from "./useProjectsContext";

const useLogout = () => {
  const { dispatch: logOutDispatch } = useAuthContext();
  const { dispatch: projectsDispatch } = useProjectsContext();

  const logout = () => {
    localStorage.removeItem("user");

    logOutDispatch({ type: "LOGOUT" });
    projectsDispatch({ type: "SET_PROJECTS", payload: [] });
  };
  return { logout };
};

export default useLogout;
