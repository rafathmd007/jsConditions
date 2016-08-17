
/////// tar1
var num1=3;
var num2=5;

if(num1>num2)
	console.log("num1"+" " + num1 +" " + "big then num2"+" " +num2);
else console.log("num2"+ " "+num2+ " "+"big then num1"+ " "+num1);


/////////tar2

var num3=3;
var num4=-7;
var num5=2;

 var sum=num3+num4+num5;
 if(sum<0)
 console.log("the type is -");
 else console.log("the type is +");


//tar3

var num6=5;
var num7=4;
var num8=0;
var temp;

for(i=0;i<2;i++)
{
if(num6>num7 )
{
	temp=num6;
	num6=num7;
	num7=temp;
	
}
if (num7>num8 )
{
	temp=num7;
	num7=num8;
	num8=temp;
}
}
console.log("sort:");
console.log (num6 ,num7, num8);

/// tar4

var a=-5,b=2,c=-6,d=0,f=-1,max;

max=a;
if(b>max)
max=b;
if (c>max)
max=c;
if (d>max)
max=d;
if (f>max)
max=d;
console.log("the max number:"+max);
avgArray=[80,77,88,95,68];
for(var i=0;i<avgArray.length;i++)
{
	sum+=avgArray[i];
	
	
}
sum/=avgArray.length;
if(sum<=60)
console.log("גרוע מאוד:"+sum);
if(sum>60 && sum<=70)
console.log("גרוע:"+sum);
if(sum>70 && sum<=80)
console.log("בינוני:"+sum);
if(sum>80 && sum<=90)
console.log ("טוב:"+sum);
if(sum >90 && sum<=100)
console.log("טוב מאוד:"+sum);

