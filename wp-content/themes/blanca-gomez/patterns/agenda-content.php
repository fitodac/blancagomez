<?php

/**
 * Title: Agenda single
 * Slug: blancagomez/agenda-content
 */

?>

<div class="max-w-3xl mx-auto px-6 xl:px-0">
	<div class="pb-6 relative z-10 lg:pt-36">
		<div class="max-w-6xl mx-auto px-6 xl:px-0">
			<h1 class="text-2xl dm-serif-display-regular select-none lg:text-4xl"><?= get_the_title(); ?></h1>

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

	<div class="space-y-7">
		<?php if (get_field('image')) : ?>
			<div class="">
				<?= wp_get_attachment_image(get_field('image'), [800, 600], null, ['class' => 'w-full h-96 object-cover object-top mix-blend-multiply']); ?>
			</div>
		<?php endif; ?>

		<?= get_field('content'); ?>
	</div>

	<?php
	$prev_post = get_previous_post();
	$next_post = get_next_post();

	if (!empty($next_post)) {
		$next_post_id = $next_post->ID;
		echo '<a href="' . get_permalink($next_post_id) . '">Post Siguiente &raquo;</a>';
	}
	?>

	<div class="flex justify-between pt-20">
		<div class="w-1/3">
			<?php
			if (!empty($prev_post)) :
				$prev_post_id = $prev_post->ID;
			?>
				<a href="<?= get_permalink($prev_post_id); ?>" class="flex items-center gap-x-4">
					<?= wp_get_attachment_image(get_field('image', $prev_post_id), 'thumbnail', null, ['class' => 'w-20 h-16 object-cover object-top mix-blend-multiply']); ?>
					<div class="font-bold whitespace-nowrap text-ellipsis overflow-hidden">
						<?= $prev_post->post_title; ?>
					</div>
				</a>
			<?php endif; ?>
		</div>



		<div class="w-1/3">
			<?php
			if (!empty($next_post)) :
				$next_post_id = $next_post->ID;
			?>
				<a href="<?= get_permalink($next_post_id); ?>" class="flex items-center gap-x-4">
					<div class="font-bold whitespace-nowrap text-ellipsis overflow-hidden">
						<?= $next_post->post_title; ?>
					</div>
					<?= wp_get_attachment_image(get_field('image', $next_post_id), 'thumbnail', null, ['class' => 'w-20 h-16 object-cover object-top mix-blend-multiply']); ?>
				</a>
			<?php endif; ?>
		</div>
	</div>

</div>

<div class="h-32"></div>
</div>