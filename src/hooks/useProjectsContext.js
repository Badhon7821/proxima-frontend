import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

export const useProjectsContext = () => {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error("You must useProjectContext inside ProjectContextProvider");
  }

  return context;
};
