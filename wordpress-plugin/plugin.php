<?php
/**
 * Plugin Name: Fassi-Web WordPress Plugin
 * Description: Custom Gutenberg Blocks and Backend Services
 * Version: 0.1
 */

function fw_register_blocks() {

    // Check if Gutenberg is active.
    if ( ! function_exists( 'register_block_type' ) ) {
        return;
    }

    // Add block script.
    wp_register_script(
        'call-to-action',
        plugins_url( 'blocks/call-to-action/call-to-action.js', __FILE__ ),
        [ 'wp-blocks', 'wp-element', 'wp-editor' ],
        filemtime( plugin_dir_path( __FILE__ ) . 'blocks/call-to-action/call-to-action.js' )
    );

    // Add block style.
    wp_register_style(
        'call-to-action',
        plugins_url( 'blocks/call-to-action/call-to-action.css', __FILE__ ),
        [],
        filemtime( plugin_dir_path( __FILE__ ) . 'blocks/call-to-action/call-to-action.css' )
    );

    // Register block script and style.
    register_block_type( 'fw/call-to-action', [
        'style' => 'call-to-action', // Loads both on editor and frontend.
        'editor_script' => 'call-to-action', // Loads only on editor.
    ] );
}

add_action( 'init', 'fw_register_blocks' );
