'use client'

import ButtonLink from "../Components/ButtonLink"
import CountUp from 'react-countup';
import { useInView, triggerOnce } from "react-intersection-observer";

export default function Opinions(){
    const {ref: blockRef, inView: isBlockVisible } = useInView({triggerOnce: true})
    return(
        <div ref={blockRef} class={`px-4 flex flex-col mt-10 gap-3 font-Acrom_Light opacity-0 ${isBlockVisible ? 'animateOpacityItem' : ''}`}>
            <hr></hr>
            <p class='font-Acrom_Bold text-xl'>CD PHINANCE</p>
            <p>
                Ponad 25 lat temu, kiedy zakładaliśmy Leasing Polski przyświecał nam jeden cel:
                wspierać polskiego przedsiębiorcę!
            </p>
            <ButtonLink href={'/'} text={'читати'}></ButtonLink>
            <p class='font-Acrom_Regular text-center mt-2'>
                Понад <CountUp end={1290} start={0} enableScrollSpy={true} scrollSpyDelay={2000} scrollSpyOnce={true} duration={2} className='font-Acrom_Bold text-xl'>1290</CountUp> наших клієнтів зі всієї Польщі залишились <span class='font-Acrom_Bold'>задоволеними</span> після наших послуг!
            </p>
        </div>
    )
}