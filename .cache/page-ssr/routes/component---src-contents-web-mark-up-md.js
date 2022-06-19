"use strict";
exports.id = "component---src-contents-web-mark-up-md";
exports.ids = ["component---src-contents-web-mark-up-md"];
exports.modules = {

/***/ "./src/contents/web-mark-up.md":
/*!*************************************!*\
  !*** ./src/contents/web-mark-up.md ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_frontmatter": () => (/* binding */ _frontmatter),
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");

const _excluded = ["components"];

/* @jsx mdx */


/* @jsxRuntime classic */

/* @jsx mdx */

const _frontmatter = {
  "title": "Web Markup Basic",
  "date": "2022-04-25"
};
const layoutProps = {
  _frontmatter
};
const MDXLayout = "wrapper";
function MDXContent(_ref) {
  let {
    components
  } = _ref,
      props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)(MDXLayout, Object.assign({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h1", null, `Web Markup Basic`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `목차`, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("ul", {
    parentName: "li"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "li",
    "href": "https://www.notion.so/Web-Markup-Basic-6301a32d18e24e7f97048d3ad46d5939"
  }, `마크업이란?`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "li",
    "href": "https://www.notion.so/Web-Markup-Basic-6301a32d18e24e7f97048d3ad46d5939"
  }, `WEB`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "li",
    "href": "https://www.notion.so/Web-Markup-Basic-6301a32d18e24e7f97048d3ad46d5939"
  }, `HTML`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "li",
    "href": "https://www.notion.so/Web-Markup-Basic-6301a32d18e24e7f97048d3ad46d5939"
  }, `CSS`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "li",
    "href": "https://www.notion.so/Web-Markup-Basic-6301a32d18e24e7f97048d3ad46d5939"
  }, `SCSS`), `
참고`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "li",
    "href": "https://seulbinim.github.io/WSA/html-basic.html"
  }, `https://seulbinim.github.io/WSA/html-basic.html`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "li",
    "href": "https://developer.mozilla.org/ko/docs/Learn/Getting_started_with_the_web"
  }, `MDN Web과 함께 시작하기`))))), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h1", null, `마크업이란?`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `마크업`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `마크업 언어를 사용하여, 문서나 데이터의 구조를 기술하는 행위`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `마크업 언어`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `마크업 언어(markup 言語, markup language)는 태그 등을 이용하여 문서나 데이터의 구조를 명기하는 언어의 한 가지이다. 일반적으로 데이터를 기술하는 정도로만 사용되기에 프로그래밍 언어와는 구별된다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `마크업 언어의 분류`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `순차적 마크업 언어(procedural markup language)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `한 문서에 기본 데이터, 구조, 표현 정보가 저장되며, 문서 내용을 어떻게 시각적으로 표현할 것인가에 대한 정보를 비롯하여 폰트, 색상, 여백, 줄 간격 등 표현에 관련된 다수의 추가 정보가 포함된다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `ex) HTML, 워드프로세서 문서`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `서술적 마크업 언어(descriptive markup language)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `기본 데이터와 구조만으로 구성되어 제목, 부제목, 작가, 서론, 주소, 참고 도서 등의 구조 정보만을 가진다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `ex)XML, Latex`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "p",
    "href": "https://hanamon.kr/htm-xml-%EC%B0%A8%EC%9D%B4%EC%A0%90/"
  }, `HTML과 XML의 차이점`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `마크업의 유형`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `구조적 마크업(Structural Markup)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `문서의 구성 방식을 표현.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `HTML의 `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `h1`), ` , `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `p`), `, `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `div`), ` 등의 태그가 이 유형에 해당됨.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `문서의 전체 혹은 부분적인 모양을 정의한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `유형적 마크업(Stylistic Markup)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `문서를 시각적으로 표현하는 방법과 관련.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `HTML의 경우 텍스트 색상이나 폰트를 지정할 수 있는 `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `font`), `, `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `i`), `, `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `b`), `, `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `u`), ` 등의 태그가 해당됨.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `CSS를 적용하여 그래픽적인 유형을 표현하기도 함.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `의미적 마크업(Semantic Markup)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `데이터 내용 자체에 관한 것.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `HTML의 경우 `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `title`), ` , `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `code`), ` 등의 태그가 해당됨.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `문서의 내용이 어떤 것인지 표현하는 역할을 함.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("aside", null, "\uD83D\uDC49 \uADFC\uB798\uC758 \uC6F9 \uAC1C\uBC1C \uC2DC HTML \uB9C8\uD06C\uC5C5\uC5D0\uC11C\uB294 \uC758\uBBF8\uC801 \uB9C8\uD06C\uC5C5 (Semantic Markup)\uC744 \uAC15\uC870\uD558\uACE0 \uC788\uB2E4. \uC774\uB294 \uB9D0 \uADF8\uB300\uB85C \uC758\uBBF8\uAC00 \uC798 \uC804\uB2EC\uB420 \uC218 \uC788\uB3C4\uB85D \uBB38\uC11C\uB97C \uC791\uC131\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD55C\uB2E4."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `HTML에서의 시멘틱 마크업`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `마크업이란 웹 개발에 있어 뼈대를 잡는 행위이다. 웹 문서나 데이터를 구조화 하기 위해서 마크업이 사용된다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `웹 마크업을 위해 개발된 마크업 언어로 HTML이 있다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `초기 웹이 등장한 시점의 HTML은 단순히 문서를 작성하기 위해 사용되었으나, 현재에는 웹의 발전과 함께 웹 표준이 개발되어 다양한 환경의 서비스, 구조 등을 지원한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h1", null, `WEB`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `인터넷`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `컴퓨터를 전 세계 규모로 연결하여 TCP/IP 프로토콜(Transmission Control Protocol/Internet Protocol)을 통해 서로 간의 통신할 수 있게 컴퓨터 네트워크`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "p",
    "href": "https://ko.wikipedia.org/wiki/%EC%9D%B8%ED%84%B0%EB%84%B7"
  }, `인터넷에 대한 정보`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `웹의 등장`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `웹이란, 인터넷 표준 문서 시스템으로 인터넷 환경에서 웹 문서의 특정 정보를 사용할 수 있돌고 해주는 서비스를 의미한다(World Wide Web).`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("img", {
    parentName: "p",
    "src": "https://photos.google.com/share/AF1QipPMAEhjJwBIbL4cAtgg9LHERES905Oht0al4RDTIFSq8kdvVsAlFPiyzPds6c_yqg/photo/AF1QipNLTYnvxn9mdzpeKxFVNUW39y0GQ3_gepGQJugu?key=dGF4ZmVaQkdyaUdNNUxPNk03Vzh0bDdwVmg1TDNn",
    "alt": "Untitled"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `웹은 1989년 CERN 시절 팀 버너스 리(Tim Berners-Lee)에 의해 처음 제안되었다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `그는 www, URL, HTTP 등을 고안하였고, 링크를 통해 필요한 정보를 검색하는 하이퍼텍스트(Hyper text) 방식의 웹의 시초가 되었다. 그리고 이러한 웹 관련 기술을 특허내지 않고 `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `대중에 무료로 공개`), `하여, 웹 발전의 큰 기여를 하였다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `웹의 특징`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `기본적으로 클라이언트-서버 모델(client-server model)을 기반으로 동작하며 다음과 같은 특징을 갖는다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `전 세계의 컴퓨터를 연결한다(인터넷 베이스)`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `HTTP 프로토콜(Hyper Text Transfer Protocol) 사용`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `HTML(Hyper Text Markup Language)로 작성된 문서를 연결`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `텍스트, 그래픽, 오디오, 비디오, 프로그램 파일 등 멀티미디어 서비스 제공`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `웹의 역사`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `1991 - 일반인에 공개`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `1993 - GUI(Graphic User Interface)방식의 인터페이스를 제공하는 웹 브라우저 모자이크(Mosaic) 보급.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `1994 - 상업용 웹 브라우저 넷스케이프 내비게이터(netscape navigator) 개발 인터넷 보급에 기여`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `1995 - MS의 인터넷 익스플로러를 윈도우 운영체제와 번들로 제공.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `1998 - MS 반독점 소송에 패소, 넷스케이프 AOL에 인수`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `2002 - 파이어폭스 출시 이후 모질라 재단 설립`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `2003 - 사파리 출시`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `2006 - 제이쿼리`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `2007 - 아이폰 출시, HTML5 표준안 논의,`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `2008 - 크롬 출시`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `2014 - W3C HTML5 웹 표준 지정`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `2020 - MS 엣지 출시`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `2022 - 인터넷 익스플로러 서비스 종료`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("img", {
    parentName: "p",
    "src": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-03-31_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_10.19.48.png",
    "alt": "스크린샷 2022-03-31 오전 10.19.48.png"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("aside", null, "\uD83D\uDC49 96~08\uB144\uAC04\uC758 1\uCC28 \uBE0C\uB77C\uC6B0\uC800 \uC804\uC7C1, 07\uB144 \uC2A4\uB9C8\uD2B8\uD3F0 \uCD9C\uC2DC, 09~15\uB144 2\uCC28 \uBE0C\uB77C\uC6B0\uC800 \uC804\uC7C1\uC744 \uACAA\uC73C\uBA70 \uC6F9 \uD45C\uC900\uC5D0 \uB300\uD55C \uD544\uC694\uC131\uC774 \uD070 \uD654\uB450\uAC00 \uB418\uC5B4, \uD604\uC7AC\uC5D0\uB3C4 \uC6F9 \uD45C\uC900\uC744 \uC9C0\uD0A4\uB294 \uAC83\uC774 \uC6F9 \uAC1C\uBC1C \uC2DC \uC911\uC694\uD55C \uD56D\uBAA9\uC73C\uB85C \uC790\uB9AC\uB9E4\uAE40\uD558\uAC8C \uB418\uC5C8\uB2E4."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `웹 표준`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `웹에서 표준적으로 사용되는 기술이나 규칙으로, 표준화 단체인 W3C가 권고한 표준안에 따라 웹 사이트를 작성할 때 이용되는 HTML, CSS, JavaScript 등에 대한 규정이 담겨있다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `웹에 대한 사용성과 접근성을 높이기 위해 고안되었다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("img", {
    parentName: "p",
    "src": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/Untitled%201.png",
    "alt": "Untitled"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `대표적인 웹 표준`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `WHATWG (Web Hypertext Application Technology Working Group) - 대표적으로 `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "li",
    "href": "https://namu.wiki/w/HTML"
  }, `HTML`), `과 웹 API의 표준을 정한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "li",
    "href": "https://namu.wiki/w/W3C"
  }, `W3C`), ` (World Wide Web Consortium) - 대표적으로 `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "li",
    "href": "https://namu.wiki/w/CSS"
  }, `CSS`), `의 표준을 정한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `국제 인터넷 표준화 기구 (IETF)가 출판한 인터넷 표준 (STD) 문서`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `국제 인터넷 표준화 기구 (IETF)가 출판한 RFC (Request for Comments) 문서`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "li",
    "href": "https://namu.wiki/w/%EA%B5%AD%EC%A0%9C%ED%91%9C%EC%A4%80%ED%99%94%EA%B8%B0%EA%B5%AC"
  }, `국제표준화기구`), `(ISO)가 출판한 표준들`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `Ecma 인터내셔널 (이전 이름은 ECMA)이 출판한 표준들 - `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "li",
    "href": "https://namu.wiki/w/JavaScript"
  }, `JavaScript`), ` 표준이 여기서 정해진다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "li",
    "href": "https://namu.wiki/w/%EC%9C%A0%EB%8B%88%EC%BD%94%EB%93%9C"
  }, `유니코드`), ` 컨소시엄이 출판한 유니코드 표준과 다양한 유니코드 기술 보고서 (UTR)`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `인터넷 할당 번호 기관 (IANA)이 운영하는 이름과 번호 `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "li",
    "href": "https://namu.wiki/w/%EB%A0%88%EC%A7%80%EC%8A%A4%ED%8A%B8%EB%A6%AC"
  }, `레지스트리`))), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `웹 표준이 중요한 이유`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `사용자에게 웹에 대한 일관성 있는 사용성과 접근성을 제공할 수 있다.`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `웹 개발 시 효율성을 증대한다.`), `(크로스 플랫폼)`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `검색 친화적인 웹사이트 구현할 수 있다.`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `W3C 웹 표준 기술 문서의 발전 단계`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("img", {
    parentName: "p",
    "src": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/Untitled%202.png",
    "alt": "Untitled"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `초안(WD, working Draft)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `W3C에서 추구하는 바와 관련 잇는 주제이지만, 아직 완전하지 않은 워킹 그룹의 아이디어를 담은 문서.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `후보 권고안(CR, Candidate Recommendation)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `심사한 작업의 최종안. 1년 이내에 다음 단계인 제안 권고안이 될 수 있다. 즉 제안 권고 안이 되기 위한 후보 문서이다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `제안 권고안(PR, Proposed Recommendation)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `권고안 전 단계로 4주 이내에 검토해서 최정적으로 권고안이 된다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `권고안(REC, RECommendation)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `W3C에 참여하는 회원에게 동의를 얻은 표준안으로, 최종적으로 표준화환 규격을 정의한 문서`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `웹 접근성`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `웹 접근성(web accessibility)은 `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "p",
    "href": "https://ko.wikipedia.org/wiki/%EC%9E%A5%EC%95%A0%EC%9D%B8"
  }, `장애`), `를 가진 사람과 장애를 가지지 않은 사람 모두가 `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "p",
    "href": "https://ko.wikipedia.org/wiki/%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8"
  }, `웹사이트`), `를 이용할 수 있게 하는 방식을 가리킨다. 사이트가 올바르게 설계되어 개발되고 편집되어 있을 때 `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `모든 사용자들은 정보와 기능에 동등하게 접근할 수 있다.`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("aside", null, "\uD83D\uDC49 \uC6F9 \uC811\uADFC\uC131\uC740 \uC7A5\uC560\uC790\uB97C \uC704\uD55C \uAE30\uB2A5\uB9CC\uC73C\uB85C \uBC1B\uC544\uB4E4\uC5EC\uC838\uC11C\uB294 \uC548\uB41C\uB2E4. \uC6F9 \uC811\uADFC\uC131\uC744 \uC900\uC218\uD55C\uB2E4\uB294 \uC758\uBBF8\uB294 \uBAA8\uB4E0 \uC0AC\uC6A9\uC790\uB4E4\uC774 \uC815\uBCF4\uC640 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD568\uC5D0 \uC788\uC5B4 \uB3D9\uB4F1\uD574\uC57C\uD568\uC744 \uC758\uBBF8\uD55C\uB2E4."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("img", {
    parentName: "p",
    "src": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-03-31_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_10.57.19.png",
    "alt": "스크린샷 2022-03-31 오전 10.57.19.png"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `웹 접근성을 준수하기 위해 웹 접근성 지침(WCAG)를 참고할 수 있다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `크게 4가지 항목인 인지, 운용, 이해, 견고로 나누어지며, 모든 세부 기준은 3가지 적합성(A, AA, AAA)으로 분류되어 있다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `A가 최소 수준, AA가 일반적으로 권유되는 수준, 그리고 AAA가 가장 이상적인 수준이라고 이해하면 편하다. 이 기준을 얼마나 충족시키느냐에 따라 웹 페이지의 적합성 또한 3단계로 나눌 수 있다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "p",
    "href": "https://namu.wiki/w/%EC%9B%B9%20%ED%91%9C%EC%A4%80"
  }, `나무위키 : 웹 표준`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "p",
    "href": "http://www.kwacc.or.kr/WAI/wcag21/#audio-description-or-media-alternative-prerecorded"
  }, `WCAG2 한국어 번역본`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "p",
    "href": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%AE%E1%86%A8%E1%84%92%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%B0%E1%86%B8%E1%84%8F%E1%85%A9%E1%86%AB%E1%84%90%E1%85%A6%E1%86%AB%E1%84%8E%E1%85%B3%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%80%E1%85%B3%E1%86%AB%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%B5%E1%84%8E%E1%85%B5%E1%86%B72.1.pdf"
  }, `한국형웹콘텐츠접근성지침2.1.pdf`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "strong",
    "href": "https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA"
  }, `ARIA`))), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `스크린리더 사용자들을 위한 웹 접근성 보조기술`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `접근가능한 리치 인터넷 어플리케이션`), `(Accessible Rich Internet Applications, `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `ARIA`), `)은 장애를 가진 사용자가 웹 콘텐츠와 웹 어플리케이션(특히 JavaScript를 사용하여 개발한 경우)에 더 쉽게 접근할 수 있는 방법을 정의하는 여러 특성을 의미한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `참고 : `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "p",
    "href": "https://abcdqbbq.tistory.com/76"
  }, `https://abcdqbbq.tistory.com/76`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h1", null, `HTML`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("aside", null, "\uD83D\uDC49 HTML\uC740 \uC6F9\uC0AC\uC774\uD2B8\uC758 \uAD6C\uC870\uB97C \uC791\uC131\uD558\uAE30 \uC704\uD574 \uC0AC\uC6A9\uB41C\uB2E4."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `HTML(Hypertext Markup Language)는 우리가 보는 웹페이지가 어떻게 구조화되어 있는지 브라우저로 하여금 알 수 있도록 하는 마크업 언어이다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `HTML은 elements로 구성되어 있으며, 이들을 적절한 방법으로 나타내고 실행하기 위해 각 컨텐츠의 여러 부분들을 태그로 감싸여 사용한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `element(요소, 엘리먼트)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `엘리먼트는 웹 페이즈를 구성하며, XML,HTML에서 엘리먼트는 데이터 항목, 텍스트 묶음, 이미지를 담을 수 있다. 일반적인 엘리먼트는 다음과 같이 구성된다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("img", {
    parentName: "p",
    "src": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/Untitled%203.png",
    "alt": "Untitled"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("aside", null, "\uD83D\uDC49 \uC5D8\uB9AC\uBA3C\uD2B8\uC640 \uD0DC\uADF8\uB294 \uAC19\uC9C0 \uC54A\uC73C\uBA70, \uD0DC\uADF8\uB294 \uC18C\uC2A4 \uCF54\uB4DC\uC5D0\uC11C \uC5D8\uB9AC\uBA3C\uD2B8\uC758 \uC2DC\uC791\uACFC \uB05D\uC744 \uD45C\uC2DC\uD558\uACE0, \uC5D8\uB9AC\uBA3C\uD2B8\uB294 \uBE0C\uB77C\uC6B0\uC800\uAC00 \uD398\uC774\uC9C0\uB97C \uD45C\uC2DC\uD560 \uB54C \uC0AC\uC6A9\uB418\uB294 \uBB38\uC11C \uBAA8\uB378\uC778 DOM\uC758 \uC77C\uBD80\uC774\uB2E4."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `HTML5로의 발전`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `HTML은 웹의 응용 분야가 늘어나면서, 추가로 필요한 기능을 구현하기가 어려워졌다. 그래서 플래시(Flash)나 실버라이트(Silverlight)등의 플러그인을 통해 기능을 확장하였는데, 이로 인해 웹 사이트에 추가적인 플러그인을 설치해야 하는 불편함이 생겼다. HTML5는 이러한 불편함을 해소하기 위해 W3C와 WHATWG의 두 단체가 협동하여 제안한 새로운 HTML 규격이다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("img", {
    parentName: "p",
    "src": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/Untitled%204.png",
    "alt": "Untitled"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `HTML5의 특징`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `참고 : `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "p",
    "href": "https://webclub.tistory.com/491"
  }, `HTML5란 무엇인가?`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `구조적 설계 지원`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `문서의 구조를 표현할 수 있는 구조적 마크업 요소를 이용해 콘텐츠의 본문과 본문 이외의 나머지 부분을 분류하였다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `그래픽 및 멀티미디어 기능 강화`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `가장 주목받는 부분 중 하나로 `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `video`), ` , `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `audio`), ` , `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `canvas`), ` 태그 등을 활용하여 다양한 미디어들을 쉽게 사용할 수 있다. 기존에 이러한 기능을 위해 사용되던 플래시나 실버라이트 등의 플러그인 등을 설치하지 않더라도 동작한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `CSS3 지원`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `웹 페이지의 시각적인 부분을 담당하는 스타일을 설정하는 데 CSS3 기술을 활용한다. 1996년 CSS1이 제정된 후 기능을 추가하며 CSS1, CSS2, CSS3로 발전하였다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `자바스크립트 지원`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `동적인 웹 페이지를 제작하기 위해 자바스크립트를 활용한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `다양한 API 제공`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `웹 개발 시 많은 도움을 주는 다양한 API(Application Programming Interface)를 제공한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `대표적인 API`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `드래그 앤 드롭 API - 아이콘, 텍스트, 이미지, 파일 등의 요소를 드래깅할 때 동작을 제어한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `오프라인 웹 어플리케이션 API - 인터넷에 접속하지 못할 때 웹 어플리케이션을 사용하도록 해준다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `웹 스토리지 API - 클라이언트 족 로컬 스토리지에 데이터를 저장한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `인덱스드 데이터베이스 API - 클라이언트에 데이터베이스를 저장한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `파일 API - 클라이언트 내의 로컬 파일을 읽고 쓴다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `웹 소켓 API - 서버와 브라우저 사이에 양방향 통신 채널을 제공한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `웹 메세징 API - 어플리케이션 간에 메세지를 주고받을 수 있는 기능을 제공한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `위치 정보 API - 모바일 단말기에서 현재 위치를 파악할 수 있게 해준다.`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `모바일 웹 지원`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `PC의 웹 페이지뿐만 아니라 모바일 웹 페이지도 지원한다. 아이폰, 안드로이드 등각각 구현하지 않더라도 동일하게 자바스크립트로 작성한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `HTML5 기본구조`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-html"
  }, `<!-- html문서 사용 선언 -->
<!DOCTYPE html>
<html lang="en">
    <!-- 문서에 대한 정보 head -->
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- 문서의 제목 -->
        <title>Document</title>
    </head>
    <!-- 문서(컨텐츠) body -->
    <body>
        <h1>hello world!</h1>
    </body>
</html>
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `HTML5에서 변경된 Element, Attribute`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `HTML5에서 추가된 시멘틱한 Element`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("img", {
    parentName: "p",
    "src": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-03-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.07.26.png",
    "alt": "스크린샷 2022-03-31 오후 1.07.26.png"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("img", {
    parentName: "p",
    "src": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/Untitled%205.png",
    "alt": "Untitled"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `HTML5에서 추가된 컨텐츠 관련 Element`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("img", {
    parentName: "p",
    "src": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-03-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.07.49.png",
    "alt": "스크린샷 2022-03-31 오후 1.07.49.png"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `HTML5에서 추가된 Attribute`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("img", {
    parentName: "p",
    "src": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-03-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.08.19.png",
    "alt": "스크린샷 2022-03-31 오후 1.08.19.png"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `HTML5에서 변경된 Element`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("img", {
    parentName: "p",
    "src": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-03-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.08.48.png",
    "alt": "스크린샷 2022-03-31 오후 1.08.48.png"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `HTML5에서 변경된 Attribute`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("img", {
    parentName: "p",
    "src": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-03-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.09.28.png",
    "alt": "스크린샷 2022-03-31 오후 1.09.28.png"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `head`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-html"
  }, `<head>
    <!-- default meta tag  -->
    <!-- 문자 인코딩 type 설정  -->
    <meta charset="UTF-8" />
    <!-- X-UA-Compatible: 브라우저의 문서모드를 지정 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- 화면 설정 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- facebook meta tag  -->
    페이지의 표준 URL
    <meta
        property="og:url"
        content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
    />

    사이트 이름과 같은 제목
    <meta property="og:title" content="When Great Minds Don’t Think Alike" />

    콘텐츠의 간략한 설명으로, 대개 2~4개의 문장으로 구성
    <meta
        property="og:description"
        content="How much does culture influence creative thinking?"
    />

    콘텐츠의 미디어 유형
    <meta property="og:type" content="website" />

    사용자가 Facebook에 콘텐츠를 공유할 때 표시되는 이미지의 URL
    <meta
        property="og:image"
        content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
    />
    <!-- facebook meta tag 끝  -->

    <!-- css link -->
    <!-- css style 초기화 -->
    <link rel="stylesheet" href="/reset.css" />

    <!-- 사용자가 작성하는 css style -->
    <link rel="stylesheet" href="/style.css" />
    <!-- css link 끝 -->

    <!-- 문서의 제목 -->
    <title>basic_markup</title>

    <!-- inline css -->
    <style></style>
    <!-- inline css 끝 -->

    <!-- js link -->
    <script src="/main.js"></script>
    <script src="/index.js" defer></script>
    <!-- js end -->
