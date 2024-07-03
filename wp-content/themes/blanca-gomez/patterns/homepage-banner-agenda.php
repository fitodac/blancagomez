<?php

/**
 * Title: Home page banner agenda
 * slug: blancagomez/home/banner-agenda
 */
?>

<a href="<?= esc_url(get_permalink(23)); ?>" class="max-w-xs mx-auto block lg:max-w-full">
	<div class="h-52 relative group overflow-hidden xl:h-64">
		<h3 class="bg-black/50 text-white text-xl px-4 py-2 flex justify-between items-center relative z-10">
			<span>Agenda</span>
			<i class="ri-add-circle-line ri-xl"></i>
		</h3>
		<img src="<?= get_template_directory_uri(); ?>/assets/img/home/agenda.webp" alt="Agenda" class="h-full inset-0 absolute object-cover transition-all group-hover:scale-105">
	</div>
</a>