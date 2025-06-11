"use client";

import { UnbxdSearchSSRWrapper } from "@unbxd-ui/react-search-hooks";
import "@unbxd-ui/react-search-components/styles/index.css";
import { onEvent, setWebUrl } from "@/utils/helpers";

const SearchWrapper = ({ children, initialData }: { children: React.ReactNode; initialData: Record<string, unknown> }) => {
	return (
		<UnbxdSearchSSRWrapper initialData={initialData} onEvent={onEvent} setWebUrl={setWebUrl}>
			{children}
		</UnbxdSearchSSRWrapper>
	);
};

export default SearchWrapper;
