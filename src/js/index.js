// === start DROPLIST
if (document.querySelector(".drop")) {
	const lists = document.querySelectorAll(".drop");

	lists.forEach((el) => {
		el.addEventListener("click", (e) => {
			e.stopPropagation();
			if (window.innerWidth <= 1024) {
				if (!e.currentTarget.classList.contains("show")) {
					closeAllDrops(lists);
					e.currentTarget.classList.add("show");
					let content = e.currentTarget.nextElementSibling;
					content.style.maxHeight = content.scrollHeight + "px";
				} else {
					e.currentTarget.classList.remove("show");
					e.currentTarget.nextElementSibling.style.maxHeight = null;
				}
			}
		});
	});

	window.addEventListener("resize", function () {
		closeAllDrops(lists);
	});
}

function dropListClick(els) {
	els.forEach((el) => {
		el.addEventListener("click", (e) => {

			if (e.currentTarget.classList.contains("show")) {
				e.currentTarget.classList.remove("show");
				e.currentTarget.nextElementSibling.style.maxHeight = null;
			} else {
				closeAllDrops(els);
				e.currentTarget.classList.add("show");
				let content = e.currentTarget.nextElementSibling;
				content.style.maxHeight = content.scrollHeight + "px";
			}
		});
	});
}

function closeAllDrops(els) {
	els.forEach((el) => {
		if (el.classList.contains("show")) {
			el.classList.remove("show");
			el.nextElementSibling.style.maxHeight = null;
		}
	});
}
// === end DROPLIST

// === MODALS
let disableScroll = function () {
	let paddingOffset = window.innerWidth - document.body.offsetWidth + "px";
	document.body.parentElement.classList.add("no-scroll");
	document.body.style.paddingRight = paddingOffset;
};

let enableScroll = function () {
	document.body.parentElement.classList.remove("no-scroll");
	document.body.style.paddingRight = 0;
};

// === start MOBILE MENU
const mobMenuModal = document.querySelector('.m-menu__bg');
if (mobMenuModal) {
	const mobMenu = document.querySelector('.jsMobMenu');
	const mobMenuModalClose = mobMenuModal.querySelector('.m-menu__close');
	const localBtns = mobMenuModal.querySelectorAll('button');

	mobMenu.addEventListener('click', (e) => {
		mobMenuModal.classList.add('show');
		disableScroll();
	});

	localBtns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
			mobMenuModal.classList.remove('show');
			enableScroll();
		});
	});

	mobMenuModalClose.addEventListener('click', () => {
		mobMenuModal.classList.remove('show');
		enableScroll();
	});
}
// === end MOBILE MENU

// === start MODAL CALLBACK
if (document.querySelector(".callback-bg")) {
	const btnsOpen = document.querySelectorAll(".jsOpenModal");
	const modalWin = document.querySelector(".callback-bg");
	const closeWin = document.querySelector(".callback-close");

	btnsOpen.forEach((btn) => {
		btn.addEventListener("click", (event) => {
			modalWin.classList.add("show");
			disableScroll();
		});
	});

	closeWin.addEventListener("click", (event) => {
		modalWin.classList.remove("show");
		enableScroll();
	});
}
// === end MODAL CALLBACK

// === start MODAL SEARCH
if (document.querySelector(".search-bg")) {
	const btnsOpen = document.querySelectorAll(".jsOpenSearch");
	const modalWin = document.querySelector(".search-bg");
	const closeWin = document.querySelector(".search-close");

	btnsOpen.forEach((btn) => {
		btn.addEventListener("click", (event) => {
			modalWin.classList.add("show");
			disableScroll();
		});
	});

	closeWin.addEventListener("click", (event) => {
		modalWin.classList.remove("show");
		enableScroll();
	});
}
// === end MODAL SEARCH

