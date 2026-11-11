"use client";
import { useRouter } from "next/navigation";

export default function Button({ path, label }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  }

  return (
    <button onClick={handleClick} className="bg-blue-500 px-3 py-2 rounded text-gray-50">
      {label}
    </button>
  );
}
