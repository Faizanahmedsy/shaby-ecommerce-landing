import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-6xl font-bold flex">
        Your T
        <span className="flex justify-center items-center">
          <Image
            src="https://api.iconify.design/fluent-emoji/laptop.svg"
            height={50}
            width={50}
            alt="laptop"
          />
        </span>
        ch Cravings ends here
      </h1>
    </div>
  );
}
