import Sample1 from './assets/components/Sample1';
import Sample2 from './assets/components/Sample2';
import Sample3 from './assets/components/Sample3';
import Sample4 from './assets/components/Sample4';

export default function App() {
    return (
        <>
            <h1>Ref의 성격</h1>
            <Sample1></Sample1>
            <p>Ref는 변경이 일어나도 랜더링이 실행되지 않는다. 그래서 Ref는 랜더링 때 사용하지 않는다.</p>
            <hr />
            <Sample2 />
            <p>하지만 State가 변경되어 랜더링이 되면 변경된 데이터를 확인할 수 있다.</p>
            <hr />
            <h1>ref에 DOM 담기</h1>
            <Sample3 />
            <p>
                Input에 텍스트를 입력 후 버튼을 클릭하면 1초후에 alert이 뜬다. 근데 1초가 지나기 전에 Text를 수정할 때
                수정한 값이 alert에 뿌려지길 원한다. 이럴 땐 Dom을 Ref에 담는 방법을 사용할 수 있다. ( 아래 예제 확인 )
            </p>
            <Sample4 />
            <p>ref에 input을 담으면 current에 HTMLElement가 담긴다. 여기서 .value로 input의 값을 가져올 수 있다.</p>
        </>
    );
}
