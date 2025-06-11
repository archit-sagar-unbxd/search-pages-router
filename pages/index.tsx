import { initialise } from "@unbxd-ui/react-search-hooks/ssr-utilities";
import Head from "next/head";
import {
	Breadcrumb,
	Facets,
	FixedPagination,
	PageSize,
	Products,
	ProductViewRadioButtons,
	SearchBox,
	SelectedFacets,
	SortButtons,
	Summary,
} from "@unbxd-ui/react-search-components";
import Image from "next/image";
import Link from "next/link";
import SearchWrapper from "@/components/SearchWrapper";
import Footer from "@/components/Footer";

export const getServerSideProps = async (context: { resolvedUrl: string }) => {
	const currentPath = context.resolvedUrl || "";

	try {
		const initialData = await initialise({
			apiKey: "18a57a4b0f096449ae5e6d6891c1970c",
			siteKey: "ss-unbxd-ss34831655294906",
			currentPath,
			defaultValues: {
				query: "*",
				pageSize: 36,
			},
			webUrlConfig: {
				query: {
					addToUrl: true,
				},
				categoryFacets: ["categoryPath"],
				rangeFacets: ["price"],
				view: {
					addToUrl: true,
				},
			},
			apiUrlConfig: {
				searchEndPoint: "https://search.unbxd.io",
				category: {
					browseQueryParam: "p",
					page: "",
					page_type: "boolean",
				},
			},
		});

		return {
			props: { currentPath, initialData },
		};
	} catch (error) {
		console.error("Error in initialise:", error);
		return {
			props: { currentPath, initialData: null },
		};
	}
};

export default function Home({ initialData }: { initialData: Record<string, unknown> }) {
	return (
		<div className="search-results-page">
			<Head>
				<title>NextJS Pages Router Demo</title>
				<link rel="icon" href="unbxd-logo-small.png" />
			</Head>
			<SearchWrapper initialData={initialData}>
				<div className="page-header">
					<Image className="header-logo" alt="Netcore Unbxd Logo" src="/unbxd-logo-large.png" width="100" height="100" />
					<div className="links-wrapper">
						<Link className="sdk-link" href="https://unbxd.github.io/react-search/docs">
							Documentation
						</Link>
						<Link className="sdk-link selected" href="https://unbxd.github.io/react-search/live-demos">
							Live Demos
						</Link>
						<Link className="sdk-link" href="https://github.com/unbxd/react-search">
							<svg width="24" height="24" fill="currentColor" viewBox="3 3 18 18">
								<title>GitHub</title>
								<path d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"></path>
							</svg>
						</Link>
					</div>
				</div>
				<div className="page-body">
					<div className="searchbox-container">
						<SearchBox forceReload={true} submitOnEnter={true} autosuggest={{ enabled: true }} />
					</div>
					<Summary />
					<div className="body-utilities">
						<ProductViewRadioButtons
							showLabel={true}
							label="View:"
							options={[
								{ label: `bigView`, value: "bigView" },
								{ label: "normalView", value: "normalView" },
								{ label: "smallView", value: "smallView" },
							]}
							CustomComponent={({ item }) => {
								if (item.value === "bigView") {
									return <span>Large</span>;
								} else if (item.value === "normalView") {
									return <span>Medium</span>;
								} else {
									return <span>Small</span>;
								}
							}}
						/>
						<PageSize label="Products per page:" />
						<SortButtons label="Sort:" />
					</div>
					<Breadcrumb name="categoryPath" />
					<SelectedFacets clearBtnLabel="Clear All" />
					<div className="facets-container">
						<Facets configs={{ renderAs: "dropdown" }} />
					</div>
					<Products />
					<div className="pagination-container">
						<FixedPagination pageLimit={5} />
					</div>
				</div>
			</SearchWrapper>
			<Footer />
		</div>
	);
}
