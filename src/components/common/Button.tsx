// CSS Import
import '../../assets/css/button.css';

// export로 이름을 지정할 경우 해당 Component를 import 하는 Component에서는
// import {Button} from '...' 으로 해야한다.
export function Button() {
    // Class를 줄 때에는 class="" 가 아닌 className으로
    return <button className="myButton">Button</button>;
}
