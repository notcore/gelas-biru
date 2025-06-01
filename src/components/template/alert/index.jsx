"use client";
import { useEffect, useState } from "react";

export default function Alert({ pesan = "", durasi = 3000 }) {
  const [muncul, setMuncul] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setMuncul(false), durasi);
    return () => clearTimeout(timer);
  }, [durasi]);

  if (!muncul || !pesan) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white text-blue-400 px-4 py-2 rounded-lg shadow-md z-[9999] animate-fade-in-down">
      {pesan}
    </div>
  );
}
