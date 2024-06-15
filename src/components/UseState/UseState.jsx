import React from "react";
import { useState } from "react";

export const UseState = () => {
	const [count, setCount] = useState(0);
  console.log("usestate render");
	return (
		<div>
			<button onClick={() => setCount((prev) => prev + 1)}>
				Count - {count}
			</button>
		</div>
	);
};
