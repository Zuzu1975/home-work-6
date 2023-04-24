// console.log( 123);
//alert('Привет это моя домашнее задание')


// var a = 1; //устаревший вариант
// let b = 3; //современный вариант
// const c = 0; // нельзя менять 
// a = 5; // перезаписали, одно = означает присваевание
//var mybirthDay = '11.11';
//mybirthDay  = '17.07.75';
//console.log(mybirthDay);
//const mybirthDay = '11.11';     это ошибка
//let mybirthDay = '11.11';       это ошибка
//var mybirthDay = '11.11';       он не видит ошибку, но видит пустой

//let a =" 'Добро'+'пожаловать'+'на курс'+'Зухра'"
//a = 9
//console.log(a);

//today = '17.04.23';
//console.log(today);
//number
// infinity  математ бесконечность
//console.log(Infinity <1000000000000000000);                //false
//let a = Infinity              // 1 способ получить infinity, задать явно
//console.log(1/0);             // 2 способ  ? разделить число на 0

//NaN             математическу ошибку

//console.log(NaN);
//console.log(777);

//console.log('stroka' / 2);
//console.log(7**7);             //воведение в степень
//console.log(NaN**0)            // будет 1 

// begint                        // больше чем позволено
//console.log(77777777777777777777777n);  //в конце цифр добавить n

// sring  строка
//let str1 = 'JOJO'
//let str2 = "JOJO"
//let str3 =`ANIME ${str2}`          //дает больше возможгности
//let str3 =`ANIME ${2+3}`         // дает сумму цифр
//console.log(str1);
//console.log(str2);
//console.log(str3);

              //booLean   булевое значение
//let check = true
//let uncheck = false
//console.log(1>7);
//console.log(true==1);
//console.log(false==0);

           // Null  спец значение
// let nuller = null
// console.log(nuller);   

            // undefined 
// let a;
// console.log(a);      

            // type of распознает значения
// typeof x 
// typeof (x)
// console.log(typeof 'cat');
// console.log(typeof 2);
// console.log(typeof true);
// console.log(typeof 10n);
// console.log(typeof undefined);
// console.log(typeof null);

   //3 lesson

//document.getElementById(`first`).innerHTML=`Hello World`
//document.getElementById(`one`).innerHTML=`Hello world!!!!

//document.getElementById('one').innerHTML='Anime'
//document.getElementById('one').innerHTML='777'
//document.getElementById('one').innerHTML='KZ'

//document.querySelector('#one').innerHTML=777
//document.querySelectorAll('p').innerHTML='Хакуна Матата'

//document.querySelector('.qwer').innerHTML='Хакуна Матата'
// let inp = document.querySelector('.text')
// let btn = document.querySelector('.check')
// btn.OnClick = function() {
//     console.log('что то вышло не так');
// }
//let inp = document.querySelector(".text");
//let btn = document.querySelector(".cheсker");
//console.log(btn);
//btn.onclick = function () {
	//console.log("наконец то");
    //console.log(inp.value);             //появиться пустая строка в консоле
    //console.log(typeof inp.value);        //string 
    //console.log(+inp.value);                // выведет цифру
    //console.log(typeof +inp.value);           //number
    //console.log(typeof +inp.value+2);           //number2
    //console.log(+inp.value+2);                     //при наборе в Клик  цифры 123 , Консоль суммирует 123+2 и выдаст 125


//}

// let inp = document.querySelector(".text");
// let btn = document.querySelector(".cheсker");
// let out = document.querySelector('.out');
// btn.onclick = function () {
    //let e = inp.value
    //out.innerHTML = e        //перезаписывается введенное
   // out.innerHTML = inp.value   // короткая запись 
    //   let e = inp.value
    //   out.innerHTML = e 
    //   inp. value = ''
    //}
    // let myhappy = prompt('Когда у тебя день рождение?');
    // console.log(myhappy);


    // if(myhappy==22){                    //укороченный вариант
    // alert('Yes')
    // if(myhappy==22)alert('Yes')

