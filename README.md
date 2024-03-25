이번 Branch에서는 Reducer을 사용해봤습니다.
우선은 사용하는 방식은 useState과 useReducer 두 개로 갈립니다. 회사 및 프로젝트에서 사용하는 걸로 맞게 사용하면 될 것 같습니다.

useReducer을 간단하게 사용하면서 느낀 점을 적어봤습니다.

1. 실제 State에 Action을 취하는 Reducer이 Component와 분리된 외부 JS에 선언되어 있어 내부 Component는 꽤나 깔끔해진다는 장점이 있습니다.
2. State가 여러 개 선언되어있는 것에 비해 가독성이 굉장히 좋고, 각 Component, JS(Reducer)은 각각의 역할에 맞게 분리되어 있어서 함수를 찾거나 어떤 역할을 하는지 파악하기 쉽습니다.

강의를 보며 정리한 사항은 하단 Notions 링크에 작성하였습니다.

> https://www.notion.so/kimjihu-history/13-State-Reducer-e41db9dedb46486b9032881456f5ba37
