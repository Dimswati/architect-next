import Link from "next/link"
import { twMerge } from "tailwind-merge"

type MenuItemProps = {
    path: string
    isActive: boolean
}

const MenuItem: React.FC<MenuItemProps> = ({
    path,
    isActive = false
}) => {
  return (
    <Link href={`/${path}`} className={twMerge("transition h-fit px-4 hover:bg-orange-500 hover:text-white py-2.5 text-black rounded uppercase font-medium", isActive ? "bg-orange-500 text-white" : "")}>{path}</Link>
  )
}

export default MenuItem