//     if(myhappy==22){                  //ввод несколько 
//     alert('Yes')
//     alert('Yes')
//     alert('Yes')
// }


    // if(myhappy==22){                  // со значением инача " else" можно "22"
    // alert('Yes')
    // }else{
    // alert('No')
    // }

    // if(myhappy<100){                  
    // alert('Yes')
    // }else{
    // alert('No')
    // }

    // if(условие){
    //     действие
    // }


                    //4 занятие
    // if(1>2){
    //     console.log(123);
    // }
    // else if(2>1){
    //     console.log(321);
    // }
    // else{
    //     console.log("иначе");
    // }


                                                 //правильная запись для <>=
    // let year = prompt('в каком году вышел ходячий значок?')
    // if(year<2004){
    //     console.log("Рано");
    // }
    // else if(year>2004){
    //     console.log("Поздно");
    // }
    // else{
    //     console.log("верно");
    // }
    //                                           // тоже можно, но не совсем верно
    // let year = prompt('в каком году вышел ходячий значок?')
    // if(year<2004){
    //     console.log("Рано");
    // }
    // if(year>2004){
    //     console.log("Поздно");
    // }
    // if(year == 2004){
    //     console.log("верно");
    // }
    //                             //вариант когда = верно, остальное ложь
    // let day = prompt('сколько дней в неделю?')
    // let week;
    // if(day==7){
    //     week =true
    // }
    // else{
    //     week =false
    // }
    // console.log(week);

                                    // сокращенный вариант

    // let day = prompt('сколько дней в неделю?')
    // let week = day ==7 ? true:false
    // //let - результат(переменная) = Условие ? если True Первый вариант : иначе Второй вариант
    // console.log(week);

                            //математические операторы
// -
// +
// *
// /
// %
// ** возведение в степень
//console.log(5**7);             // степень
//console.log(10%5);             // оператор остатка от деления %   (остаток ноль)
//console.log(10%3);            //остаток 1  
//console.log(10>2);
//<>       - оператор больше или меньше
//>=<=     -больше или равно, меньше или равно
//==       -не строгое равно
//===      -строгое равно
//=        -оператор присваивания
//!=       - не равно

// console.log(10>=10);
// console.log(10=='10');
// console.log(10==='10');
// console.log((1+'2')*2);
//            //1 + строковое '2'=12*2=24
// console.log('lets'>'fils');      //unicod  LETS cбольшой буквы будет меньше
// console.log('bac'>'adf');        // чем ниже буква в алфавите? тем больше будет он
// console.log(5>'1');              //true
// console.log(1>'5');              // false
// console.log(1==true)              //true
// console.log(1==false)              //false
// console.log(0==false)              //true
// console.log(('1'+1)>10)            //true

//                         //Логические операторы
// true||true=true        
// false||true=true
// true||false=true
// false||false=false
// let a =4
// let b = 10
// if(a<5 || a>5){
//     console.log(b);
// }

// &&
// true||true=true        
// false||true=false
// true||false=false
// false||false=false
// let a =4
//  let b = 10
//  if(a<5 && a>5){
//      console.log(b);
// }
// let a =4
//  let b = 10
//  if(a==4 && a<5){
//      console.log(b);
//  }


//              // оператор отрицания!
// let a = true
// console.log(!a);

                                            // 5 занятие 

    // сщздаем переменную, которая будет счетчиком
    // Ключевое слово while (пока условие true){
    //  Тело цикла
    //}

    // let i = 0;
    // while(i<3){
    //     //alert(i)
    //     console.log(i);
    //     i++
        //i+=1      то же самое
    //}
    // 1 итерация i=0
    // 2 итерация i=1
    // 3 итерация i=2
    // 4 итерация i=3
    // let i = 0;
    // while(i<3){
    //     //alert(i)
    //     console.log(i);
    //     i++                // без нее бесконечная цифра 0
    // }
    // let i = 2;
    // i++
    // console.log(i);
        
    // let i =2
    // // i++      //3
    // i--         //1
    // console.log(i);

    // let i = 0;
    // while(i<3){
    //     console.log(i);
    //     i++                    // не является правильным? нельзя применять
    // }

    //let i = 0;
    // i++                // означает счетчик перед увеличением
    // ++1                //означает увеличение счетчика после
    // console.log(i);
    //console.log(i++);    //0
    //console.log(++i);     //1
      
    // let i = 3;
    // while(i !=0){
        // console.log(i);     //можно сократить 
    //     i--
    // }
   
    //  let i = 3;
    // while(i ){                //вот так
    //     console.log(i);     
    //     i--
    // }


            // можно еще сократить
    // let i = 3;
    // while(i) console.log(i--);


// ключевое слово do {
//     тело цикла
// } ключевое слово while (условно)

// let i = 4;
// do{
//     console.log(i++);
// }while(i<3)


                        //ЦИКЛ for

