import Image from "next/image";
import Header from "./UI/Header";
import Services from "./Components/Services";
import FAQ from "./Components/FAQ";
import Opinions from "./Components/Opinions";
import Form from "./Components/Form";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <FAQ></FAQ>
      <Opinions></Opinions>
      <Form></Form>
    </div>
  );
}
