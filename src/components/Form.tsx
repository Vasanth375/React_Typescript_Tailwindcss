import React, { useEffect, useState } from "react";

interface formField {
  id: number;
  label: string;
  fieldType: string;
  value: string;
}

function Form(props: {
  formVis: boolean;
  setvis: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}) {
  const labelText: formField[] = [
    {
      id: 1,
      label: "firstName",
      fieldType: "text",
      value: "",
    },
    {
      id: 2,
      label: "lastName",
      fieldType: "text",
      value: "",
    },
    {
      id: 3,
      label: "Email",
      fieldType: "mail",
      value: "",
    },
    {
      id: 4,
      label: "date of birth",
      fieldType: "date",
      value: "",
    },
  ];

  const initialValues: () => formField[] = () => {
    const localstoragevalues = localStorage.getItem("formField");
    const finalValues = localstoragevalues
      ? JSON.parse(localstoragevalues)
      : labelText;
    return finalValues;
  };

  const [printLabel, setLabel] = useState(initialValues());
  const [textField, setField] = useState("");
  // const [removeField, setremove] = useState("");
  const formFieldJSON = (state: formField[]) => {
    localStorage.setItem("formField", JSON.stringify(state));
  };
  const updateLabel = () => {
    console.log("add Field", printLabel.length);
    if (textField !== "") {
      setLabel((printLabel) => [
        ...printLabel,
        {
          id: Number(new Date()),
          label: textField,
          fieldType: "text",
          value: "",
        },
      ]);
      setField("");
    }
    console.log("After add Field", printLabel.length);
  };

  const setValues = (data: formField, value: string) => {
    const updatedLabel = printLabel.map((field) =>
      field.id === data.id ? { ...field, value: value } : field
    );
    console.log(updatedLabel);
    setLabel(updatedLabel);
  };
  const removeLabel = (id: number) => {
    setLabel(printLabel.filter((field) => field.id !== id));
  };

  useEffect(() => {
    console.log("Form Component is Mounting");

    // currently we are in Form Component is Mounting then title will be this
    document.title = "React Form";
    return () => {
      // when leaving(Unmounted) the component it title will be changed
      document.title = "React App";
    };
  }, []);

  // here this useeffect callback function trigggered when ever any changes made to the printLabel object
  useEffect(() => {
    // here this timout function calls for every single second and calls this function to store data
    let timout = setTimeout(() => {
      formFieldJSON(printLabel);
    }, 1000);
    return () => {
      clearTimeout(timout);
    };
  }, [printLabel]);
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
                    type={data.fieldType}
                    required
                    value={data.value}
                    className="bg-transparent rounded-lg shadow-lg border-2 p-2 h-12 w-80 outline-slate-200"
                    onChange={(e) => setValues(data, e.target.value)}
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
      </form>

      <button
        type="submit"
        className="bg-blue-600 text-white rounded-lg p-1 mt-2"
        onClick={() => {
          setLabel([...printLabel]);
          formFieldJSON(printLabel);
        }}
      >
        Save
      </button>
      <button
        className="bg-blue-600 text-white ml-3 rounded-lg p-1 mt-2"
        onClick={(e) => {
          props.setvis(!props.formVis);
        }}
      >
        Close Form
      </button>
      <button
        className="bg-blue-600 text-white ml-3 rounded-lg p-1 mt-2"
        onClick={(e) => {
          localStorage.removeItem("formField");
        }}
      >
        Clear Memory
      </button>
    </>
  );
}

export default Form;
