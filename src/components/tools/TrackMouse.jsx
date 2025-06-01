import { useEffect } from "react";

export default function TrackMouse() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      console.log("X:", e.clientX, "Y:", e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}
