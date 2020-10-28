import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/html-elements.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HtmlElementsService = /** @class */ (function () {
    function HtmlElementsService() {
    }
    HtmlElementsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    HtmlElementsService.ctorParameters = function () { return []; };
    /** @nocollapse */ HtmlElementsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function HtmlElementsService_Factory() { return new HtmlElementsService(); }, token: HtmlElementsService, providedIn: "root" });
    return HtmlElementsService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/html-elements.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HtmlElementsComponent = /** @class */ (function () {
    function HtmlElementsComponent() {
    }
    /**
     * @return {?}
     */
    HtmlElementsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    HtmlElementsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-html-elements',
                    template: "\n    <p>\n      html-elements works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    HtmlElementsComponent.ctorParameters = function () { return []; };
    return HtmlElementsComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/html-elements.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HtmlElementsModule = /** @class */ (function () {
    function HtmlElementsModule() {
    }
    HtmlElementsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [HtmlElementsComponent],
                    imports: [],
                    exports: [HtmlElementsComponent]
                },] }
    ];
    return HtmlElementsModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: html-elements-pocje.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { HtmlElementsComponent, HtmlElementsModule, HtmlElementsService };
//# sourceMappingURL=html-elements-pocje.js.map
