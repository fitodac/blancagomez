<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          ']Ll!*cAc4Nr@3<,3+</#p(VR!WR1sv-p{ <9TjqwI]{Q_YUW2QWIejPe/kKqsMC(' );
define( 'SECURE_AUTH_KEY',   'PSx9.6}=h_~^<;oi@znO?,4&gP-zQ9N=^e3C!_`*KVA[RQ-69ve6Z&oe7n>lkc|3' );
define( 'LOGGED_IN_KEY',     'a7 $imy!Vr`_`Kg!pp5d!1^Pzbi1Ek*,-UiK+KC3rg)0_*Rp}^h:=ip--nsCOA<9' );
define( 'NONCE_KEY',         'm_HrF`Enf8c!nmdf}9!})Asg<):YK%2Fb8&d]!>1sV3w0*DG?gX^cxG}(1.R^l&j' );
define( 'AUTH_SALT',         'nW1wrAg-2$A%^:T^<>sa4xKI:?Topse~mydD.7b(P(d8Z?/e4IkVL??~=?o!%`KC' );
define( 'SECURE_AUTH_SALT',  'T]?|g;dH Tija-t8w<EBy#;+)3$QC%~N /-EXLz3w] =y8jj&CK9w3=1g<H(c$9}' );
define( 'LOGGED_IN_SALT',    '1J*E6$[sj|;l6*_g!q<Hj~/=/YVM-X3jR::~AA8s$gNh+cMW`P&km,;/H~PZOWGc' );
define( 'NONCE_SALT',        'c8Ju+Mr.3%o/l0%~2os:&c*f$xYS$&s0wW^*V([*zj[{;p@&3Lum[k:K p0>^EKm' );
define( 'WP_CACHE_KEY_SALT', 'rUg<0dryUHL&:Cy3ISXG{L+XQe=X0Zsh>BkooXtt<(KH3d*oXh+W:LxB*F}P,Uk=' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
