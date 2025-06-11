const Footer = () => {
	return (
		<footer
			style={{
				padding: "10px",
				fontWeight: 700,
				background: "transparent",
				color: "#fff",
				display: "flex",
				flexDirection: "column",
				position: "absolute",
				bottom: 0,
				width: "100%",
				height: "50px",
			}}>
			<div style={{ padding: "1rem 0.5rem", maxWidth: "90rem", margin: "0 auto", display: "none" }}></div>
			<hr style={{ display: "none" }} />
			<div style={{ padding: "5px 0", justifyContent: "flex-start", color: "#4b5563", maxWidth: "90rem", display: "flex", margin: "0 auto" }}>
				<div className="flex w-full flex-col items-center sm:items-start">© {new Date().getFullYear()} Powered by Netcore Unbxd. All Rights Reserved.</div>
			</div>
		</footer>
	);
};

export default Footer;
