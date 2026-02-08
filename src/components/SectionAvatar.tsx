import Image from "next/image";
import { profile } from "@/data/profile";

interface SectionAvatarProps {
  src: string;
}

export default function SectionAvatar({ src }: SectionAvatarProps) {
  return (
    <div className="flex justify-center mb-6">
      <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg ring-2 ring-zinc-200/80">
        <Image
          src={src}
          alt={profile.name}
          width={96}
          height={96}
          className="object-cover w-full h-full"
          unoptimized
        />
      </div>
    </div>
  );
}
