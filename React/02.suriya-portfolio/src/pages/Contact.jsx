const Contact = () => {
  return (
    <div className="bg-gray-400 h-screen p-4">
      <div className="flex max-w-[840px]  mx-auto  bg-black shadow-2xl shadow-black">
        <div>
          <img
            src="https://cdn.dribbble.com/users/1604313/screenshots/6905805/contact-illustration.gif"
            alt=""
            className="h-[560px] w-[440px] object-cover"
          />
        </div>
        <div className="bg-white p-10">
          <h1 className="text-3xl font-black text-center mb-4">Contact Me</h1>
          <form className="flex flex-col space-y-6">
            <label htmlFor="name" className="font-semibold">
              Fullname
            </label>
            <input
              type="text"
              id="name"
              name="fullname"
              placeholder="enter your name"
              className="input "
            />
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter your email"
              className="input"
            />
            <label htmlFor="mess" className="font-semibold">
              Message
            </label>
            <textarea
              name="message"
              id="mess"
              cols="30"
              rows="3"
              placeholder="give me short message"
              className="input"
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-800 px-4 py-2 text-white font-semibold hover:bg-indigo-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
