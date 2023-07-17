import Button from "./Button"
import Container from "./Container"


const HomeSlider = ({ imageUrl, title, subTitle }: HomeSlider) => {
  return (
    <Container sectionClasses={`h-screen bg-[url(${imageUrl})] bg-scroll bg-center bg-cover bg-no-repeat bg-neutral-600/90   bg-blend-overlay`} innerClasses='container flex flex-col gap-y-6 md:gap-y-8 lg:gap-y-10 justify-center h-full'>
      <h1 className="lg:w-[50%] w-full text-5xl md:text-6xl lg:text-7xl text-white font-bold" data-swiper-parallax="-200">{title}</h1>
      <p className="lg:w-[50%] w-full text-2xl font-bold text-white" data-swiper-parallax='-400'>{subTitle}</p>
      <div className="flex sm:gap-x-6 sm:flex-row flex-col gap-y-6" data-swiper-parallax="-600">
        <Button className="text-sm text-white font-medium uppercase px-6 py-3">
          our services
        </Button>
        <Button className="text-sm font-medium uppercase px-6 py-3 bg-neutral-800 text-white">
          our projects
        </Button>
      </div>
    </Container>
  )
}

export default HomeSlider