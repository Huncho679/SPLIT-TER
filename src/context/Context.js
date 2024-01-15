import { createContext, useContext, useState } from "react";

const inputContext = createContext();

function Context({ children }) {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [selected, setSelected] = useState(null);
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("");
  const [error, setError] = useState(false);

  function handleCustomTip(ct) {
    setCustomTip(ct);
  }

  function handleSelected(tipSelected) {
    setSelected(tipSelected);
  }

  function handleBill(val) {
    setBill(val);
  }

  function handleTip(tipVal) {
    if (tipVal === "") {
      tipVal = 0;
    }
    setTip(tipVal);
    console.log(tipVal);
  }

  return (
    <inputContext.Provider
      value={{
        bill,
        handleBill,
        tip,
        handleTip,
        selected,
        handleSelected,
        customTip,
        handleCustomTip,
        people,
        setPeople,
        error,
        setError,
      }}
    >
      {children}
    </inputContext.Provider>
  );
}

function useInput() {
  const context = useContext(inputContext);
  return context;
}

export { Context, useInput };
