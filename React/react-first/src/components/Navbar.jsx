import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-[#191919] px-10   py-4 sm:flex flex-col items-center justify-between">
      <h1 className="text-[#ff3b1d] font-semibold uppercase text-center text-4xl sm:text-5xl  md:text-6xl lg:text-8xl font-titleFont">
        InsightfulBrew <span className="text-white">Blogs</span>
      </h1>

      <div>
        <ul
          className="text-white flex
        flex-col sm:flex-row md:flex-row  mt-4 space-y-2 justify-center items-center 
        font-semibold sm:space-x-4 sm:flex-wrap sm:space-y-0 md:space-x-12 text-center"
        >
          <li className="cursor-pointer ">
            <NavLink
              to={"/"}
              className={({ isActive }) => `
            ${
              isActive
                ? "text-[#ff3b1d] underline font-black  underline-offset-8  decoration-2 "
                : "text-white"
            }
            transition duration-300 ease-in-out 
            `}
            >
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"about"}
              className={({ isActive }) => `
            ${
              isActive
                ? "text-[#ff3b1d] underline underline-offset-8 decoration-2"
                : "text-white"
            }
            transition duration-300 ease-in-out
            `}
            >
              About
            </NavLink>
          </li>
          <li className="cursor-pointer ">
            <NavLink
              to={"contact"}
              className={({ isActive }) => `
            ${
              isActive
                ? "text-[#ff3b1d] underline underline-offset-8  decoration-2"
                : "text-white"
            }
            transition duration-300 ease-in-out 
            `}
            >
              Contact{" "}
            </NavLink>
          </li>
          <li className="cursor-pointer ">
            <NavLink
              to={"blogs"}
              className={({ isActive }) => `
            ${
              isActive
                ? "text-[#ff3b1d] underline underline-offset-8  decoration-2"
                : "text-white"
            }
            transition duration-300 ease-in-out 
            `}
            >
              Blog/Posts{" "}
            </NavLink>
          </li>
          <li className="cursor-pointer ">
            <NavLink
              to={"categories"}
              className={({ isActive }) => `
            ${
              isActive
                ? "text-[#ff3b1d] underline underline-offset-8  decoration-2"
                : "text-white"
            }
            transition duration-300 ease-in-out 
            `}
            >
              Categories/Topics{" "}
            </NavLink>
          </li>
          <li className="cursor-pointer ">
            <NavLink
              to={"adverties"}
              className={({ isActive }) => `
            ${
              isActive
                ? "text-[#ff3b1d] underline underline-offset-8  decoration-2"
                : "text-white"
            }
            transition duration-300 ease-in-out 
            `}
            >
              Advertise/Partnerships{" "}
            </NavLink>
          </li>
          {/* <li className="cursor-pointer ">
            <NavLink
              to={"fags"}
              className={({ isActive }) => `
            ${
              isActive
                ? "text-[#ff3b1d] underline underline-offset-8  decoration-2"
                : "text-white"
            }
            transition duration-300 ease-in-out 
            `}
            >
              FAQs{" "}
            </NavLink>
          </li> */}
          <div className="flex space-x-4 sm:mt-10">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 256 256"
                className="cursor-pointer"
              >
                <path
                  fill="#1877F2"
                  d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                />
                <path
                  fill="#FFF"
                  d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 256 256"
                className="cursor-pointer"
              >
                <g fill="none">
                  <rect
                    width="256"
                    height="256"
                    fill="url(#skillIconsInstagram0)"
                    rx="60"
                  />
                  <rect
                    width="256"
                    height="256"
                    fill="url(#skillIconsInstagram1)"
                    rx="60"
                  />
                  <path
                    fill="#fff"
                    d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
                  />
                  <defs>
                    <radialGradient
                      id="skillIconsInstagram0"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FD5" />
                      <stop offset=".1" stop-color="#FD5" />
                      <stop offset=".5" stop-color="#FF543E" />
                      <stop offset="1" stop-color="#C837AB" />
                    </radialGradient>
                    <radialGradient
                      id="skillIconsInstagram1"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#3771C8" />
                      <stop offset=".128" stop-color="#3771C8" />
                      <stop offset="1" stop-color="#60F" stop-opacity="0" />
                    </radialGradient>
                  </defs>
                </g>
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 128 128"
                className="fill-current text-white cursor-pointer"
              >
                <path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z" />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 256 256"
                className="cursor-pointer"
              >
                <path
                  fill="#F06A35"
                  d="M29.251 254.992c-4.79-1.262-8.924-3.12-12.737-5.722c-3.218-2.197-7.922-6.739-9.711-9.376c-2.185-3.222-4.696-8.738-5.72-12.564c-1.044-3.903-1.06-5.457-1.08-99.134c-.018-93.203.003-95.253 1.026-99.258C4.648 14.773 15.853 3.996 30.305.78C34.46-.144 220.08-.305 224.562.61c12.135 2.483 21.673 9.78 27.192 20.805c4.388 8.765 3.996-.88 4.197 103.185c.128 66.212.01 94.01-.412 97.473c-1.976 16.205-13.134 28.775-29.19 32.882c-4.108 1.05-5.537 1.066-98.789 1.037c-90.164-.027-94.794-.074-98.309-1"
                />
                <path
                  fill="#FFF"
                  d="M164.338 206.474c11.47-1.564 20.458-6.162 28.89-14.776c6.1-6.232 9.918-12.977 12.414-21.93c1.036-3.719 1.123-5.53 1.313-27.365c.144-16.481.024-24.2-.405-26.148c-.622-2.825-2.385-5.448-4.397-6.541c-.62-.337-4.586-.766-8.815-.953c-7.087-.315-7.88-.453-10.116-1.764c-3.548-2.08-4.525-4.324-4.535-10.42c-.019-11.647-4.866-22.46-14.442-32.22c-6.823-6.952-14.434-11.658-23.12-14.295c-2.08-.632-6.737-.847-22.333-1.03c-24.472-.29-29.904.212-38.236 3.53c-15.36 6.118-26.395 19.011-30.421 35.541c-.756 3.105-.903 8.08-1.082 36.663c-.223 35.808.023 41.066 2.26 48.162c1.85 5.863 3.715 9.456 7.557 14.555c7.32 9.715 18.29 16.73 29.258 18.712c5.22.943 69.615 1.179 76.21.28"
                />
                <path
                  fill="#F06A35"
                  d="M162.317 150.441c4.233 3.953 3.34 10.99-1.761 13.88l-5.243.853l-30.939.358c-20.86.195-27.128-.216-28.409-.724l-.04-.017c-2.518-1.097-4.862-4.143-5.267-6.845c-.386-2.573.908-6.11 2.89-7.905l.441-.384c1.954-1.605 4.202-1.893 22.635-1.958l21.317-.022c21.549.016 21.738.301 24.376 2.764M131.944 92.09c3.286 1.66 4.714 4 4.714 7.727c0 3.236-1.24 5.54-3.994 7.398l-.534.341c-1.34.8-2.654.939-13.041 1.02l-6.703.038c-8.309.017-14.705-.157-15.727-.439c-5.864-1.616-8.055-10.029-3.745-14.38l.401-.398c2.307-2.235 3.775-2.466 17.292-2.487l10.186.008c8.608.04 9.295.235 11.151 1.172"
                />
              </svg>
            </li>
          </div>
          <li>
            <button className="bg-[#ff3b1d] font-titleFont font-normal text-lg px-4 py-1 hover:bg-[#e63b20] rounded">
              Post Blog
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
