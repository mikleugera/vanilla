import { transform } from "lightningcss";

 
const css = `
.container {
  display: flex;
  user-select: none;
  transition: all 0.3s ease;
}
 
.box {
  transform: rotate(45deg);
  backdrop-filter: blur(10px);
}
`
let targets = {
  safari: (13 << 16) | (2 << 8)
};

const result = transform({
  filename: "file.module.css",
  code: Buffer.from(css),
  cssModules: {
    pattern: "[name]__[local]__[hash]",
  },
  targets
})
 
console.log(result)
console.log(result.code.toString())