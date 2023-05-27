const starsContainers = document.querySelectorAll('.product__stars--container');

starsContainers.forEach((starContainer) => {
	const stars = starContainer.querySelectorAll('li i');

	stars.forEach((star, index1) => {
		star.addEventListener('click', () => {
			stars.forEach((star, index2) => {
				star.style.color =
					index1 >= index2 ? 'var(--star-active)' : 'var(--grey-50)';
			});
		});
	});
});

