## React EventHandler 정리

### 1. 이벤트 핸들러란
- 이벤트는 클릭, 입력, 마우스 움직임 등 사용자 인터페이스에서 발생하는 사건이다
- 이벤트 핸들러는 이벤트 발생 시 실행되는 함수이다
- DOM과 React의 차이
  - DOM은 onclick 속성이나 addEventListener를 사용한다
  - React는 JSX에서 onClick처럼 camelCase 속성을 사용한다

### 2. 이벤트 객체 - SyntheticEvent
- React는 브라우저의 이벤트 객체를 감싼 SyntheticEvent를 사용한다
- 이벤트 핸들러의 첫 번째 매개변수로 전달되며, event.target.value 등을 통해 정보에 접근할 수 있다

### 3. 비동기 코드에서의 주의사항 - event.persist()
- React는 SyntheticEvent 객체를 성능 최적화를 위해 재사용한다
- 이로 인해 이벤트 핸들러가 비동기로 동작할 경우, 이벤트 객체가 사라질 수 있다
- 이를 방지하기 위해 event.persist()를 호출해야 한다

### 4. 함수 컴포넌트와 클래스 컴포넌트
- 함수 컴포넌트에서는 useState와 이벤트 핸들러를 함께 사용한다
- 클래스 컴포넌트에서는 this 바인딩이 필요할 수 있으며, bind나 클래스 필드 문법으로 해결한다

### 5. 인자 전달
- 이벤트 핸들러에 인자를 전달하려면 화살표 함수 또는 bind를 사용한다

### 6. 기본 동작 방지 및 전파 중단
- 기본 동작을 막기 위해 event.preventDefault()를 사용한다
- 이벤트 전파를 중단하려면 event.stopPropagation()을 사용한다

### 7. 이벤트 핸들러 최적화 - useCallback
- useCallback 훅을 사용하면 이벤트 핸들러가 불필요하게 재생성되는 것을 방지할 수 있다

### 8. DOM 이벤트와 React 이벤트 비교

- 이벤트 등록 방식: DOM은 addEventListener 사용, React는 JSX 속성 사용
- 이벤트 객체: DOM은 네이티브 Event 객체, React는 SyntheticEvent 사용
- 이벤트 전파 방식: 둘 다 기본적으로 버블링 방식 사용
- 이벤트 제거: DOM은 수동 제거 필요, React는 컴포넌트 언마운트 시 자동 제거
- 이벤트 위임: DOM은 직접 설정, React는 document에 자동 위임
- 최적화 기능: DOM은 별도 최적화 필요, React는 useCallback으로 최적화 가능

### 결론
- React 이벤트 시스템은 코드가 간결하고 자동 메모리 관리 및 이벤트 위임으로 성능을 최적화할 수 있다
- SyntheticEvent 객체는 자동으로 재사용되므로, 비동기 작업 시에는 event.persist()를 반드시 사용해야 한다
