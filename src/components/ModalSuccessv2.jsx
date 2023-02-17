import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
function ModalSuccess2() {
  return (
    <>
      <main className="overflow-x-hidden bg-gray-200 font-sans text-gray-900 antialiased">
        <div className="relative min-h-screen px-4 md:flex md:items-center md:justify-center">
          <div className="absolute inset-0 z-10 h-full w-full bg-black opacity-25"></div>
          <div className="fixed inset-x-0 bottom-0 z-50 mx-4 mb-4 rounded-lg bg-white p-4 md:relative md:mx-auto md:max-w-md">
            <div className="items-center md:flex">
              <div className="mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full">
                <Player
                  src="https://assets4.lottiefiles.com/packages/lf20_3wo4gag4.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "100px", height: "100px" }}
                  keepLastFrame
                  autoplay
                ></Player>
              </div>
              <div className="mt-4 text-center md:mt-0 md:ml-6 md:text-left">
                <p className="font-bold">Success</p>
                <p className="mt-1 text-sm text-gray-700">
                  You're successfully uploaded an evidence. Click 'Continue' to
                  upload more. <br />
                  <br />
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  After submission, pls call us within 48 hours to claim your
                  reward. Thank you.
                  <br />
                  <br />
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="inline-flex" role="group">
                  {/* <button
                    type="button"
                    className="
                          rounded-l
                          px-6
                          py-2
                          border-2 border-blue-600
                          text-blue-600
                          font-medium
                          text-xs
                          leading-tight
                          uppercase
                          hover:bg-black hover:bg-opacity-5
                          focus:outline-none focus:ring-0
                          transition
                          duration-150
                          ease-in-out
                        "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </button> */}
                  <button
                    type="button"
                    className="
                          px-6
                          py-2
                          border-2 border-b-2 border-blue-600
                          text-blue-600
                          font-medium
                          text-xs
                          leading-tight
                          uppercase
                          hover:bg-black hover:bg-opacity-5
                          focus:outline-none focus:ring-0
                          transition
                          duration-150
                          ease-in-out
                        "
                  >
                    Call Us at +6568162969
                  </button>
                  <button
                    type="button"
                    className="
                        rounded-r
                        px-6
                        py-2
                        bg-blue-600
                        
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        hover:bg-black hover:bg-opacity-5
                        focus:outline-none focus:ring-0
                        transition
                        duration-150
                        ease-in-out
                      "
                  >
                    COPY
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center md:flex md:justify-end md:text-right">
              <button className="block w-full rounded-lg bg-blue-500 px-4 py-3 text-sm font-semibold text-white md:order-2 md:ml-2 md:inline-block md:w-auto md:py-2">
                Continue
              </button>
              <button className="mt-4 block w-full rounded-lg bg-gray-200 px-4 py-3 text-sm font-semibold md:order-1 md:mt-0 md:inline-block md:w-auto md:py-2">
                Close
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default ModalSuccess2;
