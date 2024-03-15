'use client'

import Service from "../UI/Service"
import services from "../Data/services"

export default function Services(){
    return(
        <div class='flex flex-col h-fit mobile-s:pt-[70px]'>
            <p class='font-Acrom_Bold pl-4 h-[70px] items-center flex'>Наші послуги</p>
            {services.map((service) => {
                return(
                    <Service photo={service.photo} title={service.title} icon={service.icon} key={service.name} description={service.description}></Service>
                )
            })}
        </div>
    )
}