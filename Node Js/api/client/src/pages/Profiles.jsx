import React from "react";
import Card from "../components/Card";
import { useState, useEffect } from "react";

const Profiles = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getDataFromApi() {
      const reqServer = await fetch("/api");
      const jsonData = await reqServer.json();

      setData(jsonData);
    }

    getDataFromApi();
  }, []);

  console.log(data);

  return (
    <div className="grid grid-cols-3 gap-14 m-14 justify-center items-center ">
      {data.map(
        ({
          id,
          name,
          github,
          projects,
          tasks,
          linkedIn,
          instagram,
          avatar_url,
        }) => {
          return (
            <Card
              id={id}
              name={name}
              github={github}
              project={projects}
              linkedIn={linkedIn}
              instagram={instagram}
              avatar_url={avatar_url}
              tasks={tasks}
            />
          );
        }
      )}
    </div>
  );
};

export default Profiles;
