import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { redirect } from "react-router-dom";

const Books = () => {
  const [data, setData] = useState([]);
  // const [hover, setHover] = useState(false);

  const COLLECTION = "books";

  async function dataFull() {
    try {
      const querySnapshot = await getDocs(collection(db, COLLECTION));
      const dataFromApi = querySnapshot.docs.map((docs) => ({
        ...docs.data(),
        id: docs.id,
      }));

      setData(dataFromApi);
    } catch (errors) {
      console.log(errors);
    }
  }
  useEffect(() => {
    dataFull();
  }, []);

  const delOpt = async (id) => {
    const delBook = doc(db, "books", id);
    await deleteDoc(delBook);
    dataFull();
  };

  // const upDate = async (id) => {
  //   const checkId = doc(db, "books", id);
  //   // console.log(checkId.id);
  //   if (id == checkId.id) {
  //     return redirect("/update");
  //   }

  // dataFull();
  // };
  // console.log(data);
  return (
    <div className="p-10 grid grid-cols-3 gap-10">
      {data.map((docs) => {
        return (
          <div key={docs.id}>
            <Cards dataa={docs} delOpts={delOpt} />
            {/* <div */}
          </div>
        );
      })}
    </div>
  );
};

export default Books;
