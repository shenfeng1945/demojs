  //自动获取移动端页面的宽和高，并将宽和高设置给canvas。
  let {clientWidth,clientHeight} =  document.documentElement
  
  let navWidth = document.querySelector('.nav').clientWidth
       myCanvas.width = clientWidth*0.8
       myCanvas.height = clientHeight*0.99
  let canvas = document.getElementById('myCanvas')
  document.write(`<style>html{font-size:${clientWidth}px}</style>`)
  let previousPoint
    if (canvas.getContext) {
         let context = canvas.getContext('2d')
         canvas.addEventListener('touchmove',function(e){
           //touchmove默认在移动端有滚屏现象
         e.preventDefault()
           //这句话得放在touchmove事件里面
        let penType = document.querySelector('input[name="penType"]:checked').value
        //这段代码放在外面，可行吗？
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
        if(line === 'thin'){a=1}
        else if(line === 'middle'){a=3}
        else if(line === 'wide'){a=5}
        return a
        }
        let touch = e.touches[0]
        let pageX = touch.pageX  
        let pageY = touch.pageY
          //铅笔
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
            if(line === 'thin'){a=1}
            else if(line === 'middle'){a=3}
            else if(line === 'wide'){a=5}
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
          if(line === 'thin'){a=1}
          else if(line === 'middle'){a=3}
          else if(line === 'wide'){a=5}
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
          if(line === 'thin'){a=1}
          else if(line === 'middle'){a=3}
          else if(line === 'wide'){a=5}
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
