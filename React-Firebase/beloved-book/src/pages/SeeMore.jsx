import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { data } from "autoprefixer";
import AddBook from "./AddBook";

const SeeMore = () => {
  const { id } = useParams();

  console.log(id);

  const [data, setData] = useState([]);

  const COLLECTION = "books";

  useEffect(() => {
    async function getingData() {
      const docRef = doc(db, COLLECTION, id);
      const getObj = await getDoc(docRef);
      return console.log(getObj.data());
    }

    getingData();
  }, []);

  return (
    <div className="my-10 sm:max-w-5xl "></div>
    // <AddBook />
  );
};

export default SeeMore;
