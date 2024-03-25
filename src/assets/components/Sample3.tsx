// 중복 피하기
import { useState } from 'react';
export default function Sample3() {
    // FullName은 firstName + lastName이다.
    // 이런식으로 별도의 State를 구현해서 만드는것보단 fristName + lastName으로 개발하는 것이 좋다.
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // const [fullName, setFullName] = useState('');
    return (
        <>
            <div>
                <label htmlFor="firstName">
                    First Name{' '}
                    <input
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                            setFullName(e.target.value + ' ' + lastName);
                        }}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="lastName">
                    Last Name{' '}
                    <input
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value);
                            setFullName(firstName + ' ' + e.target.value);
                        }}
                    />
                </label>
            </div>
            <div>
                {/* <label htmlFor="fullName">Full Name : {fullName}</label> */}
                <label htmlFor="fullName">
                    Full Name : {firstName} {lastName}
                </label>
            </div>
        </>
    );
}
