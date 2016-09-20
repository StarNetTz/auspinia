export class Shell {
    configureRouter(config, router) {
        config.title = 'Aurelia';
        config.map([
            { route: 'restricted', name: 'restricted', moduleId: 'restricted', nav: true, settings: { isRestricted: true, requiredRole: 'Admin' } },
            { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true },
            { route: 'dashboard_1', name: 'dashboard_1', moduleId: 'dashboards/dashboard_1', nav: true },
            { route: 'dashboard_2', name: 'dashboard_2', moduleId: 'dashboards/dashboard_2', nav: true },
            { route: 'dashboard_3', name: 'dashboard_3', moduleId: 'dashboards/dashboard_3', nav: true },
            { route: 'dashboard_4', name: 'dashboard_4', moduleId: 'dashboards/dashboard_4', nav: true },
            { route: 'layouts', name: 'layouts', moduleId: 'layouts', nav: true },
            { route: 'flotCharts', name: 'flotCharts', moduleId: 'graphs/flotCharts', nav: true },
            { route: 'morrisCharts', name: 'morrisCharts', moduleId: 'graphs/morrisCharts', nav: true },
            { route: 'rickshawCharts', name: 'rickshawCharts', moduleId: 'graphs/rickshawCharts', nav: true },
            { route: 'chartsJs', name: 'chartsJs', moduleId: 'graphs/chartsJs', nav: true },
            { route: 'chartist', name: 'chartist', moduleId: 'graphs/chartist', nav: true },
            { route: 'c3Charts', name: 'c3Charts', moduleId: 'graphs/c3Charts', nav: true },
            { route: 'peityCharts', name: 'peityCharts', moduleId: 'graphs/peityCharts', nav: true },
            { route: 'sparklineCharts', name: 'sparklineCharts', moduleId: 'graphs/sparklineCharts', nav: true },
            { route: 'inbox', name: 'inbox', moduleId: 'inbox/sparklineCharts', nav: true },
            { route: 'emailView', name: 'emailView', moduleId: 'inbox/emailView', nav: true },
            { route: 'composeEmail', name: 'composeEmail', moduleId: 'inbox/composeEmail', nav: true },
            { route: 'emailTemplates', name: 'emailTemplates', moduleId: 'inbox/emailTemplates', nav: true },
            { route: 'metrics', name: 'metrics', moduleId: 'metrics', nav: true },
            { route: 'widgets', name: 'widgets', moduleId: 'widgets', nav: true },
            { route: 'basicForm', name: 'basicForm', moduleId: 'forms/basicForm', nav: true },
            { route: 'advancedPlugins', name: 'advancedPlugins', moduleId: 'forms/advancedPlugins', nav: true },
            { route: 'wizard', name: 'wizard', moduleId: 'forms/basicForm', nav: true },
            { route: 'fileUpload', name: 'fileUpload', moduleId: 'forms/fileUpload', nav: true },
            { route: 'textEditor', name: 'textEditor', moduleId: 'forms/textEditor', nav: true },
            { route: 'autoComplete', name: 'autoComplete', moduleId: 'forms/autoComplete', nav: true },
            { route: 'markdown', name: 'markdown', moduleId: 'forms/markdown', nav: true },
            { route: 'contacts', name: 'contacts', moduleId: 'appviews/contacts', nav: true },
            { route: 'profile', name: 'profile', moduleId: 'appviews/profile', nav: true },
            { route: 'profile2', name: 'profile2', moduleId: 'appviews/profile2', nav: true },
            { route: 'contacts2', name: 'contacts2', moduleId: 'appviews/contacts2', nav: true },
            { route: 'projects', name: 'projects', moduleId: 'appviews/projects', nav: true },
            { route: 'projectDetail', name: 'projectDetail', moduleId: 'appviews/projectDetail', nav: true },
            { route: 'teamsBoard', name: 'teamsBoard', moduleId: 'appviews/teamsBoard', nav: true },
            { route: 'socialFeed', name: 'socialFeed', moduleId: 'appviews/socialFeed', nav: true },
            { route: 'clients', name: 'clients', moduleId: 'appviews/clients', nav: true },
            { route: 'outlookView', name: 'outlookView', moduleId: 'appviews/outlookView', nav: true },
            { route: 'voteList', name: 'voteList', moduleId: 'appviews/voteList', nav: true },
            { route: 'fileManager', name: 'fileManager', moduleId: 'appviews/fileManager', nav: true },
            { route: 'calendar', name: 'calendar', moduleId: 'appviews/calendar', nav: true },
            { route: 'issueTracker', name: 'issueTracker', moduleId: 'appviews/issueTracker', nav: true },
            { route: 'blog', name: 'blog', moduleId: 'appviews/blog', nav: true },
            { route: 'article', name: 'article', moduleId: 'appviews/article', nav: true },
            { route: 'faq', name: 'faq', moduleId: 'appviews/faq', nav: true },
            { route: 'timeline', name: 'timeline', moduleId: 'appviews/timeline', nav: true },
            { route: 'pinboard', name: 'pinboard', moduleId: 'appviews/pinboard', nav: true },
            { route: 'searchResult', name: 'searchResult', moduleId: 'otherPages/pinboard', nav: true },
            { route: 'lockscreen', name: 'lockscreen', moduleId: 'otherPages/lockscreen', nav: true },
            { route: 'invoice', name: 'invoice', moduleId: 'otherPages/invoice', nav: true },
            { route: 'login', name: 'login', moduleId: 'otherPages/login', nav: true },
            { route: 'login2', name: 'login2', moduleId: 'otherPages/login2', nav: true },
            { route: 'forgetPassword', name: 'forgetPassword', moduleId: 'otherPages/forgetPassword', nav: true },
            { route: 'register', name: 'register', moduleId: 'otherPages/register', nav: true },
            { route: 'page404', name: 'page404', moduleId: 'otherPages/page404', nav: true },
            { route: 'page500', name: 'page500', moduleId: 'otherPages/page500', nav: true },
            { route: 'emptyPage', name: 'emptyPage', moduleId: 'otherPages/emptyPage', nav: true },
            { route: 'notification', name: 'notification', moduleId: 'miscellaneous/notification', nav: true },
            { route: 'nestableList', name: 'nestableList', moduleId: 'miscellaneous/nestableList', nav: true },
            { route: 'agileBoard', name: 'agileBoard', moduleId: 'miscellaneous/agileBoard', nav: true },
            { route: 'timeline2', name: 'timeline2', moduleId: 'miscellaneous/timeline2', nav: true },
            { route: 'diff', name: 'diff', moduleId: 'miscellaneous/diff', nav: true },
            { route: 'pdfViewer', name: 'pdfViewer', moduleId: 'miscellaneous/pdfViewer', nav: true },
            { route: 'i18support', name: 'i18support', moduleId: 'miscellaneous/i18support', nav: true },
            { route: 'sweetalert', name: 'sweetalert', moduleId: 'miscellaneous/sweetalert', nav: true },
            { route: 'idleTimer', name: 'idleTimer', moduleId: 'miscellaneous/idleTimer', nav: true },
            { route: 'truncate', name: 'truncate', moduleId: 'miscellaneous/truncate', nav: true },
            { route: 'spinners', name: 'spinners', moduleId: 'miscellaneous/spinners', nav: true },
            { route: 'tinycon', name: 'tinycon', moduleId: 'miscellaneous/tinycon', nav: true },
            { route: 'googleMaps', name: 'googleMaps', moduleId: 'miscellaneous/googleMaps', nav: true },
            { route: 'dataMaps', name: 'dataMaps', moduleId: 'miscellaneous/dataMaps', nav: true },
            { route: 'socialButtons', name: 'socialButtons', moduleId: 'miscellaneous/socialButtons', nav: true },
            { route: 'codeEditor', name: 'codeEditor', moduleId: 'miscellaneous/codeEditor', nav: true },
            { route: 'modalWindow', name: 'modalWindow', moduleId: 'miscellaneous/modalWindow', nav: true },
            { route: 'clipboard', name: 'clipboard', moduleId: 'miscellaneous/clipboard', nav: true },
            { route: 'forumMain', name: 'forumMain', moduleId: 'miscellaneous/forumMain', nav: true },
            { route: 'validation', name: 'validation', moduleId: 'miscellaneous/validation', nav: true },
            { route: 'treeView', name: 'treeView', moduleId: 'miscellaneous/treeView', nav: true },
            { route: 'loadingButtons', name: 'loadingButtons', moduleId: 'miscellaneous/loadingButtons', nav: true },
            { route: 'chatView', name: 'chatView', moduleId: 'miscellaneous/chatView', nav: true },
            { route: 'masonry', name: 'masonry', moduleId: 'miscellaneous/masonry', nav: true },
            { route: 'tour', name: 'tour', moduleId: 'miscellaneous/tour', nav: true },
            { route: 'typography', name: 'typography', moduleId: 'uielements/typography', nav: true },
            { route: 'icons', name: 'icons', moduleId: 'uielements/icons', nav: true },
            { route: 'draggablePanels', name: 'draggablePanels', moduleId: 'uielements/draggablePanels', nav: true },
            { route: 'resizeablePanels', name: 'resizeablePanels', moduleId: 'uielements/resizeablePanels', nav: true },
            { route: 'buttons', name: 'buttons', moduleId: 'uielements/buttons', nav: true },
            { route: 'video', name: 'video', moduleId: 'uielements/video', nav: true },
            { route: 'tabsPanels', name: 'tabsPanels', moduleId: 'uielements/tabsPanels', nav: true },
            { route: 'tabs', name: 'tabs', moduleId: 'uielements/tabs', nav: true },
            { route: 'notifications', name: 'notifications', moduleId: 'uielements/notifications', nav: true },
            { route: 'helperClasses', name: 'helperClasses', moduleId: 'uielements/helperClasses', nav: true },
            { route: 'badgesLabels', name: 'badgesLabels', moduleId: 'uielements/badgesLabels', nav: true },
            { route: 'gridOptions', name: 'gridOptions', moduleId: 'gridOptions', nav: true },
            { route: 'staticTables', name: 'staticTables', moduleId: 'tables/staticTables', nav: true },
            { route: 'dataTables', name: 'dataTables', moduleId: 'dataTables', nav: true },
            { route: 'fooTables', name: 'fooTables', moduleId: 'fooTables', nav: true },
            { route: 'jqGrid', name: 'jqGrid', moduleId: 'jqGrid', nav: true },
            { route: 'productsGrid', name: 'productsGrid', moduleId: 'ecommerce/productsGrid', nav: true },
            { route: 'productsList', name: 'productsList', moduleId: 'ecommerce/productsList', nav: true },
            { route: 'product', name: 'product', moduleId: 'ecommerce/product', nav: true },
            { route: 'productDetail', name: 'productDetail', moduleId: 'ecommerce/productDetail', nav: true },
            { route: 'cart', name: 'cart', moduleId: 'ecommerce/cart', nav: true },
            { route: 'orders', name: 'orders', moduleId: 'ecommerce/orders', nav: true },
            { route: 'payments', name: 'payments', moduleId: 'ecommerce/payments', nav: true },
            { route: 'lightboxGallery', name: 'lightboxGallery', moduleId: 'gallery/lightboxGallery', nav: true },
            { route: 'slickCarousel', name: 'slickCarousel', moduleId: 'ecommerce/slickCarousel', nav: true },
            { route: 'bootstrapCarousel', name: 'bootstrapCarousel', moduleId: 'ecommerce/bootstrapCarousel', nav: true },
            { route: 'thirdLevelItem1', name: 'thirdLevelItem1', moduleId: 'menuLevels/thirdLevelItem1', nav: true },
            { route: 'thirdLevelItem2', name: 'thirdLevelItem2', moduleId: 'ecommerce/thirdLevelItem2', nav: true },
            { route: 'thirdLevelItem3', name: 'thirdLevelItem3', moduleId: 'ecommerce/thirdLevelItem3', nav: true },
            { route: 'secondLevelItem1', name: 'secondLevelItem1', moduleId: 'menuLevels/secondLevelItem1', nav: true },
            { route: 'secondLevelItem2', name: 'secondLevelItem2', moduleId: 'ecommerce/secondLevelItem2', nav: true },
            { route: 'secondLevelItem3', name: 'secondLevelItem3', moduleId: 'ecommerce/secondLevelItem3', nav: true },
            { route: 'cssAnimations', name: 'cssAnimations', moduleId: 'cssAnimations', nav: true },
            { route: 'landingPage', name: 'landingPage', moduleId: 'landingPage', nav: true },
            { route: 'package', name: 'package', moduleId: 'package', nav: true }

           
        ]);

        this.router = router;
    }

    attached() {
        console.log("shell attached");
        setTimeout(this.initializeInspinia(), 2000);
        // this.initializeInspinia();
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
