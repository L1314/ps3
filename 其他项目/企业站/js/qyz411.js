 // banner
{
    let st = document.querySelectorAll(".lpd");
// console.log(st);
    let xd = document.querySelectorAll(".dtkj-img img");
// console.log(xd)
    st.forEach(function (ele, index) {
        ele.onclick = function () {
            for (let i = 0; i < st.length; i++) {
                st[i].classList.remove("actives");
                xd[i].classList.remove("kkk");
            }
            ele.classList.add("actives");
            xd[index].classList.add("kkk")
            num = index;
        }

    })


    let num = 0;
    let x = setInterval(fn, 4000)

    function fn(r = "r") {
        if (r === "r") {
            num++;
            if (num === xd.length) {
                num = 0;
            }

        } else if (r === "l") {
            num--;
            if (num === -1) {
                num = xd.length - 1;
            }
        }
        for (let i = 0; i < st.length; i++) {

            st[i].classList.remove("actives");
            xd[i].classList.remove("kkk");
        }
        st[num].classList.add("actives");
        xd[num].classList.add("kkk")
    }

// clearInterval()  清楚某个时间函数
    let rs = document.querySelector("#dtkj");
    console.log(rs);
    rs.onmouseover = function () {
        clearInterval(x);
    }
    rs.onmouseout = function () {
        x = setInterval(fn, 4000);
    }



}