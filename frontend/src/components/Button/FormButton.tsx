import React from "react";

export default function FormButton({
  handleSubmit,
  type = "Button",
  action = "submit",
  text,
  disabled = false
}: {
  handleSubmit: any;
  type: string;
  action: string;
  text: string;
  disabled: boolean;
}) {
  return (
    <>
      {type === "Button" ? (
        <button
          disabled={disabled}
          type={action === "submit" ? "submit" : action === "reset" ? "reset" : "button"}
          className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white mt-10 ${disabled ? 'bg-gray-500 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'}`}
          onSubmit={handleSubmit}
        >
          {text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
}
