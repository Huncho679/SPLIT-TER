import { useEffect, useState } from "react";
import { useInput } from "../../context/Context";

export default function Bill() {
  const { bill, handleBill } = useInput();
  const [error, setError] = useState(false);

  useEffect(
    function () {
      if (isNaN(bill)) {
        setError(true);
      } else {
        setError(false);
      }
    },
    [bill]
  );

  return (
    <div className="mt-5 mx-6">
      <div className="flex items-end justify-between">
        <label className="font-bold text-lg text-slate-500 tracking-wide">
          Bill
        </label>
        {error && (
          <p className="font-bold text-[12px] text-red-500">
            Enter a Valid Number!
          </p>
        )}
      </div>
      <div
        className={`flex mt-1 bg-slate-100 rounded-lg items-center focus:outline-none focus-within:ring ${
          error ? "focus-within:ring-red-500" : "focus-within:ring-teal-500"
        }`}
        tabIndex="0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="money-icon h-10 w-10 mx-2 text-slate-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <input
          name="Bill"
          placeholder="0"
          type="text"
          value={bill}
          onChange={(e) => {
            handleBill(e.target.value);
          }}
          required
          className="bg-slate-100 px-2 py-2 text-2xl text-teal-800 w-full font-bold focus:outline-none rounded-lg text-right"
        />
      </div>
    </div>
  );
}
