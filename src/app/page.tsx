import { headers } from "next/headers";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <header>
      <nav className="flex  w-full  bg-black h-48 text-white justify-between">
        <div className="bg-purple-700 h-12 w-96 "></div>

      <div className="flex justify-center mb-96">
        <div className="bg-red-600 w-80 h-10"></div>
        <div className="bg-orange-800 w-72 h-9"></div>
        </div>
      </nav>
    </header>
    </div>
  );
}
