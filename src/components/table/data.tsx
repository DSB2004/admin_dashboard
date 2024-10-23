import { ReactNode } from "react";

export default function Data({ children }: { children: ReactNode }) {
  return (
    <td className="px-4 py-2 border-b border-gray-100 text-gray-800 whitespace-nowrap  overflow-ellipsis">
      {children}
    </td>
  );
}
