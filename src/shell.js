export class Shell {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',  moduleId: 'welcome',    nav: true },
      { route: 'view1',   name: 'view1',          moduleId: 'view1',      nav: true },
      { route: 'datePicker', name: 'datePicker',        moduleId: 'datePicker',    nav: true },
      { route: 'view2_2', name: 'view2_2',        moduleId: 'view2_2',    nav: true },
      { route: 'view3_1', name: 'view3_1',        moduleId: 'view3_1',    nav: true },
      { route: 'view3_2', name: 'view3_2',        moduleId: 'view3_2',    nav: true },
      { route: 'view4_1', name: 'view4_1',        moduleId: 'view4_1',    nav: true },
      { route: 'view4_2', name: 'view4_2',        moduleId: 'view4_2',    nav: true }
    ]);

    this.router = router;
  }

   attached()
   {
      console.log("shell attached");
      $('#side-menu').metisMenu();
   }
}
