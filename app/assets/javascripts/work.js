$(function() {
  console.log("Hello, world");
});

// $(function() {
//   $(document).on("work-body:loaded", "#users", function() {

// $(function() {

//     'use strict';
    
//     var timer = document.getElementById('timer');
//     var min = document.getElementById('min');
//     var min_plus = document.getElementById('min-plus');
//     var min_minus = document.getElementById('min-minus');
//     var sec = document.getElementById('sec');
//     var sec_plus = document.getElementById('sec-plus');
//     var sec_minus = document.getElementById('sec-minus');
//     var reset = document.getElementById('reset');
//     var start = document.getElementById('start');
//     var timer_name = document.getElementById('timer-name');
//     // var vol_slide = document.getElementById('vol-slide');
//     var vol_icon = document.getElementById('vol-icon');
//     // var vol_value = document.getElementById("vol").innerHTML;
    
//     var startTime;
//     var timeLeft = 0;
//     // var timeToCountDown = 1800000;
//     var timeToCountDown = 1000;
    
//     // var intervalTime = 300000;
//     var intervalTime = 1000;
//     var timerId;
//     var isRunning = false;
//     // "Reset クリック時はキャンセル音のみ鳴らす"
//     var clickReset = false;
//     var masterVolume = 0.50;
    
//     // ボタン連打に対応
//     // function playSound(sound) {
//     //   var snd = document.getElementById(sound);
//     //   snd.volume = masterVolume;
//     //   snd.currentTime = 0;
//     //   snd.play();
//     // }
    
//     function updateTimer(t) {
//       var d = new Date(t);
//       var m = d.getMinutes();
//       var s = d.getSeconds();
//       var ms = d.getMilliseconds();
//       var timerString;
//       // 文字列＋数値 は 文字列になる。末尾から（-【取り出す桁数】）
//       m = ('0' + m).slice(-2);
//       s = ('0' + s).slice(-2);
//       ms = ('00' + ms).slice(-3);
//       timerString = m + ':' + s + '.' + ms;
//       timer.textContent = timerString;
//       // document.title =  timerString;
    
//       // 時間が未設定の時は、設定ボタンのみ有効
//       if (t > 0) {
//         $("#start").prop('disabled', false);
//         if (isRunning === true) {
//           $("#reset").prop('disabled', true);
//         } else {
//           $("#reset").prop('disabled', false);
//         }
//       } else {
//         $("#start").prop('disabled', true);
//         $("#reset").prop('disabled', true);
//         btnTimeDisabled();
//       }
//     }
    
//     function countDown() {
//       timerId = setTimeout(function() {
//         // var elapsedTime = Date.now() - startTime;
//         // timeLeft = timeToCountDown - elapsedTime;
//         timeLeft = timeToCountDown - (Date.now() - startTime);
//         if (timeLeft < 0) {
//           isRunning = false;
//           if (clickReset == false) {
//             // playSound("decision6");
//           }
//           clickReset = false;
//           start.innerHTML = '<i class="fas fa-play play-style"></i>'
//           clearTimeout(timerId);
//           timeLeft = 0;
//           timeToCountDown = 0;
//           updateTimer(timeLeft);
//           $("#reset").prop('disabled', true);
//           memo();
//           // interval5();
//           // timeToCountDown = intervalTime;
//           // updateTimer(intervalTime);
//           return;
//         }
//         updateTimer(timeLeft);
//         countDown();
//       }, 10);
//     }
    
//     function btnTimeDisabled() {
//       if (isRunning === true) {
//         $("#min").prop('disabled', true);
//         $("#min-plus").prop('disabled', true);
//         $("#min-minus").prop('disabled', true);
//         $("#sec").prop('disabled', true);
//         $("#sec-plus").prop('disabled', true);
//         $("#sec-minus").prop('disabled', true);
//       } else {
//         $("#min").prop('disabled', false);
//         $("#min-plus").prop('disabled', false);
//         $("#min-minus").prop('disabled', false);
//         $("#sec").prop('disabled', false);
//         $("#sec-plus").prop('disabled', false);
//         $("#sec-minus").prop('disabled', false);
//       }
//     }
    
//     function interval() {
//       swal("Time to take a break!", "", "success");
//         // swal("Write something here:", {
//         //   content: "input",
//         // })
//         // .then((value) => {
//         //   swal(`You typed: ${value}`);
//         //   // swal(`You typed: ${value}`);
//         // });
//       timeToCountDown = intervalTime;
//       updateTimer(intervalTime);
    
//     }
    
//     function interval2() {
//       swal({
//         title: 'Login Success',
//         text: 'Redirecting...',
//         icon: 'success',
//         timer: 2000,
//         buttons: false,
//       })
//       .then(() => {
//           dispatch(redirect('/'));
//       })
    
