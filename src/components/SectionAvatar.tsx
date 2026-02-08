import Image from "next/image";

interface SectionAvatarProps {
  src: string;
}

export default function SectionAvatar({ src }: SectionAvatarProps) {
  return (
    <div className="flex justify-center mb-3 sm:mb-4">
      <Image
        src={src}
        alt=""
        width={80}
        height={80}
        className="w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover"
        unoptimized
      />
    </div>
  );
}
