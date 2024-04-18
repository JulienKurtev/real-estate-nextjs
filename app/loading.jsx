"use client";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

//styles for the loader spinner which is comming from react spinners library
const override = {
  display: "block",
  margin: "100px auto",
};

const Loading = ({ loading }) => {
  return (
    <ClipLoader
      color="#eb82f6"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

export default Loading;
