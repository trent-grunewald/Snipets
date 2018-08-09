//checks window size on load and applies the correct class for the collapsed nav underline.
						$( window ).width(function() {
							if ($(window).width() < 991) {
								$('.navli').removeClass( "nav-item" ).addClass("navli-mini");
							}
						});

						$(document).ready(function() {
							//checks window size on window resize and applies correct class if navbar-collapse.
							$( window ).resize(function() {
									if ($(window).width() < 991) {
									 $( '.navli' ).removeClass( "navli" ).addClass( "navli-mini" );
								 } else if ($(window).width() > 991) {
									 $( '.navli-mini' ).addClass( "navli" ).removeClass( 'navli-mini' );
								 }
							});
						});