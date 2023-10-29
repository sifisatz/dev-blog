import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-1 ">
   <Link href={"/about"}>About</Link>
   <Link href={"/blog/1"}>Blog 1</Link>
   <Link href={"/blog/2"}>Blog 2</Link>
   <Link href={"/blog/3"}>Blog 3 </Link>
   </div>

  )
}