</head>
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `body`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-html"
  }, `<body>
    <!-- 레이아웃용 header -->
    <header id="header" class="header">
        header
        <!-- link 태그 -->
        <a href="#">link</a>
        <a href="www.naver.com">link</a>
        <a href="www.naver.com" target="_blank">link</a>
        <!-- button 태그 -->
        <button>버튼</button>
    </header>
    <main>
        <!-- 레이아웃용 nav 태그 -->
        <nav class="nav">
            nav
            <!-- 레이아웃용 unordered list 태그 -->
            <ul class="list" id="list">
                <!-- heading 태그 -->
                <h2>list</h2>
                <!-- 레이아웃용 list item 태그 -->
                <li class="listItem item-0">listItem 1</li>
                <li class="listItem item-1">listItem 2</li>
                <li class="listItem imte-2">listItem 3</li>
            </ul>
        </nav>
        <!-- 레이아웃용 section 태그 -->
        <seciton class="mainSection">
            main section
            <section class="subSection">
                <!-- 레이아웃용 article 태그 -->
                <article class="article-apple">
                    <!-- 컨텐츠용 태그 -->
                    <figure>
                        <!-- img 태그 -->
                        <img src="/download.png" alt="구글로고" />
                    </figure>
                </article>
            </section>
        </seciton>
        <!-- 레이아웃용 aside 태그 -->
        <aside style="visibility: hidden">aside</aside>
    </main>
    <!-- 레이아웃용 footer 태그 -->
    <footer>footer</footer>
</body>
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h1", null, `CSS`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("aside", null, "\uD83D\uDC49 CSS\uB294 \uC6F9\uC0AC\uC774\uD2B8\uB97C \uAFB8\uBBF8\uAE30 \uC704\uD574 \uC0AC\uC6A9\uB41C\uB2E4."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `Cascading Style Sheets`), `(`, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `CSS`), `)는 HTML이나 XML(XML의 방언인 SVG, XHTML 포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어이다. (마크업 언어도 아니다.)`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `W3C 표준안을 통해 다양한 브라우저의 표준으로 작동한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "h3"
  }, `CSS ruleset`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("img", {
    parentName: "p",
    "src": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/Untitled%206.png",
    "alt": "Untitled"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `선택자(selector)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `ruleset의 맨 앞에 있는 HTML 엘리먼트의 이름. 스타일 할 엘리먼트(들)을 선택.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `선언`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `color: red`), `와 같은 단일 규칙. 스타일하길 원하는 엘리먼트의 속성을 명시.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `속성(property)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `주어진 HTML 요소를 꾸밀 수 있는 방법. CSS에서, rule 내에서 영향을 줄 속성을 선택.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `속성 값(value)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `속성의 오른쪽에, 콜론 뒤에, 속성 안에 부여된 여러 값들 중 하나를 작성.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `주의점`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `각 element는 브라우저별로 탑재단 기본 스타일시트 속성이 있음.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `각각의 ruleset (셀렉터로 구분) 은 반드시 (`, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "li"
  }, `{}`), `) 로 감싸져야함.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `각각의 선언 안에, 각 속성을 해당 값과 구분하기 위해 콜론 (:)을 사용해야함`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `각각의 ruleset 안에, 각 선언을 그 다음 선언으로부터 구분하기 위해 세미콜론 (;)을 사용해야함.`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-css"
  }, `p {
    color: red;
    width: 500px;
    border: 1px solid black;
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `여러 요소 선택하기`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-css"
  }, `p,
li,
h1 {
    color: red;
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `선택자의 종류`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-css"
  }, `/* 선택자 */
