"use client"
import { useEffect } from "react";

export const GetTheme = () => {
	useEffect(() => {
		// Функция для отслеживания изменения темы
		const handleThemeChange = (event) => {
			console.log(event.matches ? "dark" : "light");
		};

		// Создаем медиа-запрос для отслеживания темы
		const darkThemeMediaQuery = window.matchMedia(
			"(prefers-color-scheme: dark)"
		);

		// Вызываем функцию отслеживания при изменении темы
		darkThemeMediaQuery.addListener(handleThemeChange);

		// Вызываем функцию отслеживания для начальной проверки темы
		handleThemeChange(darkThemeMediaQuery);

		// Отписываемся от отслеживания при размонтировании компонента
		return () => {
			darkThemeMediaQuery.removeListener(handleThemeChange);
		};
	}, []);
};
