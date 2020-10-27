import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/html-elements.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HtmlElementsService {
    constructor() { }
}
HtmlElementsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
HtmlElementsService.ctorParameters = () => [];
/** @nocollapse */ HtmlElementsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function HtmlElementsService_Factory() { return new HtmlElementsService(); }, token: HtmlElementsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/html-elements.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HtmlElementsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HtmlElementsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-html-elements',
                template: `
    <p>
      html-elements works!
    </p>
  `
            }] }
];
/** @nocollapse */
HtmlElementsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/html-elements.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HtmlElementsModule {
}
HtmlElementsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [HtmlElementsComponent],
                imports: [],
                exports: [HtmlElementsComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: html-elements.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { HtmlElementsComponent, HtmlElementsModule, HtmlElementsService };
//# sourceMappingURL=html-elements.js.map
