# nextjs
NextJS framework &amp; react useful utils &amp; starter

## 스펙구성

- NextJS + React + Sass 

#### Front-End
- React + SCSS + 
- bootstrapk <http://bootstrapk.com/getting-started/#examples>

## 아래의 사항을 경험해보자

- NEXTJS에 대해서 활용해보자
- SPA의 단점을 NEXTJS로 과연 잘될것인가?
- Gatsbyjs vs NextJS  로 비교가 되는지 비교가 되면 어느것이 더 괜찮은지?
- faker에 대해서 알아보자 (가짜 데이타를 활용해서 진짜 같은 더미사이트를 만들자) <https://www.npmjs.com/package/faker>
- Mobx를 통해서 state의 상태관리를 편하게(?) 해보자.

## 본 git을 위해서 괜찮은 강좌들 모음

- NextJS 공식 문서 <https://nextjs.org/docs/>
- NextJS ver8.x 새로운점 <https://nextjs.org/blog/next-8/>
- 양재동코드랩 <https://www.codelabs.kr/course/chapter/list?no=5>
- 초기설정 <https://www.sanity.io/blog/tutorial-host-your-sanity-based-next-js-project-on-netlify>
- <https://www.youtube.com/watch?v=kfmh2mMf3fs>
## 설정부분
```
//package.json 에서

  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start",
    "export": "npm run build && next export"
  },
```
에서 
- Netlify -> Settings -> Build & deploy "Continuous Deployment"  의 항목에서 다음과 같이 수정
- Build command : **yarn export**
- Publish directory : **out**

![](https://cdn.sanity.io/images/3do82whm/production/b04a37909f7eae17364f09933a02c689889a9b30-1239x950.gif?w=1000)