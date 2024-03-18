import ButtonLink from "../UI/ButtonLink"

export default function Opinions(){
    return(
        <div class='px-4 flex flex-col mt-10 gap-3 font-Acrom_Light'>
            <hr></hr>
            <p class='font-Acrom_Bold text-xl'>CD PHINANCE</p>
            <p>
                Ponad 25 lat temu, kiedy zakładaliśmy Leasing Polski przyświecał nam jeden cel:
                wspierać polskiego przedsiębiorcę!
            </p>
            <ButtonLink href={'/'} text={'читати'}></ButtonLink>
            <p class='font-Acrom_Regular text-center mt-2'>
                Понад <span class='font-Acrom_Bold text-xl'>1290</span> наших клієнтів зі всієї Польщі залишились <span class='font-Acrom_Bold'>задоволеними</span> після наших послуг!
            </p>
        </div>
    )
}