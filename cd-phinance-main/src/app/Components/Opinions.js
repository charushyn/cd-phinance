import Link from "next/link"

export default function Opinions(){
    return(
        <div class='px-4 flex flex-col mt-10 gap-3 font-Acrom_Light'>
            <hr></hr>
            <p class='font-Acrom_Bold text-xl'>CD PHINANCE</p>
            <p>
                Ponad 25 lat temu, kiedy zakładaliśmy Leasing Polski przyświecał nam jeden cel:
                wspierać polskiego przedsiębiorcę!
            </p>
            <Link class='flex flex-row w-fit h-fit px-4 py-2 gap-2 bg-black items-center' href={'/'}>
                    <p class='uppercase text-xs font-Acrom_Light text-white'>читати</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
            </Link>
            <p class='font-Acrom_Regular text-center mt-2'>
                Понад <span class='font-Acrom_Bold text-xl'>1290</span> наших клієнтів зі всієї Польщі залишились <span class='font-Acrom_Bold'>задоволеними</span> після наших послуг!
            </p>
        </div>
    )
}