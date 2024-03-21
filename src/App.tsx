import Sample1 from './assets/components/Sample1';
import Sample2 from './assets/components/Sample2';
import Sample3 from './assets/components/Sample3';
import Sample4 from './assets/components/Sample4';
export default function App() {
    return (
        <>
            {/* <h1>객체 변경하는 방법</h1> */}
            <Sample1 />
            <hr />
            <h1>필요한 부분만 객체 변경하는 방법</h1>
            <Sample2 />
            <hr />
            <h1>배열 객체 업데이트</h1>
            <Sample3 />
            <hr />
            <h1>예제 풀기</h1>
            <Sample4 />
        </>
    );
}