// === start MODAL SEARCH
if (document.querySelector(".lk-bg")) {
	const btnsOpen = document.querySelectorAll(".jsOpenLK");
	const modalWin = document.querySelector(".lk-bg");
	const closeWin = document.querySelector(".lk-close");

	btnsOpen.forEach((btn) => {
		btn.addEventListener("click", (event) => {
			modalWin.classList.add("show");
			disableScroll();
		});
	});

	closeWin.addEventListener("click", (event) => {
		modalWin.classList.remove("show");
		enableScroll();
	});
}
// === end MODAL SEARCH

// === start MODAL SIGN
if (document.querySelector(".sign-bg")) {
	const btnsOpen = document.querySelectorAll(".jsSignModal");
	const modalWin = document.querySelector(".sign-bg");
	const closeWin = document.querySelector(".sign-close");

	btnsOpen.forEach((btn) => {
		btn.addEventListener("click", (event) => {
			modalWin.classList.add("show");
			disableScroll();
		});
	});

	closeWin.addEventListener("click", (event) => {
		modalWin.classList.remove("show");
		enableScroll();
	});
}
// === end MODAL SIGN

// === start FOOTER LIST DROP
const foolistTitle = document.querySelectorAll('.foo-list__title');
if (foolistTitle.length > 0) {
	foolistTitle.forEach((title) => {
		title.addEventListener('click', (e) => {
			e.currentTarget.classList.toggle('show');
		});
	});
}
// === end FOOTER LIST DROP

// === start SCROLLING in MAIN - SERVICES
document.addEventListener("DOMContentLoaded", function () {
	const ele = document.getElementById("jsScrolList");
	ele.style.cursor = "grab";

	let pos = { top: 0, left: 0, x: 0, y: 0 };

	const mouseDownHandler = function (e) {
		ele.style.cursor = "grabbing";
		ele.style.userSelect = "none";

		pos = {
			left: ele.scrollLeft,
			top: ele.scrollTop,
			x: e.clientX,
			y: e.clientY
		};

		document.addEventListener("mousemove", mouseMoveHandler);
		document.addEventListener("mouseup", mouseUpHandler);
	};

	const mouseMoveHandler = function (e) {
		const dx = e.clientX - pos.x;
		const dy = e.clientY - pos.y;

		ele.scrollTop = pos.top - dy;
		ele.scrollLeft = pos.left - dx;
	};

	const mouseUpHandler = function () {
		ele.style.cursor = "grab";
		ele.style.removeProperty("user-select");

		document.removeEventListener("mousemove", mouseMoveHandler);
		document.removeEventListener("mouseup", mouseUpHandler);
	};

	ele.addEventListener("mousedown", mouseDownHandler);
});
// === end SCROLLING in MAIN - SERVICES

// === start MAIN-HERO SLIDER
if (document.querySelector(".sales-hit__slider")) {
	const dpSlider = new Swiper(".sales-hit__slider", {
		pagination: {
			el: ".sales-hit__pagination",
			clickable: true,
		},
	});
}
// === end MAIN-HERO SLIDER

// === start OUR WORKS SLIDER
if (document.querySelector('.our-works__grid')) {
	let owInit = false;
	let owSwiper;
	function swiperCard() {
		if (window.innerWidth <= 767) {
			if (!owInit) {
				owInit = true;
				owSwiper = new Swiper(".our-works__grid", {
					slidesPerView: 1,
					spaceBetween: 20,
					pagination: {
						el: ".our-works__pagination",
						clickable: true,
					},
				});
			}
		} else if (owInit) {
			owSwiper.destroy();
			owInit = false;
		}
	}
	swiperCard();
	window.addEventListener("resize", swiperCard);
}
// === end OUR WORKS SLIDER

// === start OUR WORKS SLIDER
if (document.querySelector('.clients__grid')) {
	let cInit = false;
	let cSwiper;
	function swiperCard() {
		if (window.innerWidth > 1024) {
			if (!cInit) {
				cInit = true;
				cSwiper = new Swiper(".clients__grid", {
					slidesPerView: 5,
					spaceBetween: 20,
					loop: true,
					navigation: {
						nextEl: '.clients__btns-next',
						prevEl: '.clients__btns-prev',
					},
				});
			}
		} else if (cInit) {
			cSwiper.destroy();
			cInit = false;
		}
	}
	swiperCard();
	window.addEventListener("resize", swiperCard);
}
// === end OUR WORKS SLIDER

