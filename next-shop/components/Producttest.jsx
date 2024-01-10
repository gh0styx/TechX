"use client";
import React, { useState } from "react";

const ProductTest = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://i.postimg.cc/prW7DGkK/R-14.png"
  );

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <main>
      <section className="py-20 font-poppins dark:bg-black mt-5">
        <div className="max-w-5xl px-4 mx-auto">
          <div className="flex flex-wrap mb-24 -mx-4">
            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div className="sticky top-0 z-50 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 ">
                  <a
                    className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2 "
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200"
                      viewBox="0 0 16 16"
                    ></svg>
                  </a>

                  <img
                    className="object-cover w-full max-sm:w-auto lg:h-1/2"
                    src={selectedImage}
                    alt=""
                  />
                  <a
                    className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200"
                      viewBox="0 0 16 16"
                    ></svg>
                  </a>
                </div>
                <div className="flex-wrap hidden -mx-2 md:flex">
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      className="block border border-transparent hover:border-blue-400"
                      href="#"
                      onClick={() =>
                        handleImageClick(
                          "https://jabko.ua/image/cache/catalog/products/2022/06/201902/mbp14-spacegray-gallery1-202110-300x300.jpg"
                        )
                      }
                    >
                      <img
                        className="object-cover w-full lg:h-32"
                        src="https://jabko.ua/image/cache/catalog/products/2022/06/201902/mbp14-spacegray-gallery1-202110-300x300.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      className="block border border-transparent hover:border-blue-400"
                      href="#"
                      onClick={() =>
                        handleImageClick(
                          "https://i.postimg.cc/prW7DGkK/R-15.png"
                        )
                      }
                    >
                      <img
                        className="object-cover w-full lg:h-32"
                        src="https://i.postimg.cc/prW7DGkK/R-15.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      className="block border border-transparent hover:border-blue-400"
                      href="#"
                      onClick={() =>
                        handleImageClick(
                          "https://i.postimg.cc/prW7DGkK/R-16.png"
                        )
                      }
                    >
                      <img
                        className="object-cover w-full lg:h-32"
                        src="https://i.postimg.cc/prW7DGkK/R-16.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      className="block border border-transparent hover:border-blue-400"
                      href="#"
                      onClick={() =>
                        handleImageClick(
                          "https://i.postimg.cc/prW7DGkK/R-17.png"
                        )
                      }
                    >
                      <img
                        className="object-cover w-full lg:h-32"
                        src="https://i.postimg.cc/prW7DGkK/R-17.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductTest;
