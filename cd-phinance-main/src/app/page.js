'use client'

import data from "./test";
import { usePathname } from 'next/navigation';


import Image from "next/image";
import Header from "./Components/Header";
import Services from "./UI/Services";
import FAQ from "./UI/FAQ";
import Opinions from "./UI/Opinions";
import Form from "./UI/Form";
import Footer from "./UI/Footer";
import PopupBurger from "./UI/PopupBurger";
import PopupLang from "./UI/PopupLang";

const HomeUI = 
  {
    'Header': Header,
    'Services': Services,
    'FAQ': FAQ,
  }


export default function Home() {
  const currentPage = usePathname()
  return (
    <div>
      {Object.values(data.pages[currentPage])[0].map((dataItemUI) => {
        const props = Object.values(dataItemUI)[0]
        const functionComponent = HomeUI[Object.keys(dataItemUI)[0]]
        if(typeof HomeUI[Object.keys(dataItemUI)[0]] != 'undefined'){
          return(functionComponent(props))
        } else {
          console.log('not a function')
        }
      })}
      <PopupLang></PopupLang>
      <PopupBurger></PopupBurger>
      <Opinions></Opinions>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}