/* wildcard */
/* 전체 선택자 Universal Selector */
/* 전체 요소 선택자 */
* {
}

/* 태그 선택자 Type Selector */
/* 주어진 Tag를 가진 HTML 요소 선택자 */
html {
}

/* 클래스 선택자 Class Selector */
/* 주어진 값을 class 속성값으로 가진 HTML 요소 선택자 */
.header {
}

/* ID 선택자 ID Selector */
/* 주어진 값을 ID 속성값으로 가진 HTML 요소 선택자 */
#header {
}

/* 복합 선택자 Combinator */
/* 두 개 이상의 선택자 요소가 모인 선택자 */

.nav #list li {
    font-size: 3rem;
}

.nav .list .listItem {
    font-size: 2.5rem;
}

.nav ul li {
    font-size: 2rem;
}

.list > li {
    font-size: 1.5rem;
}

nav ul li {
    font-size: 1rem;
}

ul li {
    font-size: 0.5rem;
}

h2 ~ li {
    color: blueviolet;
}

/* 속성 선택자 Attribute Selectors */
/* 태그 안의 특정 속성값을 가진 선택자 */
article[class="article"] {
    background: chocolate;
}

/* 가상 선택자 Pseudo-Classes */
/* 실제 존재하지는 않지만 임으로 지정하여 사용하는 선택자 */

