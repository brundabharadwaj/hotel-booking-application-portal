import React from 'react'

const Button = ({
  handleChange,
  labelText,
  id,
  customClass,
  disabled = false
}: {
  handleChange: any;
  labelText: string;
  id: any;
  customClass: any;
  disabled: boolean;
}) => {
  return (
    <div className="my-5">
      <button
        disabled={disabled}
        onClick={handleChange}
        id={id}
        type="submit"
        className={`relative block px-3 py-2 border text-gray-900 font-medium hover:text-gray-100 focus:outline-none focus:z-10 sm:text-sm ${disabled ? `bg-zinc-400 hover:bg-zinc-400 cursor-not-allowed hover:text-gray-900` : `bg-blue-400 hover:bg-blue-800 cursor-pointer`} ` + customClass}
      >
        {labelText}
      </button>
    </div>
  )
}

export default Button