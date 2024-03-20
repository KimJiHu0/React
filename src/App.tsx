// 하나의 컴포너느 내에서 export default와 export named를 동시에 사용할 수 있다.
import Gallery, { Profile } from './components/ImportExport/Gallery';
// 여러 개의 컴포넌트가 있는 경우 대표 component만 import하여 아래처럼 컴포넌트명.함수명 으로 불러서 사용할 수 있다.
import { Input } from './components/ImportExport/Input';
import Card from './components/JSXMarkup/Card';
import Layout from './components/Props/Layout';
import Table from './components/Props/Table';
import Items from './components/Render/Condition/Items';

export default function App() {
    const user = {
        name: 'LEE',
        age: 20,
        theme: {
            width: 100,
            height: 100,
            backgroundColor: 'black',
        },
    };
    return (
        <>
            <h1>Component Import & Export</h1>
            <p>Gallery Import</p>
            <Gallery />
            <p>Gallery/Profile Import</p>
            <Profile name={'LEE'} />
            <p>Input</p>
            <Input />
            <p>이렇게 Input.tsx 안에 별로도 생성된 컴포넌트도 사용 가능하다.</p>
            <Input.Input />
            <hr />
            <h1>JSX 마크업</h1>
            <Card user={user} />
            <hr />
            <h1>Prop 전달</h1>
            <Layout>
                <Table {...user} />
            </Layout>
            <hr />
            <h1>조건부 랜더링</h1>
            <Items
                items={[
                    { isPacked: true, name: 'Space suit' },
                    { isPacked: true, name: 'Helmet with a golden leaf' },
                    { isPacked: false, name: 'Photo of Tam' },
                ]}
            />
        </>
    );
}
