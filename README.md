** 회사의 민감 정보를 제외한 소스 코드입니다. **


## 폴더에 대한 설명

코드를 작성할 때 컴포넌트 단에서는 복잡한 연산은 최대한 숨기고 추상화 된 함수들을 보여주려 노력하였습니다.

### actions

actions 폴더의 함수들은 데이터를 조작하는 연산들이며 건물을 지을 때 가장 기본이 되는 단위라고 생각하며 코드를 작성하였습니다.

### hooks
actions에서 작성한 함수들을 조합하여 새로운 함수를 만들거나, 상태를 조작하여 필요한 컴포넌트에 공급하는 역할을 합니다.

### Components
hooks에서 제어하는 상태와 값을 가져와 사용하며 화면을 그려내는 역할을 담당하도록 노력하였습니다.