import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import Card from './Card'


function Foreground() {

  const ref = useRef(null); 

  const data = [
    {
        desc: "This is description of the card that you are seeing.",
        filesize: "0.9mb",
        close: true,
        tagDetails: { isOpen:true , tagTitle: "Download Now" , tagColor: "green" }
    },
    {
        desc: "This is description of the card that you are seeing.",
        filesize: "0.9mb",
        close: true,
        tagDetails: { isOpen:true , tagTitle: "Download Now" , tagColor: "blue" }
    },
    {
        desc: "This is description of the card that you are seeing.",
        filesize: "0.9mb",
        close: true,
        tagDetails: { isOpen:false , tagTitle: "Download Now" , tagColor: "green" }
    }
  ];
  return (
    <div ref={ref} className=' fixed top-0 left-0 w-full h-full z-[3] p-5 flex gap-10 flex-wrap'>
        {
            data.map((item,index) => (
                <Card data={item} reference={ref}/>
            ))
        }
    </div>
  )
}

export default Foreground