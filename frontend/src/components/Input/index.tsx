import React from "react";

interface Dropdown {
  title: string;
  value: string | number | any;
}

export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass,
  maxlength = 1000,
  dropdownData = [],
  multiline = false,
}: {
  handleChange: any;
  value: any;
  labelText: string;
  labelFor: string | any;
  id: any;
  name: string;
  type: string;
  isRequired: boolean;
  placeholder: string;
  customClass: any;
  maxlength?: number;
  dropdownData?: Array<Dropdown>;
  multiline?: boolean;
}) {
  return (
    <div className="mt-4">
      <label htmlFor={labelFor} className="text-white ml-1">
        {labelText}
      </label>
      {type === "dropdown" && (
        <select
          onChange={handleChange}
          value={value}
          id={id}
          name={name}
          className={
            "rounded-md appearance-none block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm " +
            customClass
          }
          placeholder={placeholder}
        >
          {
            dropdownData && dropdownData.map((item: any, index: number) => <option key={index} value={item.value}>{item.title}</option>)
          }
        </select>
      )}
      {!multiline && type !== "dropdown" ? (
        <input
          onChange={handleChange}
          value={value}
          id={id}
          name={name}
          type={type}
          required={isRequired}
          maxLength={maxlength}
          className={
            "rounded-md appearance-none block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm " +
            customClass
          }
          placeholder={placeholder}
        />
      ) : multiline && type !== "dropdown" && (
        <textarea
          onChange={handleChange}
          value={value}
          id={id}
          name={name}
          required={isRequired}
          maxLength={maxlength}
          className={
            "rounded-md min-h-8 appearance-none block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm " +
            customClass
          }
          placeholder={placeholder}
        ></textarea>
      )}
    </div>
  );
}
