import { Button } from './components/common/Button.tsx';
import Input from './components/common/Input.tsx';
import Profile from './components/Profile.tsx';

// 실제 main.tsx의 root Element에 Render될 선언형 함수 컴포넌트.
function App() {
    return (
        // <></> => <<Fragment></Fragment>랑 동일함
        <>
            <p>React Study</p>
            <Button></Button>
            <Button></Button>
            <Input></Input>
            <Profile />
        </>
    );
}

export default App;
