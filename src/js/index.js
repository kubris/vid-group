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
if(mobMenuModal) {
	const mobMenu = document.querySelector('.jsMobMenu');
	const mobMenuModalClose = mobMenuModal.querySelector('.m-menu__close');

	mobMenu.addEventListener('click', (e) => {
		mobMenuModal.classList.add('show');
		disableScroll();
	});

	mobMenuModalClose.addEventListener('click', () => {
		mobMenuModal.classList.remove('show');
		enableScroll();
	});
}
// === end MOBILE MENU

// === start CALLBACK MODAL
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
// === end CALLBACK MODAL
