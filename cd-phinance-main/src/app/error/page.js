'use client'

import Footer from "../UI/Footer"
import Header from "../Components/Header"
import PopupBurger from "../UI/PopupBurger"
import PopupLang from "../UI/PopupLang"
import ButtonLink from "../Components/ButtonLink"


export default function Error(){
    return(
        <div className=" h-fit flex flex-col font-Acrom_Light">
        <Header></Header>
        <PopupLang></PopupLang>
        <PopupBurger></PopupBurger>
        <div className="blockClass min-h-svh flex flex-col mt-[70px]">
            <div className=" flex flex-col p-4 z-10 text-white gap-8">
                <p className='font-Acrom_Regular'>Отакої! (future error message)</p>
                <p className=" font-Acrom_Bold">Не хвилюйтесь!</p>
                <p>Якщо Ви впевнені у збої роботи сайту та не отримали бажану послугу - Ви <span className=" font-Acrom_Bold">завжди</span> можете зателефонувати до нас!</p>
                <p className="text-xl">+48 000 000 000</p>
                <ButtonLink href={'/'} text={'main page'} theme={'white'}></ButtonLink>
            </div>
        </div>
        <Footer></Footer>
        <style jsx>{
                `
                .blockClass {
                    background-image: url('https://www.esas-formation.fr/wp-content/uploads/2018/02/comment-devenir-assistant-manager-1200x627.jpg');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    position: relative;
                }
                .blockClass::before {    
                    content: "";
                    background-size: cover;
                    position: absolute;
                    z-index: 1;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    background-color: rgba(0,0,0,0.70);
                }
                `
            }</style>
</div>
    )
}