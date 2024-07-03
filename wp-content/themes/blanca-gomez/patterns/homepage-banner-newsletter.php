<?php

/**
 * Title: Home page banner newsletter
 * slug: blancagomez/home/banner-newsletter
 */
?>

<a href="<?= esc_url(get_permalink(25)); ?>" class="max-w-xs mx-auto block lg:max-w-full">
	<div class="h-52 relative group overflow-hidden xl:h-64">
		<h3 class="bg-black/50 text-white text-xl px-4 py-2 flex justify-between items-center relative z-10">
			<span>Newsletter</span>
			<i class="ri-add-circle-line ri-xl"></i>
		</h3>
		<img src="<?= get_template_directory_uri(); ?>/assets/img/home/newsletter.webp" alt="Newsletter" class="h-full inset-0 absolute object-cover transition-all group-hover:scale-105">
	</div>
</a>