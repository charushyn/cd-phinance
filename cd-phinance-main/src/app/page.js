import Image from "next/image";
import Header from "./UI/Header";
import Services from "./Components/Services";
import FAQ from "./Components/FAQ";
import Opinions from "./Components/Opinions";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import PopupBurger from "./Components/PopupBurger";
import PopupLang from "./Components/PopupLang";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <PopupLang></PopupLang>
      <PopupBurger></PopupBurger>
      <Services></Services>
      <FAQ></FAQ>
      <Opinions></Opinions>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}
