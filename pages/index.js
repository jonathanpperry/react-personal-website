import { useState } from "react";

import Image from "next/image";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import austinMural from "../public/austinMural.jpg";
import code from "../public/code.png";
import design from "../public/design.png";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jon Perry&apos;s Portfolio</title>
        <meta name="description" content="Generated"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between cursor-pointer">
            <h1
              onClick={() => router.push("/")}
              className="text-xl font-burtons dark:text-white"
            >
              Jon Perry&apos;s Website
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <Link
                  href="/works"
                  className="bg-gradient-to-r from-blue-500 to-yellow-300 text-white px-4 py-2 rounded-md ml-8"
                >
                  Works
                </Link>
              </li>

              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="/Jonathan_Perry_Resume_Oct_2023.pdf"
                  download="resume"
                >
                  Résumé
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Jonathan Perry
            </h2>
            <h3 className="text-2xl py-2 dark:text-white">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              Developer with over 5 years of programming experience.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://twitter.com/jonathanpperry" target="_blank">
              <AiFillTwitterCircle />
            </a>
            <a href="https://linkedin.com/in/jonathanpperry" target="_blank">
              <AiFillLinkedin />
            </a>
            <a href="https://facebook.com/jonnyramen" target="_blank">
              <AiFillFacebook />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80">
            <Image
              src={austinMural}
              alt="mural"
              layout="fill"
              objectFit="cover"
              overflow="hidden"
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">
              What I bring to the table:
            </h3>
            <p className="dark:text-white">
              Since the beginning of my career as a developer, I&apos;ve worked
              in
              <span className="text-teal-500"> several </span>
              industries working on
              <span className="text-teal-500"> various </span>
              software projects.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:bg-white">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:bg-white">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let&apos;s make
                it a reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
