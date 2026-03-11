const menuOpenClasses = {
	body: "body-open-nav",
	header: "header-open-nav",
	nav: "mobile-show",
	burger: "burger-active",
	main: "main-open-nav"
}

const body = document.body;
const header = document.querySelector("header");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const main = document.querySelector(".main");

burger.addEventListener("click", () => {
	if (burger.classList.contains("burger-active")) {
		body.classList.remove(menuOpenClasses.body);
		header.classList.remove(menuOpenClasses.header);
		nav.classList.remove(menuOpenClasses.nav);
		burger.classList.remove(menuOpenClasses.burger);
		main.classList.remove(menuOpenClasses.main);
		nav.animate([
			{opacity: 0}
		], {
			duration: 200,
			fill: "forwards",
			easing: "ease-in-out"
		});
	}else {
		body.classList.add(menuOpenClasses.body);
		header.classList.add(menuOpenClasses.header);
		nav.classList.add(menuOpenClasses.nav);
		burger.classList.add(menuOpenClasses.burger);
		main.classList.add(menuOpenClasses.main);
		nav.animate([
			{opacity: 1}
		], {
			duration: 200,
			fill: "forwards",
			easing: "ease-in-out"
		});
	}
})


const goods = [
	{
		name: "Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570",
		count: 50,
		img: "./img/recommended/cable1",
		extension: ".png"
	},
	{
		name: "Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)",
		count: 0,
		img: "./img/recommended/belt1",
		extension: ".png"
	},
	{
		name: "Стальной канат для лифта GRS 8X19S-NFC 1570",
		count: 50,
		img: "./img/recommended/cable2",
		extension: ".png"
	},
	{
		name: "Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570",
		count: 50,
		img: "./img/recommended/cable1",
		extension: ".png"
	},
	{
		name: "Стальной канат для лифта GRS 8X19W-CWC 1570",
		count: 50,
		img: "./img/recommended/cable3",
		extension: ".png"
	},
	{
		name: "Купить плоский тяговый ремень для лифта GRS AAA717AJ1(8 кордов)",
		count: 50,
		img: "./img/recommended/belt2",
		extension: ".png"
	}
]
const recommended__list = document.querySelector(".recommended__list");

const addRecommendedItems = (items) => {
	const html = items.map((item) => `
		<article class="card">
			<div class="card__img">
				<img
				src="${item.img}${item.extension}"
				srcset="${item.img}${item.extension} 1x, ${item.img}@2x${item.extension} 2x"
				alt="${item.name}">
			</div>
			<div class="card__content">
				<div class="card__name">
					<p>
						${item.name}
					</p>  
				</div>
				<div class="card__available">
					<img class="card__tick ${item.count === 0 && "card__tick-warn"}" src="./img/icons/tick_sm.svg" alt="tick small">
					${item.count > 0 ? 
						`<span>В наличии ${item.count} м.</span>`:
						`Под заказ`
					}
				</div>
				<a href="#" class="card__btn btn">Подробнее</a>
			</div>
		</article>
	`).join("\n")
	recommended__list.insertAdjacentHTML('beforeend', html)
}

addRecommendedItems(goods)