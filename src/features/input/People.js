import { useEffect } from "react";
import { useInput } from "../../context/Context";

export default function People() {
  const { error, people, setPeople, setError } = useInput();

  useEffect(() => {
    const isNumber = !isNaN(people);
    const isInteger = isNumber && Number.isInteger(Number(people));

    setError(!isInteger);
  }, [people, setError]);

  return (
    <div className="mt-10 mx-6">
      <div className="flex items-end justify-between">
        <label className="font-bold text-lg text-slate-500 tracking-wide">
          Number of People
        </label>
        {error && (
          <p className="font-bold text-[12px] text-red-500">
            Enter a Valid WHOLE Number!
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
          className="h-10 w-10 mx-2 text-slate-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>

        <input
          name="People"
          type="text"
          placeholder="0"
          value={people}
          onChange={(e) => {
            setPeople(e.target.value);
          }}
          required
          className="bg-slate-100 px-2 py-2 text-2xl text-teal-800 w-full font-bold focus:outline-none rounded-lg text-right"
        />
      </div>
    </div>
  );
}
