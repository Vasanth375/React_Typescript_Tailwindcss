import React from "react";

function Form(props: {
  formVis: boolean;
  setvis: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}) {
  const labelText = [
    {
      id: 1,
      label: "firstName",
      type: "text",
    },
    {
      id: 2,
      label: "lastName",
      type: "text",
    },
    {
      id: 3,
      label: "Email",
      type: "mail",
    },
    {
      id: 4,
      label: "date of birth",
      type: "date",
    },
  ];
  return (
    <>
      <form action="#">
        {labelText.map((data) => {
          return (
            <>
              <div className="flex flex-col py-2">
                <label htmlFor={data.label} className="my-1">
                  {data.label}
                </label>
                <input
                  type={data.type}
                  required
                  className="bg-transparent rounded-s shadow-lg border-2 p-2 h-6 outline-slate-200"
                ></input>
              </div>
            </>
          );
        })}
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg p-1 mt-2"
        >
          Submit
        </button>
        <button
          className="bg-blue-600 text-white ml-3 rounded-lg p-1 mt-2"
          onClick={() => {
            props.setvis(!props.formVis);
          }}
        >
          Close Form
        </button>
      </form>
    </>
  );
}

export default Form;