/* :link :visited :active :hover :focus */
a:link {
    color: darkgrey;
}

a:hover {
    color: white;
}

a:focus {
    color: deeppink;
}

button:focus {
    background-color: deeppink;
}

button:active {
    background-color: darkorange;
}

/* ::before ::after */
header::before {
    content: "header 앞에 있습니다";
}

header::after {
    content: "header 뒤에 있습니다";
    position: absolute;
    right: 16px;
}

article:nth-child(1) {
    color: firebrick;
}

/* 부정 선택자 Negation pseudo-class*/
article:not(:first-child) {
    color: deepskyblue;
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "p",
    "href": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/R5djHzs9n.webp"
  }, `R5djHzs9n.webp`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `박스모델`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("aside", null, "\uD83D\uDC49 CSS\uB294 \uC6F9\uC0AC\uC774\uD2B8\uB97C \uAFB8\uBBF8\uAE30 \uC704\uD574 \uC0AC\uC6A9\uB41C\uB2E4."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `모든 HTML 요소는 박스(box) 모양으로 구성되며, 이것을 박스 모델(box model)이라고 부른다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `박스 모델은 HTML 요소를 패딩(padding), 테두리(border), 마진(margin), 그리고 내용(content)으로 구분한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("img", {
    parentName: "p",
    "src": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/Untitled%207.png",
    "alt": "Untitled"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("ol", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ol"
  }, `내용(content) : 텍스트나 이미지가 들어있는 박스의 실질적인 내용 부분.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ol"
  }, `패딩(padding) : 내용과 테두리 사이의 간격.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ol"
  }, `테두리(border) : 내용와 패딩 주변을 감싸는 테두리.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ol"
  }, `마진(margin) : 테두리와 이웃하는 요소 사이의 간격.`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `CSS에서 height와 width 속성을 설정할 때 그 크기가 가르키는 부분은 내용(content) 부분만을 대상으로 한다.`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-css"
  }, `div{
    box-sizing: content-box /* default */
}

box-sizing에 사용가능한 값
content-box | border-box | initial | inherit
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `block | inline`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `display 속성`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `display 속성은 웹 페이지의 레이아웃(layout)을 결정하는 CSS의 중요한 속성 중 하나.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `해당 HTML 요소가 웹 브라우저에 언제 어떻게 보이는가를 결정함.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `대부분의 HTML 요소는 display 속성의 기본값으로 다음 두 가지 값 중 하나의 값을 가진다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `블록(block)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `display 속성값이 블록(block)인 요소는 언제나 새로운 라인(line)에서 시작하며, 해당 라인의 모든 너비를 차지합니다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `ex) `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `div`), ` , `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `h1`), ` , `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `p`), ` , `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `ul`), ` , `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `ol`), ` , `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `form`), ` 요소는 대표적인 블록(block) 요소`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `인라인(inline)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `display 속성값이 인라인(inline)인 요소는 새로운 라인(line)에서 시작하지 않는다. 또한, `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `요소의 너비도 해당 라인 전체가 아닌 해당 HTML 요소의 내용(content)만큼만 차지한다`), `.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `span`), ` , `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `a`), ` , `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `img`), ` 요소는 대표적인 인라인(inline) 요소.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-css"
  }, `div {
    display: inline-block;
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `인라인-블록(inline-block)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `인라인과 블록 이외에도 display 속성에 자주 사용되는 속성값에 인라인-블록(inline-block)이 있음 .`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `display 속성값이 인라인-블록으로 설정된 요소는 해당 요소 자체는 인라인(inline) 요소처럼 동작함. 하지만 해당 요소 내부에서는 블록(block) 요소처럼 동작.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `인라인-블록 요소는 인라인 요소와 비슷하지만, `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `너비와 높이를 설정가능`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `또한, `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `블록 요소처럼 margin을 이용하여 여백을 지정가능`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `크기 단위`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `CSS에서 사용하는 크기의 단위에는 %, em, px, cm, mm, inch 등이 있다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("img", {
    parentName: "p",
    "src": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/Untitled%208.png",
    "alt": "Untitled"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("ol", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ol"
  }, `백분율 단위(%) - 기본 크기를 100%로 놓고, 그에 대한 상대적인 크기를 설정`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ol"
  }, `배수 단위(em) - 해당 글꼴(font)의 기본 크기를 1em으로 놓고, 그에 대한 상대적인 크기를 설정`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ol"
  }, `픽셀 단위(px) - 픽셀 단위(px)는 스크린의 픽셀(pixel)을 기준으로 하는 절대적인 크기를 설정`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ol"
  }, `Root-em (rem) - 브라우저의 기본 글꼴(font) 사이즈를 기준으로 그에 대한 상대적인 크기를 설정 default(16px) → 1rem = 16px`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("aside", null, "\uD83D\uDC49 \uD06C\uAE30 \uB2E8\uC704\uB294 \uC0C1\uD669\uC5D0 \uB530\uB77C \uC720\uB3D9\uC801\uC73C\uB85C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC88B\uB2E4.  \uADF8\uB7EC\uB098 font\uC758 \uACBD\uC6B0 rem \uC0AC\uC6A9\uC744 \uAD8C\uC7A5\uD55C\uB2E4."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `CSS 적용 우선순위`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `Cascading Style Sheets라는 말처럼 css의 스타일은 적용 순위에 따라 중첩된다. CSS의 적용은 해당 엘리먼트 기준으로`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `아이디 선택자 > 클래스 선택자 > 태그 선택자 순으로 적용 우선순위를 가진다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `부모선택자와 함께 선택되었을 경우 해당 선택자가 적용 우선순위를 가진다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("img", {
    parentName: "p",
    "src": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-03-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.26.09.png",
    "alt": "스크린샷 2022-03-31 오후 2.26.09.png"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-html"
  }, `<nav class="nav">
    <ul id="list" class="unordered-list list">
        <li class="listItem list-0"></li>
    <ul>
</nav>
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-css"
  }, `.nav #list li {
    font-size: 3rem;
}

.nav .list .listItem {
    font-size: 2.5rem;
}

.listItem.list-0 {
    font-size: 32px;
}

.nav ul li {
    font-size: 2rem;
}

.list > li {
    font-size: 1.5rem;
}

.listItem {
    font-size: 32px;
}

nav ul li {
    font-size: 1rem;
}

ul li {
    font-size: 0.5rem;
}

li {
    font-size: 10px;
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-css"
  }, `1순위 .nav #list li {
    font-size: 3rem;
}
2순위 .nav .list .listItem {
    font-size: 2.5rem;
}
3순위 .listItem.list-0 {
    font-size: 32px;
}
4순위 .nav ul li {
    font-size: 2rem;
}
5순위 .list > li {
    font-size: 1.5rem;
}
.listItem {
    font-size: 32px;
}
6순위 nav ul li {
    font-size: 1rem;
}
7순위 ul li {
    font-size: 0.5rem;
}
8순위 li {
    font-size: 10px;
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `CSS방법론 - SMACSS/OOCSS/BEM`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `방법론의 배경`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `CSS는 잘 관리하기가 어려움.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `협업 시 사람마다 다른 코드 구조 및 스타일 정의`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `서로 다른 네이밍 규칙`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `유지보수가 어려운 코드 타인이 작성한 코드를 이해하고 분석하는데 드는
시간의 증가`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `SMACSS`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `CSS에 대한 확장형 모듈식 구조의 형태로 5개의 구분된 카테고리로 CSS 코딩 기법을 제시하는 방법.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `어떤 카테고리에 스타일이 속하는지 결정하는데 고민과 숙고가 요구된다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `Base - 기본규칙`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `Layout - 레이아웃 규칙`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `Module - 모듈 규칙`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `State - 상태규칙`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `Theme - 테마 규칙`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `Base - 기본규칙`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `각 브라우저의 기본 스타일 (default.css, reset.css), 요소 element 스타일의기본 정의 값`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `Layout - 레이아웃 규칙`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `큰 틀의 레이아웃, 요소를 배치, 구별하는데 적용`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `주요 컴포넘트 : header, footer, aside, container, content 등`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `하위 컴포넘트 : list, item, form 등`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `클래스명은 접수사 i-, layout-명시`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `Module - 모듈 규칙`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `페이지에서 재사용 가능한 요소 : 버튼, 배너, 아이콘, 박스 요소 등
각 모듈은 독립성을 가지게 스타일 선언 : 재사용이 가능하게 id, 태그 선택자는
사용하지 않음.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `State - 상태 규칙`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `요소의 상태변화를 표현하는 요소 : 툴팁, 아코디언 등
active나 disable 등이며 suffix "is-"나 "s-"를 붙여서 사용
모듈과 레이아웃 모두 적용 가능`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `Theme - 테마 규칙`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `사용자가 선택 가능하도록 스타일을 재선언하여 사용.
Theme는 전반적인 Look and feel을 정의하며 suffix "theme-"를 붙인다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `장점`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `클래스명을 통한 예측의 용이성`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `재사용을 통한 코드의 간결화`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `확장의 용이성`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `단점`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `카테고리를 나누는 기준이 작성사에 따라서 불분명해질 수 있음`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `코드를 나누어서 작성해야 하기 때문에 CSS를 사용하기 번거로움`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `잘못 사용하면 오히려 의도와 다르게 더 복잡해지고 번거로워지는 코드`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `sample`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-html"
  }, `<div class="l-header" id="header">
    <div class="l-header_container">
        <div class="logoBox">
            <figure class="logoBox-img">
                <img class="logo-main" />
            </figure>
        </div>
        <ul class="list">
            <li class="listItem">item1</li>
            <li class="listItem">item2</li>
            <li class="listItem">item3</li>
        </ul>
        <button class="btn is-active btn-hamburger">button</button>
    </div>
</div>
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `OOCSS`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `OOCSS는 약어에서도 알 수 있듯이 객체 지향에 따라서 고안된 설계 방식이다.
이 방법론의 특징은 첫째. 구조와 외형을 분리하고 둘째. 컨테이너와 내용을
분리하는 것이다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `특징`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("ol", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ol"
  }, `구조와 외형을 분리 구조 : width, height, border, padding, margin....
외형 : color, border-color, font-color, background-color...`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ol"
  }, `컨테이너와 내용을 분리 위치에 의존하지 않는 스타일 정의 어떤 태그라도동일한 외형 제공 어디에서나 재사용이 가능한 클래스 기반 모듈 구축`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `장점`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `공통된 부분을 정의해서 재사용이 가능.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `구조적 상황에 관계없이 동일한 클래스라면 동일한 스타일을 기대할 수 있음.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `코드의 재사용으로 코드 양이 줄어듬.`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `단점`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `공통된 클래스가 많기 때문에 수정이 발생할 시 멀티클래스를 사용해야 함.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `멀티클래스가 많아짐에 따라 유지보수에 어려움`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `코드의 가독성이 떨어짐.`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `sample`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-html"
  }, `<div class="header bgColor">
    <div class="container header-container">
        <div class="logoBox">
            <figure class="img img-logo">
                <img class="logo-main" />
            </figure>
        </div>
        <ul class="list header-menu">
            <li class="listItem">item1</li>
            <li class="listItem">item2</li>
            <li class="listItem">item3</li>
        </ul>
        <button class="btn btn-hamburger">button</button>
    </div>
