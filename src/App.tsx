import Sample1 from './assets/components/Sample1';

import { useState } from 'react';

export default function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <>
            <h1>useEffect의 코드는 매 랜더링 시 발생한다.</h1>
            <Sample1 isPlaying={isPlaying} />
            <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</button>
            <p>useEffect를 사용했을 경우와 안했을 경우 ref를 사용할 때에는 차이점을 확인할 수 있다.</p>
        </>
    );
}
