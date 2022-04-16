
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-contents-blog-1-md": preferDefault(require("/Users/coffeegom/Desktop/coffeelog/src/contents/blog_1.md")),
  "component---src-contents-blog-22-md": preferDefault(require("/Users/coffeegom/Desktop/coffeelog/src/contents/blog_22.md")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/coffeegom/Desktop/coffeelog/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/coffeegom/Desktop/coffeelog/src/pages/index.tsx")),
  "component---src-pages-info-tsx": preferDefault(require("/Users/coffeegom/Desktop/coffeelog/src/pages/info.tsx"))
}

