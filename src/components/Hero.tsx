import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-6 pb-8 sm:pt-8 sm:pb-12 px-2">
      <h1 className="text-xl sm:text-2xl md:text-3xl text-zinc-800 font-medium mb-1">
        Hey, ben Melisa 👋
      </h1>
      <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-4 sm:mb-6">
        Bilgisayar Mühendisi
      </p>
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 sm:mb-8">
        <Image
          src="/avatar1.jpg"
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
