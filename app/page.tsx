import Image from "next/image";
import { FaAppleWhole } from "react-icons/fa6";
import { GiTestTubes } from "react-icons/gi";
import { FaHouse } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <Image src="/logo.jpg" width={512} height={300} alt={"Logo"} />
      {/* <div
        style={{
          filter: "drop-shadow(0px 0px 4px #ffffff);",
        }}
        className="mb-10 rounded-md text-lg text-center p-4 text-slate-100 shadow-slate-100"
      >
        
      </div> */}
      {/* <Image
        src="/food.png"
        width={1526}
        height={400}
        alt="Picture of food"
        className="rounded-lg shadow-lg shadow-blue-600"
      ></Image> */}
      <div className="mb-10 mt-10 p-20 w-full rounded-md text-lg text-center p-4 text-slate-100 shadow-slate-100 bg-[url('/food-tint.png')]">
        <p
          style={{
            filter: "drop-shadow(0px 0px 4px #000000);",
          }}
        >
          <FaAppleWhole className="w-full text-center text-5xl mb-5" />
          Sme Slovenská spoločnosť, ktrorá pôsobí v oblasti potravinárstva,
          kvality, testovania, a optimalizácií procesov.
          <br />
          Našimi produktami sú testy potravín, hotových a spracovaných jedál na
          prítomnosť rôznych kontaminantov.
        </p>
      </div>
      <div className="mb-10 p-20 w-full rounded-md text-lg text-center p-4 text-slate-100 shadow-slate-100 bg-[url('/lab-tint.png')]">
        <p
          style={{
            filter: "drop-shadow(0px 0px 4px #000000);",
          }}
        >
          <GiTestTubes className="w-full text-center text-5xl mb-5" />
          Ponúakme vývoj v oblasti procesov v potravinárskom a spracovateľskom
          priemysle s dôrazom na zelené technológie a cirkularitu, <br />s
          minimalizáciou odpadov, zvyšovaním kvality a zjednodušovaním procesov.
        </p>
      </div>
      <div
        className="flex flex-row mb-10 rounded-md text-lg text-left p-4 text-slate-100 shadow-slate-100 w-1/4"
        style={{
          filter: "drop-shadow(0px 0px 4px #ffffff);",
        }}
      >
        <div className="basis-1/2 text-right mr-10">
          <div className="flex flex-row-reverse mb-2">
            <FaHouse />
          </div>
          <b>PURLY s.r.o.</b> <br />
          Holíčska 3106/8 <br />
          851 05 Bratislava
        </div>
        <div className="basis-1/2">
          <div className="mb-2">
            <FaComputer />
          </div>
          info@purly.sk <br />
          0915 117775
        </div>
      </div>
    </main>
  );
}
