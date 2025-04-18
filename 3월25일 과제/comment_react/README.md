# 컴포넌트의 생명주기,state

### 컴포넌트의 생명주기

1. 함수형 컴포넌트의 훅
   - React에서 함수형 컴포넌트는 클래스형 컴포넌트처럼 생명주기 메서드를 사용하지 않고 **훅(Hook)** 을 사용하여 생명주기를 관리함
   - 가장 중요한 훅은 **useEffect()** 이고 **useEffect()** 는 함수형 컴포넌트에서 컴포넌트의 생명주기를 제어하는 데 사용됨
2. 함수형 컴포넌트의 생명주기
   1. 마운트(mounting)
      - 컴포넌트가 렌더링될 때 실행됨
      - useEffect()는 기본적으로 컴포넌트가 마운트된 후 실행
   2. 업데이트(Updating)
      - 컴포넌트의 **상태(state)**나 **속성(props)**이 변경되면, 해당 컴포넌트는 재렌더링을 실행함
      - useEffect()는 상태나 속성이 변경될 때마다 실행
   3. 언마운트(Unmounting)
      - 컴포넌트가 DOM에서 제거되기 직전에, 정리(cleanup) 작업을 할 수 있음
      - useEffect 훅에서 정리 함수를 반환하면, 언마운트 시 그 함수가 호출함

### state,props

1. state
   - 컴포넌트의 **상태(state)** 를 의미함
   - **변경 가능한 데이터**를 저장하고 관리
   - 컴포넌트의 상태가 변경되면, 재렌더링이 발생하여 UI를 업데이트함
   - 상태 변경을 위해서는 setState() 메서드를 이용하여 변경
3. props
   - 부모 컴포넌트가 자식 컴포넌트로 전달하는 **읽기 전용 데이터**
   - Props는 자식 컴포넌트에서 수정할 수 없고 오직 **부모 컴포넌트에 전달**만 받을 수 있음












