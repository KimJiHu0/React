import { useState } from 'react';
import Sample1 from './assets/components/Sample1';
import Sample2 from './assets/components/Sample2';

export default function App() {
    const [show, setShow] = useState(false);
    const [isFancy, setIsFancy] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isPlayerA, setIsPlayerA] = useState(true);

    return (
        <>
            <h1>State의 위치</h1>
            <div style={{ display: 'flex' }}>
                <Sample1 isFancy={false} />
                <Sample1 isFancy={false} />
            </div>
            <p>
                State가 각각의 컴포넌트 내부에 있다고 생각할 수 있지만 사실은 React 내부에 존재하며 랜더링 트리에서 해당
                컴포넌트의 위치에 따라 보유하고 있는 각 State를 올바른 컴포넌트와 연결
            </p>
            <hr />
            <h1>State 변경에 따른 랜더링</h1>
            <div style={{ display: 'flex' }}>
                <Sample1 isFancy={false} />
                {show ? <Sample1 isFancy={false} /> : null}
            </div>
            <p>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => {
                            setShow(!show);
                        }}
                    />
                    Render the second counter
                </label>
            </p>
            <p>
                동일 컴포넌트를 호출하는데, show의 Boolean 값에 따라 컴포넌트를 Show/Hidden해준다. 체크박스를 클릭할 때
                State가 변경됨에 따라 랜더링을 다시하는데 false일 경우 랜더링을 하지 않아 State가 아예 사라지면서 초기화
                된다.
            </p>
            <hr />
            <h1>동일한 위치의 동일한 컴포넌트는 state를 유지</h1>
            <div style={{ display: 'flex' }}>{isFancy ? <Sample1 isFancy={true} /> : <Sample1 isFancy={false} />}</div>
            <p>
                {' '}
                <label>
                    <input
                        type="checkbox"
                        checked={isFancy}
                        onChange={(e) => {
                            setIsFancy(e.target.checked);
                        }}
                    />
                    Use fancy styling
                </label>
            </p>
            <p>
                체크박스를 선택/해제 해도 Sample1이라는 컴포넌트는 늘 존재하기 때문에 State가 변경되더라도 재설정 되지
                않는다.
            </p>
            <hr />
            <h1>동일한 위치의 다른 컴포넌트는 State를 초기화</h1>
            <div style={{ display: 'flex' }}>{isPaused ? <p>See you later!</p> : <Sample1 isFancy={false} />}</div>
            <p>
                <label>
                    <input
                        type="checkbox"
                        checked={isPaused}
                        onChange={(e) => {
                            setIsPaused(e.target.checked);
                        }}
                    />
                    Take a break
                </label>
            </p>
            <p>
                동일한 위치에 Sample1이라는 컴포넌트와 p태그는 동일위치에 다른 컴포넌트이다. 그래서 변경 시 초기화 된다.
            </p>
            <hr />
            <h1>같은 위치에 다른 컴포넌트를 랜더링하면 초기화</h1>
            <div style={{ display: 'flex' }}>
                {isFancy ? (
                    <div>
                        <Sample1 />
                    </div>
                ) : (
                    <section>
                        <Sample1 />
                    </section>
                )}
            </div>
            <p>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => {
                            setIsFancy(!isFancy);
                        }}
                    />
                    Use fancy styling
                </label>
            </p>
            <p>같은 위치에 같은 컴포넌트라해도 부모 컴포넌트가 바뀌면 랜더링을 다시하여 초기화한다.</p>
            <hr />
            <h1>동일한 위치에서 State 재설정</h1>
            <h3>유지하기</h3>
            <div style={{ display: 'flex' }}>
                {isPlayerA ? <Sample2 person="Taylor" /> : <Sample2 person="Sarah" />}
            </div>
            <p>
                {' '}
                <button
                    onClick={() => {
                        setIsPlayerA(!isPlayerA);
                    }}
                >
                    Next player!
                </button>
            </p>
            <h3>재설정하기</h3>
            <div style={{ display: 'flex' }}>
                {isPlayerA && <Sample2 person="Taylor" />}
                {!isPlayerA && <Sample2 person="Sarah" />}
            </div>
            <p>
                {' '}
                <button
                    onClick={() => {
                        setIsPlayerA(!isPlayerA);
                    }}
                >
                    Next player!
                </button>
            </p>
            <p>
                "유지하기"의 경우에는 코드에서 보면 삼항연산자로 같은 위치에 동일 컴포넌트를 호출한다. 그래서 유지가
                된다. 반대로 "재설정하기" 의 경우에는 &&연산자로 각각의 컴포넌트를 호출한다. 위치는 같을 수 있지만,
                호출하는 컴포넌트 자체는 별개이기 때문에 재설정된다.
            </p>
            <hr />
            <h1>Key로 State 재설정하기</h1>
            <div style={{ display: 'flex' }}>
                {isPlayerA ? <Sample2 key="Taylor" person="Taylor" /> : <Sample2 key="Sarah" person="Sarah" />}
            </div>
            <p>
                {' '}
                <button
                    onClick={() => {
                        setIsPlayerA(!isPlayerA);
                    }}
                >
                    Next player!
                </button>
            </p>
            <p>
                Key는 Loop문에서만 사용하는게 아니다. React는 key로 컴포넌트를 구분한다. 같은 위치에 동일한 컴포넌트를
                사용했지만 서로다른 key를 부여했기 때문에 재설정 된다.
            </p>
        </>
    );
}
