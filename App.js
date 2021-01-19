let points = 0
const n = document.getElementById("n")
n.innerText = QUOTATION.length
let s = QUOTATION.length * 25

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn")
    const root = document.getElementById("root")
    let i = 0
    function end(){
        root.innerHTML = `<div class="card-body">
              <h5 class="card-title">Вітаемо з проходженням тесту!</h5>
              <p class="card-text">Ваш результат ${Math.floor((points/QUOTATION.length)*100)}%</p>
              <input type="range" id="myRange" value="${(points/QUOTATION.length)*100}">
            </div>`
        document.getElementById("myRange").disabled = true

    }

    btn.onclick = () => {
        btn.disabled = "disabled"
        if(btn.classList.contains("start")){
            timer();
        }
        btn.classList.remove("start")
        check()
        if(i >= QUOTATION.length){
            end()
        } else {
            btn.textContent = "Відповісти"
            let render = ""
            render = "<div class=\"card-body\">\n" +
                "          <h5 class=\"card-title\">" + QUOTATION[i].qua + "</h5>\n" +
                "          <p id=\"pit\" class=\"card-text\">Питання: " + Number(i + 1) + "</p>\n" +
                "\n<div>"
            let j = 1
            QUOTATION[i].ans.forEach(a => {
                render += "          <div class=\"form-check\">\n" +
                    "                            <input class=\"form-check-input\" type=\"radio\" name=\"ans1\" id=\"ans" + i +"_"+ j + "\" value=\"" + a.cost + "\" />\n" +
                    "                            <label class=\"form-check-label\" for=\"ans" + i +"_"+ j + "\">" + a.ans + "</label>\n" +
                    "                        </div>\n" +
                    "\n"
                j++
            })
            render += "       </div> </div>"
            root.innerHTML = render

            root.onchange = () =>{
                btn.removeAttribute('disabled')
            }
            i++
        }
    }
    const add = document.getElementById("add")
    function check() {
        const inp = document.getElementsByName('ans1')
        for (var i = 0; i < inp.length; i++) {
            if (inp[i].type === "radio" && inp[i].checked) {
                points += Number(inp[i].value)
            }
        }
    }



    function timer(){
        const timer = document.getElementById("timer");
        const testArea = document.getElementById("testArea");
        let isOut = false;
        let timerId = setInterval(() => {
            timer.style.color = "#727272"
            let m
            let oS
            let time
            function step(){
                s-=1
                oS = s%60
                m = Math.floor(s/60)
                time = `${m<10?"0"+m:m}:${oS<10?"0"+oS:oS}`
                timer.innerText = time
            }
            if(m === 0) timer.style.color = "#701212"
            if((s === 0) || (i >= QUOTATION.length)) {
                clearInterval(timerId)
                end()
            }
            step()
            testArea.onmouseleave = () => isOut = true
            testArea.onmouseover = () => isOut = false
            if (isOut) {
                timer.style.color = "#b7400b"
                setTimeout(() => step(), 500)
            }

        },  1000)
    }
 /**  add.onclick = () => {
        const addQv = document.getElementById("inputQv1");
        const addA1 = document.getElementById("inputAns1");
        const addA2 = document.getElementById("inputAns2");
        const addA3 = document.getElementById("inputAns3");
        const radA1 = document.getElementById("add1");
        const radA2 = document.getElementById("add2");
        const radA3 = document.getElementById("add3");
        const isOk = (addQv.length > 5) && (addA1.length > 1) && (addA2.length > 1) && (addA3.length > 1) && (radA1.checked || radA2.checked || radA3.checked);

        if (isOk) {
            Quations.push({
                qua: addQv,
                ans:
                    [{

                        ans:addA1,
                        cost: radA1.checked?1:0
                    },

                        {
                            ans:addA2,
                            cost: radA2.checked?1:0
                        },
                        {
                            ans:addA3,
                            cost: radA3.checked?1:0
                        }]
            })
        }
    }
    **/
})





