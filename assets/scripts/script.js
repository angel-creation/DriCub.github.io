$('.ds-our-programs-wrapper').owlCarousel({
	loop: true,
	margin: 0,
	nav: true,
	autoplay: true,
	autoplayTimeout: 1000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 3
		},
		1000: {
			items: 4
		}
	}
})

$('.ds-our-student-says-wrapper').owlCarousel({
	loop: true,
	margin: 0,
	nav: true,
	autoplay: true,
	autoplayTimeout: 1000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 1
		}
	}

})

$('.ds-our-team-wrapper').owlCarousel({
	loop: true,
	margin: 24,
	nav: true,
	autoplay: true,
	autoplayTimeout: 1000,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 2
		},
		1000: {
			items: 3
		}
	}

})

const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))
const bsCollapse = new bootstrap.Collapse('#myCollapse', {
	toggle: false,
	parent: null,

})
