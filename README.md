# React-Native-Expo-Template

## 버전

- Node >= 20 (20.3.0)
- Npm >= 9 (9.6.7)
- Java: 17.0.12

## 설치방법

```javascript
// 패키지 파일 다운로드
npm install
// 설치되지 않는 경우
npm install --legacy-peer-deps
```

## 실행방법

- 아래 방법으로 하나의 서버가 켜지면 w / a / i 로 각각 시행가능

### Web

```javascript
npm run web
```

### Android

```javascript
npm run android
```

### iOS

```javascript
npm run ios

```

#### iOS 실행 에러 발생시

1. code 60 에러

- 시뮬레이터를 완전히 종료
- 다시 실행코드를 기입하여도 실행되지 않을시
- Mac --- > System Settings --- > Storage --- > Developer --- > Delete Xcode Caches

## Reacttoron 사용시

- reacttotron 설치
- app/index.js의 주석해제 (웹은 현재 사용불가)
