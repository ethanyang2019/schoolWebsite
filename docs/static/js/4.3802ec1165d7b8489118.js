webpackJsonp([4],{gWLe:function(t,e){},rH7L:function(t,e){},zQwN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){return{menuLists:["金融研究中心","管理研究中心","互联网研究中心","医学研究中心","家族研究中心"],activeIndex:0,content:"&nbsp;&nbsp;&nbsp;&nbsp;中国经济经历30余年高速发展，早已成为世界第二大经济体，未来十年或可跃升为第一大经济体，到2020年将完成全面小康社会的建设，也就意味着中国经济与社会完成第一阶段发展目标；阳山智谷正是基于对中国社会全面转型的关键时刻的深度研究，由北京大学本、硕、博毕业的教授、企业家、专业领域专家等共同发起成立。力求伴随中国经济转型的关键十年，成功跻身中国十大商学院之列。<br><br><br>&nbsp;&nbsp;&nbsp;&nbsp;阳山智谷商学院研究发现，经济与社会全面转型的今天，传统市场驱动型的业务模式逐渐发生变化，社会对企业家的各项能力要求逐步提高，尤其是知识技能的要求有了显著的提升，而传统的企业家大多缺乏系统性的经济学与商学教育，这就需要企业家不断的学习来适应社会变化的需要。阳山智谷因势利导提出了“一切都在变，唯有学习不能变！”的学习口号，号召当代企业家主动加强个人的文化素质提升，用更强大更全面的知识武装自己，达到有效整合资源所应该匹配的知识背景，提升个人和企业的核心竞争能力。<br><br><br>&nbsp;&nbsp;&nbsp;&nbsp;阳山智谷商学院课程体系设计，引领企业家关注企业系统性的再生能力，深入研究企业所处的行业或产业结构与趋势，深入研究区域经济特点与区域产业结构与特性，系统性研究企业经营和管理，全面掌握资本市场的逻辑与规则，同时理解政策与政治对社会、经济和企业经营所产生的影响与变化，阳山智谷商学院的系统性课程体系正是以此为基础进行全面细致的设计，满足各阶段企业家学习需求，实现“让培训回归培训，让教育回归教育”的办学情怀！最终引导企业家摒弃以市场驱动为导向的“老板思维”，真正具备新时代“企业家思维”、“投资家思维”、“政治家思维”从而实现科学经营与科学管理企业，让企业在全面转型档口立于不败之地。 我们有理由相信：阳山智谷商学院用“十年时间做成一件事”的专注精神，以“对己：知行厚德，对人：互溶共进，对事：拼搏极致”的核心价值为指引，凭借北大人“思想自由、兼容并包”的文化特性，我们有能力以新格局、新思维和新对策为企业家EMBA教育事业发展写下精彩的一页。",form:{name:"",content:"",company:"",tel:""},rules:{name:[{required:!0,message:"请输入您的姓名",trigger:"blur"}],content:[{required:!0,message:"请选择报名内容",trigger:"change"}],tel:[{required:!0,message:"请输入您的手机号码",trigger:"blur"}],company:[{required:!0,message:"请输入您的公司名称",trigger:"blur"}]}}},methods:{getContent:function(t){this.activeIndex=t},onSubmit:function(t){this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;alert("submit!")})}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"teaching common-box"},[n("div",{staticClass:"w"},[n("div",{staticClass:"menu"},t._l(t.menuLists,function(e,r){return n("span",{key:r},[n("a",{class:{active:t.activeIndex===r},attrs:{href:"javascript:;"},on:{click:function(e){t.getContent(r)}}},[t._v(t._s(e))])])}),0),t._v(" "),n("div",{staticClass:"title"},[t._v("私募股权投资（PE/VC）与资本战略董事长研修班")]),t._v(" "),n("div",{staticClass:"main"},[n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.content)}}),t._v(" "),n("div",{staticClass:"form"},[n("div",{staticClass:"form-title"},[t._v("在线报名")]),t._v(" "),n("el-form",{ref:"form",staticClass:"form-content",attrs:{model:t.form,rules:t.rules}},[n("el-form-item",{attrs:{prop:"content"}},[n("el-select",{attrs:{placeholder:"请选择报名内容"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}},[n("el-option",{attrs:{label:"私募股权投资（PE/VC）与资本战略董事长研修班",value:"shanghai"}}),t._v(" "),n("el-option",{attrs:{label:"私募股权投资（PE/VC）与资本战略董事长研修班",value:"beijing"}})],1)],1),t._v(" "),n("el-form-item",{attrs:{prop:"name"}},[n("el-input",{attrs:{placeholder:"请输入您的姓名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"tel"}},[n("el-input",{attrs:{placeholder:"请输入您的手机号码"},model:{value:t.form.tel,callback:function(e){t.$set(t.form,"tel",e)},expression:"form.tel"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"company"}},[n("el-input",{attrs:{placeholder:"请输入您的公司名称"},model:{value:t.form.company,callback:function(e){t.$set(t.form,"company",e)},expression:"form.company"}})],1),t._v(" "),n("el-form-item",{staticClass:"last"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.onSubmit("form")}}},[t._v("立即提交")])],1)],1)],1),t._v(" "),n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.content)}})])])])},staticRenderFns:[]};var o=n("VU/8")(r,s,!1,function(t){n("rH7L"),n("gWLe")},"data-v-104b1106",null);e.default=o.exports}});
//# sourceMappingURL=4.3802ec1165d7b8489118.js.map