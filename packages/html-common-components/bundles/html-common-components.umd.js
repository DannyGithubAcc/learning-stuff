(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('html-common-components', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['html-common-components'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/html-common-components.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HtmlCommonComponentsService = /** @class */ (function () {
        function HtmlCommonComponentsService() {
        }
        HtmlCommonComponentsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        HtmlCommonComponentsService.ctorParameters = function () { return []; };
        /** @nocollapse */ HtmlCommonComponentsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function HtmlCommonComponentsService_Factory() { return new HtmlCommonComponentsService(); }, token: HtmlCommonComponentsService, providedIn: "root" });
        return HtmlCommonComponentsService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/html-common-components.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HtmlCommonComponentsComponent = /** @class */ (function () {
        function HtmlCommonComponentsComponent() {
        }
        /**
         * @return {?}
         */
        HtmlCommonComponentsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        HtmlCommonComponentsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-html-common-components',
                        template: "\n    <p>\n      html-common-components works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        HtmlCommonComponentsComponent.ctorParameters = function () { return []; };
        return HtmlCommonComponentsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/html-common-components.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HtmlCommonComponentsModule = /** @class */ (function () {
        function HtmlCommonComponentsModule() {
        }
        HtmlCommonComponentsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [HtmlCommonComponentsComponent],
                        imports: [],
                        exports: [HtmlCommonComponentsComponent]
                    },] }
        ];
        return HtmlCommonComponentsModule;
    }());

    exports.HtmlCommonComponentsComponent = HtmlCommonComponentsComponent;
    exports.HtmlCommonComponentsModule = HtmlCommonComponentsModule;
    exports.HtmlCommonComponentsService = HtmlCommonComponentsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=html-common-components.umd.js.map
