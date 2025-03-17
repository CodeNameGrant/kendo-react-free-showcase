import React, { ReactNode } from 'react';

export default function Section({ children }: { children: ReactNode }) {
  return <div className="border border-black rounded p-2">{children}</div>;
}
