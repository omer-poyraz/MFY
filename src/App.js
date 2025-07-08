import React, { useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from './route';
import './css/main.css'
import './css/tablet.css'
import './css/mobile.css'
import './css/special.css'
import i18n from "./i18n";
import { DataContextProvider } from './dataContext';
import 'antd/dist/reset.css';
import { useSelector } from 'react-redux';

const App = () => {
  const { lang } = useSelector((state) => state.lang);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <>
      <DataContextProvider>
        <Router>
          <AnimatedRoutes />
        </Router>
      </DataContextProvider>
    </>
  );
};

export default App;