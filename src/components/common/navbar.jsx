import React, { useState } from "react";
import { Menu as MenuIcon, X, ChevronDown } from "lucide-react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-400">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 ">
          {/* Logo */}
          <div className=" flex flex-col items-center justify-center text-xl">
            {/* <img width={180}  src={biomanthan} alt="" /> */}
            <div className="font-bold text-xl" >
              METRIX 7.0i <span >International</span>
            </div>
            <div className=" text-lg">
              Annual conference
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center text-black text-md gap-8">
            <a
              href="/"
              className="hover:text-red-600 transition-all hover:scale-105 "
            >
              Home
            </a>

            {/* Dropdown Menu */}
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="inline-flex items-center gap-x-1.5 rounded-md bg-transparent px-3 py-2  hover:text-red-600 transition-all hover:scale-105 ">
                About
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition 
                data-closed:scale-95 data-closed:opacity-0 
                data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in "
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="/iitrpr"
                      className="block px-4 py-2  hover:text-red-600 transition-all hover:scale-105 rounded-md"
                    >
                      IIT Ropar
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/me"
                      className="block px-4 py-2  hover:text-red-600 transition-all hover:scale-105 rounded-md"
                    >
                      ME
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>

            <a
              href="/abstract"
              className=" hover:text-red-600 transition-all hover:scale-105 "
            >
              Abstract
            </a>
            <a
              href="/speakers"
              className=" hover:text-red-600 transition-all hover:scale-105 "
            >
              Speakers
            </a>
            <a
              href="/sponsorship"
              className=" hover:text-red-600 transition-all hover:scale-105 "
            >
              Sponsorship
            </a>
            <a
              href="/geo"
              className=" hover:text-red-600 transition-all hover:scale-105 "
            >
              Geographical Views
            </a>
            <a
              href="/committee"
              className=" hover:text-red-600 transition-all hover:scale-105 "
            >
              Committee
            </a>

            {/* Dropdown Menu */}
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="inline-flex items-center gap-x-1.5 rounded-md bg-transparent px-3 py-2  hover:text-red-600 transition-all hover:scale-105 ">
                More
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition 
                data-closed:scale-95 data-closed:opacity-0 
                data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="/calendar"
                      className="block px-4 py-2  hover:text-red-600 transition-all hover:scale-105 rounded-md"
                    >
                      Calendar
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/Schedule"
                      className="block px-4 py-2  hover:text-red-600 transition-all hover:scale-105 rounded-md"
                    >
                      Schedule
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/accommodation"
                      className="block px-4 py-2  hover:text-red-600 transition-all hover:scale-105 rounded-md"
                    >
                      Accommodation & Travel
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/howtoreach"
                      className="block px-4 py-2  hover:text-red-600 transition-all hover:scale-105 rounded-md"
                    >
                      How To Reach
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/contact"
                      className="block px-4 py-2  hover:text-red-600 transition-all hover:scale-105 rounded-md"
                    >
                      Contact us
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>

            {/* <Button
              size="md"
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Register Now
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden "
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white border-r border-slate-200 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col space-y-2 px-4">
          <a
            href={`/`}
            className="block px-4 py-2  hover:bg-slate-100 transition-all duration-100 hover:text-red-600 hover:scale-105 rounded-2xl"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="inline-flex items-center gap-x-1.5 rounded-md bg-transparent px-4 py-2  hover:text-red-600 transition-all hover:scale-110 ">
              About
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition 
                data-closed:scale-95 data-closed:opacity-0 
                data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in "
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="/iitrpr"
                    className="block px-4 py-2  hover:text-red-600 transition-all hover:scale-105 rounded-md"
                  >
                    IIT Ropar
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/me&bme"
                    className="block px-4 py-2  hover:text-red-600 transition-all hover:scale-105 rounded-md"
                  >
                    ME & BME
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/sbaoi"
                    className="block px-4 py-2  hover:text-red-600 transition-all hover:scale-105 rounded-md"
                  >
                    SBAOI
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/stermi"
                    className="block px-4 py-2  hover:text-red-600 transition-all hover:scale-105 rounded-md"
                  >
                    STERMI
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
          <a
            href="abstract"
            className="block px-4 py-2  hover:bg-slate-100 transition-all duration-100 hover:text-red-600 hover:scale-105 rounded-2xl"
            onClick={() => setIsOpen(false)}
          >
            Abstract
          </a>
          <a
            href={`/speakers`}
            className="block px-4 py-2  hover:bg-slate-100 transition-all duration-100 hover:text-red-600 hover:scale-105 rounded-2xl"
            onClick={() => setIsOpen(false)}
          >
            Speakers
          </a>
          <a
            href={`/sponsorship`}
            className="block px-4 py-2  hover:bg-slate-100 transition-all duration-100 hover:text-red-600 hover:scale-105 rounded-2xl"
            onClick={() => setIsOpen(false)}
          >
            Sponsorship
          </a>
          <a
            href={`/geo`}
            className="block px-4 py-2  hover:bg-slate-100 transition-all duration-100 hover:text-red-600 hover:scale-105 rounded-2xl"
            onClick={() => setIsOpen(false)}
          >
            Geographical Views
          </a>
          <a
            href={`/committee`}
            className="block px-4 py-2  hover:bg-slate-100 transition-all duration-100 hover:text-red-600 hover:scale-105 rounded-2xl"
            onClick={() => setIsOpen(false)}
          >
            Committee
          </a>
          {/* Dropdown Menu */}
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="inline-flex items-center gap-x-1.5 rounded-md bg-transparent px-5 py-2  hover:text-red-600 transition-all hover:scale-110 ">
              More
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition 
                data-closed:scale-95 data-closed:opacity-0 
                data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="/Schedule"
                    className="block px-4 py-2  hover:text-red-600 transition-all hover:scale-105 rounded-md"
                  >
                    Schedule
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/accommodation"
                    className="block px-4 py-2  hover:text-red-600 transition-all hover:scale-105 rounded-md"
                  >
                    Accommodation & Travel
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/contact"
                    className="block px-4 py-2  hover:text-red-600 transition-all hover:scale-105 rounded-md"
                  >
                    Contact us
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>

        {/* CTA */}
        {/* <div className="flex flex-col gap-2 px-4 mt-6 mx-3">
          <Button
            size="md"
            className="w-full bg-blue-600 text-white hover:bg-blue-700"
          >
            Register Now
          </Button>
        </div> */}
      </div>
    </nav>
  );
}
