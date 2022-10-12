import React from "react";
import Layout from "../../../components/layout/Layout";
import CrashGame from "./crashGame";

function Crash() {
  return (
    <React.Fragment>
      <Layout content={<CrashGame />} />
    </React.Fragment>
  )
}


export default Crash;