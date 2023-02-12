
import './App.css';

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

function App() {
  return ( // NOTE: Nav is inside the Header
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
