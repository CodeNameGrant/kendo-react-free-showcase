import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="space-y-2 m-2">{children}</div>;
}
