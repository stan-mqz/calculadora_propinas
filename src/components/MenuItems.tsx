//Importamos el type de MenuItem
import { MenuItem } from "../types/types"


//Tipamos los props, indicamos que item (EL objeto completo que entrega la bd) será de tipo MenuItem, es decir, sus propiedades serán tipadas según le indiquemos al type
type MenuItemsProps = {
    item: MenuItem
}


export default function MenuItems({ item }: MenuItemsProps) {
    return (
        <>
            <button className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between">
                <p>{item.name}</p>
                <p className="font-black">${item.price}</p>
            </button>


        </>
    )
}
