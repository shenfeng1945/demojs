/**
 * Created by lzc on 2017/6/23.
 */
window.$ = function (selector) {
    //如果传入的参数为元素
    if (selector instanceof Element) {
        var elements = { 0: selector, length: 1 }
    }
    //如果传入的为字符串（选择器）
    else if (typeof selector === 'string') {
        elements = document.querySelectorAll(selector)
    } else if (selector instanceof Array) {
        //遍历数组，变成有length的伪数组(对象)
        elements = {}
        for (var i = 0; i < selector.length; i++) {
            elements[i] = selector[i]
        }
        elements.length = selector.length
    }
    elements.on = function (evenType, fn) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].addEventListener) {
                elements[i].addEventListener(evenType, fn)
            } else if (elements[i].attachEvent) {
                //兼容IE
                elements[i].attachEvent('on' + evenType, fn)
            }
        }
        return elements
    }
    elements.addClass = function (className) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].classList) { elements[i].classList.add(className) }
            else if (elements[i].className) {
                //兼容IE(可能会重复添加class,但并没有关系)
                elements[i].className += '' + className
            }
        }
        return elements
    }
    elements.removeClass = function (className) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove(className)
        }
        return elements
    }
    elements.text = function (textContent) {
        var array = []
        //如果不传参(=== undefined)，就打出elements的文本内容
        if (textContent === undefined) {
            for (var i = 0; i < elements.length; i++) {
                array.push(elements[i].textContent)
            }
        } else {
            for (var i = 0; i < elements.length; i++) {
                if (elements[i].textContent) { elements[i].textContent = textContent }
                else if (elements[i].innerText) {
                    //兼容IE
                    elements[i].innerText = textContent
                }
            }
        }
        return array
    }
    elements.css = function (key, value) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style[key] = value
        }
        return undefined
    }
    elements.attr = function (name, attributes) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].setAttribute(name, attributes)
        }
        return undefined
    }
    elements.html = function (string) {
        var arr = []
        //打出elements的元素
        if (string === undefined) {
            for (var j = 0; j < elements.length; j++) { arr.push(elements[j].innerHTML) }
        } else {
            for (var i = 0; i < elements.length; i++) {
                elements[i].innerHTML = string
            }
        }
        return arr
    }
    elements.get = function (index) {
        return elements[index]
    }
    elements.siblings = function () {
        var result = []
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i]
            var children = element.parentNode.children
            for (var j = 0; j < children.length; j++) {
                if (children[j] !== element) { result.push(children[j]) }
            }
        }
        let items = $(result)
        items.previousElement = elements
        //传入数组，变成成为伪数组(对象)，用$进行包装，它也拥有了on,addClass....各种属性
        return items

    }
    elements.end = function(){
        return elements.previousElement
    }
    return elements
}

