import React from "react";

function AppContainer(props: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex h-screen items-center bg-slate-800">
        {props.children}
      </div>
    </>
  );
}

export default AppContainer;