//       // const Toast = Swal.mixin({
//       //   toast: true,
//       //   position: 'top-end',
//       //   showConfirmButton: false,
//       //   timer: 3000,
//       //   timerProgressBar: true,
//       //   onOpen: (toast) => {
//       //     toast.addEventListener('mouseenter', Swal.stopTimer)
//       //     toast.addEventListener('mouseleave', Swal.resumeTimer)
//       //   }
//       // })
      
//       // Toast.fire({
//       //   icon: 'success',
//       //   title: 'Signed in successfully'
//       // })
    
//       timeToCountDown = intervalTime;
//       updateTimer(intervalTime);
//     }
    
//     function interval3() {
//       Swal.fire({
//         // type: "success",
//         title: "Time to take a break!",
//         // background: 'url(./jihyo-twice.jpg)',
//         imageUrl: './jihyo-twice.jpg',
//         // imageWidth: 728,
//         // imageHeight: 409,
//         imageAlt: 'jihyo image',
//         // html: '<div class="shadow border border-dark" id="timer">00:00.000</div>' +
//         // html: '<iframe src="./_timerlogic.html"></iframe> </br>' +
//         html: 'I will close in 5 seconds. <a href id="stop-timer">Stop timer</a>',
//         // timer: 5000,
//         // onOpen: () => {
//         //   Swal.getContent().querySelector('#stop-timer').addEventListener('click', e => {
//         //     e.preventDefault()
//         //     Swal.stopTimer()
//         //   })      
//         // }
        
//       })
//       timeToCountDown = intervalTime;
//       updateTimer(intervalTime);
    
//     }
    
//     function interval4() {
//       let timerInterval
//       Swal.fire({
//         icon: "success",
//         title: "Time to take a break!",
//         // showClass: {
//         //   popup: 'animated fadeInDown faster'
//         // },
//         // hideClass: {
//         //   popup: 'animated fadeOutUp faster'
//         // },
//         // html: 'I will close in <b></b> milliseconds.',
//         html: 'Your Life Span is <b></b>',
//         timer: intervalTime,
//         timerProgressBar: true,
//         onBeforeOpen: () => {
//           // Swal.showLoading()
//           timerInterval = setInterval(() => {
//             const content = Swal.getContent()
//             if (content) {
//               const b = content.querySelector('b')
//               if (b) {
//                 let intervalLeft = Swal.getTimerLeft();
//                 let m = Math.floor(intervalLeft / 60000);
//                 let s = Math.floor((intervalLeft % 60000) / 1000);
//                 // let ms = (intervalLeft % 60000) % 1000;
//                 m = ('0' + m).slice(-2);
//                 s = ('0' + s).slice(-2);
//                 // ms = ('00' + ms).slice(-3);
//                 b.textContent = m + ':' + s;
//                 // b.textContent = m + ':' + s + '.' + ms;
//               }
//             }
//           }, 100)
//         },
//         onClose: () => {
//           clearInterval(timerInterval)
//         }
//       }).then((result) => {
//         /* Read more about handling dismissals below */
//         if (result.dismiss === Swal.DismissReason.timer) {
//           console.log('I was closed by the timer');
//           // playSound("bath-out1");
//         }
//       })
    
//       timeToCountDown = intervalTime;
//       updateTimer(intervalTime);
//     }
    
//     function interval5() {
//       let timerInterval
//       Swal.fire({
//         icon: "success",
//         title: "Time to take a break!",
//         html: 'Your Life Span is <b></b>',
//         timer: intervalTime * 2,
//         timerProgressBar: true,
//         onBeforeOpen: () => {
//           timerInterval = setInterval(() => {
//             const content = Swal.getContent()
//             if (content) {
//               const b = content.querySelector('b')
//               if (b) {
//                 let intervalLeft = Swal.getTimerLeft();
//                 let m = Math.floor(intervalLeft / 60000);
//                 let s = Math.floor((intervalLeft % 60000) / 1000);
//                 m = ('0' + m).slice(-2);
//                 s = ('0' + s).slice(-2);
//                 b.textContent = m + ':' + s;
//               }
//             }
//           }, 100)
//         },
//         onClose: () => {
//           clearInterval(timerInterval)
//         }
//       }).then((result) => {
//         if (result.dismiss === Swal.DismissReason.timer) {
//           // playSound("bath-out1");
//         }
//       })
//     }
    
//     function memo() {
//       Swal.fire({
//         title: 'タスクへメモを残す',
//         html : '残すか残さないかは自由だ',
//         input : 'textarea',
//         inputPlaceholder: '次の５分を有効に使うがよい。'
//       }).then(function(result) {
//         if( result.value ){
//           console.log(result.value);
//         }
//         // playSound("bath-thapon1");
//         interval5();
//       });
//       timeToCountDown = intervalTime;
//       updateTimer(intervalTime);
//     }
    
    
    
