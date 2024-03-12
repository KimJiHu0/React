// CSS Import
import '../../assets/css/input.css';

// export default이름을 지정할 경우 해당 Component를 import 하는 Component에서는
// import Input from '...' 으로 해야한다.
export default function Input() {
    return (
        // for의 역할은 input의 id를 동일하게 맞춰 놓으면 라벨 클릭 시 input에 focus를 가도록 처리
        <>
            <label htmlFor="inputId">Input Label</label>
            <input id="inputId" className="myInput" type="input" value={10} />;
        </>
    );
}