//  ключевое слово for(начало; условие;шаг;)  {
//     начало цикла
//  }   
 
// for(let i = 0; i < 5; i++){
//     console.log(i);
// }
// (Если условие == true  следует Выполнить тело, Выполнить шаг)
// (Если условие == true  следует Выполнить тело, Выполнить шаг)
// (Если условие == true  следует Выполнить тело, Выполнить шаг)
// (Если условие == true  следует Выполнить тело, Выполнить шаг)
// (Если условие == true  следует Выполнить тело, Выполнить шаг)
// ......

 
// // for(let i = 0; i < 5; i+=20){   //не верно
//     console.log(i);
// }



//выполняем начало
// let i = 0;
// // если условие ==true, то выполняется тело, выполняется шаг
// if(i<3){console.log(i)}; i++
// // если условие ==true, то выполняется тело, выполняется шаг
// if(i<3){console.log(i)}; i++
// // если условие ==true, то выполняется тело, выполняется шаг
// if(i<3){console.log(i)}; i++
// // если условие ==true, то выполняется тело, выполняется шаг
// // конец цикла

// for(let i = 0; i<3; i++){
//     console.log(i);
// }
// console.log(i);          //ошибка  console не встроена

// let i=0
// for(i = 0; i<3; i++){
//         console.log(i);
//     }
//     console.log(i);    // вывел дополнительно 3

// let i = 0
// for(;;){
//     console.log(i++);
// }

// let i = 0
// for(;;){
//     console.log(i++);
//     if(i>10)break;
// }

// let i = 0
// for(;;){
//     console.log(i++);
//     if(i>10)break;
//     console.log(i+10);
// }

// for(let i=0; i<10; i++){
//     if(i%2 ==0)continue;    // не четные 13579
//     console.log(i);
// }

// for(let i=0; i<10; i++){
//     if(i%2 ==0){                            //02468
//     console.log(i);
//     }
// } 

// for(let i=0; i<10; i++){
//     if(i%2 ==1)continue;    // не четные 02468
//     console.log(i);
// }

// for(let i=0; i<10; i++){
//     if(i%2 ==1){                            //13579
//     console.log(i);
//     }
// }



                                        //   6 занятие

   //макет

// switch(x){                     
//     case 'Значение 1'   //if (x== Значение 1) 
//         ТЕло
//         [break]
//     case 'Значение 2'   //if (x== Значение 2) 
//         ТЕло
//         [break]
//     case 'Значение 3'   //if (x== Значение 3) 
//         ТЕло
//         [break]        
// }           
//  if(x==1){
//     тело
//  }
//  else if(x==2){

//  }
//  else if(x==3){

//  }
//  else{

//  }

// let a = 5 + 5
// switch (a){
//     case 5:
//         console.log('Маловато');
//         break
//     case 10:
//         console.log('В точку');      //точку
//         break
//     case 15:
//         console.log('Перебор');
//     default:
//         console.log('Матан не твое');
// }

// let a = 5 + 5 + 5 
// switch (a){
//     case 5:
//         console.log('Маловато');
//         break
//     case 10:
//           console.log('В точку');             
//         break                                 
//     case 15:
//         console.log('Перебор');               //Перебор
//         //break
//     default:
//         console.log('Матан не твое');         //Матан не твое, потомучто между ними нет break
// }

// let a = 5 + 5 
// switch (a){
//     case 5:
//         console.log('Маловато');
    
//     case 10:
//           console.log('В точку');            // В точку
                                   
//     case 15:
//         console.log('Перебор');              //  Перебор 
        
//     default:
//         console.log('Матан не твое');       //  Матан не твое
// }

// let a = 5 + 5 + 5
// switch (a){
//     case 5:
//         console.log('Маловато');
    
//     case 10:
//           console.log('В точку');            
                                   
//     case 15:
//         console.log('Перебор');                   // Перебор
//           default:
//         console.log('Матан не твое');              // Матан не твое
// }

// let a ='1';
// let b = 0;
// switch(+a){
//     case b + 1:
//         console.log('вополнится, потому как значение +а, будет в точности равно и +1');
//         break
//         default:
//         console.log('это не выполнится');    
// }
// let c = +a
//         console.log(typeof +a); //вополнится, потому как значение +а, будет в точности равно и +1
//                                 //number (+a преобразует в нумер
                                
