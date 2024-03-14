// CSS Import
import '../assets/css/component.css';

// export default이름을 지정할 경우 해당 Component를 import 하는 Component에서는
// import Input from '...' 으로 해야한다.
export default function Component({ id }) {
    return (
        // for의 역할은 input의 id를 동일하게 맞춰 놓으면 라벨 클릭 시 input에 focus를 가도록 처리
        <>
            <label htmlFor={id}>Input Label</label>
            <input id={id} className="myInput" type="input" value={10} />
            <button id={id} className="myButton">
                버튼
            </button>
        </>
    );
}
