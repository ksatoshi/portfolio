import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center text-4xl">About: ksatoshi</div>
      <div className="flex items-center justify-center">
        <Image className="object-cover h-48 w-48" src="/profile.webp" alt="ナノブロックグラードンの画像" width={500} height={500}/>
      </div>
      <div className="flex items-center justify-center text-3xl">ksatoshi</div>
      <h1 className="flex items-left justify-center">links:</h1>
      <div className="flex items-center justify-center">
      github <a href="https://github.com/ksatoshi" className="text-blue-500">https://github.com/ksatoshi</a>
      </div>
      <div className="flex items-center justify-center">
      zenn <a href="https://zenn.dev/ksatoshi" className="text-blue-500">https://zenn.dev/ksatoshi</a>
      </div>
      <div className="flex items-center justify-center">
        A stdent of Future University Hakodate
      </div>
    </main>
  );
}