</div>
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `BEM`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `"B" = Block (전체를 감싸고 있는 블럭요소)`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `"E" = Element(요소)`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `"M" = Modifiers (속성 / 수정)`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `블록(block)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `블록(block)은 문단 전체에 적용된 요소 또는 요소를 담고 있는 컨테이너를 지칭 (그루핑 요소의 가장 최상위 요소)`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `헤더, 풋터, 사이드바, 그리고 메인 콘텐츠 영역을 가지고 있다고 가정하면, 이`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `각각의 영역들이 블록으로 간주 블록 요소는 클래스의 어근을 형성하고 항상 맨`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `앞에 위치`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `일단 블록을 정의하면, 블록이 형성한 클래스의 어근을 맨 앞에 붙여 그 블록이`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `포함하는 요소들의 클래스명을 정함`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `요소(element)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `요소(element)는 블록이 포함하고 있는 한 조각, 블록을 구성하는 한 요소 단위`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `요소는 블록 요소에 대한 자식 요소 개념이기 때문에 블록 요소에 의존적인 형태`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `블록(Block)은 전체를 말하고 요소들은 그 조각들을 일컫고 각 요소는 두 개의`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `밑줄 표시(underscore)로 연결하여 블록 다음에 위치`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `속성(modifier)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `modifier은 블록 또는 요소의 속성(속성 / 수정)`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `이 속성은 블록 또는 요소의 외관이나 상태를 변화시키는 것`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `클래스명을 지을 때의 목적은 그 요소를 반복하여 재사용할 수 있게 하기 위한`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `것으로 요소의 스타일이 같은 것이라면 사이트의 다른 영역이라 할지라도 새로운 클래스를 정의하지 않아도 무방.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `특정 요소의 스타일을 수정할 필요가 있을 때, modifier만 활용`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `modifier를 구분해주기 위해 요소 또는 블록 다음에 두 개의 하이픈(‘‐‐’)을`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `추가하여 modifier을 표시`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `특징`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("ol", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ol"
  }, `구조와 외형을 분리 구조 : width, height, border, padding, margin....
외형 : color, border-color, font-color, background-color...`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ol"
  }, `컨테이너와 내용을 분리 위치에 의존하지 않는 스타일 정의 어떤 태그라도동일한 외형 제공 어디에서나 재사용이 가능한 클래스 기반 모듈 구축`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `장점`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `마크업 구조를 보지 않아도 클래스명(네임) 만으로도 마크업 구조를 쉽게 파악이 가능`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `단점`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `클래스명이 너무나 길어지게 되는 단점`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `기존 BEM으로 마크업을 구성한 상태에서 새롭게 기능이 추가되었을 경우 클래스명 재 수정 시 네임명 수정이 불편`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `sample`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-html"
  }, `<div class="header">
    <div class="header-container">
        <div class="header-container__logoBox">
            <figure class="logoBox">
                <img class="logoBox__img" />
            </figure>
        </div>
        <ul class="header-container__menu">
            <li class="menu__item">item1</li>
            <li class="menu__item">item2</li>
            <li class="menu__item">item3</li>
        </ul>
        <button class="header-container__btn btn--openHamburger">button</button>
    </div>
</div>
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("aside", null, "\uD83D\uDC49 \uAC01\uAC01\uC758 CSS \uBC29\uBC95\uB860\uC740 \uC7A5\xB7\uB2E8\uC810\uC774 \uC788\uC73C\uBBC0\uB85C, \uAF2D \uD55C\uAC00\uC9C0\uB97C \uACE0\uC218\uD558\uAE30\uBCF4\uB2E4\uB294 \uC801\uC808\uD788 \uD63C\uC6A9\uD558\uB294 \uAC83\uC774 \uC2E0\uC0C1\uC5D0 \uC88B\uB2E4. **\uC911\uC694\uD55C \uAC83\uC740 \uADDC\uCE59\uC744 \uC815\uD558\uACE0 \uADDC\uCE59\uB300\uB85C \uC791\uC5C5\uC744 \uD558\uB294 \uAC83\uC774\uB2E4.**"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `Utillity First & Atomic CSS`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `클래스와 스타일을 새로 작성하지 않고, 레이아웃, 포지션, 스페이스, 컬러, 폰트 등 스타일링에 필요한 대부분의 속성이 수많은 클래스로 사전 정의되어 있고, 사용자는 그 클래스들을 조합해서 사용.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-css"
  }, `.inline-block {
    display: inline-block;
}
.rounded {
    border-radius: 0.25rem;
}
.p-4 {
    padding: 1rem;
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-html"
  }, `<button className="inline-block rounded p-4">Submit</button>
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `장점`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `재사용성이 매우 높다`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `레이아웃에 구애받지않고 스타일링이 가능하다`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `스타일의 변경이 쉽다`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `단점`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("ul", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `중첩 사용 시 코드의 가독성이 떨어진다`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `해당 요소가 어떤 요소인지 한번에 알기 어렵다`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ul"
  }, `사용에 러닝커브가 높다`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "p",
    "href": "https://if.kakao.com/session/89"
  }, `Adorable Css`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "p",
    "href": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/document.pdf"
  }, `document.pdf`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `대표적인 유틸리티 퍼스트 기반 프레임워크 테일윈드`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("img", {
    parentName: "p",
    "src": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/Untitled%209.png",
    "alt": "Untitled"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-html"
  }, `<button class="py-2 px-4 rounded-lg shadow-md text-white bg-blue-500">
    Click me
</button>
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("aside", null, "\uD83D\uDC49 2022\uB144 3\uC6D4 \uAE30\uC900 OOCSS + BEM + Atomic \uBC29\uBC95\uB860\uC744 \uC801\uB2F9\uD788 \uC11E\uC5B4\uC11C \uD65C\uC6A9\uD558\uACE0 \uC788\uB2E4. \uC77C\uBC18\uC801\uC778 \uB808\uC774\uC544\uC6C3 \uAD6C\uC131 \uC2DC Atomic \uD65C\uC6A9, \uC758\uBBF8\uAC00 \uC788\uC5B4\uC57C \uD558\uB294 \uC694\uC18C\uC758 \uACBD\uC6B0 OOCSS + BEM\uC744 \uD65C\uC6A9\uD55C\uB2E4."), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `Atomic, Utliti Frist를 적용한 이유`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `마크업을 진행하면서 느끼는 여러 방법론의 한계점을 느꼈다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("ol", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ol"
  }, `모든 스타일은 그대로 재활용 되지 않는다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ol"
  }, `클래스에 적용된 스타일은 레이아웃에 영향을 받는다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ol"
  }, `사소한 레이아웃일지라도 요소를 잡아야 가능하다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("li", {
    parentName: "ol"
  }, `반복적인 컴포넌트를 생산하는 현대 웹 개발환경에 적합하다.`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `대표적인 세 가지 한계점을 쉽게 해결해줄 수 있는 방법이 테일윈드와 같은 Atomic CSS였다. 실제 적용 시는 테일윈드처럼 클래스로 스타일을 적용하지는 않았고, AdorableCSS를 참고하여 HTML 요소의 Attribute를 활용해 스타일을 정리하였다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `샘플`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `s라는 사용자지정 Attribute를 만들어 해당 Attribute에 스타일링하여 사용`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-scss"
  }, `$displays: "flex", "block", "inline", "inline-block", "none";
@each $display in $displays {
    [s-display="#{$display}"] {
        display: #{$display};
    }
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-html"
  }, `<div s-display="flex"></div>
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h1", null, `SCSS/SASS`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "p",
    "href": "https://sass-lang.com/"
  }, `SASS 웹 페이지`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "h3"
  }, `CSS Preprocessor`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `CSS 전처리기기는 CSS가 동작하기 전에 사용되는 기술이다. 그러나 웹은 CSS만 동작할 수 있기에, 전처리기로 작성된 코드를 컴파일하여 CSS로 변환 후 동작시킬 수 있다. 대표적인 CSS 전처리기기로는 Sass, Less, Stylus 등이 있다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `전처리기는 CSS 문법과 굉장히 유사하지만 선택자의 중첩(Nesting)이나 조건문, 반복문, 다양한 단위(Unit)의 연산 등… 표준 CSS 보다 훨씬 많은 기능을 사용해서 편리하게 작성할 수 있다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `SASS 샘플`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-sass"
  }, `.list
  width: 100px
  float: left
  li
    color: red
    background: url("./image.jpg")
    &:last-child
      margin-right: -10px
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `SCSS`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `Sass(Syntactically Awesome Style Sheets)의 3버전에서 새롭게 등장한 SCSS는 CSS 구문과 완전히 호환되도록 새로운 구문을 도입해 만든 Sass의 모든 기능을 지원하는 CSS의 상위집합(Superset)이다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `즉, SCSS는 CSS와 거의 같은 문법으로 Sass 기능을 지원한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `SCSS 샘플`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-scss"
  }, `.list {
    width: 100px;
    float: left;
    li {
        color: red;
        background: url("./image.jpg");
        &:last-child {
            margin-right: -10px;
        }
    }
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("h3", null, `다양한 SCSS 문법 지원`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `참고 : `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("a", {
    parentName: "p",
    "href": "https://heropy.blog/2018/01/31/sass/"
  }, `SCSS 완전정복!`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `중첩(Nesting)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `Sass는 중첩 기능을 사용할 수 있다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `상위 선택자의 반복을 피하고 좀 더 편리하게 복잡한 구조를 작성할 수 있다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-scss"
  }, `.section {
    width: 100%;
    .list {
        padding: 20px;
        li {
            float: left;
        }
    }
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `컴파일 후`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-css"
  }, `.section {
    width: 100%;
}
.section .list {
    padding: 20px;
}
.section .list li {
    float: left;
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `상위 선택자 참조(Ampersand)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `중첩 안에서 `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "strong"
  }, `&`)), ` 키워드는 상위(부모) 선택자를 참조하여 치환합니다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-scss"
  }, `.btn {
    position: absolute;
    &.active {
        color: red;
    }
}

