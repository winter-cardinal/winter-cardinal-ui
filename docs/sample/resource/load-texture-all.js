(() => {
	"use strict";

	const resolution = (window.devicePixelRatio || 1) * 2;
	const size = 24 * resolution;
	const toSvgTexture = wcardinal.ui.toSvgTexture;

	window.texture = {
		nutrition: toSvgTexture(
			`<svg xmlns="http://www.w3.org/2000/svg" width="${size}px" height="${size}px" viewBox="0 -960 960 960" fill="#fff">` +
				`<path d="M480-120q-117 0-198.5-81.5T200-400q0-94 55.5-168.5T401-669q-20-5-39-14.5T328-708q-33-33-42.5-78.5T281-879q47-5 92.5 4.5T452-832q23 23 33.5 52t13.5 61q13-31 31.5-58.5T572-828q11-11 28-11t28 11q11 11 11 28t-11 28q-22 22-39 48.5T564-667q88 28 142 101.5T760-400q0 117-81.5 198.5T480-120Zm0-80q83 0 141.5-58.5T680-400q0-83-58.5-141.5T480-600q-83 0-141.5 58.5T280-400q0 83 58.5 141.5T480-200Zm0-200Z"/>` +
			`</svg>`,
			resolution
		),

		bread: toSvgTexture(
			`<svg xmlns="http://www.w3.org/2000/svg" width="${size}px" height="${size}px" viewBox="0 -960 960 960" fill="#fff">` +
				`<path d="M804-282q17 9 30-4t4-30l-58-108-42 108 66 34Zm-200-38h48l96-238q3-8-1.5-13.5T736-580l-80-32q-9-3-` +
				`17.5 2T628-596l-24 276Zm-296 0h48l-24-276q-2-11-10.5-15t-17.5-1l-80 32q-8 3-11.5 8.5T212-558l96 238Zm-152 ` +
				`38 66-34-42-108-58 108q-9 17 4 30t30 4Zm280-38h88l30-338q2-9-4.5-15.5T534-680H426q-8 0-14.5 6.5T406-658l30` +
				` 338ZM138-200q-42 0-70-31.5T40-306q0-12 3.5-23.5T52-352l88-168q-14-40 1-79t53-55l80-32q14-5 28-7t28 1q14-2` +
				`9 39-48.5t57-19.5h108q32 0 57 19.5t39 48.5q14-2 28-.5t28 6.5l80 32q40 16 56 55t-2 77l88 168q6 11 9 23t3 25` +
				`q0 45-30.5 75.5T814-200q-11 0-22-2.5t-22-7.5l-62-30H250l-56 30q-13 7-27.5 8.5T138-200Zm342-280Z"/>` +
			`</svg>`,
			resolution
		),

		cutlery: toSvgTexture(
			`<svg xmlns="http://www.w3.org/2000/svg" width="${size}px" height="${size}px" viewBox="0 -960 960 960" fill="#fff">` +
				`<path d="M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-44` +
				`6v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z"/>` +
			`</svg>`,
			resolution
		),

		coffee: toSvgTexture(
			`<svg xmlns="http://www.w3.org/2000/svg" width="${size}px" height="${size}px" viewBox="0 -960 960 960" fill="#fff">` +
				`<path d="M160-120v-80h640v80H160Zm160-160q-66 0-113-47t-47-113v-400h640q33 0 56.5 23.5T880-760v120q0 33-23` +
				`.5 56.5T800-560h-80v120q0 66-47 113t-113 47H320Zm0-80h240q33 0 56.5-23.5T640-440v-320H240v320q0 33 23.5 56` +
				`.5T320-360Zm400-280h80v-120h-80v120ZM320-360h-80 400-320Z"/>` +
			`</svg>`,
			resolution
		),

		calendar: toSvgTexture(
			`<svg xmlns="http://www.w3.org/2000/svg" width="${size}px" height="${size}px" viewBox="0 -960 960 960" fill="#fff">` +
				`<path d="M360-300q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.` +
				`5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-2` +
				`3.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/>` +
			`</svg>`,
			resolution
		),

		file: toSvgTexture(
			`<svg xmlns="http://www.w3.org/2000/svg" height="${size}px" width="${size}px" viewBox="0 0 24 24" fill="#ffffff">` +
				`<path d="M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z"/>` +
				`<path d="M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z"/>` +
			`</svg>`,
			resolution
		),

		folder: toSvgTexture(
			`<svg xmlns="http://www.w3.org/2000/svg" height="${size}px" width="${size}px" viewBox="0 0 24 24" fill="#fff">` +
				`<path d="M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>` +
			`</svg>`,
			resolution
		),

		search: toSvgTexture(
			`<svg xmlns="http://www.w3.org/2000/svg" width="${size}px" height="${size}px" viewBox="0 -960 960 960" fill="#fff">` +
				`<path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5` +
				` 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0` +
				`-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>` +
			`</svg>`,
			resolution
		),

		alert: toSvgTexture(
			`<svg xmlns="http://www.w3.org/2000/svg" height="${size}px" width="${size}px" viewBox="0 0 24 24" fill="#ffffff">` +
				`<path d="M12 17q.425 0 .713-.288Q13 16.425 13 16t-.287-.713Q12.425 15 12 15t-.712.287Q11 15.575 11 16t.288.712Q11.575` +
				` 17 12 17Zm-1-4h2V7h-2Zm1 9q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.78` +
				`7-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22` +
				` 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3` +
				`.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>` +
			`</svg>`,
			resolution
		)
	};
})();
