export interface MenuTypes {
	src?: string | undefined;
	title: string;
	description?: string;
	price: string | number | undefined | null;
	pricePer?: string;
}
export interface BarTypes {
	src?: string | undefined;
	title: string;
	price: string | number;
	description?: string;
	individual?: string;
	SparklingWine?: {
		titleHeader?: string;
	}[];
}
