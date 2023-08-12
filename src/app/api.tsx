"use client";
import axios from "axios";
import { MenuHeader, MenuTypes } from "./types";

export const getMenuData = async (): Promise<
	MenuTypes & MenuHeader | null
> => {
	try {
		const apiKey = "AIzaSyCe9FJlOD7CDAEc2eqUCKWHs73rhKmN44w";
		const fileId = "1_o6qpr7vMVsEppekrmpNS8xwBJJtnv-P";
		const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`;

		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error("Ошибка при получении данных:", error);
		return null;
	}
};
