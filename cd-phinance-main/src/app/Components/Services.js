'use client'

import Service from "../UI/Service"
import services from "../Data/services"

export default function Services(){
    return(
        <div class='flex flex-col min-h-svh mobile-s:pt-[70px] relative' id='services'>
            <p class='font-Acrom_Bold pl-4 h-[70px] items-center flex'>Наші послуги</p>
            {services.map((service) => {
                return(
                    <Service photo={service.photo} title={service.title} icon={service.icon} key={service.name} description={service.description}></Service>
                )
            })}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 animate-bounce absolute bottom-4 flex self-center">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>
        </div>
    )
}