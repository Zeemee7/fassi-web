( function( blocks, editor, element ) {
	var el = element.createElement;

	blocks.registerBlockType( 'fw/call-to-action', {
		title: 'Fassi-Web: Call to Action', // The title of block in editor.
		icon: 'admin-comments', // The icon of block in editor.
		category: 'common', // The category of block in editor.
		attributes: {
			content: {
				type: 'string',
				default: 'Die Fassi 2021: Vom 12. bis 16. Februar!'
			},
			button: {
				type: 'string',
				default: 'Jetzt anmelden!'
			}
		},
		edit: function( props ) {
			return (
				el( 'div', { className: props.className },
					el(
						editor.RichText,
						{
							tagName: 'div',
							className: 'fw-call-to-action-content',
							value: props.attributes.content,
							onChange: function( content ) {
								props.setAttributes( { content: content } );
							}
						}
					),
					el(
						editor.RichText,
						{
							tagName: 'span',
							className: 'fw-call-to-action-button',
							value: props.attributes.button,
							onChange: function( content ) {
								props.setAttributes( { button: content } );
							}
						}
					),
				)
			);
		},
		save: function( props ) {
			return (
				el( 'div', { className: props.className },
					el( editor.RichText.Content, {
						tagName: 'p',
						className: 'fw-call-to-action-content',
						value: props.attributes.content,
					} ),
					el( 'button', { className: 'fw-call-to-action-button' },
						props.attributes.button
					)
				)
			);
		},
	} );
} )( window.wp.blocks, window.wp.editor, window.wp.element );