import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const InputItems = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState(() => {
    const getItems = localStorage.getItem("items");
    return getItems ? JSON.parse(getItems) : [];
  });
  const [hover, setHover] = useState(false);

  const subItem = (e) => {
    e.preventDefault();
    setList((prev) => {
      return [...prev, { id: uuidv4(), values: text }];
    });
    setText("");
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(list));
  }, [list]);

  function addItems(e) {
    const newValue = e.target.value;
    setText(newValue);
  }

  const delOpt = (index) => {
    setList((prevList) => {
      return prevList.filter((item) => item.id !== index);
    });
  };

  return (
    <div className="mx-auto p-20  flex flex-col max-w-2xl bg-white shadow-2xl mt-10">
      <h1 className="text-3xl font-black  text-center mb-10">Add Your Items</h1>
      <ol className="list-decimal  mx-auto mb-4">
        {list.map(({ values, id }) => (
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="grid grid-cols-2 gap-4"
          >
            <li
              key={id}
              className={`font-semibold  capitalize  
            `}
            >
              {values}
            </li>
            {hover ? (
              <button onClick={() => delOpt(id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  className="hover:cursor-pointer hover:text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
                  ></path>
                </svg>
              </button>
            ) : (
              ""
            )}
          </div>
        ))}
      </ol>
      <form className="space-x-4 mx-auto" onSubmit={subItem}>
        <input
          type="text"
          value={text}
          name="inputValue"
          placeholder="Enter your items"
          className="px-4 py-2 bg-gray-300 rounded shadow-2xl placeholder:text-gray-500 outline-none"
          onChange={addItems}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 rounded font-semibold"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default InputItems;
