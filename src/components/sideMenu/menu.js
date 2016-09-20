import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Router)
export class Menu {
    
    constructor(router) {
        this.router = router;
    }

    
    init() {
        this.items = [
            { i18key: "sidemenu:Restricted", type: "item", isVisible: true, fontAwesomeIcon: 'fa fa-lock', navModel: this.getNavModel('restricted')},
            { i18key: "sidemenu:Dashboards", type: "menu", isVisible: true, fontAwesomeIcon: 'fa fa-th-large', items: [
                    { i18key: "sidemenu:Dashboard_v1", type: "item", isVisible: true, navModel: this.getNavModel('dashboard_1') },
                    { i18key: "sidemenu:Dashboard_v2", type: "item", isVisible: true, navModel: this.getNavModel('dashboard_2') },
                    { i18key: "sidemenu:Dashboard_v3", type: "item", isVisible: true, navModel: this.getNavModel('dashboard_3') },
                    { i18key: "sidemenu:Dashboard_v4", type: "item", isVisible: true, navModel: this.getNavModel('dashboard_4') }
                ]
            },
            { i18key: "sidemenu:Layouts", type: "item", isVisible: true, fontAwesomeIcon: 'fa fa-diamond', navModel: this.getNavModel('layouts')},
            { i18key: "sidemenu:Graphs", type: "menu", isVisible: true, fontAwesomeIcon: 'fa fa-bar-chart-o', items: [
                    { i18key: "sidemenu:FlotCharts", type: "item", isVisible: true , navModel: this.getNavModel('flotCharts')},
                    { i18key: "sidemenu:MorrisCharts", type: "item", isVisible: true , navModel: this.getNavModel('morrisCharts')},
                    { i18key: "sidemenu:RickshawCharts", type: "item", isVisible: true , navModel: this.getNavModel('rickshawCharts')},
                    { i18key: "sidemenu:ChartsJs", type: "item", isVisible: true, navModel: this.getNavModel('chartsJs') },
                    { i18key: "sidemenu:Chartist", type: "item", isVisible: true, navModel: this.getNavModel('chartist') },
                    { i18key: "sidemenu:C3Charts", type: "item", isVisible: true, navModel: this.getNavModel('c3Charts') },
                    { i18key: "sidemenu:PeityCharts", type: "item", isVisible: true, navModel: this.getNavModel('peityCharts') },
                    { i18key: "sidemenu:SparklineCharts", type: "item", isVisible: true, navModel: this.getNavModel('sparklineCharts') }
                ]
            },
            { i18key: "sidemenu:Mailbox", type: "menu", isVisible: true, fontAwesomeIcon: 'fa fa-envelope', label:{type:'label-warning', text:'16/24'}, items: [
                    { i18key: "sidemenu:Inbox", type: "item", isVisible: true , navModel: this.getNavModel('inbox')},
                    { i18key: "sidemenu:EmailView", type: "item", isVisible: true , navModel: this.getNavModel('emailView')},
                    { i18key: "sidemenu:ComposeEmail", type: "item", isVisible: true , navModel: this.getNavModel('composeEmail')},
                    { i18key: "sidemenu:EmailTemplates", type: "item", isVisible: true , navModel: this.getNavModel('emailTemplates')}
                ]
            },
            { i18key: "sidemenu:Metrics", type: "item", isVisible: true, fontAwesomeIcon: 'fa fa-pie-chart', navModel: this.getNavModel('metrics')},
            { i18key: "sidemenu:Widgets", type: "item", isVisible: true, fontAwesomeIcon: 'fa fa-flask', navModel: this.getNavModel('widgets')},
            { i18key: "sidemenu:Forms", type: "menu", isVisible: true, fontAwesomeIcon: 'fa fa-edit', items: [
                    { i18key: "sidemenu:BasicForm", type: "item", isVisible: true, navModel: this.getNavModel('basicForm') },
                    { i18key: "sidemenu:AdvancedPlugins", type: "item", isVisible: true, navModel: this.getNavModel('advancedPlugins') },
                    { i18key: "sidemenu:Wizard", type: "item", isVisible: true, navModel: this.getNavModel('wizard') },
                    { i18key: "sidemenu:FileUpload", type: "item", isVisible: true, navModel: this.getNavModel('fileUpload')},
                    { i18key: "sidemenu:TextEditor", type: "item", isVisible: true, navModel: this.getNavModel('textEditor')},
                    { i18key: "sidemenu:AutoComplete", type: "item", isVisible: true, navModel: this.getNavModel('autoComplete')},
                    { i18key: "sidemenu:Markdown", type: "item", isVisible: true, navModel: this.getNavModel('markdown')}
                ]
            },
            { i18key: "sidemenu:AppViews", type: "menu", isVisible: true, fontAwesomeIcon: 'fa fa-desktop', label:{ type:'label-primary', text:'SPECIAL'}, items: [
                    { i18key: "sidemenu:Contacts", type: "item", isVisible: true, navModel: this.getNavModel('contacts') },
                    { i18key: "sidemenu:Profile", type: "item", isVisible: true, navModel: this.getNavModel('profile') },
                    { i18key: "sidemenu:Profile2", type: "item", isVisible: true, navModel: this.getNavModel('profile2') },
                    { i18key: "sidemenu:Contacts2", type: "item", isVisible: true, navModel: this.getNavModel('contacts2') },
                    { i18key: "sidemenu:Projects", type: "item", isVisible: true, navModel: this.getNavModel('projects') },
                    { i18key: "sidemenu:ProjectDetail", type: "item", isVisible: true, navModel: this.getNavModel('projectDetail') },
                    { i18key: "sidemenu:TeamsBoard", type: "item", isVisible: true, navModel: this.getNavModel('teamsBoard') },
                    { i18key: "sidemenu:SocialFeed", type: "item", isVisible: true, navModel: this.getNavModel('socialFeed') },
                    { i18key: "sidemenu:Clients", type: "item", isVisible: true, navModel: this.getNavModel('clients') },
                    { i18key: "sidemenu:OutlookView", type: "item", isVisible: true, navModel: this.getNavModel('outlookView') },
                    { i18key: "sidemenu:VoteList", type: "item", isVisible: true, navModel: this.getNavModel('voteList') },
                    { i18key: "sidemenu:FileManager", type: "item", isVisible: true, navModel: this.getNavModel('fileManager') },
                    { i18key: "sidemenu:Calendar", type: "item", isVisible: true, navModel: this.getNavModel('calendar') },
                    { i18key: "sidemenu:IssueTracker", type: "item", isVisible: true, navModel: this.getNavModel('issueTracker') },
                    { i18key: "sidemenu:Blog", type: "item", isVisible: true, navModel: this.getNavModel('blog') },
                    { i18key: "sidemenu:Article", type: "item", isVisible: true, navModel: this.getNavModel('article') },
                    { i18key: "sidemenu:Faq", type: "item", isVisible: true, navModel: this.getNavModel('faq') },
                    { i18key: "sidemenu:Timeline", type: "item", isVisible: true, navModel: this.getNavModel('timeline') },
                    { i18key: "sidemenu:Pinboard", type: "item", isVisible: true, navModel: this.getNavModel('pinboard') }
                ]
            },
            { i18key: "sidemenu:OtherPages", type: "menu", isVisible: true, fontAwesomeIcon: 'fa fa-files-o', items: [
                    { i18key: "sidemenu:SearchResult", type: "item", isVisible: true, navModel: this.getNavModel('searchResult') },
                    { i18key: "sidemenu:Lockscreen", type: "item", isVisible: true, navModel: this.getNavModel('lockscreen') },
                    { i18key: "sidemenu:Invoice", type: "item", isVisible: true, navModel: this.getNavModel('invoice') },
                    { i18key: "sidemenu:Login", type: "item", isVisible: true, navModel: this.getNavModel('login')},
                    { i18key: "sidemenu:Login2", type: "item", isVisible: true, navModel: this.getNavModel('login2')},
                    { i18key: "sidemenu:ForgetPassword", type: "item", isVisible: true, navModel: this.getNavModel('forgetPassword')},
                    { i18key: "sidemenu:Register", type: "item", isVisible: true, navModel: this.getNavModel('register')},
                    { i18key: "sidemenu:Page404", type: "item", isVisible: true, navModel: this.getNavModel('page404')},
                    { i18key: "sidemenu:Page500", type: "item", isVisible: true, navModel: this.getNavModel('page500')},
                    { i18key: "sidemenu:EmptyPage", type: "item", isVisible: true, navModel: this.getNavModel('emptyPage')}
                ]
            },
            { i18key: "sidemenu:Miscellaneous", type: "menu", isVisible: true, fontAwesomeIcon: 'fa fa-globe', label:{ type:'label-info', text:'NEW'}, items: [
                    { i18key: "sidemenu:Notification", type: "item", isVisible: true, navModel: this.getNavModel('notification') },
                    { i18key: "sidemenu:NestableList", type: "item", isVisible: true, navModel: this.getNavModel('nestableList') },
                    { i18key: "sidemenu:AgileBoard", type: "item", isVisible: true, navModel: this.getNavModel('agileBoard') },
                    { i18key: "sidemenu:Timeline2", type: "item", isVisible: true, navModel: this.getNavModel('timeline2') },
                    { i18key: "sidemenu:Diff", type: "item", isVisible: true, navModel: this.getNavModel('diff') },
                    { i18key: "sidemenu:PdfViewer", type: "item", isVisible: true, navModel: this.getNavModel('pdfViewer') },
                    { i18key: "sidemenu:I18support", type: "item", isVisible: true, navModel: this.getNavModel('i18support') },
                    { i18key: "sidemenu:Sweetalert", type: "item", isVisible: true, navModel: this.getNavModel('sweetalert') },
                    { i18key: "sidemenu:IdleTimer", type: "item", isVisible: true, navModel: this.getNavModel('idleTimer') },
                    { i18key: "sidemenu:Truncate", type: "item", isVisible: true, navModel: this.getNavModel('truncate') },
                    { i18key: "sidemenu:Spinners", type: "item", isVisible: true, navModel: this.getNavModel('spinners') },
                    { i18key: "sidemenu:Tinycon", type: "item", isVisible: true, navModel: this.getNavModel('tinycon') },
                    { i18key: "sidemenu:GoogleMaps", type: "item", isVisible: true, navModel: this.getNavModel('googleMaps') },
                    { i18key: "sidemenu:DataMaps", type: "item", isVisible: true, navModel: this.getNavModel('dataMaps') },
                    { i18key: "sidemenu:SocialButtons", type: "item", isVisible: true, navModel: this.getNavModel('socialButtons') },
                    { i18key: "sidemenu:CodeEditor", type: "item", isVisible: true, navModel: this.getNavModel('codeEditor') },
                    { i18key: "sidemenu:ModalWindow", type: "item", isVisible: true, navModel: this.getNavModel('modalWindow') },
                    { i18key: "sidemenu:Clipboard", type: "item", isVisible: true, navModel: this.getNavModel('clipboard') },
                    { i18key: "sidemenu:ForumMain", type: "item", isVisible: true, navModel: this.getNavModel('forumMain') },
                    { i18key: "sidemenu:Validation", type: "item", isVisible: true, navModel: this.getNavModel('validation') },
                    { i18key: "sidemenu:TreeView", type: "item", isVisible: true, navModel: this.getNavModel('treeView') },
                    { i18key: "sidemenu:LoadingButtons", type: "item", isVisible: true, navModel: this.getNavModel('loadingButtons') },
                    { i18key: "sidemenu:ChatView", type: "item", isVisible: true, navModel: this.getNavModel('chatView') },
                    { i18key: "sidemenu:Masonry", type: "item", isVisible: true, navModel: this.getNavModel('masonry') },
                    { i18key: "sidemenu:Tour", type: "item", isVisible: true, navModel: this.getNavModel('tour') }

                    
                ]
            },
            { i18key: "sidemenu:UIElements", type: "menu", isVisible: true, fontAwesomeIcon: 'fa fa-flask', items: [
                    { i18key: "sidemenu:Typography", type: "item", isVisible: true, navModel: this.getNavModel('typography') },
                    { i18key: "sidemenu:Icons", type: "item", isVisible: true, navModel: this.getNavModel('icons') },
                    { i18key: "sidemenu:DraggablePanels", type: "item", isVisible: true, navModel: this.getNavModel('draggablePanels') },
                    { i18key: "sidemenu:ResizeablePanels", type: "item", isVisible: true, navModel: this.getNavModel('resizeablePanels') },
                    { i18key: "sidemenu:Buttons", type: "item", isVisible: true, navModel: this.getNavModel('buttons')},
                    { i18key: "sidemenu:Video", type: "item", isVisible: true, navModel: this.getNavModel('video')},
                    { i18key: "sidemenu:TabsPanels", type: "item", isVisible: true, navModel: this.getNavModel('tabsPanels')},
                    { i18key: "sidemenu:Tabs", type: "item", isVisible: true, navModel: this.getNavModel('tabsPanels')},
                    { i18key: "sidemenu:Notifications", type: "item", isVisible: true, navModel: this.getNavModel('tabs')},
                    { i18key: "sidemenu:HelperClasses", type: "item", isVisible: true, navModel: this.getNavModel('notifications')},
                    { i18key: "sidemenu:BadgesLabels", type: "item", isVisible: true, navModel: this.getNavModel('badgesLabels')}
                ]
            },
            { i18key: "sidemenu:GridOptions", type: "item", isVisible: true, fontAwesomeIcon: 'fa fa-laptop', navModel: this.getNavModel('gridOptions')},
            { i18key: "sidemenu:Tables", type: "menu", isVisible: true, fontAwesomeIcon: 'fa fa-table', items: [
                    { i18key: "sidemenu:StaticTables", type: "item", isVisible: true, navModel: this.getNavModel('staticTables') },
                    { i18key: "sidemenu:DataTables", type: "item", isVisible: true, navModel: this.getNavModel('dataTables') },
                    { i18key: "sidemenu:FooTables", type: "item", isVisible: true, navModel: this.getNavModel('fooTables') },
                    { i18key: "sidemenu:JqGrid", type: "item", isVisible: true, navModel: this.getNavModel('jqGrid') }
                   
                ]
            },
            { i18key: "sidemenu:Ecommerce", type: "menu", isVisible: true, fontAwesomeIcon: 'fa fa-shopping-cart', items: [
                    { i18key: "sidemenu:ProductsGrid", type: "item", isVisible: true, navModel: this.getNavModel('productsGrid') },
                    { i18key: "sidemenu:ProductsList", type: "item", isVisible: true, navModel: this.getNavModel('productsList') },
                    { i18key: "sidemenu:Product", type: "item", isVisible: true, navModel: this.getNavModel('product') },
                    { i18key: "sidemenu:ProductDetail", type: "item", isVisible: true, navModel: this.getNavModel('productDetail') },
                    { i18key: "sidemenu:Cart", type: "item", isVisible: true, navModel: this.getNavModel('cart') },
                    { i18key: "sidemenu:Orders", type: "item", isVisible: true, navModel: this.getNavModel('orders') },
                    { i18key: "sidemenu:Payments", type: "item", isVisible: true, navModel: this.getNavModel('payments') }
                   
                ]
            },
            { i18key: "sidemenu:Gallery", type: "menu", isVisible: true, fontAwesomeIcon: 'fa fa-picture-o', items: [
                    { i18key: "sidemenu:LightboxGallery", type: "item", isVisible: true, navModel: this.getNavModel('lightboxGallery') },
                    { i18key: "sidemenu:SlickCarousel", type: "item", isVisible: true, navModel: this.getNavModel('slickCarousel') },
                    { i18key: "sidemenu:BootstrapCarousel", type: "item", isVisible: true, navModel: this.getNavModel('bootstrapCarousel') }              
                ]
            },
            { i18key: "sidemenu:MenuLevels", type: "menu", isVisible: true, fontAwesomeIcon: 'fa fa-sitemap', items: [
                    { i18key: "sidemenu:ThirdLevelMenu", type: "menu", isVisible: true, items: [
                            { i18key: "sidemenu:ThirdLevelItem1", type: "item", isVisible: true, navModel: this.getNavModel('thirdLevelItem1') },
                            { i18key: "sidemenu:ThirdLevelItem2", type: "item", isVisible: true, navModel: this.getNavModel('thirdLevelItem2') },
                            { i18key: "sidemenu:ThirdLevelItem3", type: "item", isVisible: true, navModel: this.getNavModel('thirdLevelItem3') }              
                        ]
                    },
                    { i18key: "sidemenu:SecondLevelItem1", type: "item", isVisible: true, navModel: this.getNavModel('secondLevelItem1') },
                    { i18key: "sidemenu:SecondLevelItem1", type: "item", isVisible: true, navModel: this.getNavModel('secondLevelItem2') },
                    { i18key: "sidemenu:SecondLevelItem1", type: "item", isVisible: true, navModel: this.getNavModel('secondLevelItem3') }              
                ]
            },
            { i18key: "sidemenu:CssAnimations", type: "item", isVisible: true, fontAwesomeIcon: 'fa fa-magic', label:{ type:'label-info', text:'62'}, navModel: this.getNavModel('cssAnimations')},
            { i18key: "sidemenu:LandingPage", type: "item", isVisible: true, fontAwesomeIcon: 'fa fa-star', label:{ type:'label-warning', text:'NEW'}, class:'special_link', navModel: this.getNavModel('landingPage')},
            { i18key: "sidemenu:Package", type: "item", isVisible: true, fontAwesomeIcon: 'fa fa-database', class:'landing_link', navModel: this.getNavModel('package')},
        ];
        
        this.setClassForLevel1Items();
    }

    setClassForLevel1Items(){
        this.items.forEach((item)=>{
            if (item.type==="item")
            {
                item.class = 'level1 ' + item.class;
            }
        });
    }

    getNavModel(name) {
        let route = this.router.routes.find((item) => item.name === name);
        if (!route) {
            console.log(`could not find route: ${name} `);
        }
        return route.navModel;
    }
}
