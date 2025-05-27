# 📘 Web Programming - React

## ✅ 프로젝트 초기 설정
- `create-react-app`으로 프로젝트 생성
- 패키지 설치
  - `styled-components`: 컴포넌트별 스타일 분리 및 재사용
  - `react-icons`: 아이콘 사용

## ✅ 주요 개념 정리

### 1. Global Style 적용
- `createGlobalStyle`을 사용해 전역 배경색 등 스타일 설정 가능
- 전역 CSS를 별도 컴포넌트로 정의 후 `<App />`에 삽입

---

### 2. 컴포넌트 기반 구조

#### ✅ TodoTemplate
- 전체 UI의 기본 틀 구성
- 중앙에 흰색 박스 정렬 및 그림자 효과

#### ✅ TodoHead
- 오늘 날짜와 요일 표시
- 완료되지 않은 할 일 개수 출력

#### ✅ TodoList
- 할 일 목록 컴포넌트
- `todos` 배열을 기반으로 반복 출력

#### ✅ TodoItem
- 개별 할 일 항목 표시
- 완료 상태에 따라 스타일 변화
- 체크박스 및 삭제 기능 포함

#### ✅ TodoCreate
- 입력 폼 + 토글 버튼 제공
- 버튼 클릭 시 입력창 열림/닫힘 제어
- 새로운 할 일 추가 기능 담당

---

### 3. 상태 관리 (Context API + useReducer)

#### 🔹 Context 분리
- `TodoStateContext`: 현재 할 일 목록 상태 저장
- `TodoDispatchContext`: 상태 업데이트용 dispatch 함수
- `TodoNextIdContext`: 다음 할 일의 ID 관리 (useRef 사용)

#### 🔹 커스텀 Hook 제공
- `useTodoState`, `useTodoDispatch`, `useTodoNextId`
- Provider 외부 사용 시 에러를 발생시켜 안정성 확보

#### 🔹 주요 액션
- `CREATE`: 새 할 일 추가
- `TOGGLE`: 완료 여부 토글
- `REMOVE`: 할 일 삭제

---

### 4. 성능 최적화
- `React.memo` 사용으로 불필요한 리렌더링 방지
  - `TodoItem`, `TodoCreate` 등 자주 렌더링되는 컴포넌트에 적용

---

## 📌 정리
- 컴포넌트 단위의 설계와 전역 상태 관리를 통해 유지보수 용이
- Context API와 커스텀 Hook을 결합해 코드 구조 개선
- 성능 최적화를 위한 메모이제이션 사용