.list {
    li {
        &:last-child {
            margin-right: 0;
        }
    }
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `컴파일 후`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-css"
  }, `.btn {
    position: absolute;
}
.btn.active {
    color: red;
}
.list li:last-child {
    margin-right: 0;
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `중첩 벗어나기(@at-root)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "strong"
  }, `@at-root`)), ` 키워드를 사용하여 중첩에서 벗어날 수 있다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-css"
  }, `.list {
    $w: 100px;
    $h: 50px;
    li {
        width: $w;
        height: $h;
    }
    @at-root .box {
        width: $w;
        height: $h;
    }
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `컴파일 후`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-css"
  }, `.list li {
    width: 100px;
    height: 50px;
}
.box {
    width: 100px;
    height: 50px;
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `변수(Variables)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `반복적으로 사용되는 값을 변수로 지정할 수 있다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `변수의 유효범위는 선언된 블록 `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "p"
  }, `{}`), ` 안에서만 가진다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-scss"
  }, `$변수이름: 속성값;

$color-primary: #e96900;
$url-images: "/assets/images/";
$w: 200px;

.box {
    width: $w;
    margin-left: $w;
    background: $color-primary url($url-images + "bg.jpg");
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `컴파일 후`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-css"
  }, `.box {
    width: 200px;
    margin-left: 200px;
    background: #e96900 url("/assets/images/bg.jpg");
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `#{} - 문자보간`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "strong"
  }, `#{}`)), `를 이용해서 코드의 어디든지 변수 값을 넣을 수 있다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-scss"
  }, `$family: unquote("Droid+Sans");
