
import Image from "next/image";
import Link from "next/link";
import { SiGooglemybusiness,SiFacebook,SiInstagram } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import Carousel from "@/components/heroproduct";
import { TbArrowRight } from "react-icons/tb";
// import CarouselDemo from "@/components/heroproduct";

export default function Home() {
  return (
    <>
     <div className="relative h-screen w-full">
     <img src="/media/HZ.jpg" alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter blur-sm" />
     <div className="absolute inset-0 bg-black bg-opacity-10 dark:bg-opacity-60"></div>
     <div className="absolute inset-0 flex flex-col items-center justify-center">
         <h1 className=" max-md:text-6xl text-7xl lg:text-8xl xl:text-9xl text-white font-bold">Horizaura</h1>
         <p className="text-xl max-md:text-xl m-2 text-white mt-4">Handcrafted treasures, bringing your vision to life with style.</p>
     </div>
 </div>
 <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We also sell customized Sofas</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Find your perfect sofa with custom options. Choose fabrics and designs that match your style, making your sofa uniquely yours for a cozy home.</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link href="/store" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Shop Now !!
                <TbArrowRight className="text-3xl" />
            </Link>
            <Link href="https://ig.me/m/horizaura" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            <IoCall className="m-2" />
                Contact Us for Custom Sofa
            </Link>  
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase">FEATURED IN</span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                <Link href="#" className="flex items-center mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <SiGooglemybusiness size={50} />
                <p className="font-bold text-2xl p-2">Google Business</p>               
                </Link>
                <Link href="#" className="flex items-center mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <SiFacebook size={50} />
                <p className="font-bold text-2xl p-2">Facebook</p>               
                </Link>
                <Link href={`${process.env.INSTAGRAM}`} className="flex items-center mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                <SiInstagram size={50} />
                <p className="font-bold text-2xl p-2">Instagram</p>                  
                </Link>         
            </div>
        </div> 
    </div>
</section>
<section className="bg-white dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">Quality Furniture You Can Trust, Horizaura Now on Amazon!</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Get top-notch furniture you can rely on. Find us on Amazon!</p>
            <Link href={`${process.env.AMAZON}`} className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                See on Amazon
                <TbArrowRight className="text-3xl" />
            </Link>
            <Link href="/store" className="inline-flex  items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Explore Store
            </Link> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img className="rounded-xl" src="https://m.media-amazon.com/images/I/51IMeXBr+KL.jpg" alt="mockup" />
        </div>                
    </div>
    
</section>
< Carousel />
 </>
  );
}