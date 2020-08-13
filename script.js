var closeBtn = document.querySelector('#closeBtn');
var tl2 = gsap.timeline();
closeBtn.addEventListener('click',function(){
    
    tl2.reverse();
    setTimeout(function(){
        var worksamples = document.querySelector('#worksamples');
     worksamples.style.display = 'none'; 
    },2500)
    
    
})
  let timeline = gsap.timeline();
  var overlay = document.querySelector('#overlay')
   timeline.to('#overlay',{
       width: 2000,
       height: 2000,
       duration:1,
      ease:'expo.inOut' 
      })
   .to('#overlay h1 span',{
       top:0,
       duration:1,
       ease:'expo.inOut'
   })
   .to('#overlay h1 span',{
       top: '-100%',
       duration:.5,
       delay: .4,
       ease:'expo.inOut'
   })
   .to('#overlay',{
       opacity:0,
       duration:2,
       ease:'expo.inOut',
         onComplete: function(){
          overlay.style.display ='none';
       }
    
   })
  .from('#nav h4',{
      opacity:0,
      x:40,
      duration:.5,
      ease:'expo.inOut',
  })
  .from('#nav #icons i',{
      opacity:0,
      x:40,
      stagger:.2,
      duration:.3,
      ease:'expo.inOut',
  })
  .from('#mainDets .line',{
      opacity:0,
      width:0,
      stagger:.3,
      duration:1,
      ease:'expo.inOut',
  })
  .from('#mainDets .detsAnim',{
      opacity:0,
      y:30,
      stagger:.3,
      duration:1,
      ease:'expo.inOut',
  })
  .from('#scroller',{
      opacity:0,
      delay:'-.5',
      duration:1,
      ease:'expo.inOut',
  })
  .from('#right #links a',{
      opacity:0,
      X:30,
      delay:'-2',
      stagger:.2,
      duration:1,
      ease:'expo.inOut',
  })
  function animateTheLayer(){
     console.log('it happened');
      tl2.to('#rightoverlay',{
          duration:1.5,
          ease:'expo.inOut',
          left:0,
          OnComplete: function() {
                 var worksamples = document.querySelector('#worksamples');
                 worksamples.style.display = 'initial'; 
          }

      })
      .from('#rightoverlay>h3',{
         duration:.5,
         x:40,
         opacity:0,
         ease:'expo.inOut',
         left:0

     })
     .from('#rightoverlay h3 span',{
         duration:1,
         delay:-.1,
         opacity:0,
         ease:'expo.inOut',
         left:0,

     })
     .from('#rightoverlay .work',{
        duration:.5,
        opacity:0,
        ease:'expo.inOut',
        x:100,

    })
    .from('#rightoverlay .work h4',{
        duration:.5,
        opacity:0,
        stagger:.3,
        x:50,
        ease:'expo.inOut',

    })
    .from('#rightoverlay .work .holder img',{
        duration:1,
        stagger:.3,
        delay:-1.5,
        x:'100%',
        ease:'expo.inOut',

    })

  }


 gsap.from('#center img', {
     opacity:0,
     duration:2,
     delay:3.5,
     ease:'expo.inOut'
 })