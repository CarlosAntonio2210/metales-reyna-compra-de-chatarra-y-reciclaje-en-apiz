import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Chatbot } from './components/Chatbot';

function App() {
  return (
    <Layout>
      <Home />
      <Chatbot />
    </Layout>
  );
}

export default App;