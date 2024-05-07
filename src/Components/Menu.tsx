import React from 'react'

function Menu({name,isActive}: {name: string,isActive: boolean}) {
    return (
        <div className="flex z-10">
            <div className="ltriangle"></div>
            <div className={`border-white flex items-center bg-white h-[40px] px-[20px] text-[19px] font-glacial font-semibold  ${isActive?"text-[#F4BD38]":"text-[#848484]"} uppercase`}>{name}</div>
            <div className="rtriangle"></div>
        </div>
    )
}

export default Menu