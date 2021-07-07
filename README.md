# react-context-localstorage-app-draft

React ContextとLocalStorageを組み合わせたアプリケーションのFunctional Componentでの実装テスト

## ThemeContext.ts
前景色と背景色、名前をもつTheme型の定義、Theme型のContext定義。
[公式リファレンス](https://ja.reactjs.org/docs/hooks-reference.html#usecontext)ベース。

## App.tsx
Context Provider、MyComponent、ThemeSelectを内包するComponent。

## MyComponent.tsx
ContextからThemeを引いてきて表示テストするためのComponent。

## ThemeSelect.tsx
テーマを変更するためのComponent。

LocalStorageの値更新はApp Component側に定義。
