import { ReactNode } from "react";

export default function Header({ children }: { children: ReactNode }) {
  return <thead className="bg-white rounded-lg w-full">{children}</thead>;
}
