const hour=document.querySelector("#hour");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");
let dteobj=new Date();

let month=document.querySelector("#month");
let year=document.querySelector("#year");
let day=document.querySelector("#day");






const motivationalQuotes = [
    `You only have to be right once. — Drew Houston, founder of Dropbox`,
    `I’m not afraid to take a swing and miss. — Fred Smith, founder of FedEx Corporation`,
    `When there is no struggle, there is no strength. — Oprah Winfrey, media executive`,
    `Opportunities don’t happen, you create them. — Chris Grosser, entrepreneur`,
    `Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine. — Jack Ma, founder of Alibaba group`,
    `Nothing will work unless you do. — Maya Angelou, poet`,
    `If you love what you do and are willing to do what it takes, it’s within your reach. — Steve Wozniak, co-founder of Apple Computer`,
    `Setting goals is the first step in turning the invisible into the visible. — Tony Robbins, life coach`,
    `There’s no shortage of remarkable ideas, what’s missing is the will to execute them. — Seth Godin, writer`,
    `Never, never, never give up. — Winston Churchill, former British Prime Minister`,
    `Whether you think you can, or you think you can’t — You’re right. — Henry Ford, founder of Ford Motor Company`,
    `Things do not happen. Things are made to happen. — John F. Kennedy, former President of the United States`,
    `If you want to achieve greatness stop asking for permission. — Anonymous`,
    `I have not failed. I’ve just found 10,000 ways that won’t work. — Thomas A. Edison, inventor`,
    `The function of leadership is to produce more leaders, not more followers. — Ralph Nader, political activist`,
    `I find that the harder I work, the more luck I seem to have. — Thomas Jefferson, former President of the United States`,
    `Don’t be afraid to give up the good to go for the great. — John D. Rockefeller, business magnate`,
    `Our greatest weakness lies in giving up. The most certain way to succeed is always to try one more time. — Thomas A. Edison`,
    `There are no shortcuts to anywhere worth going. — Beverly Sills, opera singer`,
    `It’s not whether you get knocked down, it’s whether you get back up. — Vince Lombardi, Football Hall of Fame coach`,
    `The way to get started is to quit talking and begin doing. — Walt Disney, film producer`,
    `If you can’t fly, then run. If you can’t run, then walk. If you can’t walk, then crawl, but whatever you do, you have to keep moving forward. — Martin Luther King, Jr., civil rights activist`,
    `You miss 100 percent of the shots you don’t take. — Wayne Gretzky, NFL Hall of Famer`,
    `The biggest risk is not taking any risk… In a world that’s changing really quickly, the only strategy that is guaranteed to fail is not taking risks. — Mark Zuckerberg, co-founder of Facebook`,
    `Preparation is the key to success. — Alexander Graham Bell, co-founder of AT&T`,
    `Today a reader. Tomorrow a leader. — Anonymous`,
    `Many of life’s failures are people who did not realize how close they were to success when they gave up. — Thomas A. Edison`,
    `Even if people are still very young, they shouldn’t be prevented from saying what they think. — Anne Frank, diarist`,
    `You can, you should, and if you’re brave enough to start, you will. — Stephen King, author`
  ];
  


const quotes=document.querySelector("#q");
console.log(motivationalQuotes.length);
console.log(motivationalQuotes[0]);


function generatequotes(){
    let r=Math.floor(Math.random()*(motivationalQuotes.length));

    quotes.innerText=motivationalQuotes[r];
}





//date and clock

function clk(){
    let a=new Date();
    let h=a.getHours();
    let m=a.getMinutes();
    let s=a.getSeconds();

    hour.innerText=h;
    minutes.innerText=m;
    seconds.innerText=s;

}

day.innerHTML=dteobj.getDate();
month.innerHTML=dteobj.getMonth();
year.innerHTML=dteobj.getFullYear();
setInterval(clk,1000);

// date and clock


//stopwatch

const stphour=document.querySelector("#stphours");
const stpminutes=document.querySelector("#stpminutes");
const stpseconds=document.querySelector("#stpseconds");
let num=0;let mint=0;let hrs=0;

function stopwatch(){
    
    if(num<10){
    stpseconds.innerText="0"+num;
    }else{
        stpseconds.innerText=num;
    }

    if(num==60){
        mint++;
        if(mint<10){
            stpminutes.innerText="0"+mint;
        }else if (mint==60){
            stpminutes.innerText="00";
        }
        else{
        stpminutes.innerText=mint;
        }
        num=0;
    }

    if(mint==60){
        hrs++;
        mint=0;

        if (hrs<10){
            stphour.innerText="0"+hrs;
        }else{
        stphour.innerText=hrs;
        }
        
    }


    num++;
}


// setInterval(stopwatch,1000);

//button function
const start=document.querySelector("#start");
const pause=document.querySelector("#pause");
const stop=document.querySelector("#stop");


start.addEventListener("click",startstp);
pause.addEventListener("click",pausestp);
stop.addEventListener("click",stopstp);



let minterval;

function startstp(){
   minterval= setInterval(stopwatch,1000);
}

function pausestp(){
   
    clearInterval(minterval);
}


function stopstp(){
   
    clearInterval(minterval);
    stphour.innerText="00";
    stpminutes.innerText="00";
    stpseconds.innerText="00";
    num=0;
    mint=0;
    hrs=0;
}

//generating quotes
setInterval(generatequotes,5000);




const night=document.querySelector("#night");
let flag =false;
night.addEventListener("click",mode);

function mode(){
    // flag =flase;
   if (flag){
    nighton();
   }else{
    nightoff();
   }
   flag =!flag;
}


function nightoff(){
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
    flag =false;
}

function nighton(){
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
    flag =true;
}

