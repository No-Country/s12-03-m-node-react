import React from "react";
function ColorAtigrado({isSelected}) {
  return (
    <svg
       width="32"
       height="32"
       viewBox="0 0 32 32"
       fill="none"
       version="1.1"
       id="svg11"
       xmlns="http://www.w3.org/2000/svg"
       xmlns:svg="http://www.w3.org/2000/svg">
      <defs
         id="defs15">
        <clipPath
           clipPathUnits="userSpaceOnUse"
           id="clipPath299">
          <circle
             cx="16.75"
             cy="16"
             r="16"
             fill="#d9d9d9"
             id="circle301" />
        </clipPath>
        <clipPath
           clipPathUnits="userSpaceOnUse"
           id="clipPath303">
          <circle
             cx="16.75"
             cy="16"
             r="16"
             fill="#d9d9d9"
             id="circle305" />
        </clipPath>
      </defs>
      <circle
         cx="17"
         cy="16"
         r="16"
         fill="#cecece"
         id="circle2"
         clipPath="url(#clipPath303)"
         transform="translate(-0.75)" 
         stroke={isSelected===true ? "#4d4295":undefined}   
         strokeWidth="4" 
         />
      <g
         mask="none"
         id="g9"
         clipPath="url(#clipPath299)"
         transform="translate(-0.75)"
         
         >
        <path
           d="m -7.57264,0.062809 c -1.33333,0.684444 0.66667,7.351111 -0.31111,9.848891 -0.48889,1.2444 -2.10666,4.3556 -0.96889,5.0133 1.14667,0.6578 4.70223,-2.8177 5.19112,-4.96886 C -3.17264,7.80503 -5.85708,-0.817191 -7.57264,0.062809 Z M -8.45263,24.9873 c 0,1.9377 6.36444,1.7155 6.36444,1.7155 0,0 4.01778,3.5645 4.88889,2.9422 1.05778,-0.7466 0.65778,-1.8044 -0.17778,-3.12 -1.31556,-2.0711 -2.106668,-3.2533 -3.564446,-3.8666 -1.315554,-0.56 -3.911114,0.1955 -5.271114,0.5244 -1.70666,0.4178 -2.23999,1.1733 -2.23999,1.8045 z M 0.0806971,11.6628 c -0.7911111,0.9689 0.2755559,1.84 1.2711129,3.3867 0.94222,1.4578 3.01333,4.2222 3.01333,4.2222 0,0 -0.28444,6.24 0.50667,6.8089 0.92444,0.6578 2.10667,-1.2267 2.68444,-2.8178 0.57778,-1.5911 0.61334,-3.6089 0.48,-4.8356 C 7.90292,17.2006 7.06737,15.2184 4.07181,13.0761 1.77848,11.4495 0.471808,11.1828 0.0806971,11.6628 Z M 4.24959,0.898363 c 0,0 1.80444,2.773337 2.77333,5.404447 0.96889,2.64 1.92,5.50219 2.26667,7.60889 0.18666,1.1289 0.77331,3.5644 1.64441,3.6889 0.88,0.1333 1.4934,-2.3467 1.7511,-5.1111 0.2667,-2.87114 -0.08,-6.9778 -0.56,-8.82669 -0.48,-1.84889 -1.0577,-3.244447 -1.0577,-3.244447 0,0 -1.60893,-0.026667 -3.56448,0.08 -1.70667,0.088889 -3.25333,0.4 -3.25333,0.4 z M 16.6051,0.320584 c 0,0 0.96,3.626676 1.1556,8.800006 0.1333,3.38671 0.56,9.26221 1.5822,9.26221 1.3156,0 2.5067,-4.4711 3.0311,-9.52888 0.5245,-5.05778 0.4,-8.311114 0.4,-8.311114 0,0 -1.6,-0.177776 -3.0044,-0.231109 -1.7422,-0.053334 -3.1645,0.008887 -3.1645,0.008887 z M 28.2763,18.4539 c 1.7777,0.2311 3.4577,-4.9866 4.2488,-8.24 0.7911,-3.25331 1.3067,-7.77776 1.3067,-7.77776 0,0 -1.4044,-0.4 -2.8533,-0.72889 -1.6711,-0.38222 -3.1645,-0.56 -3.1645,-0.56 0,0 0.2934,3.03111 0.2223,7.96445 -0.0445,2.64 -0.8445,9.2089 0.24,9.3422 z M 38.694,4.54281 c 0,0 -0.5955,6.58669 -0.9866,7.94669 -0.4,1.36 -3.7956,6.2311 -3.1023,7.0222 0.9067,1.04 5.3778,-2.6044 6.6934,-5.5022 1.3155,-2.8978 1.5289,-5.79558 1.5289,-5.79558 0,0 -0.5067,-0.96889 -1.9911,-2.18667 C 39.6807,5.07614 38.694,4.54281 38.694,4.54281 Z M 5.62737,35.965 c 0,0 4.03555,-5.7511 5.00443,-8.2933 0.9689,-2.5511 2.6845,-6.7378 4.1778,-7.12 1.5378,-0.4 1.0933,3.6533 0.1333,6.8178 -0.9244,3.0311 -2.5511,7.2978 -2.5511,7.2978 0,0 -1.6533,0.2666 -3.06666,0.48 C 6.42737,35.5828 5.62737,35.965 5.62737,35.965 Z M 16.5696,34.1873 c 0,0 3.0133,-5.7334 3.8222,-8.08 0.5067,-1.4578 1.5733,-5.52 2.9333,-5.4756 1.36,0.0444 1.2712,3.4311 0.88,5.4933 -0.4,2.0623 -1.9377,7.5645 -1.9377,7.5645 0,0 -1.2089,0.0978 -2.5067,0.2311 -1.0667,0.1067 -3.1911,0.2667 -3.1911,0.2667 z m 10.0622,-3.2089 c 0.2222,0.7377 6.2489,0.3733 8.24,-0.9423 3.7956,-2.5155 5.7333,-9.2533 4.4178,-9.1644 -1.3156,0.0889 -5.3156,4.5689 -6.7289,5.4933 -1.4045,0.9156 -6.3733,3.1556 -5.9289,4.6134 z m -3.2978,5.68 c 0,0 5.6356,0.96 8.9689,0.1689 2.9689,-0.7023 5.5378,-3.9912 6.4622,-3.4578 0.9245,0.5244 -0.2666,5.0133 -4.48,6.4622 -4.08,1.4044 -7.2533,0.7911 -7.2533,0.7911 0,0 -1.4222,-1.0222 -2.1067,-1.8489 -1.0666,-1.2622 -1.5911,-2.1155 -1.5911,-2.1155 z"
           fill="#33312f"
           id="path7" 
          
           />
      </g>
    </svg>
    
  );
}
export default ColorAtigrado;
