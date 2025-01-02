import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLocationPin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#111111] p-4 md:p-6 z-40">
      <div className="flex flex-col md:flex-row justify-between md:w-[90vw] w-[95vw] mx-auto items-start md:items-center">
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 my-5 lg:grid-cols-4 gap-4 w-full md:w-[90%]">
          {/* First Column */}
          <div className="flex flex-col gap-3 text-xs md:text-sm my-3 md:my-0">
            <Link href="/" className="text-white hover:text-gray-300">
              FIND A STORE
            </Link>
            <Link href="/" className="text-white hover:text-gray-300">
              BECOME A MEMBER
            </Link>
            <Link href="/" className="text-white hover:text-gray-300">
              SIGN UP FOR EMAIL
            </Link>
            <Link href="/" className="text-white hover:text-gray-300">
              Send us feedback
            </Link>
            <Link href="/" className="text-white hover:text-gray-300">
              Student Discount
            </Link>
          </div>

          {/* GET HELP Column */}
          <div className="flex flex-col gap-3 text-xs md:text-sm my-3 md:my-0">
            <Link href="/" className="text-white hover:text-gray-300">
              GET HELP
            </Link>
            <Link href="/" className="text-gray-500 hover:text-gray-300">
              Online Status
            </Link>
            <Link href="/" className="text-gray-500 hover:text-gray-300">
              Delivery
            </Link>
            <Link href="/" className="text-gray-500 hover:text-gray-300">
              Payment options
            </Link>
            <Link href="/" className="text-gray-500 hover:text-gray-300">
              Contact US
            </Link>
          </div>

          {/* ABOUT NIKE Column */}
          <div className="flex flex-col gap-3 text-xs md:text-sm my-3 md:my-0">
            <Link href="/" className="text-white hover:text-gray-300">
              ABOUT NIKE
            </Link>
            <Link href="/" className="text-gray-500 hover:text-gray-300">
              News
            </Link>
            <Link href="/" className="text-gray-500 hover:text-gray-300">
              Careers
            </Link>
            <Link href="/" className="text-gray-500 hover:text-gray-300">
              Investors
            </Link>
            <Link href="/" className="text-gray-500 hover:text-gray-300">
              Sustainability
            </Link>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-6 md:mt-0">
          <Link href="/" className="hover:opacity-80">
            <Image src="/facebook.png" alt="facebook" width={24} height={24} />
          </Link>
          <Link href="/" className="hover:opacity-80">
            <Image src="/instagram.png" alt="instagram" width={24} height={24} />
          </Link>
          <Link href="/" className="hover:opacity-80">
            <Image src="/twitter.png" alt="twitter" width={24} height={24} />
          </Link>
          <Link href="/" className="hover:opacity-80">
            <Image src="/youtube.png" alt="youtube" width={24} height={24} />
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between gap-4 pt-10 w-[95vw] mx-auto items-start md:items-center text-xs">
        {/* Location and Copyright */}
        <div className="flex flex-col md:flex-row gap-4 text-gray-500">
          <Link href="/" className="flex items-center gap-2 hover:text-gray-300">
            <FaLocationPin />
            Karachi, Pakistan
          </Link>
          <p>© 2023 Nike, Inc. All Rights Reserved</p>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap gap-4">
          <Link href="/" className="text-gray-500 hover:text-gray-300 whitespace-nowrap">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500 hover:text-gray-300 whitespace-nowrap">
            Terms & Conditions
          </Link>
          <Link href="/" className="text-gray-500 hover:text-gray-300 whitespace-nowrap">
            Terms of Use
          </Link>
          <Link href="/" className="text-gray-500 hover:text-gray-300 whitespace-nowrap">
            Nike Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;