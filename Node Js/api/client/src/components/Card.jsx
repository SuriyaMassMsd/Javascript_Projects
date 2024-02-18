import React from "react";

const Card = ({
  id,
  name,
  github,
  projects,
  linkedIn,
  instagram,
  avatar_url,
  tasks,
}) => {
  return (
    <div key={id}>
      <div className="shadow-2xl max-w-[330px] p-4 flex flex-col items-center">
        <img
          className="w-32 h-32 shadow-2xl rounded-full object-cover"
          src={avatar_url}
          alt=""
        />
        <div className="p-2 flex items-center gap-1 flex-col">
          <h1 className="text-xl font-semibold">{name} </h1>

          <a href={github} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
              ></path>
            </svg>
          </a>
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <div className="flex gap-4 w-full text-center">
            <a
              href={projects}
              target="_blank"
              className="bg-indigo-600 w-full px-8  py-2 rounded text-white font-semibold"
            >
              <button>Projects</button>
            </a>
            <a
              href={tasks}
              target="_blank"
              className="bg-[#ffd500] px-8 w-full py-2 rounded text-black font-semibold"
            >
              <button>Tasks</button>
            </a>
          </div>
          <a
            href={instagram}
            target="_blank"
            className="bg-rose-600 w-full text-center text-white px-8 py-2 rounded  font-semibold"
          >
            <button> Instagram</button>
          </a>
          <a
            href={linkedIn}
            target="_blank"
            className="bg-[#0077b5] w-full text-center px-8  py-2 rounded text-white font-semibold"
          >
            <button>LinkedIn</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
