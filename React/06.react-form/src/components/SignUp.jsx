const SignUp = ({
  label,
  name,
  placeholder,
  required,
  type,
  handleChange,
  value,
}) => {
  return (
    <div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="fullName" className="text-lg font-semibold">
          {label}
        </label>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          // value={""}
          className="px-4 outline-none  bg-zinc-300 rounded py-2 placeholder:text-gray-400"
          placeholder={placeholder}
          required={required}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SignUp;
