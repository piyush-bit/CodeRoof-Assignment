
/**
 * Menu component
 * @param name Name of the menu item
 * @param isActive Whether the menu item is active or not
 * @param setActive Function to set the active menu item
 */
function Menu({name,isActive,setActive}: {name: string,isActive: boolean , setActive: React.Dispatch<React.SetStateAction<string>>}) {
    return (
        <div className="flex z-10" onClick={() => setActive(name)}>
            <div className="ltriangle"></div> {/* Triangle before the menu item */}
            <div className={`border-white flex items-center bg-white h-[40px] px-[20px] text-[19px] font-glacial font-semibold  ${isActive?"text-[#F4BD38]":"text-[#848484]"} uppercase`}>{name}</div> {/* Menu item */}
            <div className="rtriangle"></div> {/* Triangle after the menu item */}
        </div>
    )
}

export default Menu