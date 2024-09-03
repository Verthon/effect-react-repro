import * as React from "react";

import { ServicesContext } from "./ServicesProvider";

export const useServices = () => {
	const context = React.useContext(ServicesContext);

	if (typeof context === "undefined") {
		throw new Error("ServicesContext must be within ServicesProvider");
	}

	return context;
};
