import { useInput } from "../../context/Context";

export default function Reset() {
  const {
    handleBill,
    handleTip,
    handleCustomTip,
    setPeople,
    handleSelected,
    setError,
  } = useInput();
  return (
    <button
      className="bg-teal-100 border border-teal-100 text-teal-800 text-xl mx-14 my-20 w-9/12 py-3 rounded-lg uppercase font-bold tracking-wide hover:cursor-pointer hover:bg-teal-800 hover:border hover:text-teal-100 hover:border-teal-100 transition-all duration-100"
      onClick={() => {
        handleBill("");
        handleTip(0);
        handleCustomTip("");
        handleSelected(null);
        setPeople("");
        setError(false);
      }}
    >
      reset
    </button>
  );
}
