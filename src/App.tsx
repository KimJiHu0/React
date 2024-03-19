// 하나의 컴포너느 내에서 export default와 export named를 동시에 사용할 수 있다.
import Gallery, { Profile } from './components/Gallery';
// 여러 개의 컴포넌트가 있는 경우 대표 component만 import하여 아래처럼 컴포넌트명.함수명 으로 불러서 사용할 수 있다.
import { Input } from './components/Input';
export default function App() {
    return (
        <>
            <p>Gallery Import</p>
            <Gallery />
            <p>Gallery/Profile Import</p>
            <Profile name={'LEE'} />
            <p>Input</p>
            <Input />
            <p>이렇게 Input.tsx 안에 별로도 생성된 컴포넌트도 사용 가능하다.</p>
            <Input.Input />
        </>
    );
}
