import React, { useState } from "react";
import { useRouter } from "next/router";
import astroJsBlog from "../public/astroJsBlog.png";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Works() {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 flex justify-between">
            <h1
              onClick={() => router.push("/")}
              className="text-xl font-burtons dark:text-white cursor-pointer"
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
            </ul>
          </nav>

          <div className="text-center">
            <h1 className="text-4xl font-burtons dark:text-white">Works</h1>
          </div>
          <div className="m-4 pt-4">
            <ul>
              <li>
                <a
                  className="hover:text-blue-600 my-4 dark:text-white"
                  href="https://astrojs-blog.vercel.app"
                >
                  AstroJS Blog
                </a>
                <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80">
                  <Image
                    onClick={() =>
                      router.push("https://astrojs-blog.vercel.app")
                    }
                    className="cursor-pointer"
                    src={astroJsBlog}
                    alt="mural"
                    layout="fill"
                    objectFit="cover"
                    overflow="hidden"
                  />
                </div>

                <p className="dark:text-white">
                  Blog implemented to learn the basics of the new AstroJS
                  framework.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Works;
