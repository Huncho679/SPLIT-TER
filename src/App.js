import InputDisplay from "./features/input/InputDisplay";
import OutputDisplay from "./features/output/OutputDisplay";

export default function App() {
  return (
    <>
      <div className="text-center mt-[200px] uppercase tracking-[10px] text-3xl text-teal-500 font-bold">
        <p>spli</p>
        <p>tter</p>
      </div>

      <div className="flex gap-[50px] mx-auto w-[1000px] h-[500px] bg-white rounded-3xl mt-[100px] items-center justify-center">
        <InputDisplay />
        <OutputDisplay />
      </div>
    </>
  );
}
