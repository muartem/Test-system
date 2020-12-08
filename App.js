

    Quations = [
    {
        qua: "Інноваційна технологія, яка дозволяє об'єднувати ІТ-ресурси різних апаратних платформ в єдине ціле і надавати користувачеві доступ до них через локальну мережу або через інтернет, називається:",
        ans:
            [{
                ans:"хмарний додаток",
                cost: 0
            },
            {
                ans:"хмарні сховища",
                cost: 0
            },
            {
                ans:"хмарні технології",
                cost: 1
            }]
    },
    {
        qua: "Служба, яка дозволяє зберігати дані шляхом їх передачі по інтернету або іншої мережі в систему зберігання, що обслуговується третьою стороною, називається:",
        ans:
            [{

                ans:"Это груша!!",
                cost: 0
            },
            {
                ans:"Это єпл!!",
                cost: 0
            },
            {
                ans:"Это стильно!!",
                cost: 1
            }]
    },
    {
        qua: "Что такое груша??",
        ans:
            [{

                ans:"Это яблоко!!",
                cost: 0
            },

                {
                    ans:"Это кружка!!",
                    cost: 0
                },
                {
                    ans:"Это гитара!!",
                    cost: 1
                }]
    }
]
let points = 0;

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");
    const root = document.getElementById("root");
    let i = 0;

    btn.onclick = () => {
        check()
        if(i >= Quations.length){
            btn.classList.add("btn-light")
            btn.classList.remove("btn-dark")
            root.innerHTML = `<div class="card-body">
              <h5 class="card-title">Вітаемо з проходженням тесту!</h5>
              <p class="card-text">Ваш результат ${Math.floor((points/Quations.length)*100)}%</p>
              <input type="range" id="myRange" value="${(points/Quations.length)*100}">
            </div>`
            document.getElementById("myRange").disabled = true

        } else {
            btn.textContent = "Відповісти";
            root.innerHTML = "<div class=\"card-body\">\n" +
                "          <h5 class=\"card-title\">" + Quations[i].qua + "</h5>\n" +
                "          <p class=\"card-text\">Питання: " + Number(i + 1) + "</p>\n" +
                "\n" +
                "          <div class=\"form-check\">\n" +
                "            <input class=\"form-check-input\" type=\"radio\" name=\"ans1\" id=\"ans1\" value=\""+ Quations[i].ans[0].cost +"\" />\n" +
                "            <label class=\"form-check-label\" for=\"ans1\">" + Quations[i].ans[0].ans + "</label>\n" +
                "          </div>\n" +
                "\n" +
                "\n" +
                "          <div class=\"form-check\">\n" +
                "            <input class=\"form-check-input\" type=\"radio\" name=\"ans1\" id=\"ans2\" value=\""+ Quations[i].ans[1].cost +"\" />\n" +
                "            <label class=\"form-check-label\" for=\"ans2\">" + Quations[i].ans[1].ans + "</label>\n" +
                "          </div>\n" +
                "\n" +
                "\n" +
                "          <div class=\"form-check\">\n" +
                "            <input class=\"form-check-input\" type=\"radio\" name=\"ans1\" id=\"ans3\" value=\""+ Quations[i].ans[2].cost +"\" />\n" +
                "            <label class=\"form-check-label\" for=\"ans3\">" + Quations[i].ans[2].ans + "</label>\n" +
                "          </div>\n" +
                "        </div>";

            i++;
        }
    }

    const add = document.getElementById("add");
    add.onclick = () => {
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
})


function check() {
    const inp = document.getElementsByName('ans1');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            points += Number(inp[i].value)
        }
    }
}


