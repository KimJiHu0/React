import Sample1 from './assets/components/Sample1';
import Sample2 from './assets/components/Sample2';
import Sample3 from './assets/components/Sample3';
import Sample4 from './assets/components/Sample4';

export default function App() {
    return (
        <>
            <h1>State 그룹화</h1>
            <Sample1 />
            <hr />
            <h1>State 모순 피하기</h1>
            <Sample2 />
            <hr />
            <h1>State 중복 피하기</h1>
            <Sample3 />
            <hr />
            <h1>깊은 계층 피하기</h1>
            <Sample4 />
        </>
    );
}
