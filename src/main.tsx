import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { ServicesProvider } from "./ServicesProvider.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		{/* pls ignore this, I only care for tests */}
		{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/ban-ts-comment */}
		{/* @ts-expect-error */}
		<ServicesProvider localStorage={{}} >
			<App />
		</ServicesProvider>
	</StrictMode>
);
