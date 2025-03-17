import { Container, Section } from './components';
import ComponentList from './components/ComponentList';
import Heading from './components/layout/Heading';
import '@progress/kendo-theme-default/dist/all.css';

function App() {
  return (
    <Container>
      <Heading />
      <ComponentList />

      <div className="flex gap-2">
        <main className="grow-[2]">
          <Section>content</Section>
        </main>
        <aside className="grow-[1]">
          <Section>Properties</Section>
        </aside>
      </div>
    </Container>
  );
}

export default App;
