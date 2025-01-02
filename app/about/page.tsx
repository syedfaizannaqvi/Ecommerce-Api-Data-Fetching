/* eslint-disable react/no-unescaped-entities */


import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSearch, FaThumbsDown, FaThumbsUp } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex flex-col items-center my-6 w-full sm:w-[98vw]  md:w-[85vw] lg:w-[85vw] mx-auto justify-center">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-center">Get Help</h1>
        <div className="flex justify-center p-2 items-center relative w-full md:w-[30vw]">
          <input
            type="search"
            placeholder="Search"
            className="p-3 rounded-md w-full border h-[3rem]"
          />
          <FaSearch className="absolute right-2 top-1/2 -translate-y-1/2 mr-3" />
        </div>
      </div>
      <div className="flex gap-6 my-6">
        <section className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">
              WHAT PAYMENT OPTIONS CAN I USE ON ORDERS?
            </h1>
            <p className="text-sm text-gray-500">
              We want to make buying your favourite shoes and gear online
              fast and easy, and we accept the following payment options:
            </p>
            <p className="text-sm text-gray-500 ml-0 md:ml-8 md:mt-10">
              Visa, Mastercard, Diners Club, Discover, American Express, Visa
              Electron, Maestro
            </p>
            <p className="text-sm text-gray-500 ml-0 md:ml-8 md:mt-3">
              If you enter your PAN information at checkout, you&apos;ll be able to
              pay for your order with PayTM or a local credit or debit card.
            </p>
            <Link
              href="/"
              className="text-sm text-gray-500 ml-0 md:ml-8 md:mt-3 hover:underline"
            >
              Apple pay
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">
              <span className="font-bold text-base underline text-black">
                Members
              </span>{" "}
              can store multiple debit or credit cards in their profile for
              faster checkout. If you're not already a Member, join us today.
            </p>
            <div className="flex gap-2 my-3">
              <button className="bg-black text-white py-2 px-6 font-medium rounded-full">
                <Link href="/">JOIN US</Link>
              </button>
              <button className="bg-black text-white px-6 py-2 font-medium rounded-full">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold my-6">FAQs</h1>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-black">
                Does my card need international purchases enabled?
              </p>
              <p className="text-sm text-gray-600 text-wrap">
                Yes, we recommend asking your bank to enable international
                purchases on your card. You will be notified at checkout if
                international purchases need to be enabled.
              </p>
              <p className="text-sm text-gray-600 mt-5">
                Please note, some banks may charge a small transaction fee for
                international orders.
              </p>
              <p className="text-sm font-medium text-black mt-5">
                Can I pay for my order with multiple methods?
              </p>
              <p className="text-sm text-gray-600">
                No, payment for orders can&apos;t be split between multiple
                payment methods.
              </p>
              <p className="text-sm font-medium text-black mt-5">
                What payment method is accepted for SNKRS orders?
              </p>
              <p className="text-sm text-gray-600">
                We accept Visa, Mastercard, Diners Club, Discover, American
                Express, Visa Electron, Maestro, PayTM, and local credit or
                debit cards.
              </p>
              <p className="text-sm font-medium text-black mt-5">
                What payment method is accepted for SNKRS orders?
              </p>
              <p className="text-sm text-gray-600 text-wrap">
                We accept Visa, Mastercard, Diners Club, Discover, American
                Express, Visa Electron, Maestro, PayTM, and local credit or
                debit cards.
              </p>
              <p className="text-sm font-medium text-black mt-5">
                Why don&apos;t I see Apple Pay as an option?
              </p>
              <p className="text-sm text-gray-600">
                To see Apple Pay as an option in Our App or on BuyIT.com,
                you&apos;ll need to use a compatible Apple device running the latest
                OS, be signed in to your iCloud account and have a supported
                card in your Wallet. Additionally, you&apos;ll need to use Safari to
                use Apple Pay on BuyIT.com.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-bold">Was this answer helpful?</h1>
                <div className="flex gap-2">
                <button className="bg-black text-white hover:bg-gray-800 py-2 px-6 font-medium rounded-full">
                  <FaThumbsUp />
                </button>
                <button className="bg-black text-white hover:bg-gray-800 py-2 px-6 font-medium rounded-full">
                  <FaThumbsDown />
                </button>
              </div>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-bold text-gray-700">Related Questions</h1>
                <div className="flex flex-col gap-2 ml-0 md:ml-8">
                <Link href="/" className="text-sm text-gray-900 hover:text-gray-500 underline">WHAT ARE BuyIT&apos;S DELIVERY OPTIONS?</Link>
                <Link href="/" className="text-sm text-gray-900 hover:text-gray-500 underline">HOW DO I GET FREE DELIVERY ON ORDERS?</Link>
              </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-2 border-l pl-6">
          <h1 className="text-2xl font-bold text-center">Contact Us</h1>
          <div className="flex flex-col gap-2 justify-center items-center text-center my-6">
            <Image src="/phone.svg" alt="contact" width={100} height={100} />
            <p className="text-sm text-gray-500">1800-180-1961</p>
            <p className="text-sm text-gray-500">Product & Order: 24/7 support</p>
            <p className="text-sm text-gray-500">Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center text-center my-6">
            <Image src="/message.svg" alt="message" width={100} height={100} />
            <p className="text-sm text-gray-500">24 hours a day</p>
            <p className="text-sm text-gray-500">7 days a week</p>
            <p className="text-sm text-gray-500">Contact us by email</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center text-center my-6">
            <Image src="/mail.svg" alt="contact" width={100} height={100} />
            <p className="text-sm text-gray-500">We will reply within</p>
            <p className="text-sm text-gray-500">5 business days</p>
            <p className="text-sm text-gray-500">Contact us by email</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center text-center my-6">
            <Image src="/location.svg" alt="contact" width={100} height={100} />
            <p className="text-sm text-gray-500">Store Locator</p>
            <p className="text-sm text-gray-500">Find a retailstore near you</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;