// === start TESTIMONIALS SLIDER
if (document.querySelector(".testimonials__grid")) {
	const tmSlider = new Swiper(".testimonials__grid", {
		slidesPerView: 1,
		spaceBetween: 20,
		pagination: {
			el: ".testimonials__pagination",
			clickable: true,
		},
		breakpoints: {
			575: {
				slidesPerView: 2,
				spaceBetween: 20
			}
		}
	});
}
// === end TESTIMONIALS SLIDER

// === start ROLL-LIST
if (document.querySelector(".jsCatList")) {
	const boxes = document.querySelectorAll(".jsCatList");

	boxes.forEach((box) => {

		let isDown = false;
		let startX;
		let startY;
		let scrollLeft;
		let scrollTop;

		box.addEventListener("mousedown", (e) => {
			isDown = true;
			startX = e.pageX - box.offsetLeft;
			startY = e.pageY - box.offsetTop;
			scrollLeft = box.scrollLeft;
			scrollTop = box.scrollTop;
			box.style.cursor = "grabbing";
		});

		box.addEventListener("mouseleave", () => {
			isDown = false;
			box.style.cursor = "grab";
		});

		box.addEventListener("mouseup", () => {
			isDown = false;
			box.style.cursor = "grab";
		});

		document.addEventListener("mousemove", (e) => {
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX - box.offsetLeft;
			const y = e.pageY - box.offsetTop;
			const walkX = (x - startX) * 1;
			const walkY = (y - startY) * 1;
			box.scrollLeft = scrollLeft - walkX;
			box.scrollTop = scrollTop - walkY;
		});
	});
}
// === end ROLL-LIST

// === start BLOG TAB
const fadeIn = (el, timeout, display) => {
	el.style.opacity = 0;
	el.style.display = display || "block";
	el.style.transition = `opacity ${timeout}ms`;
	setTimeout(() => {
		el.style.opacity = 1;
	}, 10);
};

function hideAll(els) {
	els.forEach((item) => {
		item.style.display = "none";
	});
}

function delAllActiveBtns(els) {
	els.forEach((item) => {
		item.contains.classList = "active" ? item.classList.remove("active") : false;
	});
}

if (document.querySelector(".jsTab")) {
	const allTabs = document.querySelectorAll(".jsTab");

	allTabs.forEach((tab) => {
		const btns = tab.querySelectorAll(".thb");
		const blocks = tab.querySelectorAll(".tbc");
		btns.forEach((btn) => {
			btn.addEventListener("click", (e) => {
				let currBtn = e.currentTarget.dataset.btn;
				let currBlock = tab.querySelector("[data-text=" + currBtn + "]");

				delAllActiveBtns(btns);
				let isClass = e.currentTarget.contains.classList == "active";
				!isClass ? e.currentTarget.classList.add("active") : false;

				hideAll(blocks);

				if (currBlock) {
					fadeIn(currBlock, 1000, "grid");
				} else {
					fadeIn(blocks[0], 1000, "grid");
				}
			});
		});
	});
}
// === end BLOG TAB

// === start TOGGLE HEIGHT
const allHeights = document.querySelectorAll('.jsHeightBtn');
if (allHeights.length > 0) {
	allHeights.forEach((el) => {
		el.addEventListener("click", (e) => {
			if (e.currentTarget.parentElement.classList.contains("open")) {
				e.currentTarget.parentElement.classList.remove("open");
				e.currentTarget.classList.remove("open");
				e.currentTarget.innerText = 'Больше информации';
			} else {
				e.currentTarget.parentElement.classList.add("open");
				e.currentTarget.classList.add("open");
				e.currentTarget.innerText = 'Меньше информации';
			}
		});
	});
}
// === end TOGGLE HEIGHT