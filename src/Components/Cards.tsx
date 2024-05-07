interface props {
    title: string,
    src: string,
    text?: string,
    darkbtn?: boolean
}

function Cards(props: props) {
    return (
        <div className="-mx-2 flex flex-col items-center">
            <div className="bg-white p-2 w-fit relative ">
                <div className="relative overflow-hidden">
                {props.text&&<div className={`absolute w-[150px] h-[50px] ${props.text=="STANDARD"&&"bg-[#0084FF] text-[16px]"} ${props.text=="PRO"&&"bg-[#FF0000] text-[20px]"} text-white font-glacial font-semibold  text-center -rotate-[28deg] -bottom-4 -right-8`}>{props.text}</div>}
                <img className="h-[240px]" src={props.src} alt="" />
                </div>
            </div>
            {props.darkbtn?<button className="text-[19px] w-[118px] h-[52px] font-glacial bg-black text-white rounded-full px-[14px] leading-5 my-4  hyphens-auto break-all">{props.title}</button>:<button className="text-[19px] w-[118px] h-[52px] font-glacial bg-white rounded-full px-[14px] leading-5 my-4  hyphens-auto break-all">{props.title}</button>}
        </div>
    )
}

export default Cards