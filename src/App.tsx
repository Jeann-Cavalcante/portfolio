import { Challange } from "./components/Challenge";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hello } from "./components/Hello";
import { Global } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Hello />
      <Challange />
      <Contact />
      <Footer />

      <Global />
    </>
  );
}
