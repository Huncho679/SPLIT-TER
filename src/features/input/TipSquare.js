import { useInput } from "../../context/Context";

export default function TipSquare({ children }) {
  const { handleTip, selected, handleSelected, handleCustomTip } = useInput();

  return (
    <div
      className={`w-[123.33px] h-[60px]  flex items-center justify-center rounded-lg ${
        selected === children / 100
          ? "bg-teal-100 text-teal-800"
          : "text-white bg-teal-800"
      } hover:cursor-pointer transition-all duration-100`}
      onClick={() => {
        if (selected === children / 100) {
          handleSelected(null);
          handleTip(0);
          return;
        }
        handleTip(children / 100);
        handleSelected(children / 100);
        handleCustomTip("");
      }}
    >
      <span className="text-3xl font-bold">{children}</span>
      <span className="text-2xl font-bold">%</span>
    </div>
  );
}
