"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSelect = void 0;
var React = __importStar(require("react"));
var forms_1 = require("payload/components/forms");
var CopyToClipboard_1 = __importDefault(require("payload/dist/admin/components/elements/CopyToClipboard"));
var CustomerSelect = function (props) {
    var _a;
    var name = props.name, label = props.label;
    var _b = React.useState([]), options = _b[0], setOptions = _b[1];
    var stripeCustomerID = ((0, forms_1.useFormFields)(function (_a) {
        var fields = _a[0];
        return fields[name];
    }) || {}).value;
    React.useEffect(function () {
        var getStripeCustomers = function () { return __awaiter(void 0, void 0, void 0, function () {
            var customersFetch, res, fetchedCustomers, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch("/api/stripe/customers", {
                                credentials: 'include',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            })];
                    case 1:
                        customersFetch = _a.sent();
                        return [4 /*yield*/, customersFetch.json()];
                    case 2:
                        res = _a.sent();
                        if (res === null || res === void 0 ? void 0 : res.data) {
                            fetchedCustomers = res.data.reduce(function (acc, item) {
                                acc.push({
                                    label: item.name || item.email || item.id,
                                    value: item.id,
                                });
                                return acc;
                            }, [
                                {
                                    label: 'Select a customer',
                                    value: '',
                                },
                            ]);
                            setOptions(fetchedCustomers);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error(error_1); // eslint-disable-line no-console
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        getStripeCustomers();
    }, []);
    var href = "https://dashboard.stripe.com/".concat(process.env.PAYLOAD_PUBLIC_STRIPE_IS_TEST_KEY ? 'test/' : '', "customers/").concat(stripeCustomerID);
    return (React.createElement("div", null,
        React.createElement("p", { style: { marginBottom: '0' } }, typeof label === 'string' ? label : 'Customer'),
        React.createElement("p", { style: {
                marginBottom: '0.75rem',
                color: 'var(--theme-elevation-400)',
            } }, "Select the related Stripe customer or ",
            React.createElement("a", { href: "https://dashboard.stripe.com/".concat(process.env.PAYLOAD_PUBLIC_STRIPE_IS_TEST_KEY ? 'test/' : '', "customers/create"), target: "_blank", rel: "noopener noreferrer", style: { color: 'var(--theme-text' } }, "create a new one"),
            '.'),
        React.createElement(forms_1.Select, __assign({}, props, { label: "", options: options })),
        Boolean(stripeCustomerID) && (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("span", { className: "label", style: {
                        color: '#9A9A9A',
                    } }, "Manage \"".concat(((_a = options.find(function (option) { return option.value === stripeCustomerID; })) === null || _a === void 0 ? void 0 : _a.label) || 'Unknown', "\" in Stripe")),
                React.createElement(CopyToClipboard_1.default, { value: href })),
            React.createElement("div", { style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontWeight: '600',
                } },
                React.createElement("a", { href: "https://dashboard.stripe.com/".concat(process.env.PAYLOAD_PUBLIC_STRIPE_IS_TEST_KEY ? 'test/' : '', "customers/").concat(stripeCustomerID), target: "_blank", rel: "noreferrer noopener" }, href))))));
};
exports.CustomerSelect = CustomerSelect;
