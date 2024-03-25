import { useState } from 'react';

const Profile = () => {
    // 이름을 담는 State
    const [{ fristName, lastName }, setObjectValues] = useState({ fristName: '', lastName: '' });
    // 수정중이면 true, 아니면 false
    const [isEditing, setIsEditing] = useState(false);

    // input의 change이벤트 함수
    const onInputChange = (e) => {
        setObjectValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    // form의 submit이벤트 함수
    const onFormSubmit = (e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
    };

    return (
        <>
            <h2>Profile</h2>
            <form onChange={onInputChange} onSubmit={onFormSubmit}>
                <label>FristName : {isEditing ? <input name="fristName" /> : <b>{fristName}</b>}</label>
                <br />
                <label>LastName : {isEditing ? <input name="lastName" /> : <b>{lastName}</b>}</label>
                <div>
                    <button>{isEditing ? 'Save' : 'Edit Profile'}</button>
                </div>
                <p>
                    <i>
                        Hi, {fristName} {lastName}
                    </i>
                </p>
            </form>
        </>
    );
};

export default function App() {
    return (
        <>
            <h1>State에 따른 상태 변화</h1>
            <Profile />
            <hr />
        </>
    );
}
