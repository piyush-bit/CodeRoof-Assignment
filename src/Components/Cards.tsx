interface props {
    title: string,
    src: string,
    text?: string,
    darkbtn?: boolean
}

function Cards(props: props) {
    // Component that renders a card with a button
    return (
        <div className="-mx-2 flex flex-col items-center">
            <div className="bg-white p-2 w-fit relative cursor-pointer ">
                <div className="relative overflow-hidden">
                    {/* Optional text overlay */}
                    {props.text && (
                        <div className={`absolute w-[150px] h-[50px] ${props.text === "STANDARD" && "bg-[#0084FF] text-[16px]"} ${props.text === "PRO" && "bg-[#FF0000] text-[20px]"} text-white font-glacial font-semibold text-center -rotate-[28deg] -bottom-4 -right-8`}>
                            {props.text}
                        </div>
                    )}
                    {/* Main image */}
                    <img className="h-[240px]" src={props.src} alt="" />
                </div>
            </div>
            {/* Button below the card */}
            <button className={`text-[19px] w-[118px] h-[52px] font-glacial ${props.darkbtn ? "bg-black text-white ": "bg-white "} rounded-full px-[14px] leading-5 my-4  hyphens-auto break-words`}>{props.title}</button>
        </div>
    );
}

export default Cards