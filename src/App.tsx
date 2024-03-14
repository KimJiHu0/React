// 컴포넌트 생성 및 중첩 사용
import Component from './components/Component.tsx';
// Component에 Data 뿌리는 방법 및 조건부 랜더링
import Profile from './components/Profile.tsx';
// 목록 List 랜더링
import List from './components/List.tsx';
// 이벤트 응답하기
import Button from './components/Button.tsx';

// 실제 main.tsx의 root Element에 Render될 선언형 함수 컴포넌트.
function App() {
    const user1 = {
        name: 'LEE',
        backgroundColor: 'black',
        size: 90,
        radius: 50,
    };

    const user2 = {
        name: '',
        backgroundColor: 'red',
        size: 90,
        radius: 50,
    };
    return (
        // <></> => <<Fragment></Fragment>랑 동일함
        <>
            <h1>React Study</h1>
            <h3>Component 생성 및 중첩 사용</h3>
            <Component id="1"></Component>
            <Component id="2"></Component>
            <hr />
            <h3>조건부 랜더링 방법</h3>
            <Profile user={user1} />
            <Profile user={user2} />
            <hr />
            <h3>목록 List 랜더링 방법</h3>
            <List />
            <hr />
            <h3>이벤트 응답하기</h3>
            <Button data={1} />
        </>
    );
}

export default App;
