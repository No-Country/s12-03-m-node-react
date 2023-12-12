import React from "react";
function ColorConManchas({isSelected}) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="withe"  stroke={isSelected===true ?  "#4D4295" :undefined}    />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.7739 0.0462788C15.1786 0.0156125 15.5875 0 16 0C23.6343 0 30.0198 5.34683 31.616 12.5C29.8102 18.958 22.25 21.4628 22.25 16.0153C22.25 9.87054 19.4698 8.70152 17.1372 7.72075C15.4517 7.01204 14 6.40163 14 4.0831C14 2.4957 14.2705 1.15337 14.7739 0.0462788Z"
        fill="#F6D89D"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.9803 26.6056C25.049 29.9143 20.768 32 16 32C14.9433 32 13.9105 31.8975 12.9111 31.7021C11.9106 26.8099 14.4011 23.7474 18.9689 22.5235C21.7974 21.7656 25.2929 23.7529 27.9803 26.6056Z"
        fill="#5F5F5F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.44771 27.07C1.69281 24.1958 0 20.2956 0 15.9999C0 14.056 0.346678 12.193 0.981582 10.4695C8.64302 7.58198 15.8367 14.7819 10.2307 17.1439C4.56799 19.5298 4.5702 22.5458 4.57205 25.0761C4.57257 25.7874 4.57307 26.4602 4.44771 27.07Z"
        fill="#AD6359"
      />
       
    </svg>
  );
}
export default ColorConManchas;
