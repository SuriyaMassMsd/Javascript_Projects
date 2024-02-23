import React from "react";

const TextArea = ({
  label,
  name,
  placeholder,
  type,
  required,
  register,
  errors,
}) => {
  return (
    <div className="flex flex-col space-y-3">
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>
      <textarea
        className="px-4 py-2 rounded placeholder:text-gray-400 outline-none  text-zinc-700 bg-gray-200"
        type={type}
        id={name}
        placeholder={placeholder}
        name={name}
        cols="4"
        // required={required}
        {...register}
        rows="2"
      ></textarea>
      {errors && <span className="text-red-700">{errors.message}</span>}
    </div>
  );
};

export default TextArea;
