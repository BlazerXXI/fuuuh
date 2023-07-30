import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<>
			<div>
				<Link href="/">
					<Image
						src="/img/header/logo.png"
						alt="logo"
						width={247}
						height={64}
					/>
				</Link>
			</div>
			<nav></nav>
			<div></div>
		</>
	);
};

export default page;
