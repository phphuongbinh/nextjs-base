import Image from "next/image";
import Butterfly from "@public/butterfly.jpg";

export default function Home() {
  return (
    <>
      <img src="/butterfly.jpg" alt="butterfly" />
      <div className="relative w-full h-full">
        <Image src={Butterfly} alt="" fill></Image>
      </div>
    </>
  );
}
