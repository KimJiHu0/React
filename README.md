## React란?

메타에서 오픈소스로 공개한 JS 라이브러리이다. 특정 기능을 수행하는 코드들의 집합으로 개발 시 필요한 기능을 직접 호출해서 사용이 가능하다.
복잡한 UI도 Component라는 작은 단위 기반으로 단순하게 개발이 가능하고 다른 라이브러리 및 프레임워크와 함께 사용하기 쉽다.

<hr/>

## 특징

가상 DOM으로 데이터가 변할 때마다 업데이트가 필요한 부분만 Reload 해주는 형식이라 빠른 로딩 속도와 반응성 높은 UI를 구현할 수 있다.

### 제어의 주체

Vue.JS, Angular.JS의 경우는 프레임워크로 구분되기 때문에 각 프레임워크의 구조와 규칙에 맞춰 개발해야하지만 React.JS는 라이브러리로써 개발자가 보다 쉽고 자유롭게 제어가 가능하다.

### 데이터 흐름

Vue.JS, Angular.JS는 양방향 데이터 흐름을 사용하고 있다. Component 구조로 나뉘어져 있을 때 부모-자식 간의 데이터 소통은 원할할 수 있지만 UI가 복잡해질수록 성능이 저하될 수 있다는 단점이 있다. 하지만 React.JS는 단방향 데이터 흐름을 사용하고 있어 성능의 저하 없이 DOM을 랜더링 할 수 있다.

### 아키텍처

Component 아키텍처로 독립적인 기능을 수행하는 Component를 사용하여 UI 개발을 진행한다. 또한 Component라는 작은 단위로 UI를 구성하여 반복되는 것들을 재사용하여 생산성을 높일 수 있다.

### 주요 문법

-   선언형 방식
    ```
    // 선언형의 경우 Component를 의미하며 함수명의 첫 문자는 대문자로 시작해야 한다.
    function Test() {
      return <button/>;
    }
    ```
-   명령형 방식
    ```
    // 무엇을 해야하는지 로직이 들어가는 방식으로 카멜케이스로 작성한다.
    function sumNumber(a, b) {
      return a + b;
    }
    ```

<hr/>

## React 시작하기

-   node 설치
    React는 Node가 있어야 실행이 가능하다. https://nodejs.org/en 에서 설치가 가능하며 터미널에서도 설치가 가능하다.
    ```
    # 설치
    brew install node
    # 확인
    node -v
    ```
-   React를 쉽게 생성할 수 있도록 도와주는 Tools
    Tool을 설치해도 되지만 설치 없이 간단한 공부를 위한 홈페이지도 이용할 수 있다.
    https://stackblitz.com/
    ```
    # 명령어가 에러나면 풀권한을 때려 앞에 sudo를 붙여보자
    # -g는 해당 도구를 전역(global)으로 저장하는 방법이다.
    # 설치 시 npx 방법과 npm 방법이 있는데, npx의 경우 설치 후 삭제가 되어 공간을 확보할 수 있지만 npm의 경우 지속적으로 유지되어 필요 없을 시 직접 삭제해야한다.
    npm install -g create-react-app
    # create-react-app 외에도 vite라는게 존재한다.
    npm install vite
    ```
-   프로젝트 생성
    -   create-react-app
        ```
        create-react-app 프로젝트명
        ```
    -   Vite
        ```
        npm create vite
        ```
-   프로젝트 실행
    ```
    # 1. cd를 통해 생성한 프로젝트로 들어간다.
    cd project_name
    # 2. 프로젝트 실행
    npm start
    npm run dev
    # Build
    npm build
    ```
-   eacces permission denied /Users/rgusqls/Desktop/KimJiHu/vscode/react_project/node_modules/.cache 에러 발생
    ```
    # 이 떄 에러 경로 중 마지막 파일명을 뺴면 해당 파일의 상위 파일에 권한이 부여되어서 실행이 가능해짐.
    sudo chown -R $USER 에러경로(node_modules 전까지, 프로젝트의 모든 경로에 권한 부여)
    ```

<hr/>

## React Develop Tools

Chrome에서 확장 프로그램에서 **React Develop Tools**를 다운로드 한다.
이는 개발자가 Component 구조로 Element를 쉽게 확인할 수 있을 뿐만아니라 State에 대한 값을 console.log로 찍지 않고 쉽게 확인할 수 있다.
