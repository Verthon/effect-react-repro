import * as React from 'react';

import { useLocaleStorage } from "./useLocaleStorage";

function App() {
	const localeStorage = useLocaleStorage();

	return (
		<main>
			<p>current locale: {localeStorage.get()}</p>
			<button onClick={() => localeStorage.set("fr")}>switch locale</button>
		</main>
	);
}

export default App;
