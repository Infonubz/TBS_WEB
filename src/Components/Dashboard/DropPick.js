import dayjs from 'dayjs'
import React from 'react'

const DropPick = ({ boarding, dropping }) => {

    return (
        <div className='bg-[#F6F6F6] h-auto w-full px-[5vw]'>
            <div className='grid grid-cols-2'>
                <div className=''>
                    <p className='text-[1.3vw] text-[#1F487C] font-bold py-[1.5vw]'>BOARDING</p>
                    <div className='w-[30vw] h-[20vw] overflow-x-auto'>
                        <div className=" h-[12.5vw] w-[20vw] flex flex-col flex-wrap gap-x-[1.5vw] gap-y-[1.5vw]">
                            {boarding.map((item) => (
                                <div className='flex gap-[1vw]'>
                                    <div className='text-[1.1vw] text-[#1F487C] font-bold'>{dayjs(item.time).format('HH:mm')}</div>
                                    <div className='text-[1.1vw] text-[#1F487C]'>{item.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className=''>
                    <p className='text-[1.3vw] text-[#1F487C] font-bold py-[1.5vw]'>DROPPING</p>
                    <div className='w-[30vw] h-[20vw] overflow-x-auto'>
                        <div className=" h-[12.5vw] w-[20vw] flex flex-col flex-wrap gap-x-[1.5vw] gap-y-[1.5vw]">
                            {dropping.map((item) => (
                                <div className='flex gap-[1vw]'>
                                    <div className='text-[1.1vw] text-[#1F487C] font-bold'>{dayjs(item.time).format('HH:mm')}</div>
                                    <div className='text-[1.1vw] text-[#1F487C]'>{item.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropPick



