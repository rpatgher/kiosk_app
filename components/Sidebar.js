'use client'
import Image from "next/image"
import useKiosk from "@/hooks/useKiosk"
import Category from "./Category"


const Sidebar = () => {
    const {categories}   = useKiosk();
    return (
        <>
            <Image 
                width={200} 
                height={100} 
                src='/assets/img/logo.svg' 
                alt="Logo Image" 
                className="mx-auto"
            />
            <nav className="mt-10">
                {categories.map((category) => (
                    <Category 
                        key={category.id}
                        category={category}
                    />
                ))}
            </nav>
        </>
    )
}

export default Sidebar
