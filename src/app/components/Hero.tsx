import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<section id="hero">
			<Image
				src={"/img/hero/heroBg.png"}
				width={1200}
				height={335}
				alt="hero image"
			/>
		</section>
	);
};

export default Hero;
