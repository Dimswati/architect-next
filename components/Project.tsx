import { SlLink } from "react-icons/sl"
import Link from "next/link"

interface ProjectProps extends Project {
  lowerSection?: boolean
}

const Project = ({
    id,
    title,
    tags,
    imageUrl,
    lowerSection = true
}: ProjectProps) => {
  return (
    <div className=" h-fit group transition ease-in-out duration-300">
      <div className="relative">
        <img src={imageUrl} className="w-full h-auto" alt="projectOne"/>
          <div className="absolute top-0 inset-0 bg-orange-500/80 group-hover:flex items-center justify-center -translate-y-56 hidden group-hover:translate-y-0 transition duration-300">
          <Link href={`/projects/${id}`} className="bg-white hover:bg-neutral-800 p-4 rounded-full text-xl text-orange-500 hover:text-white cursor-pointer">
            <SlLink/>
          </Link>
        </div>
      </div>
      {lowerSection && (
        <div className="bg-neutral-100 flex flex-col items-center py-4">
          <h4 className="text-xl font-bold text-neutral-800">{title}</h4>
          <ul className="flex gap-x-3">
            {
                tags.map(tag => (<li key={tag} className="text-orange-500 italic">{tag}</li>))
            }
          </ul>
        </div>
      )}
    </div>
  )
}

export default Project