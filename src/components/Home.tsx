import logo from "../logo.svg";

function Home(props: {
  data: { id: number; name: string }[];
  setvis: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  formVis: boolean;
}) {
  const FormValue = [];
  return (
    <>
      <div className="flex ">
        <img
          src={logo}
          alt="logo"
          className="hover:animate-spin  duration-1000 w-52 h-32"
        ></img>
        <h1 className="py-12">Welcome to Home Page</h1>
      </div>

      <div className="flex justify-center">
        <button
          className="bg-blue-600 text-white rounded-lg px-4 py-2 my-4 w-3/5"
          onClick={() => {
            props.setvis(!props.formVis);
          }}
          type="button"
        >
          Open Form
        </button>
      </div>
    </>
  );
}

export default Home;
