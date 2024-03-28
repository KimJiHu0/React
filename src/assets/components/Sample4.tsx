import { useRef, useState, useEffect } from 'react';
export default function Sample4() {
    // fetch를 가장한 함수
    function fetchBio(person) {
        const delay = person === '이씨' ? 2000 : 200;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('This is ' + person + '’s bio.');
            }, delay);
        });
    }

    const [person, setPerson] = useState('김씨');
    const [bio, setBio] = useState(null);

    /*
        위에서 김씨, 박씨의 네트워크 통신은 0.2초이라고 가정하고, 이씨는 2초이라고 가정했다.
        만일 박씨를 선택하고 김씨를 선택하면 어떻게 될까?
        우리가 기대하는건 김씨가 출력되고 그 후 이씨가 출력되는 것이다.
        하지만 네트워크 통신이 이씨가 더 느리기 때문에 김씨를 선택했어도 이씨가 출력된다.
    */

    /*    
        이씨선택 -> 이씨 네트워크 통신(2초뒤 걸림) -> 2초 안에 김씨로 변경 ->
        김씨 네트워크 실행(0.2초 걸림) -> 김씨 출력 -> 2초가 지난 뒤 이씨출력
        이를 방지하기 위해서는 클린업이 필요하다.
        useEffect(() => {
            setBio(null);
            fetchBio(person).then((result) => {
                setBio(result);
            });
        }, [person]);
    */

    /*
        이씨선택 -> 네트워크 통신(2초걸림) -> 2초 안에 김씨로 변경 ->
        이씨의 네트워크에서 ignore를 true로 변경하여 setBio를 하지 않도록 설정 ->
        김씨 네트워크 실행(0.2초걸림) -> 김씨 setBio를 통해 김씨 출력
    */
    useEffect(() => {
        // ture면 무시 / false면 실행
        let ignore = false;

        setBio(null);
        fetchBio(person).then((result) => {
            // ignore가 false일 때 ( 무시하지마라 ) set 설정자 함수 실행
            if (!ignore) setBio(result);
        });

        return () => {
            // 이전 ignore은 true로 변경되어 위 조건문에 걸리지 않도록.
            ignore = true;
        };
    }, [person]);

    return (
        <>
            <select
                value={person}
                onChange={(e) => {
                    setPerson(e.target.value);
                }}
            >
                <option value="김씨">김씨</option>
                <option value="이씨">이씨</option>
                <option value="박씨">박씨</option>
            </select>
            <hr />
            <p>
                <i>{bio ?? 'Loading...'}</i>
            </p>
        </>
    );
}
