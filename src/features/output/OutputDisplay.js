import BillPerPerson from "./BillPerPerson";
import Reset from "./Reset";
import TipPerPerson from "./TipPerPerson";

export default function OutputDisplay() {
  return (
    <div className="w-[450px] h-[450px] bg-teal-800 rounded-2xl">
      <BillPerPerson />
      <TipPerPerson />
      <Reset />
    </div>
  );
}
