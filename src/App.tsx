import { MainLayout, Popup } from './modules';
import { Container } from './ui';
import './App.scss';

function App() {
  return (
    <main className="app">
      <Container>
        <MainLayout className="app__main-layout" />
        <Popup />
      </Container>
    </main>
  );
}

export default App;
