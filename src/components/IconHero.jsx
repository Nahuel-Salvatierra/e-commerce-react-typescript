import React from "react";
const ICON = {
	svg: {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		strokeWidth: "1.5",
		stroke: "currentColor",
		className: `w-6 h-6`,
	},
	path: {
		strokeLinecap: "round",
		strokeLinejoin: "round",
	},
};

export function IconCart({ className }) {
	return (
		<svg {...ICON.svg} className={`${className}`}>
			<path
				{...ICON.path}
				d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
			/>
		</svg>
	);
}

export function IconTruck() {
	return (
		<svg {...ICON.svg}>
			<path
				{...ICON.path}
				d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
			/>
		</svg>
	);
}
export function IconShield() {
	return (
		<svg {...ICON.svg}>
			<path
				{...ICON.path}
				d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
			/>
		</svg>
	);
}
export function IconCheck() {
	return (
		<svg {...ICON.svg}>
			<path {...ICON.path} d="M4.5 12.75l6 6 9-13.5" />
		</svg>
	);
}
export function IconUser({ className }) {
	return (
		<svg {...ICON.svg} className={`${className}`}>
			<path
				{...ICON.path}
				d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
			/>
		</svg>
	);
}

export function IconArrowLeft({ className }) {
	return (
		<svg {...ICON.svg} className={`${className}`}>
			<path {...ICON.path} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
		</svg>
	);
}

export function IconSun({ className }) {
	return (
		<svg {...ICON.svg} className={`${className}`}>
			<path
				{...ICON.path}
				d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
			/>
		</svg>
	);
}

export function IconMoon({ className }) {
	return (
		<svg {...ICON.svg} className={`${className}`}>
			<path
				{...ICON.path}
				d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
			/>
		</svg>
	);
}

export function IconTrash({ className }) {
	return (
		<svg
			{...ICON.svg}
		>
			<path
				{...ICON.path} className={`${className}`}
				d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
			/>
		</svg>
	);
}
