import React, { createContext, PropsWithChildren } from "react";

import { type LocalStorageService } from "./LocalStorageService";

type Services = {
	localStorage: LocalStorageService;
};

export const ServicesContext = createContext<Services | undefined>(undefined);

export const ServicesProvider = ({
	children,
	localStorage,
}: PropsWithChildren<Services>) => {
	return (
		<ServicesContext.Provider value={{ localStorage }}>
			{children}
		</ServicesContext.Provider>
	);
};
