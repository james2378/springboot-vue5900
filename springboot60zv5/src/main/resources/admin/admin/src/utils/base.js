const base = {
    get() {
                return {
            url : "http://localhost:8080/springboot60zv5/",
            name: "springboot60zv5",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot60zv5/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "校园博客系统"
        } 
    }
}
export default base
