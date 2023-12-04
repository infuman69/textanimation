import Image from 'next/image'
import React from 'react'
import arrow from "@/images/arrow.png"
type CardProps = {
    title : string,
    bgcolor : string,
    description : string, 
}

const Card = ({
    title,
    bgcolor,
    description,
} : CardProps) => {
  return (
    <div className={`bg-[${bgcolor}] justify-between font-epilogue rounded py-3 px-10 flex flex-col text-white gap-10` } style={{"backgroundColor" :`${bgcolor}`}}>
        <h1 className='text-5xl'>{title}</h1>
        <p className='text-white'>{description}</p>
        <div className='flex justify-end  '> 
            <button className={`bg-[${bgcolor} w-16 h-16 block outline-none border-none]`}>
                <Image src={arrow} alt="arrow" />
            </button>
        </div>
    </div>
  )
}

export default Card