import * as React from "react";
import { render, screen } from "@testing-library/react";

import { ServicesProvider } from "./ServicesProvider";
import App from "./App";
import { Effect } from "effect";

const pipeMock = jest.fn().mockReturnValue(Effect.void);

const mockWithPipe = jest.fn().mockReturnValue({
	pipe: pipeMock,
});

describe("App", () => {
	it('should print out "BUG: FiberRuntime - {}" error to the terminal ', () => {
		render(
			<ServicesProvider
				localStorage={{
					get: mockWithPipe,
					set: mockWithPipe,
				}}
			>
				<App />
			</ServicesProvider>
		);

		const currentLocale = screen.getByText(/en/i);

		expect(currentLocale).toBeVisible();
	});
});
