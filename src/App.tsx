import { Container, Section, Showcase } from './components';
import ComponentList from './components/Packages';
import Heading from './components/layout/Heading';
import '@progress/kendo-theme-default/dist/all.css';
import ShowcaseContextProvider from './context/ShowcaseContext';

function App() {
  return (
    <Container>
      <Heading />

      <ShowcaseContextProvider>
        <ComponentList />

        <div className="flex gap-2">
          <main className="grow-[2]">
            <Showcase />
          </main>

          <aside className="grow-[1]">
            <Section>Properties</Section>
          </aside>
        </div>
      </ShowcaseContextProvider>
    </Container>
  );
}

export default App;