@import url("http://fonts.googleapis.com/css?family=#{$family}");
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `컴파일 후`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-css"
  }, `@import url("http://fonts.googleapis.com/css?family=Droid+Sans");
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `연산`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `Sass는 기본적인 연산 기능을 지원한다. 레이아웃 작업시 상황에 맞게 크기를 계산을 하거나 정해진 값을 나눠서 작성할 경우 유용하다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `산술 연산자`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("img", {
    parentName: "p",
    "src": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-03-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.31.33.png",
    "alt": "스크린샷 2022-03-31 오후 5.31.33.png"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `비교연산자`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("img", {
    parentName: "p",
    "src": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-03-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.31.49.png",
    "alt": "스크린샷 2022-03-31 오후 5.31.49.png"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `논리(boolean) 연산자`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("img", {
    parentName: "p",
    "src": "Web%20Markup%20Basic%20020f909a4d6c4a5eaa42650222b13e8b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-03-31_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.32.01.png",
    "alt": "스크린샷 2022-03-31 오후 5.32.01.png"
  })), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `Sass의 `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "strong"
  }, `@if`)), ` 조건문에서 사용되는 논리(Boolean) 연산에는 ‘그리고’,’ 또는’, ‘부정’이 있다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-scss"
  }, `$width: 90px;
