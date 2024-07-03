<?php

/**
 * Title: Discount list
 * Slug: blancagomez/discount-list
 */

$discounts = get_field('discounts', 'options');
?>

<section class="bg-gray-50 pt-20 pb-32">
	<div class="max-w-6xl mx-auto px-6 xl:px-0">
		<div class="grid gap-x-20 md:grid-cols-2">
			<?php foreach ($discounts as $d) : ?>
				<article class="grid grid-cols-12 items-center gap-x-6 border-t border-gray-300 py-8">
					<div class="col-span-3">
						<?= wp_get_attachment_image($d['logo'], 'medium', null, ['class' => 'w-auto max-w-full h-20 object-contain mix-blend-multiply']); ?>
					</div>

					<div class="col-span-4 flex items-center">
						<span class="bg-gray-500 w-px h-10 block"></span>
						<div class="text-sm pl-6 flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
							<?= mb_strtoupper($d['category'], 'UTF-8'); ?> <?= mb_strtoupper($d['category'], 'UTF-8'); ?>
						</div>
						<i class="ri-arrow-right-s-line"></i>
					</div>

					<div class="col-span-5 flex gap-x-4 items-center justify-end">
						<img src="<?= get_template_directory_uri() . '/assets/img/label.png'; ?>" alt="Etiqueta de descuento" class="w-10">

						<p class="">
							<?= $d['code']; ?>
						</p>

						<div class="relative select-none group">
							<?php if (!empty($d['info'])) : ?>
								<i class="ri-information-2-line ri-xl text-gray-400 group-hover:text-sky-500"></i>

								<div class="bg-white w-72 px-3 py-5 top-14 right-2.5 absolute pointer-events-none hidden group-hover:block">
									<span class="w-0 h-0 right-0 -top-[22px] absolute" style="border-bottom: solid 22px white; border-left: solid 22px transparent;"></span>
									<i class="ri-add-line ri-xl text-gray-300 left-3 top-5 absolute pointer-events-none"></i>
									<div class="text-sm px-7 py-3"><?= $d['info']; ?></div>
								</div>
							<?php endif; ?>
						</div>
					</div>
				</article>
			<?php endforeach; ?>
		</div>
	</div>
</section>