
const Testimonial = ({ testimonial, imageUrl, author, service }: Testimonial) => {
  return (
    <div className="container lg:max-w-[70vw] flex flex-col items-center justify-center text-center text-neutral-200">
        <p className="text-xl italic leading-8 mb-8">{testimonial}</p>
        <img className="aspect-square w-16 rounded-full mb-5" src={imageUrl} alt={`${author} testimonial`} />
        <div>
            <h3 className="text-xl">{author}</h3>
            <span className="text-orange-500 italic">{service}</span>
        </div>
    </div>
  )
}

export default Testimonial