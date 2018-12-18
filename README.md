## RandShift 项目简介

[RandShift](https://scanthony.github.io/RandShift) 是一个一个按照日期和姓名对人员进行随机分组的工具。本项目可用于各企事业单位，实现根据日期对轮班的工作人员随机分组。

RandShift 采用 [Create React App](https://github.com/facebook/create-react-app)、[moment.js](https://momentjs.com/)、[object-hast](https://www.npmjs.com/package/object-hash)和[query-string](https://www.npmjs.com/package/query-string)等开源库和框架搭建。

## 如何使用 Randshift

如果直接访问本项目的 URL：

[https://scanthony.github.io/RandShift/](https://scanthony.github.io/RandShift/)

会看到用于演示的几个常见姓名和两个工作区。

使用带有 query 的 URL 来访问本项目，可以自行定制人员和分组情况。举例：

[https://scanthony.github.io/RandShift/?p1=AAAA&p2=BBBB&p3=CCCC&p4=DDDD&p5=EEEE&g1=1-1&g2=2-1&n1=Group-1&n2=Group-2&n3=Group-3](https://scanthony.github.io/RandShift/?p1=AAAA&p2=BBBB&p3=CCCC&p4=DDDD&p5=EEEE&g1=1-1&g2=2-1&n1=Group-1&n2=Group-2&n3=Group-3)

p1、p2、p3、p4、p5 参数为五个工作人员的姓名，n1、n2、n3 参数为三个分组的名称，g1、g2 参数为分组方式。

如果有多个分组方式，RandShift 会根据日期随机选择一个分组方式。

“1-1”代表第一组 1 人，第二组 1 人，余下的人员分配至最后一组。

“2-1”代表第一组 2 人，第二组 1 人，余下的人员分配至最后一组，以此类推。

一旦 p、 n 和 g 这三项参数确定，且在网页界面设置的日期确定，分组结果即可被确定下来，无论何时查询，结果都一致。因此，轮休的工作人员可以提前查询到自己在未来某一天的工作区域分配结果。

### 版权信息

采用 [MIT 协议](https://github.com/scanthony/RandShift/blob/master/LICENSE)。
