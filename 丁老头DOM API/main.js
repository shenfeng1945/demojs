/**
 * Created by lzc on 2017/6/8.
 */
var buttons = document.getElementsByTagName('button')
var button = buttons[0]
var container
var queue = [function(){
    container = create('div','container')
    document.body.appendChild(container)
    var ding = create('span','ding','丁')
    container.appendChild(ding)
},
    function(){
        var o1 = create('div','o o1')
        container.appendChild(o1)
        var o2 = create('div','o o2')
        container.appendChild(o2)
    },
    function(){
        var san = create('div','san','三')
        container.appendChild(san)
        var si = create('div','si','四')
        container.appendChild(si)
    },
    function(){
        var egg = create('div','egg')
        container.appendChild(egg)
    },
    function(){
        var hair1 = create('div','hair1','|')
        container.appendChild(hair1)
        var hair2 = create('div','hair2','|')
        container.appendChild(hair2)
        var hair3 = create('div','hair3','|')
        container.appendChild(hair3)
    },
    function(){
        var ear1 = create('span','ear1','3')
        container.appendChild(ear1)
        var ear2 = create('span','ear2','3')
        container.appendChild(ear2)
    },
    function(){
        var bobo = create('div','bobo')
        container.appendChild(bobo)
        var hand1 = create('div','hand1','6')
        container.appendChild(hand1)
        var hand2 = create('div','hand2','6')
        container.appendChild(hand2)
    },
    function(){
        var Button = create('ul','Button')
        Button.innerHTML = '<li></li><li></li><li></li><li></li>'
        container.appendChild(Button)
    },
    function(){
        var foot1 = create('div','foot1','7')
        container.appendChild(foot1)
        var foot2 = create('div','foot2','7')
        container.appendChild(foot2)
    }
]

button.onclick = function(){
    var n = queue.shift()
    n && n.call() //如果n存在，则判断后面的并执行，若n为假，则直接返回false

}
//将频繁使用的API封装成函数
function create(element,classname,textcontent){
    var didi = document.createElement(element)
    didi.className = classname
    didi.textContent = textcontent
    return didi
}

