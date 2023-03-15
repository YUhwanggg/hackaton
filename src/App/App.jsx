import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import RoutesApp from '../Routes/RoutesApp';

const App = () => {
  return (
    <div>
      <Header />
      <RoutesApp />
      <Footer />
    </div>
  );
};

export default App;