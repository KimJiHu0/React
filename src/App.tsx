import Sample1 from './assets/components/Sample1';
import Sample2 from './assets/components/Sample2';
import Sample3 from './assets/components/Sample3';

import { useState } from 'react';

export default function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <>
            <h1>useEffect의 코드는 매 랜더링 시 발생한다.</h1>
            <Sample1 isPlaying={isPlaying} />
            <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</button>
            <p>useEffect를 사용했을 경우와 안했을 경우 ref를 사용할 때에는 차이점을 확인할 수 있다.</p>
            <hr />
            <h1>필요 시 클린업 처리하기</h1>
            <Sample2 />
            <p>
                마운트 시 채팅방이 연결되는 예시가 있다고 가정했을 때, StrictMode를 사용할 경우 처음에 동작을 실행하고,
                순수성을 체크 후 다시 동작을 실행한다. 이렇게 될 떄의 문제는 연결이 두 번이 발생하는데 한 번 끊어주는
                동작인 클린업 함수를 만들어야 한다. StrictMode를 해제하는 것도 하나의 방법이지만 StrictMode를 활성화
                시켜서 버그를 찾도록 하되, 연결/해제를 한 쌍으로 추가하여 에러를 방지하는 것이 좋다.
            </p>
            <hr />
            <h1>Modal의 경우에도 Cleanup을 사용하는 것이 좋다.</h1>
            <Sample3 />
            <p>
                Modal의 경우에도 개발환경일 떄 showModal 후 다시 effect를 실행하기 때문에 클린업 함수를 통해 close해주는
                것이 좋다.
            </p>
        </>
    );
}
