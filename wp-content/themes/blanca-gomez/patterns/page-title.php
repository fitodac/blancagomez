<?php

/**
 * Title: Page title
 * Slug: blancagomez/page-title
 */
$front_page_id = (int) get_option('page_on_front');

if (get_the_ID() !== $front_page_id) : ?>
	<div class="pb-6 relative z-10 lg:pt-36">
		<div class="max-w-6xl mx-auto px-6 xl:px-0">
			<h1 class="text-2xl dm-serif-display-regular select-none lg:text-4xl"><?= get_the_title(); ?></h1>
		</div>
	</div>
<?php endif;
