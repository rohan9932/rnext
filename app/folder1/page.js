import Link from "next/link";

export default function Folder1() {
  // suppose we want different ui when we do client side navigation to folder2 and when we directly enter the url of folder2, we can intercept navigation 

  return (
    <div className="p-20 flex flex-col gap-5">
      <h1>Folder 1</h1>
      <Link href="/folder1/folder2" className="text-blue-400">
        Folder 2
      </Link>
      <Link href="/folder1/folder3" className="text-blue-400">
        Folder 3
      </Link>
    </div>
  )
}
