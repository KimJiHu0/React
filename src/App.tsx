import Sample1 from './assets/components/Sample1';
import Sample2 from './assets/components/Sample2';
import Sample3 from './assets/components/Sample3';
import Sample4 from './assets/components/Sample4';
import Sample5 from './assets/components/Sample5';
import Sample6 from './assets/components/Sample6';
import Sample7 from './assets/components/Sample7';
import Sample8 from './assets/components/Sample8';

import { useRef } from 'react';

export default function App() {
    const inputRef = useRef(null);
    return (
        <>
            <h1>Node에 대한 Ref 가져오기</h1>
            <Sample1 />
            <p>
                useRef를 사용하면 초기에는 Null이 들어가는데, React가 해당 HTML의 노드를 생성하면서 선언된 Ref의
                current에 넣는다. 그 후 DOM 노드에 엑세스하고 정의된 빌트인 브라우저 API를 사용할 수 있다.
            </p>
            <hr />
            <Sample2 />
            <p>
                버튼을 클릭했을 때 원하는 DOM이 담긴 Element를 가운데로 오게하기 위해서는 'scrollIntoView' 함수를 사용할
                수 있다.
            </p>
            <hr />
            <h1>ref에 DOM 담기</h1>
            <Sample3 />
            <p>
                만일 동적으로 변하는 List에 대한 처리를 할 수 있다. ref에는 어떤 값이라도 담을 수 있기 때문에 노드들을
                key, value로 담아준다. 그 후 클릭 시 해당 노드로 scrollIntoView해주면 된다. ref에 콜백함수를 작성하여
                처리할 수 있다.
            </p>
            <hr />
            <h1>직접 선언한 컴포넌트에 ref 처리하기</h1>
            <h3>Ref</h3>
            <Sample4 ref={inputRef} />
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
            <Sample4 ref={inputRef} />
            <button
                onClick={() => {
                    inputRef.current.focus();
                }}
            >
                포커스
            </button>
            <hr />
            <h1>예제</h1>
            <Sample5 />
            <hr />
            <Sample6 />
            <hr />
            <Sample7 />
            <hr />
            <Sample8 />
        </>
    );
}
