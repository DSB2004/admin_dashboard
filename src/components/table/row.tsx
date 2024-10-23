import { ReactNode } from "react";

export default function Row({ children }: { children: ReactNode }) {
  return (
    <tr className="hover:bg-gray-50 transition">
      {children}
    </tr>
  );
}
