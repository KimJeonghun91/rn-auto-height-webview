## 설치

```bash
npm i rn-auto-height-webview react-native-webview
```

## 사용법

```tsx
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import AutoHeightWebview from './dist';

const App = () => {
  const tempImg = 'https://blogfiles.pstatic.net/MjAxNzAyMTZfMjA0/MDAxNDg3MjQ2NDgxNjEz.T4LCn-IbinkR3ko47DeBvPL1j73nyOZGCjOa2ou27r4g.6bkIwX56bUoIwca-0LA3Y77pSLpadPbXDinEbyvEKuQg.JPEG.suuuk3/%EC%9D%B8%ED%8F%AC%EA%B7%B8%EB%9E%98%ED%94%BD_%EB%B9%84%EA%B5%90_%EB%85%B8%ED%8A%B8%EB%B6%81.jpg';

  const renderHtml = `
  <!DOCTYPE html>
      <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1, user-scalable=0">
        <style>
        img { display: block; max-width: 100%;  }
        </style>
      </head>
      <body>
          <img src="${tempImg || ''}" />
          <img src="${tempImg || ''}" />
      </body>
  </html>
  `;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
        <AutoHeightWebview
          renderHtml={renderHtml}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

```