div {
    @if not($width > 100px) {
        height: 300px;
    }
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `컴파일 후`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-css"
  }, `div {
    height: 300px;
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `재활용(Mixin)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `스타일 시트 전체에서 `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `재사용 할 CSS 선언 그룹`), ` 을 정의하는 `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `아주 훌륭한 기능이다.`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-scss"
  }, `@mixin 믹스인이름 {
  스타일;
}

@mixin large-text {
  font: {
    size: 22px;
    weight: bold;
    family: sans-serif;
  }
  color: orange;

  &::after {
    content: "!!";
  }

  span.icon {
    background: url("/images/icon.png");
  }
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `@include`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `선언된 Mixin을 포함하기 위해 사용한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-scss"
  }, `@include 믹스인이름;

h1 {
  @include large-text;
}
div {
  @include large-text;

`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `컴파일 후`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-css"
  }, `h1 {
  font-size: 22px;
  font-weight: bold;
  font-family: sans-serif;
  color: orange;
}
h1::after {
  content: "!!";
}
h1 span.icon {
  background: url("/images/icon.png");
}

div {
  font-size: 22px;
  font-weight: bold;
  font-family: sans-serif;
  color: orange;
}
div::after {
  content: "!!";
}
div span.icon {
  background: url("/images/icon.png");

`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `Argument`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `함수(Functions)처럼 인수(Arguments)를 가질 수 있다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-scss"
  }, `@mixin dash-line($width, $color) {
    border: $width dashed $color;
}

.box1 {
    @include dash-line(1px, red);
}
.box2 {
    @include dash-line(4px, blue);
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `컴파일 후`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-css"
  }, `.box1 {
    border: 1px dashed red;
}
.box2 {
    border: 4px dashed blue;
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `조건과 반복(Control Directives / Expressions)`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `if(함수)`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `조건의 값(`, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "strong"
  }, `true`)), ` , `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "strong"
  }, `false`)), `)에 따라 두 개의 표현식 중 하나만 반환`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-scss"
  }, `if(조건, 표현식1, 표현식2)

$width: 555px;
div {
  width: if($width > 300px, $width, null);
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `컴파일 후`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-css"
  }, `div {
    width: 555px;
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `복잡한 조건문`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-scss"
  }, `// @if
@if (조건) {
    /* 조건이 참일 때 구문 */
}

// @if @else
@if (조건) {
    /* 조건이 참일 때 구문 */
} @else {
    /* 조건이 거짓일 때 구문 */
}

// @if @else if
@if (조건1) {
    /* 조건1이 참일 때 구문 */
} @else if (조건2) {
    /* 조건2가 참일 때 구문 */
} @else {
    /* 모두 거짓일 때 구문 */
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `반복문`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "strong"
  }, `@for`)), `는 스타일을 반복적으로 출력한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "strong"
  }, `@for`)), `는 `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "strong"
  }, `through`)), `를 사용하는 형식과 `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "strong"
  }, `to`)), `를 사용하는 형식으로 나뉜다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `변수는 관례상 `, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "strong"
  }, `$i`)), `를 사용한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-scss"
  }, `// through
// 종료 만큼 반복
@for $변수 from 시작 through 종료 {
    // 반복 내용
}

// to
// 종료 직전까지 반복
@for $변수 from 시작 to 종료 {
    // 반복 내용
}

// 1부터 3번 반복
@for $i from 1 through 3 {
    .through:nth-child(#{$i}) {
        width: 20px * $i;
    }
}

// 1부터 3 직전까지만 반복(2번 반복)
@for $i from 1 to 3 {
    .to:nth-child(#{$i}) {
        width: 20px * $i;
    }
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `컴파일 후`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-css"
  }, `.through:nth-child(1) {
    width: 20px;
}
.through:nth-child(2) {
    width: 40px;
}
.through:nth-child(3) {
    width: 60px;
}

.to:nth-child(1) {
    width: 20px;
}
.to:nth-child(2) {
    width: 40px;
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, `@each`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("strong", {
    parentName: "p"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("inlineCode", {
    parentName: "strong"
  }, `@each`)), `는 List와 Map 데이터를 반복할 때 사용한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-scss"
  }, `@each $변수 in 데이터 {
    // 반복 내용
}

// List Data
$fruits: (apple, orange, banana, mango);

.fruits {
    @each $fruit in $fruits {
        li.#{$fruit} {
            background: url("/images/#{$fruit}.png");
        }
    }
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `컴파일 후`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("pre", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("code", {
    parentName: "pre",
    "className": "language-css"
  }, `.fruits li.apple {
    background: url("/images/apple.png");
}
.fruits li.orange {
    background: url("/images/orange.png");
}
.fruits li.banana {
    background: url("/images/banana.png");
}
.fruits li.mango {
    background: url("/images/mango.png");
}
`)), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("hr", null), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("aside", null, "\uD83D\uDC49 \uC9C0\uC18D\uC801\uC73C\uB85C \uC6F9\uC774 \uBC1C\uC804\uD558\uBA74\uC11C \uB9C8\uD06C\uC5C5 \uD658\uACBD\uB3C4 \uB9CE\uC774 \uBCC0\uD588\uB2E4.", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `현재 개발환경에서는 React + SCSS를 활용해 컴포넌트를 중심으로 마크업이 진행되고 있다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `환경이 빠르게 변화하는 이유는 좋은 서비스를 제공하기 위해서는, 서비스를 제공하는 사람도 만족해야 가능한 것이기 때문이 아닐까 생각한다.`), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.mdx)("p", null, `이전보다 더 편리한 환경에서 마크업을 할 수 있기 때문에, 개발하는 서비스의 사용자를 더 생각하며 즐겁게 서비스를 만들어 나갈 수 있으면 좋겠다.`)));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ })

};
;
//# sourceMappingURL=component---src-contents-web-mark-up-md.js.map