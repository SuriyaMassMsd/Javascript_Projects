import React from "react";

const FormInput = ({
  label,
  name,
  placeholder,
  type,
  register,
  required,
  errors,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} className="font-bold text-md">
        {label}
      </label>
      <input
        className="px-4 py-2 rounded placeholder:text-gray-400 outline-none  text-zinc-700 bg-gray-200"
        type={type}
        id={name}
        placeholder={placeholder}
        name={name}
        {...register}

        // required={required}
      />
      {errors && <span className="text-red-700">{errors.message}</span>}
    </div>
  );
};

export default FormInput;
