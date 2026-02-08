import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-8 pb-12">
      <h1 className="text-2xl md:text-3xl text-zinc-800 font-medium mb-1">
        Hey, ben Melisa 👋
      </h1>
      <p className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
        Bilgisayar Mühendisi 
      </p>
      <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-8">
        <Image
          src="/avatar1.png"
          alt="Melisa Çiçek Soyubey"
          width={192}
          height={192}
          className="object-cover w-full h-full"
          unoptimized
          priority
        />
      </div>
    </section>
  );
}
