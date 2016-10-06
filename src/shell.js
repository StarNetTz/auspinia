export class Shell {
    configureRouter(config, router) {
        config.title = 'Aurelia';
        config.map([
            { route: 'restricted', name: 'restricted', moduleId: 'views/restricted', nav: true, settings: { isRestricted: true, requiredRole: 'Admin' } },
            { route: ['', 'dashboard_1'], name: 'dashboard_1', moduleId: 'views/dashboards/dashboard_1', nav: true },
            { route: 'dashboard_2', name: 'dashboard_2', moduleId: 'views/dashboards/dashboard_2', nav: true },
            { route: 'dashboard_3', name: 'dashboard_3', moduleId: 'views/dashboards/dashboard_3', nav: true },
            { route: 'dashboard_4', name: 'dashboard_4', moduleId: 'views/dashboards/dashboard_4', nav: true },
            { route: 'dashboard_5', name: 'dashboard_5', moduleId: 'views/dashboards/dashboard_5', nav: true },
            { route: 'layouts', name: 'layouts', moduleId: 'views/layouts/layouts', nav: true },
            { route: 'flotCharts', name: 'flotCharts', moduleId: 'views/graphs/flotCharts', nav: true },
            { route: 'morrisCharts', name: 'morrisCharts', moduleId: 'views/graphs/morrisCharts', nav: true },
            { route: 'rickshawCharts', name: 'rickshawCharts', moduleId: 'views/graphs/rickshawCharts', nav: true },
            { route: 'chartsJs', name: 'chartsJs', moduleId: 'views/graphs/chartsJs', nav: true },
            { route: 'chartist', name: 'chartist', moduleId: 'views/graphs/chartist', nav: true },
            { route: 'c3Charts', name: 'c3Charts', moduleId: 'views/graphs/c3Charts', nav: true },
            { route: 'peityCharts', name: 'peityCharts', moduleId: 'views/graphs/peityCharts', nav: true },
            { route: 'sparklineCharts', name: 'sparklineCharts', moduleId: 'views/graphs/sparklineCharts', nav: true },
            { route: 'inbox', name: 'inbox', moduleId: 'views/mailbox/inbox', nav: true },
            { route: 'emailView', name: 'emailView', moduleId: 'views/mailbox/emailView', nav: true },
            { route: 'composeEmail', name: 'composeEmail', moduleId: 'views/mailbox/composeEmail', nav: true },
            { route: 'emailTemplates', name: 'emailTemplates', moduleId: 'views/mailbox/emailTemplates', nav: true },
            { route: 'action', name: 'action', moduleId: 'views/mailbox/action', nav: true },
            { route: 'alert', name: 'alert', moduleId: 'views/mailbox/alert', nav: true },
            { route: 'billing', name: 'billing', moduleId: 'views/mailbox/billing', nav: true },
            { route: 'metrics', name: 'metrics', moduleId: 'views/metrics/metrics', nav: true },
            { route: 'widgets', name: 'widgets', moduleId: 'views/widgets/widgets', nav: true },
            { route: 'basicForm', name: 'basicForm', moduleId: 'views/forms/basicForm', nav: true },
            { route: 'advancedPlugins', name: 'advancedPlugins', moduleId: 'views/forms/advancedPlugins', nav: true },
            { route: 'wizard', name: 'wizard', moduleId: 'views/forms/wizard', nav: true },
            { route: 'fileUpload', name: 'fileUpload', moduleId: 'views/forms/fileUpload', nav: true },
            { route: 'textEditor', name: 'textEditor', moduleId: 'views/forms/textEditor', nav: true },
            { route: 'autoComplete', name: 'autoComplete', moduleId: 'views/forms/autoComplete', nav: true },
            { route: 'markdown', name: 'markdown', moduleId: 'views/forms/markdown', nav: true },
            { route: 'contacts', name: 'contacts', moduleId: 'views/appviews/contacts', nav: true },
            { route: 'profile', name: 'profile', moduleId: 'views/appviews/profile', nav: true },
            { route: 'profile2', name: 'profile2', moduleId: 'views/appviews/profile2', nav: true },
            { route: 'contacts2', name: 'contacts2', moduleId: 'views/appviews/contacts2', nav: true },
            { route: 'projects', name: 'projects', moduleId: 'views/appviews/projects', nav: true },
            { route: 'projectDetail', name: 'projectDetail', moduleId: 'views/appviews/projectDetail', nav: true },
            { route: 'teamsBoard', name: 'teamsBoard', moduleId: 'views/appviews/teamsBoard', nav: true },
            { route: 'socialFeed', name: 'socialFeed', moduleId: 'views/appviews/socialFeed', nav: true },
            { route: 'clients', name: 'clients', moduleId: 'views/appviews/clients', nav: true },
            { route: 'outlookView', name: 'outlookView', moduleId: 'views/appviews/outlookView', nav: true },
            { route: 'voteList', name: 'voteList', moduleId: 'views/appviews/voteList', nav: true },
            { route: 'fileManager', name: 'fileManager', moduleId: 'views/appviews/fileManager', nav: true },
            { route: 'calendar', name: 'calendar', moduleId: 'views/appviews/calendar', nav: true },
            { route: 'issueTracker', name: 'issueTracker', moduleId: 'views/appviews/issueTracker', nav: true },
            { route: 'blog', name: 'blog', moduleId: 'views/appviews/blog', nav: true },
            { route: 'article', name: 'article', moduleId: 'views/appviews/article', nav: true },
            { route: 'faq', name: 'faq', moduleId: 'views/appviews/faq', nav: true },
            { route: 'timeline', name: 'timeline', moduleId: 'views/appviews/timeline', nav: true },
            { route: 'pinboard', name: 'pinboard', moduleId: 'views/appviews/pinboard', nav: true },
            { route: 'searchResult', name: 'searchResult', moduleId: 'views/otherPages/searchResult', nav: true },
            { route: 'lockscreen', name: 'lockscreen', moduleId: 'views/otherPages/lockscreen', nav: true },
            { route: 'invoice', name: 'invoice', moduleId: 'views/otherPages/invoice', nav: true },
            { route: 'invoicePrint', name: 'invoicePrint', moduleId: 'views/otherPages/invoicePrint', nav: true },
            { route: 'login', name: 'login', moduleId: 'views/otherPages/login', nav: true },
            { route: 'login2', name: 'login2', moduleId: 'views/otherPages/login2', nav: true },
            { route: 'forgetPassword', name: 'forgetPassword', moduleId: 'views/otherPages/forgetPassword', nav: true },
            { route: 'register', name: 'register', moduleId: 'views/otherPages/register', nav: true },
            { route: 'page404', name: 'page404', moduleId: 'views/otherPages/page404', nav: true },
            { route: 'page500', name: 'page500', moduleId: 'views/otherPages/page500', nav: true },
            { route: 'emptyPage', name: 'emptyPage', moduleId: 'views/otherPages/emptyPage', nav: true },
            { route: 'notification', name: 'notification', moduleId: 'views/miscellaneous/notification', nav: true },
            { route: 'nestableList', name: 'nestableList', moduleId: 'views/miscellaneous/nestableList', nav: true },
            { route: 'agileBoard', name: 'agileBoard', moduleId: 'views/miscellaneous/agileBoard', nav: true },
            { route: 'timeline2', name: 'timeline2', moduleId: 'views/miscellaneous/timeline2', nav: true },
            { route: 'diff', name: 'diff', moduleId: 'views/miscellaneous/diff', nav: true },
            { route: 'pdfViewer', name: 'pdfViewer', moduleId: 'views/miscellaneous/pdfViewer', nav: true },
            { route: 'i18support', name: 'i18support', moduleId: 'views/miscellaneous/i18support', nav: true },
            { route: 'sweetalert', name: 'sweetalert', moduleId: 'views/miscellaneous/sweetalert', nav: true },
            { route: 'idleTimer', name: 'idleTimer', moduleId: 'views/miscellaneous/idleTimer', nav: true },
            { route: 'truncate', name: 'truncate', moduleId: 'views/miscellaneous/truncate', nav: true },
            { route: 'spinners', name: 'spinners', moduleId: 'views/miscellaneous/spinners', nav: true },
            { route: 'tinycon', name: 'tinycon', moduleId: 'views/miscellaneous/tinycon', nav: true },
            { route: 'googleMaps', name: 'googleMaps', moduleId: 'views/miscellaneous/googleMaps', nav: true },
            { route: 'dataMaps', name: 'dataMaps', moduleId: 'views/miscellaneous/dataMaps', nav: true },
            { route: 'socialButtons', name: 'socialButtons', moduleId: 'views/miscellaneous/socialButtons', nav: true },
            { route: 'codeEditor', name: 'codeEditor', moduleId: 'views/miscellaneous/codeEditor', nav: true },
            { route: 'modalWindow', name: 'modalWindow', moduleId: 'views/miscellaneous/modalWindow', nav: true },
            { route: 'clipboard', name: 'clipboard', moduleId: 'views/miscellaneous/clipboard', nav: true },
            { route: 'forumMain', name: 'forumMain', moduleId: 'views/miscellaneous/forumMain', nav: true },
              { route: 'forumPost', name: 'forumPost', moduleId: 'views/miscellaneous/forumPost', nav: true },
            { route: 'validation', name: 'validation', moduleId: 'views/miscellaneous/validation', nav: true },
            { route: 'treeView', name: 'treeView', moduleId: 'views/miscellaneous/treeView', nav: true },
            { route: 'loadingButtons', name: 'loadingButtons', moduleId: 'views/miscellaneous/loadingButtons', nav: true },
            { route: 'chatView', name: 'chatView', moduleId: 'views/miscellaneous/chatView', nav: true },
            { route: 'masonry', name: 'masonry', moduleId: 'views/miscellaneous/masonry', nav: true },
            { route: 'tour', name: 'tour', moduleId: 'views/miscellaneous/tour', nav: true },
            { route: 'typography', name: 'typography', moduleId: 'views/uielements/typography', nav: true },
            { route: 'icons', name: 'icons', moduleId: 'views/uielements/icons', nav: true },
            { route: 'draggablePanels', name: 'draggablePanels', moduleId: 'views/uielements/draggablePanels', nav: true },
            { route: 'resizeablePanels', name: 'resizeablePanels', moduleId: 'views/uielements/resizeablePanels', nav: true },
            { route: 'buttons', name: 'buttons', moduleId: 'views/uielements/buttons', nav: true },
            { route: 'video', name: 'video', moduleId: 'views/uielements/video', nav: true },
            { route: 'tabsPanels', name: 'tabsPanels', moduleId: 'views/uielements/tabsPanels', nav: true },
            { route: 'tabs', name: 'tabs', moduleId: 'views/uielements/tabs', nav: true },
            { route: 'notifications', name: 'notifications', moduleId: 'views/uielements/notifications', nav: true },
            { route: 'helperClasses', name: 'helperClasses', moduleId: 'views/uielements/helperClasses', nav: true },
            { route: 'badgesLabels', name: 'badgesLabels', moduleId: 'views/uielements/badgesLabels', nav: true },
            { route: 'gridOptions', name: 'gridOptions', moduleId: 'views/gridOptions', nav: true },
            { route: 'staticTables', name: 'staticTables', moduleId: 'views/tables/staticTables', nav: true },
            { route: 'dataTables', name: 'dataTables', moduleId: 'views/tables/dataTables', nav: true },
            { route: 'fooTables', name: 'fooTables', moduleId: 'views/tables/fooTables', nav: true },
            { route: 'jqGrid', name: 'jqGrid', moduleId: 'views/tables/jqGrid', nav: true },
            { route: 'productsGrid', name: 'productsGrid', moduleId: 'views/ecommerce/productsGrid', nav: true },
            { route: 'productsList', name: 'productsList', moduleId: 'views/ecommerce/productsList', nav: true },
            { route: 'product', name: 'product', moduleId: 'views/ecommerce/product', nav: true },
            { route: 'productDetail', name: 'productDetail', moduleId: 'views/ecommerce/productDetail', nav: true },
            { route: 'cart', name: 'cart', moduleId: 'views/ecommerce/cart', nav: true },
            { route: 'orders', name: 'orders', moduleId: 'views/ecommerce/orders', nav: true },
            { route: 'payments', name: 'payments', moduleId: 'views/ecommerce/payments', nav: true },
            { route: 'lightboxGallery', name: 'lightboxGallery', moduleId: 'views/gallery/lightboxGallery', nav: true },
            { route: 'slickCarousel', name: 'slickCarousel', moduleId: 'views/ecommerce/slickCarousel', nav: true },
            { route: 'bootstrapCarousel', name: 'bootstrapCarousel', moduleId: 'views/ecommerce/bootstrapCarousel', nav: true },
            { route: 'thirdLevelItem1', name: 'thirdLevelItem1', moduleId: 'views/menuLevels/thirdLevelItem1', nav: true },
            { route: 'thirdLevelItem2', name: 'thirdLevelItem2', moduleId: 'views/ecommerce/thirdLevelItem2', nav: true },
            { route: 'thirdLevelItem3', name: 'thirdLevelItem3', moduleId: 'views/ecommerce/thirdLevelItem3', nav: true },
            { route: 'secondLevelItem1', name: 'secondLevelItem1', moduleId: 'views/menuLevels/secondLevelItem1', nav: true },
            { route: 'secondLevelItem2', name: 'secondLevelItem2', moduleId: 'views/ecommerce/secondLevelItem2', nav: true },
            { route: 'secondLevelItem3', name: 'secondLevelItem3', moduleId: 'views/ecommerce/secondLevelItem3', nav: true },
            { route: 'cssAnimations', name: 'cssAnimations', moduleId: 'views/cssAnimations/cssAnimations', nav: true },
            { route: 'landingPage', name: 'landingPage', moduleId: 'views/landingPage/landingPage', nav: true },
            { route: 'package', name: 'package', moduleId: 'views/package/package', nav: true }
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
