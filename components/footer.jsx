import { FaInstagram,FaFacebookF,FaAmazon } from "react-icons/fa";
import { SiGooglemybusiness } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Logo from "@/public/horizaura.svg"
import Link from "next/link";


export default function Footer() {
    return (
        <footer className="p-5 bg-blue-300 dark:bg-black">
            <div class="text-center">
    <Link href="/" class="flex items-center m-5 justify-center text-2xl font-semibold text-black dark:text-white">
        <Image src={Logo} height={60} width={60} class="h-full mr-3 max-sm:h-9" alt="Horizaura Logo" />
		<p className="text-4xl">Horizaura</p>
    </Link>

    <span class="block text-sm text-center text-gray-500">© 2024 Horizaura. All Rights Reserved.
	</span>

    <ul class="flex justify-center m-5 space-x-5">
        <li>
            <Link href={process.env.INSTAGRAM} class="text-gray-500 dark:hover:text-white hover:text-black">
            <FaInstagram  size={25}  />
            </Link>
        </li>
        <li>
            <Link href={process.env.FACEBOOK} class="text-gray-500 dark:hover:text-white hover:text-black">
            <FaFacebookF size={25}  />
            </Link>
        </li>
        <li>
            <Link href={process.env.GOOGLE_BUSINESS} class="text-gray-500 dark:hover:text-white hover:text-black">
            <SiGooglemybusiness size={25}  />
            </Link>
        </li>
        <li>
            <Link href={process.env.TWITTER} class="text-gray-500 dark:hover:text-white hover:text-black">
            <FaXTwitter size={25}  />
            </Link>
        </li>
        <li>
            <Link href={process.env.AMAZON} class="text-gray-500 dark:hover:text-white hover:text-black">
            <FaAmazon size={25} />
            </Link>
        </li>
    </ul>
</div>
        </footer>
    )
}