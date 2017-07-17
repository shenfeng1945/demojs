  //自动获取移动端页面的宽和高，并将宽和高设置给canvas。
  let {clientWidth,clientHeight} =  document.documentElement
  let navWidth = document.querySelector('.nav').clientWidth
  console.log(navWidth)
       myCanvas.width = clientWidth*0.8213
       myCanvas.height = clientHeight
  let canvas = document.getElementById('myCanvas')
  //可以把一个字缩小1/10，那么原先有rem单位的数组全部乘以10
  document.write(`<style>html{font-size:${clientWidth}px}</style>`)
  //让图片的大小能适应不同像素的移动端
  let imgWidth = document.querySelectorAll('img')
  for(var i=0;i<imgWidth.length;i++){
    //因为是以宽375px的手机作为设计稿
    imgWidth[i].width = 15/375*clientWidth
  }
  let previousPoint
    if (canvas.getContext) {
         let context = canvas.getContext('2d')
         canvas.addEventListener('touchmove',function(e){
           //touchmove默认在移动端有滚屏现象
         e.preventDefault()
           //这句话得放在touchmove事件里面
        let penType = document.querySelector('input[name="penType"]:checked').value
        //每个touch事件里都要写这个代码，太麻烦了，应该可以优化的
        let color = document.querySelector('input[name="color"]:checked').value
        let strokeColor = function(){
            let b
            if(color === 'black'){b = 'black'}
            else if(color === 'red'){b = 'red'}
            else if(color === 'green'){b = 'green'}
            else if(color === 'blue'){b = 'blue'}
            return b
         }
        //控制宽度
        let line = document.querySelector('input[name="line"]:checked').value
        let lineWidth = function(){
        let a
        if(line === 'thin'){a=1*clientWidth/375}
        else if(line === 'middle'){a=3*clientWidth/375}
        else if(line === 'wide'){a=5*clientWidth/375}
        return a
        }
        let touch = e.touches[0]
        let pageX = touch.pageX  
        let pageY = touch.pageY
          //铅笔
 //貌似相同name的另一个input被点击时，其value并没有变，但在touch事件(3个)里却可以检测改变的value,这是该代码的核心点
           if(penType === 'pen'){
             if(previousPoint){
             context.beginPath()
             context.strokeStyle = strokeColor()
             context.lineWidth = lineWidth()
             context.beginPath()
             context.moveTo(previousPoint.pageX,previousPoint.pageY)
             context.lineTo(pageX,pageY)
             context.stroke()
            }
         //记录前一次的touchmove事件的坐标点
         previousPoint = {pageX,pageY} 
           }else if(penType === 'eraser'){
             context.clearRect(pageX-lineWidth()*3,pageY-lineWidth()*3,lineWidth()*6,lineWidth()*6) 
           }
        })
        canvas.addEventListener('touchend',function(e){
         previousPoint = null
        })
        let clear = document.querySelector('input.clear')
        clear.addEventListener('click',function(){
            context.clearRect(0,0,myCanvas.width,myCanvas.height)
        })
        
        
        //矩形
        let startSquareness 
        let squareness = document.querySelector('input.squareness')
        squareness.addEventListener('click',function(){
          canvas.addEventListener('touchstart',function(e){
            let touch = e.touches[0]
            let pageX = touch.pageX  
            let pageY = touch.pageY 
           startSquareness = {'pageX':pageX,'pageY':pageY}
          })
          canvas.addEventListener('touchend',function(e){
            
            var touch = e.changedTouches[0]
            let pageX = touch.pageX
            let pageY = touch.pageY     
            let penType = document.querySelector('input[name="penType"]:checked').value
            
            //控制颜色
            let color = document.querySelector('input[name="color"]:checked').value
            let strokeColor = function(){
              let b
              if(color === 'black'){b = 'black'}
              else if(color === 'red'){b = 'red'}
              else if(color === 'green'){b = 'green'}
              else if(color === 'blue'){b = 'blue'}
              return b
             }
            
            
            //控制宽度
            let line = document.querySelector('input[name="line"]:checked').value
            let lineWidth = function(){
            let a
            if(line === 'thin'){a=1*clientWidth/375}
            else if(line === 'middle'){a=3*clientWidth/375}
            else if(line === 'wide'){a=5*clientWidth/375}
            return a
            }
            
            if(penType === 'squareness'){
               context.beginPath()
               context.strokeStyle = strokeColor()
               context.lineWidth = lineWidth()
               context.moveTo(startSquareness.pageX,startSquareness.pageY)
               context.lineTo(pageX,startSquareness.pageY)
               context.lineTo(pageX,pageY)
               context.lineTo(startSquareness.pageX,pageY)
               context.lineTo(startSquareness.pageX,startSquareness.pageY)
               context.stroke()
            }
           
          })
        })
      
        
        //三角形 
      let startTriangle
      let triangle = document.querySelector('input.triangle')
      triangle.addEventListener('click',function(){
        canvas.addEventListener('touchstart',function(e){
          
          let touch = e.touches[0]
          let pageX = touch.pageX
          let pageY = touch.pageY
          startTriangle = {'pageX':pageX,'pageY':pageY}
        })
        canvas.addEventListener('touchend',function(e){
          let touch = e.changedTouches[0]
          let pageX = touch.pageX
          let pageY = touch.pageY
          let penType = document.querySelector('input[name="penType"]:checked').value
          
            //控制颜色
          let color = document.querySelector('input[name="color"]:checked').value
          let strokeColor = function(){
            let b
            if(color === 'black'){b = 'black'}
            else if(color === 'red'){b = 'red'}
            else if(color === 'green'){b = 'green'}
            else if(color === 'blue'){b = 'blue'}
            return b
           }
          
            //控制宽度
          let line = document.querySelector('input[name="line"]:checked').value
          let lineWidth = function(){
          let a
          if(line === 'thin'){a=1*clientWidth/375}
          else if(line === 'middle'){a=3*clientWidth/375}
          else if(line === 'wide'){a=5*clientWidth/375}
          return a
          }
          
          if(penType === 'triangle'){
          context.beginPath()
          context.strokeStyle = strokeColor()
          context.lineWidth = lineWidth()
          context.moveTo(startTriangle.pageX,startTriangle.pageY)
          context.lineTo(pageX,startTriangle.pageY)
          context.lineTo(pageX,pageY)
          context.lineTo(startTriangle.pageX,startTriangle.pageY)
          context.stroke()
          }
        })
      })
      //圆
      let startCircle
      let circle = document.getElementsByClassName('circle')[0]
      circle.addEventListener('click',function(){
        canvas.addEventListener('touchstart',function(e){
          let touch = e.touches[0]
          let pageX = touch.pageX
          let pageY = touch.pageY
          startCircle = {'pageX':pageX,'pageY':pageY}
        })
        canvas.addEventListener('touchend',function(e){
          let touch = e.changedTouches[0]
          let pageX = touch.pageX
          let pageY = touch.pageY
          let penType = document.querySelector('input[name="penType"]:checked').value
          
           //控制颜色
          let color = document.querySelector('input[name="color"]:checked').value
          let strokeColor = function(){
            let b
            if(color === 'black'){b = 'black'}
            else if(color === 'red'){b = 'red'}
            else if(color === 'green'){b = 'green'}
            else if(color === 'blue'){b = 'blue'}
            return b
           }
           
             //控制宽度
          let line = document.querySelector('input[name="line"]:checked').value
          let lineWidth = function(){
          let a
          if(line === 'thin'){a=1*clientWidth/375}
          else if(line === 'middle'){a=3*clientWidth/375}
          else if(line === 'wide'){a=5*clientWidth/375}
          return a
          }
          
          if(penType === 'circle'){
             context.beginPath()
          context.strokeStyle = strokeColor()
          context.lineWidth = lineWidth()
          context.arc(startCircle.pageX,startCircle.pageY,
                      Math.sqrt(Math.pow((startCircle.pageX-pageX),2)+ Math.pow((startCircle.pageY - pageY),2)),
                      0,Math.PI*2,true)
          context.stroke()
          }
        })
      })
   //save
   save.onclick = function(){
      var canvas = document.getElementById("myCanvas")
      var Date = canvas.toDataURL("image/png");
      var newWindow = window.open('about:blank','image from canvas');
      newWindow.document.write("<img src='"+Date+"' alt='from canvas'/>");
   }
    }
