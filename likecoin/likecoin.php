<?php
/**
 * LikeCoin WordPress Plugin
 *
 * Plugin for embbeding LikeCoin functionalities into WordPress.
 *
 * @package LikeCoin
 * @version 0.2
 */

/*
	Plugin Name: LikeCoin
	Plugin URI: http://wordpress.org/plugins/likecoin/
	Description: For LikeCoin integration
	Author: like.co
	Version: 0.2
	Author URI: https://like.co/

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

define( 'LC_URI', plugin_dir_url( __FILE__ ) );
define( 'LC_DIR', plugin_dir_path( __FILE__ ) );
define( 'LC_PLUGIN_VERSION', '0.2' );
define( 'LC_WEB3_VERSION', '1.0.0-beta34' );

/* Utils related */
function get_author_likecoin_id( $post ) {
	$author      = $post->post_author;
	$likecoin_id = get_user_meta( $author, 'lc_likecoin_id', true );
	return $likecoin_id;
}

/* Meta Box related */

function likecoin_display_meta_box( $post ) {
	include_once 'views/metabox.php';
	likecoin_add_meta_box( $post );
}

function likecoin_load_scripts( $hook ) {
	if ( 'post-new.php' !== $hook && 'post.php' !== $hook ) {
		return;
	}
	wp_enqueue_script( 'web3', LC_URI . 'assets/js/web3.min.js', false, LC_WEB3_VERSION, true );
}

function likecoin_register_meta_boxes() {
	add_meta_box( 'like-coin', __( 'LikeCoin', 'textdomain' ), 'likecoin_display_meta_box', 'post' );
}

add_action( 'admin_enqueue_scripts', 'likecoin_load_scripts' );
add_action( 'add_meta_boxes', 'likecoin_register_meta_boxes' );

/* Widget related */

function likecoin_save_postdata( $post_id ) {
	/* Check nonce */
	if ( ! ( isset( $_POST['lc_metabox_nonce'] ) && wp_verify_nonce( sanitize_key( $_POST['lc_metabox_nonce'] ), 'lc_save_post' ) ) ) {
		return;
	}

	if ( isset( $_POST['lc_widget_option'] ) ) {
		$option = array(
			'lc_widget_position' => sanitize_key( $_POST['lc_widget_option'] ),
		);
		update_post_meta(
			$post_id,
			'lc_widget_option',
			$option
		);
		$post = get_post( $post_id );
		update_user_meta(
			$post->post_author,
			'lc_widget_option',
			$option
		);
	}
}

add_action( 'save_post', 'likecoin_save_postdata' );

function likecoin_add_widget( $content ) {
	global $post;
	if ( is_single() ) {
		$likecoin_id = get_author_likecoin_id( $post );
		if ( strlen( $likecoin_id ) > 0 ) {
			$widget_option   = get_post_meta( $post->ID, 'lc_widget_option', true );
			$widget_position = isset( $widget_option['lc_widget_position'] ) ? $widget_option['lc_widget_position'] : '';
			$permalink       = rawurlencode( get_permalink( $post ) );
			$widget_code     = '<iframe scrolling="no" frameborder="0" ' .
			'style="height: 212px; width: 100%;"' .
			'src="https://button.like.co/in/embed/' . $likecoin_id . '/button' .
			'?referrer=' . $permalink . '"></iframe>';
			if ( 'both' === $widget_position ) {
				return $widget_code . $content . $widget_code;
			} elseif ( 'top' === $widget_position ) {
				return $widget_code . $content;
			} elseif ( 'bottom' === $widget_position ) {
				return $content . $widget_code;
			}
			return $content;
		}
	}
	return $content;
}

add_filter( 'the_content', 'likecoin_add_widget', 999 );

/* Ajax related */

function likecoin_update_id() {
	$user    = wp_get_current_user();
	$user_id = $user->ID;
	if ( ! current_user_can( 'edit_user', $user_id ) ) {
		return wp_die( 'error editing' );
	}
	check_ajax_referer( 'lc_metabox_ajax', 'nonce' );
	if ( isset( $_POST['likecoin_id'] ) && isset( $_POST['likecoin_wallet'] ) ) {
		$result = update_user_meta(
			$user_id,
			'lc_likecoin_id',
			sanitize_text_field( wp_unslash( $_POST['likecoin_id'] ) )
		);
		update_user_meta(
			$user_id,
			'lc_likecoin_wallet',
			sanitize_text_field( wp_unslash( $_POST['likecoin_wallet'] ) )
		);
		if ( true === $result ) {
			echo 'Updated';
		} elseif ( false === $result ) {
			echo 'Unchanged';
		} else {
			echo 'Created';
		}
	}
	wp_die();
}

// wp_ajax_ is the prefix, likecoin_update_id is the action used in client side code
add_action( 'wp_ajax_likecoin_update_id', 'likecoin_update_id' );

/* Init / Upgrade related */

function handle_init_and_upgrade() {
	global $wpdb;
	global $charset_collate;
	$version = get_option( 'likecoin_plugin_version', LC_PLUGIN_VERSION );

	if ( version_compare( $version, LC_PLUGIN_VERSION ) < 0 ) {
		update_option( 'likecoin_plugin_version', LC_PLUGIN_VERSION );
	}

}

function handle_uninstall() {

	/* clean up all user metadata */
	delete_metadata( 'user', 0, 'lc_likecoin_id', '', true );
	delete_metadata( 'user', 0, 'lc_likecoin_wallet', '', true );
	delete_metadata( 'user', 0, 'lc_widget_option', '', true );
	delete_metadata( 'user', 0, 'lc_widget_position', '', true );
	/* clean up all post metadata */
	delete_metadata( 'user', 0, 'lc_widget_option', '', true );
	delete_metadata( 'post', 0, 'lc_widget_position', '', true );

	delete_option( 'likecoin_plugin_version' );
}

register_activation_hook( __FILE__, 'handle_init_and_upgrade' );
add_action( 'upgrader_process_complete', 'handle_init_and_upgrade' );
add_action( 'init', 'handle_init_and_upgrade' );
register_uninstall_hook( __FILE__, 'handle_uninstall' );
