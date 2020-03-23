const lefts = document.querySelectorAll('.left');

observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		// if(entry.intersectionRatio > 0) {
		//     entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
		// }
		// else {
		//     entry.target.style.animation = 'none';
		// }
		if (!entry.isIntersecting) {
			return;
		}
		entry.target.style.animation = `fadein 2s`;
	});
});

lefts.forEach((left) => {
	observer.observe(left);
});

const rights = document.querySelectorAll('.right');

observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		}
		entry.target.style.animation = `fadein 3s`;
	});
});

rights.forEach((right) => {
	observer.observe(right);
});
