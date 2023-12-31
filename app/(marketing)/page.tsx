import { Footer } from "./_components/footer"
import {Heading} from "./_components/heading"
import { Heros } from "./_components/heros"

const MarkingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col justify-center items-center md:justify-start text-center gap-y-8 flex-1 px-6">
        <Heading/>
        <Heros/>
      </div>
      <Footer/>
    </div>
  )
}

export default MarkingPage