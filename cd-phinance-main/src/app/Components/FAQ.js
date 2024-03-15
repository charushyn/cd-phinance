import FAQBlock from "../UI/FAQBlock"

export default function FAQ(){
    return(
        <div class='flex flex-col px-4 mt-[20px] gap-10'>
            <div class='flex flex-row justify-center relative items-center gap-3 h-[100px]'>
                <p class='font-Acrom_Regular text-xl pb-4'>Питання</p>
                <div class='bg-black w-[1px] h-full absolute rotate-45 top-0 bottom-0'></div>
                <p class='font-Acrom_Regular text-xl pt-4'>Відповіді</p>
            </div>
            <FAQBlock></FAQBlock>
            <FAQBlock></FAQBlock>
            <FAQBlock></FAQBlock>
        </div>
    )
}