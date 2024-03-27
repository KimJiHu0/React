import Sample1 from './assets/components/Sample1';
import Sample2 from './assets/components/Sample2';
import Sample3 from './assets/components/Sample3';
import { Sample4 } from './assets/components/Sample4';
import Sample5 from './assets/components/Sample5';
import Sample6 from './assets/components/Sample6';
import Sample7 from './assets/components/Sample7';
import Sample8 from './assets/components/Sample8';

import { useRef } from 'react';

export default function App() {
    const inputRef = useRef(null);
    const inputForwardRef = useRef(null);
    return (
        <>
            <h1>예제1 : Input에 초점 맞추기</h1>
            <Sample1 />
            <p>
                useRef를 사용하면 초기에는 Null이 들어가는데, React가 해당 HTML의 노드를 생성하면서 선언된 Ref의
                current에 넣는다. 그 후 DOM 노드에 엑세스하고 정의된 빌트인 브라우저 API를 사용할 수 있다.
            </p>
            <hr />
            <h1>예제2 : Element 스크롤하기</h1>
            <Sample2 />
            <p>
                버튼을 클릭했을 때 원하는 DOM이 담긴 Element를 가운데로 오게하기 위해서는 'scrollIntoView' 함수를 사용할
                수 있다.
            </p>
            <hr />
            <h1>예제3 : 동적 List일 경우 처리하는 방법</h1>
            <Sample3 />
            <p>
                만일 동적으로 변하는 List에 대한 처리를 할 수 있다. ref에는 어떤 값이라도 담을 수 있기 때문에 노드들을
                key, value로 담아준다. 그 후 클릭 시 해당 노드로 scrollIntoView해주면 된다. ref에 콜백함수를 작성하여
                처리할 수 있다.
            </p>
            <hr />
            <h1>다른 컴포넌트의 DOM 노드에 접근하기</h1>
            <h3>Ref</h3>
            <Sample4.UseRef ref={inputRef} />
            <button
                onClick={() => {
                    inputRef.current.focus();
                }}
            >
                포커스
            </button>
            <p>
                직접 선언한 Component에는 ref로 props를 전달할 수 없다. 그래서 다른 DOM에 접근하려면 forwardRef를
                사용한다.
            </p>
            <h3>forwardRef</h3>
            <Sample4.UseForwardRef ref={inputForwardRef} />
            <button
                onClick={() => {
                    inputForwardRef.current.focus();
                }}
            >
                포커스
            </button>
            <hr />
            <h1>도전과제</h1>
            <h2>할 일 목록 만들기</h2>
            <Sample5 />
            <hr />
            <h2>동영상 재생/정지 하기</h2>
            <Sample6 />
            <hr />
            <h2>이미지 캐러셀 스크롤하기</h2>
            <Sample7 />
            <hr />
            <h2>각각의 컴포넌트로 검색필드 초점 맞추기</h2>
            <Sample8 />
        </>
    );
}
