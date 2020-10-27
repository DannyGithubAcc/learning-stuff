(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('html-elements', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['html-elements'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/html-elements.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HtmlElementsService = /** @class */ (function () {
        function HtmlElementsService() {
        }
        HtmlElementsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        HtmlElementsService.ctorParameters = function () { return []; };
        /** @nocollapse */ HtmlElementsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function HtmlElementsService_Factory() { return new HtmlElementsService(); }, token: HtmlElementsService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [HtmlElementsComponent],
                        imports: [],
                        exports: [HtmlElementsComponent]
                    },] }
        ];
        return HtmlElementsModule;
    }());

    exports.HtmlElementsComponent = HtmlElementsComponent;
    exports.HtmlElementsModule = HtmlElementsModule;
    exports.HtmlElementsService = HtmlElementsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=html-elements.umd.js.map