//     // function changeValue(value){
//     //   // vol_value = value;
//     //   document.getElementById("vol").innerHTML = value;
//     //   masterVolume = value * 0.01;
//     // }
    
//     vol_icon.addEventListener('click', function() {
//     //   // var pre_vol = document.getElementById("vol").innerHTML;
//     //   // if (pre_vol == 0) {
//     //   //   vol_icon.innerHTML = '<i class="fas fa-volume-mute"></i>';
//     //   // } else {
//     //   //   vol_icon.innerHTML = '<i class="fas fa-volume-up"></i>';
//     //   // }
//     //   // console.log(pre_vol);
    
//       if (vol_icon.innerHTML == '<i class="fas fa-volume-up vol-style"></i>') {
//         vol_icon.innerHTML = '<i class="fas fa-volume-mute mute-style"></i>';
//         masterVolume = 0;
//         // changeValue(0);
//       } else {
//         vol_icon.innerHTML = '<i class="fas fa-volume-up vol-style"></i>';
//         masterVolume = 0.50;
//         // playSound("decision22");
//       }
//     });
    
//     start.addEventListener('click', function() {
//       if (isRunning === false) {
//         isRunning = true;
//         btnTimeDisabled();
//         start.innerHTML = '<i class="fas fa-pause pause-style"></i>';
//         startTime = Date.now();
//         countDown();
//       } else {
//         isRunning = false;
//         $("#reset").prop('disabled', false);
//         btnTimeDisabled();
//         start.innerHTML = '<i class="fas fa-play play-style"></i>';
//         timeToCountDown = timeLeft;
//         clearTimeout(timerId);
//       }
//     });
    
//     reset.addEventListener('click', function() {
//       clickReset = true;
//       // playSound("cancel6");
//       timeToCountDown = 0;
//       $("#reset").prop('disabled', true);
//       updateTimer(timeToCountDown);
//     });
    
//     min_plus.addEventListener('click', function() {
//       clickReset = false;
//       // playSound("cursor1");
//       timeToCountDown += 60 * 1000;
//       if (timeToCountDown >= 60 * 60 * 1000) {
//         timeToCountDown = 0;
//       }
//       updateTimer(timeToCountDown);
//     });
    
//     min_minus.addEventListener('click', function() {
//       clickReset = false;
//       // playSound("cursor1");
//       timeToCountDown -= 60 * 1000;
//       if (timeToCountDown < 0) {
//         timeToCountDown = 0;
//       }
//       updateTimer(timeToCountDown);
//     });
    
//     sec_plus.addEventListener('click', function() {
//       clickReset = false;
//       // playSound("cursor2");
//       timeToCountDown += 1000;
//       if (timeToCountDown >= 60 * 60 * 1000) {
//         timeToCountDown = 0;
//       }
//       updateTimer(timeToCountDown);
//     });
    
//     sec_minus.addEventListener('click', function() {
//       clickReset = false;
//       // playSound("cursor2");
//       timeToCountDown -= 1000;
//       if (timeToCountDown < 0) {
//         timeToCountDown = 0;
//       }
//       updateTimer(timeToCountDown);
//     });
    
//     timer_name.addEventListener('click', function() {
//       // playSound("nannarito");
//     });
    
    
    
//     $(function(){
    
//       // 分 選択
//       $('#min-sel > .dropdown-item').on('click', function(){
//         var min_sel = ($(this).attr('value'));
//         // var minutes = Math.floor(timeToCountDown / 60000);
//         var seconds = Math.floor((timeToCountDown % 60000) / 1000);
//         var millis = (timeToCountDown % 60000) % 1000;
    
//         timeToCountDown = min_sel * 60 * 1000 + seconds * 1000 + millis;
//         updateTimer(timeToCountDown);
//       });
    
//       // 秒 選択
//       $('#sec-sel > .dropdown-item').on('click', function(){
//         var sec_sel = ($(this).attr('value'));
//         var minutes = Math.floor(timeToCountDown / 60000);
//         // var seconds = Math.floor((timeToCountDown % 60000) / 1000);
//         var millis = (timeToCountDown % 60000) % 1000;
    
//         timeToCountDown = minutes * 60 * 1000 + sec_sel * 1000 + millis;
//         updateTimer(timeToCountDown);
//       });
    
//       // $('#vol-icon').on('click', function() {
//       //   if (vol_icon.innerHTML == '<i class="fas fa-volume-up vol-style"></i>') {
//       //     vol_icon.innerHTML = '<i class="fas fa-volume-mute mute-style"></i>';
//       //     masterVolume = 0;
//       //   } else {
//       //     vol_icon.innerHTML = '<i class="fas fa-volume-up vol-style"></i>';
//       //     masterVolume = 0.50;
//       //     playSound("decision22");
//       //   }
//       // });
    
//     });

// //   });
// // });
// });