// let a ='1';
// let b = 0;
// switch(+a){
//     case b + 1:
//         console.log('вополнится, потому как значение +а, будет в точности равно и +1');
//         break
//         default:
//         console.log('это не выполнится');    
// }
// let c = +a
//         console.log(typeof +a);                  // number
//         console.log(typeof c);                  // number
//         console.log(c== a);                    // true
//         console.log(c===a);                   // false
//         console.log(c===+a);                  // true



// let a = 12
// switch(a){
//     case 12:
//         alert('Правильно');                      // правильно
//         break
//     case 5:
//     case 10:
//         alert('Не правильно')
//         alert('Может тебе взять курс по матану?')
//     default:
//         alert('результат кривой однозначно')
// }

// let a = 12
// switch(a){
//     case 11:
//         alert('Правильно');                      
//         break
//     case 5:
//     case 10:
//         alert('Не правильно')
//         alert('Может тебе взять курс по матану?')
//     default:
//         alert('результат кривой однозначно')            // результат кривой однозначно

// }

// let a = 5
// switch(a){
//     case 12:
//         alert('Правильно');                      
//         break
//     case 5:
//     case 10:
//         alert('Не правильно')                         //Не правильно
//         alert('Может тебе взять курс по матану?')     //Может тебе взять курс по матану?
//     default:
//         alert('результат кривой однозначно')         //результат кривой однозначно
// }


// let a = 5
// switch(a){
//     case 12:
//         alert('Правильно');                      
//         break
//     case 5:
//     case 10:
//         alert('Не правильно')                         //Не правильно
//         alert('Может тебе взять курс по матану?')     //Может тебе взять курс по матану?
//         break
//     default:
//         alert('результат кривой однозначно')         
// }



// let a = 5
// switch(a){
//     case 12:
//         alert('Правильно');                      
//         break
//     case 5:
//     case 10:
//         alert('Не правильно')                         //Не правильно
//         break
//         alert('Может тебе взять курс по матану?')     
//         break
//     default:
//         alert('результат кривой однозначно')         
// }

// let arg = prompt ('Введите число')      //
// switch(arg){
//     case '0':
//     case '1':
//         alert('один или ноль')          //
//     case '2':   
//         alert('вы ввели 2')             //
//         break
//     case 3:
//         alert('Никогда не выполнится')
//         break
//     default:
//         alert('Неизвестное значение')
// }

// let arg = prompt ('Введите число')      //
// switch(arg){
//     case '0':                           //+
//     case '1':                           //+
//         alert('один или ноль')          //+
//         break         
//     case '2':                            //-
//         alert('вы ввели 2')             //-
//         break
//     case 3:                              //*
//         alert('Никогда не выполнится')
//         break
//     default:
//         alert('Неизвестное значение')    //*
// }
// console.log(typeof arg);


// let arg = +prompt ('Введите число')      
// switch(arg){
//     case '0':                           
//     case '1':                           
//         alert('один или ноль')          
//         break         
//     case '2':                            
//         alert('вы ввели 2')             
//         break
//     case 3:                              
//         alert('Никогда не выполнится')
//         break
//     default:
//         alert('Неизвестное значение')       // qwer Nan
// }
// console.log( arg);

   // домашка
// let arg = +prompt ('Введите число jn 1 lj 4')      
// switch(arg){
//     case '0':                           
                          
//         alert('один или ноль')          
//         break         
//     case '2':                            
//         alert('вы ввели 2')             
//         break
//     case 3:                              
//         alert('Никогда не выполнится')
//         break
//     default:
//         alert('Неизвестное значение')       // qwer Nan
// }
// console.log( arg);


        //ОПЕРАТОР НУЛЕВОГО СЛИЯНИЯ

//  a??b  a, если а не определено, то b

// let user;
// alert(user?? 'Аноним')          //Аноним

// let user ='John';             // John
// alert(user?? 'Аноним')         
// //потому что user = John

// let user ='';        // user= пустое   
// alert(user?? 'Аноним') 


// let firstName = null
// let lastName = null
// let nickName = 'Naruto01'

// alert(firstName ?? lastName ?? nickName ?? "Аноним")     // Naruto01 т к он не  non и не underfine


// let firstName = null
// let lastName = null
// let nickName = 'Naruto01'

// alert(firstName || lastName || nickName || "Аноним")     // Naruto01 т к он не  non и не underfine  || - или


//       знак || или, такое же знаечение как и ??? он был создан первым? разница || возвращает истинное значение, не возвращает пустое значение, ?? оперед значение
