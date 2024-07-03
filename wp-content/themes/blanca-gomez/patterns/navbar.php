<?php

/**
 * Title: Main navbar
 * Slug: blancagomez/navbar
 */
?>

<nav class="flex justify-between items-center">
	<a href="<?= esc_url(get_permalink(71)); ?>" class="nav-item">Quién soy</a>
	<a href="<?= esc_url(get_permalink(14)); ?>" class="nav-item">Cursos y talleres</a>
	<a href="<?= esc_url(get_permalink(16)); ?>" class="nav-item">Agenda</a>
	<a href="<?= esc_url(get_permalink(12)); ?>" class="navbar-brand">
		<span class="sr-only">Blanca Gómez</span>
	</a>
	<a href="<?= esc_url(get_permalink(18)); ?>" class="nav-item">Newsletter</a>
	<a href="<?= esc_url(get_permalink(20)); ?>" class="nav-item">Descuentos</a>
	<a href="<?= esc_url(get_permalink(22)); ?>" class="nav-item">Contacto</a>
</nav>