import Link from "next/link";

export default function Folder3() {
  return (
    <div className="p-20 flex flex-col gap-5">
      <h1>Folder 3</h1>
      <Link href="/folder1/folder4" className="text-blue-400">
        Folder 4
      </Link>
      <Link href="/contact" className="text-green-400">
        Contact
      </Link>
    </div>
  );
}
