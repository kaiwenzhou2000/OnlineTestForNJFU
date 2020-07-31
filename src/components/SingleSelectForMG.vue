<template>
    <div id="wrapper" class="clearfix">
        <div id="container" class="middle">
            <div id="text">
                {{id+'、'+text}}
            </div>
            <div id="answer_area">
                <div class="answer_area_div">
                    <div class="answer_index">A</div>
                    <div class="answer_div" :class="{activeRight:'A'===finalAnswerTemp, activeWrong:statusA}" @click="clickA()">{{answerA}}</div>
                    <div class="answer_index" >B</div>
                    <div class="answer_div" :class="{activeRight:'B'===finalAnswerTemp, activeWrong:statusB}" @click="clickB()">{{answerB}}</div>
                </div>
                <div class="answer_area_div">
                    <div class="answer_index">C</div>
                    <div class="answer_div" :class="{activeRight:'C'===finalAnswerTemp, activeWrong:statusC}" @click="clickC()">{{answerC}}</div>
                    <div class="answer_index">D</div>
                    <div class="answer_div" :class="{activeRight:'D'===finalAnswerTemp, activeWrong:statusD}" @click="clickD()">{{answerD}}</div>
                </div>
            </div>
            <div id="chooseMode" class="middle">
                <div id="next" class="chooseModeBTN" @click="getNext()">下一题</div>
                <div id="randomNext" class="chooseModeBTN" @click="getRandom">随机</div>
                <div>
                    <input type="text" v-model="page" placeholder="请输入要跳转的题目">
                    <div @click="getSureNext">点击跳转</div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "SingleSelectForCpp",
        data(){
            return{
                id: '',
                text: '',
                answerA: '',
                answerB: '',
                answerC: '',
                answerD: '',
                finalAnswer: '',
                finalAnswerTemp: '',
                statusA: false,
                statusB: false,
                statusC: false,
                statusD: false,
                index: 1,
                page: ''
            }
        },
        methods: {
            getText(){
                axios({
                    url: 'https://service.zkwzkw.top:8443/onlineTest/hello3',
                    method: 'GET',
                    params: {
                        id: this.index
                    }
                }).then(res=>{
                    console.log(res.data)
                    this.id = res.data.id
                    this.text = res.data.text
                    this.answerA = res.data.answerA
                    this.answerB = res.data.answerB
                    this.answerC = res.data.answerC
                    this.answerD = res.data.answerD
                    this.finalAnswer = res.data.finalAnswer
                    this.finalAnswerTemp = ''
                    this.statusA = false
                    this.statusB = false
                    this.statusC = false
                    this.statusD = false
                })
            },
            getNext(){
                if (this.index < 600){
                    this.index++
                }
                this.getText()
            },
            getRandom(){
                var num = Math.random()
                num *= 600
                num = parseInt(num)
                this.index = num
                this.getText()
            },
            getSureNext(){
                if (this.page <= 600 && this.page >= 1){
                    this.index = this.page
                    this.getText()
                }
            },
            clickA(){
                this.finalAnswerTemp = this.finalAnswer
                if (this.finalAnswer !== 'A'){
                    this.statusA = true
                }
            },
            clickB(){
                this.finalAnswerTemp = this.finalAnswer
                if (this.finalAnswer !== 'B'){
                    this.statusB = true
                }
            },
            clickC(){
                this.finalAnswerTemp = this.finalAnswer
                if (this.finalAnswer !== 'C'){
                    this.statusC = true
                }
            },
            clickD(){
                this.finalAnswerTemp = this.finalAnswer
                if (this.finalAnswer !== 'D'){
                    this.statusD = true
                }
            }
        },
        created() {
            this.getText()
        }
    }
</script>

<style scoped lang="less">
    #wrapper{
        width: 1000px;
        font-color: #FF891A;
        #container{
            margin-top: 20px;
            width: 800px;
            height: 100%;
            #text{
                height: 300px;
                border-radius: 20px;
                background-color: #FFF;
                padding: 10px;
                font-size: 20px;
            }
            #answer_area{
                width: 100%;
                margin-top: 20px;
                .answer_area_div{
                    width: 100%;
                    display: flex;
                    justify-content: space-around;
                    .answer_index{
                        height: 100px;
                        font-size: 40px;
                        line-height: 100px;
                    }
                    .answer_div{
                        width: 300px;
                        height: 100px;
                        margin: 20px 0;
                        border-radius: 5px;
                        background-color: #FFF;
                        font-size: 18px;
                        padding: 10px;
                        cursor: pointer;
                    }
                    .activeRight{
                        background-color: #00C486;
                    }
                    .activeWrong{
                        background-color: red;
                    }
                }
            }
            #chooseMode{
                display: flex;
                justify-content: space-around;
                .chooseModeBTN{
                    width: 150px;
                    height: 60px;
                    margin-bottom: 20px;
                    border-radius: 5px;
                    font-size: 24px;
                    text-align: center;
                    line-height: 60px;
                    background-color: #FFF;
                    cursor: pointer;
                }
                div:nth-child(3){
                    width: 150px;
                    height: 60px;
                    margin-bottom: 20px;
                    border-radius: 5px;
                    font-size: 20px;
                    text-align: center;
                    background-color: #FFF;
                    overflow: hidden;
                }
            }
        }
    }

</style>