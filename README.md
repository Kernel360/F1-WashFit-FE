# 🚗 안전한 세차용품 정보 제공 플랫폼

## 🔗 프로젝트 링크

- [배포 URL](https://dev.washfit.site/)
- [스토리북 URL](https://www.chromatic.com/library?appId=659a0cf1b613430cc09b3672)
- [피그마 URL](https://www.figma.com/file/B4wGiQ4M4k3mtcSyyK0ATf/washpedia?type=design&node-id=241-4547&mode=design&t=IuuBM2gGXeTFVTIW-0)
- [노션 URL](https://www.notion.so/Wash-pedia-0d4a31ff248349b3a3ea202e048303d5)

<br />

## 📖 프로젝트 소개

- Washpedia는 차를 깨끗하게 만드는 "세차 용품"에 대한 기본 정보와 유해성 유무를 쉽게 찾아볼 수 있는 웹 서비스입니다.
- 사용자 정보를 바탕으로 세차용품을 추천 받을 수 있습니다.
- 주변에 세차장이 어디 있는지, 어떤 후기가 담겨있는지 확인할 수 있습니다.
- 세차 관련 유튜브 영상을 추천 받을 수 있어요.

<br />

## 🕹️ 기술적 성취

- 백엔드 팀과 비동기적 소통 및 협업 경험
- 기획부터 디자인까지 참여한 경험
- ci/cd 배포,빌드,테스트 자동화 파이프 라인 구축
- storybook을 이용한 시각적 회귀 테스트 및 vitest, msw를 이용한 테스트 코드 작성

<br />

## 🎯 팀 소개
<div align="center">

| **임병욱** | **백서영** |
| :------: |  :------: |
| [<img src="https://avatars.githubusercontent.com/u/103362820?v=4" height=150 width=150> <br/> @bottlewook](https://github.com/bottlewook) | [<img src="https://avatars.githubusercontent.com/u/101791501?v=4" height=150 width=150> <br/> @seoye0ng](https://github.com/seoye0ng) 

</div>

<br />

## ⚒️ 기술 스택

**프로그래밍 언어**<br />
![TypeScript](https://img.shields.io/badge/typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

**프레임워크**<br />
![NextJS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

**스타일**<br />
![Sass](https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

**전역 상태 관리**<br />
![ReduxToolkit](https://img.shields.io/badge/redux_toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)

**테스팅**<br />
![Vitest](https://img.shields.io/badge/vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![Storybook](https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![MockServiceWorker](https://img.shields.io/badge/mock_service_worker-FF6A33?style=for-the-badge&logo=mockserviceworker&logoColor=white)
![Testing Library](https://img.shields.io/badge/testing_library-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white)

**협업 툴**<br />
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Notion](https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white)
![Slack](https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

**버전 관리**<br />
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

**API**<br />
![Axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

**라이브러리**<br />
![TanstackQuery](https://img.shields.io/badge/tanstack_query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![React Hook Form](https://img.shields.io/badge/react_hook_form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Swiper](https://img.shields.io/badge/swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white)

**배포**<br>
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Chromatic](https://img.shields.io/badge/chromatic-FC521F?style=for-the-badge&logo=chromatic&logoColor=white)

**그 외**<br />
![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)

<br />

## 👍 성능 최적화
- 웹 폰트 다운로드 시간을 줄이기 위해 woff2 확장자 추가 및 3초 이상 폰트가 다운로드 되지 못한 경우, 기존 폰트를 사용하도록 fallback 설정
- 필요한 시점에 이미지를 불러오도록 lazy loading을 적용 및 layout shift를 방지하기 위한 Next.js image 태그 적용
- 렌더링 시 불필요한 연산을 줄이기 위해 useCallback, useMemo 사용
- dynamic import를 사용하여 빌드 타임이 아닌 런타임에서 컴포넌트를 랜더링 하도록 코드 스플리팅 적용
- react-hook-form을 사용하여 불필요한 리랜더링 방지 및 마운팅 속도 증가
- 불필요한 api 요청을 방지하기 위해 tanstack-query를 활용한 데이터 캐싱

<br />

## ✈️ 진행 사항
- 초기 환경 설정
  - 린트 및 스타일 린트 설정
  - tanstack-query 보일러 플레이트 제작
  - redux-toolkit 보일러 플레이트 제작
  - storybook 보일러 플레이트 제작
  - vitest 보일러 플레이트 제작
  - msw 보일러 플레이트 제작
  - pretandard 폰트 설정
  - 컬러 팔레트 제작
  - ci / cd workflow 작성
  - vercel 배포
    
- 20개 공통 컴포넌트 제작
  - [스토리북 URL](https://www.chromatic.com/library?appId=659a0cf1b613430cc09b3672) <- 참고해주세요!
    
- 페이지 <- 모바일 환경에서 봐주세요!
  - 메인 페이지 UI 제작 [홈 페이지](https://f1-wash-pedia-fe.vercel.app)
  - 회원 가입 페이지 UI 및 테스트 코드 작성 [회원가입 페이지](https://f1-wash-pedia-fe.vercel.app/signup)
  - 로그인 페이지 UI 제작 [로그인 페이지](https://f1-wash-pedia-fe.vercel.app/login)

## 🖐️ 질문 사항
1. 스토리북을 사용하고 있지만 단순히 props만 바꿔가며 변경된 UI만 볼 수 있도록 테스팅을 하고 있는데 현업에선 어떤 식으로 스토리북을 사용하나요?
2. next.js에서 private router 구현하려면 HOC를 이용하여 컴포넌트를 감싸 유저가 가진 token을 이용하여 유효한 회원인지 판단하는 로직 일반적인가요? 그게 아니라면
어떤 식으로 구현하는 게 좋을까요?
3. swiper.js를 사용하여 캐러셀을 제작했는데 초기 랜더링 시 layout shift가 발생하는 문제점이 있어요. 이 문제점을 해결할 수 있는 좋은 방법이 있을까요?
   
<img src="https://github.com/Kernel360/F1-WashPedia-FE/assets/103362820/db7a22ee-b51a-45f9-8ec4-52e7d4e515d6" width="300" height="400"/>



