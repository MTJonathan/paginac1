import Nav from "./assets/components/Nav";
import Logos from "./assets/components/aside/Logos";
import Seccion01 from "./assets/components/Seccion01/Seccion01";
import Seccion02 from "./assets/components/Seccion02/Seccion02";
import Seccion03 from "./assets/components/Seccion03/Seccion03";
import Seccion04 from "./assets/components/Seccion04/Seccion04";
import Seccion05 from "./assets/components/Seccion05/Seccion05";
import Seccion06 from "./assets/components/Seccion06/Seccion06";
import Footer from "./assets/components/Footer/Footer";
import "./App.css";

import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const MainPage = () =>{
  return(
    <main>
      <Nav />
      <Seccion01 />
      <Logos />
      <Seccion02 />
      <Seccion03 />
      <Seccion04 />
      <Seccion05 />
      <Seccion06 />
      <Footer />
    </main>
  )
}

function App() {
  return (
    <Suspense fallback="loading">
      <MainPage />
    </Suspense>
  );
}

export default App;
