import React, { ReactNode } from 'react';

export default function Section({ children }: { children: ReactNode }) {
  return <div className="bg-amber-500 rounded p-2">{children}</div>;
}
