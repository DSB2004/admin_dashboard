import { ReactNode } from "react";

export default function Head({ children }: { children: ReactNode }) {
  return (
    <th className="px-4 py-2 border-b border-gray-200 font-semibold text-gray-700">
      {children}
    </th>
  );
}
