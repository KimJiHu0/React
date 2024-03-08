// export default를 사용하지 않은 경우 이름을 {}으로 사용해야함.
import { Button } from './components/common/Button.tsx';
// 만일 export default를 사용했다면 {}를 사용하지 않음.
import Input from './components/common/Input.tsx';

// 실제 main.tsx의 root Element에 Render될 선언형 함수 컴포넌트.
function App() {
    return (
        // <></> => <<Fragment></Fragment>랑 동일함
        <>
            <p>React Study</p>
            <Button></Button>
            <Button></Button>
            <Input></Input>
        </>
    );
}

export default App;
