<?php

/**
 * Title: Calendat list
 * Slug: blancagomez/agenda-list
 */

$args = [
	'post_type' => 'agenda',
	'post_status' => 'publish',
	'order' => 'ASC',
	'posts_per_page' => 9,
];

$query = new WP_Query($args);
?>

<div class="max-w-6xl mx-auto px-6 xl:px-0">
	<div class="h-10"></div>

	<?php if ($query->have_posts()) : ?>
		<section class="grid grid-cols-2 gap-x-20 gap-y-14">
			<?php while ($query->have_posts()) : $query->the_post(); ?>
				<article class="space-y-4">
					<div class="flex gap-x-5">
						<div class="">
							<svg width="59px" height="49px" viewBox="0 0 59 49" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g id="Group">
										<rect id="Rectangle" stroke="#000000" fill="#FFFFFF" x="0.5" y="2.5" width="58" height="46" rx="4"></rect>
										<line x1="58.5" y1="10.5" x2="0.5" y2="10.5" id="Line" stroke="#000000" stroke-linecap="square"></line>
										<rect id="Rectangle" fill="#000000" x="13" y="0" width="2" height="7"></rect>
										<rect id="Rectangle-Copy" fill="#000000" x="42" y="0" width="2" height="7"></rect>
										<text id="ENE" font-size="16" font-weight="500" fill="#000000">
											<tspan x="15" y="35" class="font-bold"><?= get_field('month'); ?></tspan>
										</text>
									</g>
								</g>
							</svg>
						</div>

						<div class="flex-1 space-y-2">
							<a href=" <?php the_permalink(); ?>">
								<h3 class="text-2xl font-bold leading-none"><?php the_title(); ?></h3>
							</a>

							<div class="flex text-lg gap-x-3 items-center">
								<div>
									<span class="font-extrabold"><?= get_field('day'); ?> </span>
									<span class="font-extrabold"><?= strtolower(get_field('month')); ?>.</span>
								</div>
								<span class="bg-gray-500 w-px h-5 top-px relative"></span>
								<span class=""><?= get_field('location'); ?></span>
							</div>
						</div>

					</div>

					<div class="">
						<a href=" <?php the_permalink(); ?>">
							<?= wp_get_attachment_image(get_field('image'), [800, 600], null, ['class' => 'w-full h-60 object-cover object-top mix-blend-multiply']); ?>
						</a>
					</div>

					<div>
						<?= get_field('excerpt'); ?>
					</div>
				</article>
			<?php endwhile; ?>
		</section>
	<?php endif; ?>

	<div class="h-32"></div>
</div>