const ncname = `[a-zA-Z_][\\-t\.8-9_a-zA-Z]*`;
const qnameCapture = `(( ?:${ncnamel}\\:)?${ncname})`;
const startTagOpen = new RegExp(`^<${gnameCapture}`); // 他匹配到的分组是一个 标签名 <xxx 匹配到的是开始 标蕊的名字
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`); // 匹配的是</xxxx> 最终匹配到的分组就是结束标签的名字
const attribute =
  /^\s*([^\s”'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|([^']*)'+|([^\s"'=<>`]+)))?/;
const stantTapClose = /^s*(\/?)>/; //<div> <br/>
const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g; //{[ asdsadsa }} 匹配到的内容就是我们表达式的变量
// 第一个分组就是属性的key value 就是 分组3/分组4/分组五
//对模版进行编译处理
export function compileToFunction(template) {
  console.log("compileToFunction", template);
  // 1.将template转化成AST语法树
  // 2.生成render方法(render方法执行后的返回结果就是虚拟DOM)
}
