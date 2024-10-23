import { ReactNode } from "react";

export default function Data({ children }: { children: ReactNode }) {
  return (
    <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-300 whitespace-nowrap max-w-72 overflow-ellipsis">
      {children}
    </td>
  );
}
