const ProjectDetails = ({ project }) => {
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
          <span>Budget:</span>
          <span>Added on:</span>
          <span>Last updated:</span>
        </div>
        <div className="right flex flex-col">
          <span>Manager: </span>
          <span>Developers: </span>
          <span>Duration:</span>
        </div>
      </div>

      <div className="bottom flex gap-5">
        <button className="bg-sky-400 text-slate-900 py-2 px-5 rounded shadow-xl hover:bg-sky-50 duration-300">
          Update
        </button>
        <button className="text-rose-500 hover:underline">Delete</button>
      </div>
    </div>
  );
};

export default ProjectDetails;
