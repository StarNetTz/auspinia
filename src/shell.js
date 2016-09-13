export class Shell {
    configureRouter(config, router) {
        config.title = 'Aurelia';
        config.map([
            { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true },
            { route: 'view1', name: 'view1', moduleId: 'view1', nav: true },
            { route: 'view2_1', name: 'view2_1', moduleId: 'view2_1', nav: true },
            { route: 'view2_2', name: 'view2_2', moduleId: 'view2_2', nav: true },
            { route: 'view3_1', name: 'view3_1', moduleId: 'view3_1', nav: true },
            { route: 'view3_2', name: 'view3_2', moduleId: 'view3_2', nav: true },
            { route: 'view4_1', name: 'view4_1', moduleId: 'view4_1', nav: true },
            { route: 'view4_2', name: 'view4_2', moduleId: 'view4_2', nav: true }
        ]);

        this.router = router;
    }

    attached() {
        console.log("shell attached");
        this.initializeInspinia();
        // Minimalize menu when screen is less than 768px
        $(window).bind("resize", function() {
            if ($(this).width() < 769) {
                $('body').addClass('body-small')
            } else {
                $('body').removeClass('body-small')
            }
        });

    }

    initializeInspinia() {
        var that = this;
        $(document).ready(function() {

            // Add body-small class if window less than 768px
            if ($(this).width() < 769) {
                $('body').addClass('body-small')
            } else {
                $('body').removeClass('body-small')
            }

            // MetsiMenu
            $('#side-menu').metisMenu();

            // Collapse ibox function
            $('.collapse-link').on('click', function() {
                var ibox = $(this).closest('div.ibox');
                var button = $(this).find('i');
                var content = ibox.find('div.ibox-content');
                content.slideToggle(200);
                button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
                ibox.toggleClass('').toggleClass('border-bottom');
                setTimeout(function() {
                    ibox.resize();
                    ibox.find('[id^=map-]').resize();
                }, 50);
            });

            // Close ibox function
            $('.close-link').on('click', function() {
                var content = $(this).closest('div.ibox');
                content.remove();
            });

            // Fullscreen ibox function
            $('.fullscreen-link').on('click', function() {
                var ibox = $(this).closest('div.ibox');
                var button = $(this).find('i');
                $('body').toggleClass('fullscreen-ibox-mode');
                button.toggleClass('fa-expand').toggleClass('fa-compress');
                ibox.toggleClass('fullscreen');
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 100);
            });

            // Close menu in canvas mode
            $('.close-canvas-menu').on('click', function() {
                $("body").toggleClass("mini-navbar");
                that.SmoothlyMenu();
            });

            // Run menu of canvas
            $('body.canvas-menu .sidebar-collapse').slimScroll({
                height: '100%',
                railOpacity: 0.9
            });

            // Open close right sidebar
            $('.right-sidebar-toggle').on('click', function() {
                $('#right-sidebar').toggleClass('sidebar-open');
            });

            // Initialize slimscroll for right sidebar
            $('.sidebar-container').slimScroll({
                height: '100%',
                railOpacity: 0.4,
                wheelStep: 10
            });

            // Open close small chat
            $('.open-small-chat').on('click', function() {
                $(this).children().toggleClass('fa-comments').toggleClass('fa-remove');
                $('.small-chat-box').toggleClass('active');
            });

            // Initialize slimscroll for small chat
            $('.small-chat-box .content').slimScroll({
                height: '234px',
                railOpacity: 0.4
            });

            // Small todo handler
            $('.check-link').on('click', function() {
                var button = $(this).find('i');
                var label = $(this).next('span');
                button.toggleClass('fa-check-square').toggleClass('fa-square-o');
                label.toggleClass('todo-completed');
                return false;
            });


            // Minimalize menu
            $('.navbar-minimalize').on('click', function() {
                $("body").toggleClass("mini-navbar");
                that.SmoothlyMenu();

            });

            // Tooltips demo
            $('.tooltip-demo').tooltip({
                selector: "[data-toggle=tooltip]",
                container: "body"
            });


            // Full height of sidebar
            function fix_height() {
                var heightWithoutNavbar = $("body > #wrapper").height() - 61;
                $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");

                var navbarHeigh = $('nav.navbar-default').height();
                var wrapperHeigh = $('#page-wrapper').height();

                if (navbarHeigh > wrapperHeigh) {
                    $('#page-wrapper').css("min-height", navbarHeigh + "px");
                }

                if (navbarHeigh < wrapperHeigh) {
                    $('#page-wrapper').css("min-height", $(window).height() + "px");
                }

                if ($('body').hasClass('fixed-nav')) {
                    if (navbarHeigh > wrapperHeigh) {
                        $('#page-wrapper').css("min-height", navbarHeigh - 60 + "px");
                    } else {
                        $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
                    }
                }

            }

            fix_height();

            // Fixed Sidebar
            $(window).bind("load", function() {
                if ($("body").hasClass('fixed-sidebar')) {
                    $('.sidebar-collapse').slimScroll({
                        height: '100%',
                        railOpacity: 0.9
                    });
                }
            });

            // Move right sidebar top after scroll
            $(window).scroll(function() {
                if ($(window).scrollTop() > 0 && !$('body').hasClass('fixed-nav')) {
                    $('#right-sidebar').addClass('sidebar-top');
                } else {
                    $('#right-sidebar').removeClass('sidebar-top');
                }
            });

            $(window).bind("load resize scroll", function() {
                if (!$("body").hasClass('body-small')) {
                    fix_height();
                }
            });

            $("[data-toggle=popover]")
                .popover();

            // Add slimscroll to element
            $('.full-height-scroll').slimscroll({
                height: '100%'
            })
        });
    }

    SmoothlyMenu() {
        if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
            // Hide menu in order to smoothly turn on when maximize menu
            $('#side-menu').hide();
            // For smoothly turn on menu
            setTimeout(
                function() {
                    $('#side-menu').fadeIn(400);
                }, 200);
        } else if ($('body').hasClass('fixed-sidebar')) {
            $('#side-menu').hide();
            setTimeout(
                function() {
                    $('#side-menu').fadeIn(400);
                }, 100);
        } else {
            // Remove all inline style from jquery fadeIn function to reset menu state
            $('#side-menu').removeAttr('style');
        }
    }
}
