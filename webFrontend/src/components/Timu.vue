<template>
    <div class="container mt-4 p-4" style="background-color: whitesmoke; border-radius: 20px;">
        <h2 class="exam-title">算术检测</h2>
        <div class="exam-item"  v-for="exam in examitems" :key="exam.id">
            <span class="exam-question">{{ exam.question }}</span>
            <ol>
                <li>(A){{ exam.selections[0] }}</li>
                <li>(B){{ exam.selections[1] }}</li>
                <li>(C){{ exam.selections[2] }}</li>
                <li>(D){{ exam.selections[3] }}</li>
            </ol>
            <span class="exam-answer">答案：{{ exam.answer }}</span>
        </div>
        <button v-on:click="retry">重新出题</button>
    </div>

</template>

<script>

export default {
    name: 'HelloWorld',
    data() {
        return {
            examitems: [
                { id: 1, question: "7-2", selections: ['5', '3', '6', '7'], answer: 'A' },
                { id: 2, question: "7-3", selections: ['1', '0', '4', '5'], answer: 'C' }
            ]
        }
    },
    methods: {
        retry() {
            this.examitems = []
            for (let i = 0; i < 3; i++) {
                let a = Math.floor(Math.random() * 9) + 1
                let b = Math.floor(Math.random() * 9) + 1
                let ops = [' + ', ' - ', ' * ']
                let op = ops[Math.floor(Math.random() * 3)]
                let question = a + op + b
                let r = eval(question)
                let selections = []
                let answer = 'A'

                for (let j = 0; j < 4; j++) {
                    let n = Math.floor(Math.random() * a * b + 1)
                    while (selections.indexOf(n) >= 0)
                        n++
                    selections.push(n)
                }
                let k = selections.indexOf(r)
                if (k < 0) {
                    k = Math.floor(Math.random() * 4)
                    selections[k] = r
                }
                answer = String.fromCharCode(65 + k)
                this.examitems.push({
                    question: question, selections: selections, answer: answer
                })
            }
        }
    }
}

</script>
      
<style scoped>
.exam-title {
    display: inline-block;
    font-size: larger;
    font-weight: bolder;
    margin: 0 50px 10px 0;
}

.exam-item {
    margin: 20px;
    padding: 20px;
    width: 400px;
    border-radius: 10px;
    background-color: bisque;
    
}

ol {
    padding: 0;
}

ol li {
    display: inline;
    margin-right: 20px;
}

.exam-question {
    border-bottom: 1px solid black;
}

.exam-answer {
    color: red;
    font-style: italic;
}
</style>
      