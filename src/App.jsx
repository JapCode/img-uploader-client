import Uploader from './container/Uploader';
import { UploaderUrlProvider } from './context/Upload';
import './index.css';

function App() {
  return (
    <section className="flex items-center justify-center w-screen h-screen">
      <UploaderUrlProvider>
        <Uploader />
      </UploaderUrlProvider>
    </section>
  );
}

export default App;
