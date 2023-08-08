import Image from "next/image";
import Breakfast from "./breakfast/page";
import Deserts from "./deserts/page";
import MainDishes from "./mainDishes/page";
import Salats from "./salats/page";
import Snacks from "./snacks/page";
import Soups from "./soups/page";

const Food = () => {
	return (
		<>
			<section id="hero">
				<Image
					className="object-cover w-full h-[30vh]"
					src={"/heroBg.png"} 
					width={1200}
					height={335}
					alt="hero image"
				/>
			</section>
			<section id="food">
				<div>
					<h2 className="title-section">Їжа</h2>
				</div>
				<Breakfast />
				<Snacks />
				<Soups />
				<Salats />
				<MainDishes />
				<Deserts />
			</section>
		</>
	);
};

export default Food;
