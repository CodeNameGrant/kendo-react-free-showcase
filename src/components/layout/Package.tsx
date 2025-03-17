import { ReactNode } from 'react';

type PackageProps = {
  id: string;
  children: ReactNode;
};
export default function Package({ id, children }: PackageProps) {
  return (
    <div>
      <div className="uppercase border-b-2 border-amber-700">{id}</div>
      <div className="mt-1 flex gap-2">{children}</div>
    </div>
  );
}
