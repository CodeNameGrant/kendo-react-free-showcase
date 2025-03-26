import { ReactNode } from 'react';

type FieldsetProps = {
  label: string;
  link?: string;
  children: ReactNode;
};
export default function Fieldset({ label, link, children }: FieldsetProps) {
  return (
    <fieldset className="border border-solid p-1.5 rounded">
      <legend className="ms-2 px-1">
        {label}
        {link && (
          <a
            className="text-xs ms-1 source-link"
            href="https://www.telerik.com/kendo-react-ui/components/buttons/buttongroup"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            (See Docs)
          </a>
        )}
      </legend>
      {children}
    </fieldset>
  );
}
