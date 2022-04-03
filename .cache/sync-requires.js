
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/coffeegom/Desktop/coffeelog/.cache/dev-404-page.js")),
  "component---src-contents-test-copy-md": preferDefault(require("/Users/coffeegom/Desktop/coffeelog/src/contents/test copy.md")),
  "component---src-contents-test-md": preferDefault(require("/Users/coffeegom/Desktop/coffeelog/src/contents/test.md")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/coffeegom/Desktop/coffeelog/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/coffeegom/Desktop/coffeelog/src/pages/index.tsx")),
  "component---src-pages-info-tsx": preferDefault(require("/Users/coffeegom/Desktop/coffeelog/src/pages/info.tsx")),
  "component---src-templates-post-template-tsx": preferDefault(require("/Users/coffeegom/Desktop/coffeelog/src/templates/PostTemplate.tsx"))
}

