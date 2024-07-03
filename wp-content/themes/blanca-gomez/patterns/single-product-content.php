<?php

/**
 * Title: Single product content
 * Slug: blancagomez/single-product-content
 */


if (is_product()) {
	echo do_shortcode('[elementor-template id="' . get_field('template_id') . '"]');
} else {
	the_content();
}
