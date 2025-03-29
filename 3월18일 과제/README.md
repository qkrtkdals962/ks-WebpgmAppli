## Component의 props
- Component : 입력(props)을 받아 출력(Element)하는 역할
  - 리엑트는 모든 페이지가 Component로 구성되어 있고 하나의 Component에는 또 다른 여러개의 Component조합으로 구성될 수 있다.
  - 리엑트로 화면을 구성하게 되면, 사용자가 볼 수 있는 여러 가지 컴포넌트들로 구성되어있다.
 
- Props(Properties)는 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 역할
  - Props는 읽기 전용(immutable) 속성이며, 자식 컴포넌트에서 직접 수정할 수 없다.
  - 이를 활용하여 컴포넌트 간 데이터를 주고받으며 동적인 UI를 만들 수 있습니다.
