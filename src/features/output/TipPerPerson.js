import { useEffect, useState } from "react";
import { useInput } from "../../context/Context";

export default function TipPerPerson() {
  const { tip, people, bill, error } = useInput();
  const [totalTip, setTotalTip] = useState(0);

  useEffect(
    function () {
      if (people === "" || people === "0") {
        setTotalTip("0.00");
        return;
      }
      if (error) {
        setTotalTip("0.00");
        return;
      }
      setTotalTip(((bill * tip) / people).toFixed(2));
    },
    [bill, people, tip, error]
  );

  return (
    <div className="flex justify-between items-center mx-10 my-16">
      <div>
        <p className="font-bold text-white tracking-wide text-md">Tip Amount</p>
        <p className="tracking-wide text-teal-100 text-opacity-50 text-sm">
          / person
        </p>
      </div>

      <p className="text-teal-500 text-5xl font-bold">
        ${isNaN(totalTip) ? "0.00" : totalTip}
      </p>
    </div>
  );
}
