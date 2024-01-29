import BlogCart from "../components/BlogCart";
import Posts from "../components/Posts";
// import CartBox from "../components/Cart";

function Blogs() {
  return (
    <div>
      <h1 className="text-2xl font-cartFont font-semibold ml-[60px] mt-10">
        Latest
      </h1>
      <div className="grid grid-row-1 sm:grid-cols-2 gap-10">
        <div>
          <BlogCart />
        </div>
        <div className="-mt-6 max-w-xl ">
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
