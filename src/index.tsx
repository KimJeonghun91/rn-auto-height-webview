import React, { useRef, useState, useImperativeHandle, forwardRef } from 'react';
import WebView, { WebViewMessageEvent, WebViewNavigation, WebViewProps } from 'react-native-webview';

type Props = WebViewProps & {
    renderHtml: string;
};

const AutoHeightWebview = forwardRef(({ renderHtml, ...props }: Props, ref) => {
    const webViewRef = useRef<WebView>(null);
    const [webViewHeight, setWebViewHeight] = useState(1);

    useImperativeHandle(ref, () => ({
        webViewRef
    }));

    const handleNavigationStateChange = (navState: WebViewNavigation) => {
        if (!navState.loading) {
            webViewRef.current?.injectJavaScript(`
                window.ReactNativeWebView.postMessage(document.body.scrollHeight);
            `);
        }
    };

    const handleMessage = (event: WebViewMessageEvent) => {
        const height = Number(event?.nativeEvent?.data);
        if (!isNaN(height)) setWebViewHeight(height);
    };

    return (
        <WebView
            ref={webViewRef}
            style={[props.style, { height: webViewHeight }]}
            source={{ html: renderHtml }}
            onNavigationStateChange={handleNavigationStateChange}
            onMessage={handleMessage}
            scrollEnabled={false}
            {...props}
        />
    );
});

export default AutoHeightWebview;
