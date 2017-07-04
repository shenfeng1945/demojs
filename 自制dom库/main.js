/**
 * Created by lzc on 2017/7/4.
 */
window.dom = {}
window.dom.create = function (tagname,children,attribute) {
    var tag = document.createElement(tagname)
    if(typeof children === 'string'){
        var text = document.createTextNode(children)
        tag.appendChild(text)
    }else if(children instanceof HTMLElement){
        tag.appendChild(children)
    }else if(children instanceof Array){
        for(var i=0;i<children.length;i++){
            if(typeof children[i] === 'string'){
                tag.appendChild(document.createTextNode(children[i]))
            }else if(children[i] instanceof HTMLElement){
                tag.appendChild(children[i])
            }
        }
    }
    if(attribute instanceof Object){
        for(var key in attribute){
            tag.setAttribute(key,attribute[key])
        }
    }
    return tag
}

window.dom.empty = function (tag) {
    var firstchild = tag.childNodes[0]
    while (firstchild){
        firstchild.remove()
        firstchild = tag.childNodes[0]
    }
}

//dom.find()返回是对象
window.dom.find = function (selector,scope) {
    if(scope instanceof HTMLElement){
        return scope.querySelectorAll(selector)
    }else{
        return document.querySelectorAll(selector)
    }
}

window.dom.children = function (tag) {
    return tag.children
}

window.dom.text = function (tag) {
    var result = ''
    for(var i=0;i<tag.childNodes.length;i++){
        if(tag.childNodes[i].nodeType === 3){
            result = result + tag.childNodes[i].textContent.trim()
        }
    }
    return result
}

window.dom.attr = function (tag,attribute) {
    for(var key in attribute){
        tag.setAttribute(key,attribute[key])
    }
}
window.dom.style = function (tag,styles) {
    for(var key in styles){
        tag.style[key] =styles[key]
    }
}
window.dom.bigBrother = function (tag) {
    var big = tag.previousElementSibling
    while(big.previousElementSibling !== null){
        big = big.previousElementSibling
    }
    return big
}
