'use client'

import React from "react"
import LeafletMap from "../UI/LeafletMap"

import Image from "next/image"
import logo from '@/app/images/logo.png'

import { Link } from "react-scroll"
import LinkToPage from 'next/link'


export default function Footer(){

    return(
        <footer class='flex flex-col bg-black text-white gap-4 h-fit p-4'>
            {/* <MyMap></MyMap> */}
            <Link to={'services'} smooth={true} duration={500} class='w-full h-fit flex flex-row gap-1 items-center justify-center cursor-pointer'>
                <img class='w-6 h-6' src="https://cdn.iconfinder.com/stored_data/1591830/128/png?token=1710853731-dmsk6Y9R5YsjcJs44lGwe3QwXdo3EYn%2Bvqkee%2FRrRjg%3D"></img>
                <p class='underline text-xl'>Повернутись угору</p>
            </Link>
            <div class='flex flex-col gap-4 h-fit'>
                <div class='flex flex-col gap-2'>
                    <LeafletMap></LeafletMap>
                    <div class='flex flex-row gap-1 items-center cursor-pointer'>
                        <p class='underline font-Acrom_Regular'>Al. Ujazdowskie 11, 00-950 Warszawa</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </div>
                </div>
                <div class='flex flex-col gap-4'>
                    <div class='flex flex-row items-center gap-2'>
                        <Image src={logo} class='w-fit h-[20px]'></Image>
                        <p class='font-Acrom_Bold text-xl'>CD Phinance</p>
                    </div>
                    <div class='flex flex-col'>
                        <p class='font-Acrom_Regular'>Title</p>
                        <p class='font-Acrom_Light'>Subtitle</p>
                    </div>
                    <div class='flex flex-col'>
                        <p class='font-Acrom_Regular'>Title</p>
                        <p class='font-Acrom_Light'>Subtitle</p>
                    </div>
                    <div class='flex flex-col'>
                        <p class='font-Acrom_Regular'>Title</p>
                        <p class='font-Acrom_Light'>Subtitle</p>
                    </div>
                </div>
                <div class='flex flex-col gap-4'>
                    <p class='font-Acrom_Bold'>Social Media</p>
                    <div class='flex flex-row gap-2 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                        </svg>
                        <p class='underline'>link/link</p>
                    </div>
                    <div class='flex flex-row gap-2 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                        </svg>
                        <p class='underline'>link/link</p>
                    </div>
                    <div class='flex flex-row gap-2 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                        </svg>
                        <p class='underline'>link/link</p>
                    </div>
                </div>
                <div class='flex flex-col gap-2'>
                    <p class='font-Acrom_Bold'>Угоди з сайтом</p>
                    <LinkToPage href={'/privicyPolicy'} class='flex flex-row gap-1 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        <p class='underline cursor-pointer'>Політика приватності</p>
                    </LinkToPage>
                    <LinkToPage href={'/contract'} class='flex flex-row gap-1 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        <p class='underline cursor-pointer'>Договір</p>
                    </LinkToPage>
                </div>
            </div>

        </footer>
    )
}