import { createContext, ReactNode, useContext, useState } from 'react';

type ShowcaseContextProps = {
  componentMap: Map<string, boolean>;
  toggleComponent: (id: string) => void;
};
const ShowcaseContext = createContext<ShowcaseContextProps | null>(null);

export default function ShowcaseContextProvider({ children }: { children: ReactNode }) {
  const [componentMap, setComponentMap] = useState<Map<string, boolean>>(
    new Map([['buttons', true]])
  );

  function toggleComponent(id: string) {
    console.log('toggleComponent', id, componentMap.get(id));

    setComponentMap((prev) => {
      const updated = new Map(prev);
      updated.set(id, !updated.get(id));
      return updated;
    });
  }

  return (
    <ShowcaseContext.Provider value={{ componentMap, toggleComponent }}>
      {children}
    </ShowcaseContext.Provider>
  );
}

export function useShowcaseContext() {
  const ctx = useContext(ShowcaseContext);

  if (!ctx) {
    throw new Error('useShowcaseContext can only be used within ShowcaseContextProvider');
  }

  return ctx;
}
