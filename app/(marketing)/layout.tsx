import { Navbar } from "./_components/navbar"


const marketingLayout = (
    {children}:{children:React.ReactNode}) => {
  return (
    <div className=" h-full dark:bg-[#1f1f1f]">
        <Navbar/>
        <main className=" h-full pt-20 dark:bg-[#1f1f1f]" >
            {children}
        </main>

    </div>
  )
}

export default marketingLayout