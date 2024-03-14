// CSS Import
import '../assets/css/component.css';

// CSS 적용하기 및 JSX 마크업 작업하기
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
