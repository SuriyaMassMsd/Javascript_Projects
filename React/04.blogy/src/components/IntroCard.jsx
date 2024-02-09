// import IntroCard from "../components/IntroCard";

import { useState, useEffect  } from "react";
import { Link } from "react-router-dom";


const Card = () => {
  const [blogy, setBlogy] = useState([]);

  useEffect(() => {
    const blogsPost = async () => {
      const url =
        "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30";

      const getPostApi = await fetch(url);
      const response = await getPostApi.json();
      // console.log(response.blogs);
      setBlogy(response.blogs);
    };

    blogsPost();
  }, []);

  const getDataFromApi = blogy.map((post) => {
    let {
      id,
      photo_url,
      category,
      title,
      updated_at,
      description,
      content_text,
    } = post;

    console.log(post);
    return (
      <div  key={id}>
        <div  className=" p-2 bg-white shadow-2xl rounded relative    max-w-[350px] m-10 ">
          <div className="flex flex-col  ">
            <img
              // src="data:image/jpeg;base64,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"
              src={photo_url}
              alt="blog-image"
              className="w-96 object-cover h-40 rounded  "
            />
          </div>
          <span className="bg-yellow-400 absolute capitalize top-2     px-3 py-0.5 font-semibold font-logoFont  rounded  right-2">
            {category}
          </span>
          <div className="bg-white px-4 py-1 space-y-1">
            <h1 className="text-gray-400 text-sm ">Updated at {updated_at}</h1>
            <h1 className="font-semibold font-logoFont text-lg">{title}</h1>
            <h1 className="px-5 ">{description}</h1>
          </div>
         <Link to={`/blogs/${id}`}>
         <button className="bg-blue-700 mt-2 text-[15px] text-white  font-logoFont shadow-2xl rounded p-2 w-full">
            Read more
          </button>
         </Link>
        </div>
      </div>
    );
  });
  return (
  <div className =" grid grid-cols-3 gap-4 ">
       
   
        {getDataFromApi}

    </div>)
};

export default Card;
