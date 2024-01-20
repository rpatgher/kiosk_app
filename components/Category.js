import Image from "next/image";
import useKiosk from "@/hooks/useKiosk";

const Category = ({category}) => {
    const {name, icon, id} = category;
    const { currentCategory, handleClickCategory } = useKiosk();
    return (
        <div className={`${currentCategory.id === id ? 'bg-amber-400' : ''} flex items-center gap-4 border w-full p-5 hover:bg-amber-400`}>
            <Image 
                alt={`${name} cateogory icon`}
                width={70}
                height={70}
                src={`/assets/img/icono_${icon}.svg`}
            />
            <button
                type="button"
                className="text-2xl font-bold hover:cursor-pointer "
                onClick={() => handleClickCategory(category.id)}
            >
                {name}
            </button>
        </div>
    )
}

export default Category
