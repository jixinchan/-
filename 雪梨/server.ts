import express from 'express';
import bodyParser from 'body-parser';

const app =express();
app.use(bodyParser.json());
export class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public task:number,
        public person:number,
        public intro:string,
        public video:string
    ){}
}

const courses = [
    new Course(1,'混合应用开发','http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130',10,90,'',''),
    new Course(2,'HTML5与CSS3','http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130',9,40,'',''),
    new Course(3,'JavaScript进阶','http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130',7,98,'',''),
    new Course(4,'2016级操作系统','http://usercontent.edu2act.cn/media/team/18-02-26/T6JLRm2Y9noLzWNjwAhF8X.png?imageView2/1/w/230/h/130',18,78,'',''),

];
const hcourses = [
    new Course(1,'Github 开源之旅视频课程第一季：启程','http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190',14,3375,'      完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ','http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new Course(2,'构建交互丰富的web应用：Javascript','http://usercontent.edu2act.cn/media/cs/15-10-26/JtXNabL6Wt64FGiRBWvE2U.jpg?imageView2/1/w/320/h/190',34,21112,'Javascript 是世界上最流行的编程语言。应用Javascript可以构建交互效果丰富的Web应用。Javascript成为了每一个开发人员都知道的语言。','http://usercontent.edu2act.cn/media/cs/15-07-01/26Ewk3YXZBWc5tczTNV73J.mp4')
];


// app.get('/api',(req,res)=>{
//     res.json(courses);
// });
app.get('/api/courses',(req,res)=>{
    res.json(courses);
});
app.get('/api/hcourses',(req,res)=>{
    res.json(hcourses);
});
app.get('/api/courses/:id',(req,res)=>{
    res.json(courses.find((ele)=>ele.id==req.params.id));
});
app.get('/api/hcourse/:id',(req,res)=>{
    res.json(hcourses.find((ele)=>ele.id==req.params.id));
});

app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses);
});

export class Task{
    constructor(
        public id:number,
        public taskName:string,
        public teacher:string,
        public time:string,
        public mark:number,
        public stat:string,
        public course:string,
        public content:string
    ){}
}
const tasks = [
    new Task(1,'任务一--组件交互','刘冠军','2018-10-10',10,'待提交','混合应用开发',
    '链接：https://pan.baidu.com/s/1F00kDF4igfOQbr9Vscj_8g提取码：nhc6查看网盘中的作业要求，完成作业'),
    new Task(2,'任务二--JS基础练习与应用','刘冠军','2018-9-16',10,'已截止','混合应用开发','创建三个组件，一个是父组件，在根组件中引入，两个子组件：一个组件是输入框，一个组件里是列表，在父组件中引入，练习父子组件的交互。同时利用服务，将本地存储的方法进行封装，注入到组件（如课上所写代码），功能和todolist官网完全一样（“正在进行”和“已经完成”之间也要能切换），样式不做要求。上传app文件夹到github，雪梨提交github仓库地址。另外将项目运行后的页面截图，上传到雪梨。扩展：已经完成本次的作业，有时间思考一下，用原生js（web二中所讲）如何实现，补一补基础，练一练逻辑，不算本次任务，可以不交。但是写出来的可以提交让我看看。')
]

app.get('/api/tasks',(req,res)=>{
    res.json(tasks);
})
app.get('/api/tasks/:id',(req,res)=>{
    res.json(tasks.find((ele)=>ele.id==req.params.id));
});

app.get('/api/hometasks',(req,res)=>{
    res.json(tasks);
});


export class Article{
    constructor(
        public id:number,
        public images:string,
        public aName:string,
        public content:string,
        public teacher:string,
        public time:string,
        public readers:number,
        public comments:number
    ){}
}
const articles = [
    new Article(1,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg','WEB开发（二）—— 函数','（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式 注： 不需要在函数声明的后面添加一','刘秀梅','2018-10-11 15:10',12,4),
    new Article(2,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg','WEB开发（二）—— 函数','（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式 注： 不需要在函数声明的后面添加一','刘秀梅','2018-10-11 15:10',12,4),
    new Article(3,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg','WEB开发（二）—— 函数','（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式 注： 不需要在函数声明的后面添加一','刘秀梅','2018-10-11 15:10',12,4),
    new Article(4,'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg','WEB开发（二）—— 函数','（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式 注： 不需要在函数声明的后面添加一','刘秀梅','2018-10-11 15:10',12,4),
];

app.get('/api/shequ',(req,res)=>{
    res.json(articles);
});
app.get('/api/article/:id',(req,res)=>{
    res.json(articles.find((ele)=>ele.id==req.params.id));
});
export class Topic{
    constructor(
        public tName:string,
        public parters:number,
    ){}
}

const topics = [
    new Topic('2016级Web开发',6),
    new Topic('数据结构',6),
    new Topic('计算机网络原理',6),
    new Topic('计算机组成原理',6),
    new Topic('面向对象程序设计',6),
    new Topic('计算机操作系统',6),
    new Topic('JavaScript进阶',6),
    new Topic('软件过程',6),
];
app.get('/api/shequl',(req,res)=>{
    res.json(topics);
});


const paras = [
    {flag:0,src:'（一）函数三要素'},
    {flag:0,src:'函数的三要素为函数名、参数（形参，实参），返回值。'},
    {flag:0,src:'（二）函数定义与调用'},
    {flag:0,src:'函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。'},
    {flag:0,src:'1．函数声明形式'},
    {flag:1,src:'http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/KcxqbZo7jWtn9VCgxw6DyH.png'},
    {flag:0,src:'注： 不需要在函数声明的后面添加一个分号，并且添加一个分号完全是浪费性能。大括号是函数声明的必须的语法元素之一，同时它也是一个复合语句，可以用来组织语句，右侧的花括弧( } )本身就意味着复合语句的结束，所以不用添加分号，如果添加分号的话，就相当于重新建立了一个空语句。'}
]
app.get('/api/articlep',(req,res)=>{
    res.json(paras);
});

app.listen(8000);