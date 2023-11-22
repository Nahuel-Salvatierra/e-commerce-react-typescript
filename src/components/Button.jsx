import { useEffect, useState } from "react";

export default function Button({ type, onClick, text, style }) {
	return (
		<button type={type} onClick={onClick} className={style}>
			{text}
		</button>
	);
}
