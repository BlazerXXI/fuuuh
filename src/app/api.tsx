import axios from "axios";

export const getMenuData = async () => {
	try {
		const apiKey = "AIzaSyCe9FJlOD7CDAEc2eqUCKWHs73rhKmN44w";
		const fileId = "1_o6qpr7vMVsEppekrmpNS8xwBJJtnv-P";
		const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`;

		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error("Ошибка при получении:", error);
		return null;
	}
};
