import { ReactNode } from 'react';

type FieldsetProps = {
  label: string;
  children: ReactNode;
};
export default function Fieldset({ label, children }: FieldsetProps) {
  return (
    <fieldset className="border border-solid p-1.5 rounded">
      <legend className="ms-2 px-1">{label}</legend>
      {children}
    </fieldset>
  );
}
