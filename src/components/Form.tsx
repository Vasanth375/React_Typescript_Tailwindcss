import React, { useState } from "react";

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
  const [printLabel, setLabel] = useState(labelText);
  const [textField, setField] = useState("");
  // const [removeField, setremove] = useState("");
  const updateLabel = () => {
    console.log("add Field", printLabel.length);
    if (textField !== "") {
      setLabel((printLabel) => [
        ...printLabel,
        {
          id: Number(new Date()),
          label: textField,
          type: "text",
        },
      ]);
      setField("");
    }
    console.log("After add Field", printLabel.length);
  };

  const removeLabel = (id: number) => {
    setLabel(printLabel.filter((field) => field.id !== id));
  };
  return (
    <>
      <form action="#">
        {printLabel.map((data) => {
          return (
            <>
              <div className="flex flex-col py-2">
                <label htmlFor={data.label} className="my-1">
                  {data.label}
                </label>

                <div className="flex justify-between">
                  <input
                    type={data.type}
                    required
                    className="bg-transparent rounded-lg shadow-lg border-2 p-2 h-12 w-80 outline-slate-200"
                  ></input>
                  <button
                    type="button"
                    className="bg-blue-600 rounded-md p-1 h-10 w-20 text-white"
                    onClick={() => removeLabel(data.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </>
          );
        })}

        <hr />
        <div className="flex py-1.5 justify-between">
          <input
            type="text"
            onChange={(e) => setField(e.target.value)}
            required
            placeholder="Enter Text Field"
            className="bg-transparent rounded-lg shadow-lg border-2 p-2 h-12 w-80 outline-slate-200"
          ></input>
          <button
            type="button"
            className="bg-blue-600 rounded-md p-1 h-10 w-20 text-white"
            onClick={updateLabel}
          >
            Add Field
          </button>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg p-1 mt-2"
        >
          Submit
        </button>
        <button
          className="bg-blue-600 text-white ml-3 rounded-lg p-1 mt-2"
          onClick={(e) => {
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
