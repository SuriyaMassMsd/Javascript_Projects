import React, { useState } from "react";
import FormInput from "../components/FormInput";
import TextArea from "../components/TextArea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { storage } from "../firebase/firebase";
import { db } from "../firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AddBook = () => {
  const [data, setData] = useState({});
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  // console.log(data);

  const validateSchema = z.object({
    fullName: z
      .string()
      .min(3, { message: "Name must contain at least 3 character(s)" })
      .max(20),
    bookName: z.string().min(10).max(100),
    authorName: z
      .string()
      .min(3, { message: "Author name must contain at least 3 character(s)" })
      .max(20),
    price: z.string(),
    aboutBook: z.string().min(14).max(100),
    magicalPassage: z.string().min(14).max(120),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ resolver: zodResolver(validateSchema) });

  async function submitForm(datas) {
    try {
      const addData = await addDoc(collection(db, "books"), {
        ...datas,
        cover: data.img,
      });
      console.log(addData.id, datas);
      alert("Your Book Added Lovely ❤️");
      reset();
    } catch (errors) {
      console.log(errors);
    }
  }

  return (
    <main className="">
      <section className="mt-0">
        <div className="relative">
          <img
            src="https://elementor.com/cdn-cgi/image/f=auto,w=1536/marketing/wp-content/uploads/sites/9/2021/05/29.04.21_Web-Form-Design-Examples_15-Examples-of-Web-Form-Design-Done-Right_1200_628_2--1536x804.png"
            alt="bg-image"
            // className="h-screen w-full b  object-cover "
          />
        </div>
        <div className="bg-white max-w-3xl w-full ml-[300px] rounded mt-10 absolute top-20 px-10 py-6 shadow-2xl">
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#bb0884"
              fill-opacity="1"
              d="M0,128L34.3,112C68.6,96,137,64,206,85.3C274.3,107,343,181,411,218.7C480,256,549,256,617,224C685.7,192,754,128,823,122.7C891.4,117,960,171,1029,176C1097.1,181,1166,139,1234,133.3C1302.9,128,1371,160,1406,176L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
            ></path>
          </svg> */}
          <div className="flex items-center justify-center gap-4">
            <img
              width="45"
              height="45"
              src="https://img.icons8.com/arcade/100/book.png"
              alt="book"
            />
            <h1 className="font-semibold text-3xl text-center">
              Add <span className="text-rose-700"> Favorite </span> Book
            </h1>
          </div>

          <form
            action=""
            className="mt-8 space-y-6"
            onSubmit={handleSubmit(submitForm)}
          >
            <div className="grid grid-cols-2 gap-10">
              <FormInput
                label="Name"
                name="fullName"
                placeholder="Enter your name"
                required
                type="text"
                register={register("fullName", {
                  required: "this field is required",
                })}
                errors={errors.fullName}
              />
              <FormInput
                label="Book Name"
                name="title"
                placeholder="Book title"
                required
                type="text"
                register={register("bookName", {
                  required: "this field is required",
                })}
                errors={errors.bookName}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-10">
              <FormInput
                label="Author Name"
                name="authorname"
                placeholder="Author name"
                required
                type="text"
                register={register("authorName", {
                  required: "this field is required",
                })}
                errors={errors.authorName}
              />
              <FormInput
                label="Book Price"
                name="price"
                placeholder="Enter book price"
                required
                type="number"
                register={register("price", {
                  required: "this field is required",
                })}
                errors={errors.price}
              />
              <div className="space-y-2 flex flex-col">
                <label htmlFor="cover" className="font-semibold">
                  Cover Image
                </label>
                <input
                  // className="mt-7"
                  id="cover"
                  type="file"
                  style={{ display: "none" }}
                  {...register("cover")}
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <label
                  htmlFor="cover"
                  className="px-4 py-2 bg-rose-500 flex items-center rounded gap-2 justify-center font-semibold cursor-pointer"
                >
                  Upload Image{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    className="fill-current text-black"
                  >
                    <path
                      fill="currentColor"
                      d="M18 9q-.425 0-.712-.288T17 8V7h-1q-.425 0-.712-.288T15 6q0-.425.288-.712T16 5h1V4q0-.425.288-.712T18 3q.425 0 .713.288T19 4v1h1q.425 0 .713.288T21 6q0 .425-.288.713T20 7h-1v1q0 .425-.288.713T18 9M7 17h10q.3 0 .45-.275t-.05-.525l-2.75-3.675q-.15-.2-.4-.2t-.4.2L11.25 16L9.4 13.525q-.15-.2-.4-.2t-.4.2l-2 2.675q-.2.25-.05.525T7 17m-2 4q-.825 0-1.412-.588T3 19V5q0-.825.588-1.412T5 3h8q.425 0 .713.288T14 4v3q0 .425.288.713T15 8h1v1q0 .425.288.713T17 10h3q.425 0 .713.288T21 11v8q0 .825-.587 1.413T19 21z"
                    ></path>
                  </svg>
                </label>
              </div>
            </div>
            <TextArea
              label="About Book"
              name="aboutbook"
              placeholder="About that book"
              required
              type="text"
              register={register("aboutBook", {
                required: "this field is required",
              })}
              errors={errors.aboutBook}
            />
            <TextArea
              label="Magical Passage"
              name="magic"
              placeholder="AA Journey into My Favorite Book"
              required
              type="text"
              register={register("magicalPassage", {
                required: "this field is required",
              })}
              errors={errors.magicalPassage}
            />
            <button className="bg-rose-600 px-4 py-2 font-semibold text-lg hover:bg-rose-700 text-white w-full rounded">
              Add to favorite
            </button>
          </form>
        </div>
      </section>

      {/* <section className="bg-[#bb0884]">
        <div className="relative overflow-x-auto shadow-md p-10 sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Book Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Author
                </th>
                <th scope="col" className="px-6 py-3">
                  Your Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section> */}
    </main>
  );
};

export default AddBook;
