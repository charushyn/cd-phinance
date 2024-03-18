'use client'

import React from "react"

import MyMap from "../UI/MyMap"
import LeafletMap from "../UI/LeafletMap"

import Image from "next/image"
import logo from '@/app/images/logo.png'


export default function Footer(){

    return(
        <footer class='flex flex-col bg-black text-white gap-4 h-fit p-4'>
            {/* <MyMap></MyMap> */}
            {/* <LeafletMap></LeafletMap> */}
            <div class='flex flex-col gap-2'>
                <img src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png" class='w-full h-[200px] object-cover object-center'></img>
                <p class='underline font-Acrom_Regular'>Al. Ujazdowskie 11, 00-950 Warszawa</p>
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
                <div class='flex flex-row gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                    <p class='underline'>link/link</p>
                </div>
                <div class='flex flex-row gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                    <p class='underline'>link/link</p>
                </div>
                <div class='flex flex-row gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                    <p class='underline'>link/link</p>
                </div>
            </div>
        </footer>
    )
}