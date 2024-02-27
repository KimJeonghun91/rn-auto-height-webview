var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useRef, useState, useImperativeHandle, forwardRef } from 'react';
import WebView from 'react-native-webview';
var AutoHeightWebview = forwardRef(function (_a, ref) {
    var renderHtml = _a.renderHtml, props = __rest(_a, ["renderHtml"]);
    var webViewRef = useRef(null);
    var _b = useState(1), webViewHeight = _b[0], setWebViewHeight = _b[1];
    useImperativeHandle(ref, function () { return ({
        webViewRef: webViewRef
    }); });
    var handleNavigationStateChange = function (navState) {
        var _a;
        if (!navState.loading) {
            (_a = webViewRef.current) === null || _a === void 0 ? void 0 : _a.injectJavaScript("\n                window.ReactNativeWebView.postMessage(document.body.scrollHeight);\n            ");
        }
    };
    var handleMessage = function (event) {
        var _a;
        var height = Number((_a = event === null || event === void 0 ? void 0 : event.nativeEvent) === null || _a === void 0 ? void 0 : _a.data);
        if (!isNaN(height))
            setWebViewHeight(height);
    };
    return (<WebView ref={webViewRef} style={[props.style, { height: webViewHeight }]} source={{ html: renderHtml }} onNavigationStateChange={handleNavigationStateChange} onMessage={handleMessage} scrollEnabled={false} {...props}/>);
});
export default AutoHeightWebview;
//# sourceMappingURL=index.js.map