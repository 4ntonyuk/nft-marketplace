import { Button } from "@/components"

const Hero = () => {
  return (
    <section className="mt-[128px] text-center flex flex-col justify-center items-center">
      <p className="text-hairline2 text-neutrals-4 font-poppins uppercase">
        Create, explore & collect digital art NFTs.
      </p>
      <h3 className="text-headline3 max-md:text-headline4 text-neutrals-2 mt-2 font-dmsans">
        The new creative economy.
      </h3>
      <Button 
        type="contour"
        label="Start your search"
        className="mt-6 text-button1 max-md:text-button2 md:pt-[15px] md:pb-4 md:px-6"
      />
    </section>
  )
}

export default Hero