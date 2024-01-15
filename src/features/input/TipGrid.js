import { useInput } from "../../context/Context";
import TipSquare from "./TipSquare";

export default function TipGrid() {
  const { handleTip, handleSelected, handleCustomTip, customTip } = useInput();
  return (
    <div className="mt-10 mx-6">
      <p className="font-bold text-lg text-slate-500 mb-2">Select Tip %</p>
      <div className="grid grid-rows-2 grid-cols-3 gap-x-4 gap-y-4">
        <TipSquare>5</TipSquare>
        <TipSquare>10</TipSquare>
        <TipSquare>15</TipSquare>
        <TipSquare>25</TipSquare>
        <TipSquare>50</TipSquare>
        <input
          placeholder="Custom"
          value={customTip}
          onChange={(e) => {
            handleSelected(null);
            handleCustomTip(e.target.value);
            handleTip(e.target.value / 100);
          }}
          className="placeholder-slate-500 text-center text-3xl placeholder:text-2xl font-bold tracking-wide focus:placeholder-opacity-0 bg-slate-100 text-teal-800 focus:outline-none focus:ring focus:ring-teal-500 rounded-lg"
        />
      </div>
    </div>
  );
}
