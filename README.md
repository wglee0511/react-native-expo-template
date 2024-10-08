# 지뢰 찾기 앱

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

## 코드스니펫 설정 (선택)

### 설정방법

- 상단 애플로고 옆 Code 클릭 (Mac 기준 VsCode)
- 기본설정 내 사용자 코드 조각 구성 선택
- typescript.json / typescriptreact.json 내 아래 코드를 추가 혹은 설정

```
{
  "mobile-ui text component": {
			"prefix": "mtext",
			"body": [
				"<Text",
				"  fontSize=$1",
				"  fontWeight=$2",
				"  color={COLORS.$3}",
				">",
				"  $4",
				"</Text>"
			]
		},
  "mobile-ui divider component": {
			"prefix": "mdivider",
			"body": [
				"<Divider",
				"  horizontal={$1}",
				"  vertical={$2}",
				"  backgroundColor={$3}",
				"/>",
			]
		},
}
```

### 사용법

- 필요한 컴포넌트의 prefix를 입력

```
// ex text component
mtext
```

- 아래와 같이 자동완성 되며 import 하여 사용

```
    <Text
      fontSize=
      fontWeight=
      color={COLORS.}
    >

    </Text>
```
