const Card = ({ title, text, btnText }) => {
  return (
    <div>
      <div className="bg-[#212529] max-w-xs border border-white shadow-2xl h-[420px] mx-auto">
        <div
          className="bg-[#868e96] max-w-sm h-52
        ]\"
        >
          <p className="flex py-20 font-semibold  justify-center items-center">
            Image Cap
          </p>
        </div>
        <div className="px-6 py-4 space-y-4">
          <h1 className="text-[#c6d6e0] font-semibold text-xl">{title}</h1>
          <p className="text-[#c6d6e0]">{text}</p>
          <button
            type="button"
            className="px-4 py-2 rounded text-white bg-[#0d6efd]"
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
