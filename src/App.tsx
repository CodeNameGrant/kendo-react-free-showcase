import '@progress/kendo-theme-default/dist/all.css';
import { Container, Showcase } from './components';
import ComponentList from './components/Packages';
import Heading from './components/layout/Heading';
import ShowcaseContextProvider from './context/ShowcaseContext';

function App() {
  return (
    <Container>
      <Heading />

      <ShowcaseContextProvider>
        <ComponentList />

        <Showcase />
      </ShowcaseContextProvider>
    </Container>
  );
}

export default App;
