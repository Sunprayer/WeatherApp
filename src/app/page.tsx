import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 bg-gray-100 mi-h-screen">
      <Navbar />
    </div>
  );
}
