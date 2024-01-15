import Bill from "./Bill";
import People from "./People";
import TipGrid from "./TipGrid";

export default function InputDisplay() {
  return (
    <div className="w-[450px] h-[450px] rounded-2xl">
      <Bill />
      <TipGrid />
      <People />
    </div>
  );
}
