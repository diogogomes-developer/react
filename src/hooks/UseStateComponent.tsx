"use client";
import React, { useState } from "react";

export const UseStateComponent = () => {
  const [displayName, setDisplayName] = useState("Pedro");

  let displayNameWithoutUseState = "Pedro2";

  function changeName() {
    setDisplayName("Diogo");
    displayNameWithoutUseState = "Diogo2";
  }

  return (
    <div>
      <button onClick={changeName}>Change name</button>
      <p>Name with use state: {displayName}</p>
      <p>Name without use state: {displayNameWithoutUseState}</p>
    </div>
  );
};
