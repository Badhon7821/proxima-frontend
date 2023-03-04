import { useState } from "react";
import { useProjectsContext } from "../hooks/useProjectsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { currencyFormatter } from "../utility/currencyFormatter";
import moment from "moment";
import ProjectForm from "./ProjectForm";

const ProjectDetails = ({ project }) => {
  const [overlay, setOverlay] = useState(false);
  const [modal, setModal] = useState(false);

  const { dispatch } = useProjectsContext();
  const { user } = useAuthContext();

  const handleDelete = async () => {
    if (!user) {
      return;
    }

    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/projects/${project._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    const json = await res.json();

    if (res.ok) {
      dispatch({ type: "DELETE_PROJECT", payload: json });
    }
  };

  const handleUpdate = () => {
    setOverlay(true);
    setModal(true);
  };

  const overlayHandle = () => {
    setOverlay(false);
    setModal(false);
  };

  return (
    <div className="project  bg-slate-800 p-5 rounded-xl shadow-xl border border-slate-700 flex flex-col gap-5 w-[25rem]">
      <div className="top">
        <span className="text-sky-400">ID: {project._id}</span>
        <h3 className="text-3xl font-medium truncate">
          Title: {project.title}
        </h3>
        <span className="uppercase text-xs tracking-widest text-slate-500 font-medium">
          Technology: {project.tech}
        </span>
      </div>

      <div className="mid text-slate-300 flex gap-10">
        <div className="left flex flex-col">
          <span>Budget: {currencyFormatter(project.budget)}</span>
          <span>
            Added: {moment(project.createdAt).format("MMM DD, h:mm a")}
          </span>
          <span>
            Updated: {moment(project.updatedAt).format("MMM DD YYYY, h:mm a")}
          </span>
        </div>
        <div className="right flex flex-col">
          <span>Manager: {project.manager}</span>
          <span>Developers: {project.dev}</span>
          <span>
            Duration:{" "}
            {`${project.duration} week${project.duration === 1 ? "" : "s"}`}
          </span>
        </div>
      </div>

      <div className="bottom flex gap-5">
        <button
          onClick={handleUpdate}
          className="bg-sky-400 text-slate-900 py-2 px-5 rounded shadow-xl hover:bg-sky-50 duration-300"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="text-rose-500 hover:underline"
        >
          Delete
        </button>
      </div>

      {/* overlay */}
      <div
        onClick={overlayHandle}
        className={`overlay fixed h-screen w-screen  top-0 left-0 right-0 bottom-0 z-[1] bg-slate-900/25 backdrop-blur-sm ${
          overlay ? "" : "hidden"
        }`}
      ></div>

      {/* Modal */}

      <div
        className={`modal w-[30rem] fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] bg-slate-800 py-8 px-10 rounded-xl shadow-xl border border-slate-700   ${
          modal ? "" : "hidden"
        }`}
      >
        <h2 className="text-3xl font-medium text-sky-400 mb-4">
          Update Project
        </h2>{" "}
        <ProjectForm
          project={project}
          setOverlay={setOverlay}
          setModal={setModal}
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
