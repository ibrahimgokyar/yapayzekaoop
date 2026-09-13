var models = 
[
{
     name : 'Bmw X5',
     image : 'img/bmw.jpg',
     link :  'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
},
{
        name : 'Honda Cx',
        image : 'img/honda.jpg',
        link :  ' http://www.arabalar.com.tr/honda/civic/2022/1-5-eco-elegance-cvt'
},
{
        name : 'Mazda YX',
        image : 'img/mazda.jpg',
        link :  ' http://www.arabalar.com.tr/nissan/micra'
},
{
        name : 'Skoda Superb',
        image : 'img/skoda.jpg',
        link : ' http://www.arabalar.com.tr/honda/civic/2022/1-5-eco-elegance-cvt'
},
{
        name : 'Volvo',
        image : 'img/volvo.jpg',
        link :  ' http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
}

] ;
var index = 0;
var slayCount = models.length;


var settings = {
    duration : '2000',
    random : true // saniyenin 1000 de 1 
}

init(settings);
function init(settings) {
       var prevIndex;
       interval =  setInterval(function() {
          
            if(!settings.random )
            {
                //do while 
                do{

                 index =   Math.floor( Math.random() * slayCount);  //otomatik bir index üretilecek 
                }while(index = prevIndex) //üretilen index numarası bir önceki index numarası ile eşitse onu tekrar üretmesi için do nin içine çalıştır
                prevIndex = index
            }
            else
            {
                if(slayCount == index+1) {
                    index = -1;
                }
                showSlide(index);
                index++;
            }

        },settings.duration)
}

function showSlide(i)
{
 index = i;
    if(i<0)
    {
          index = slayCount -1;  // index değeri 0 dan küçük olduğunda  en sondaki slayta geç
    }
    if(i>= slayCount)
    {
        index = 0;  // i nin değeri dizinin eleman sayısına eşitse en baştaki slayta geç 
    }
  console.log(models[index].name);
  document.querySelector('.card-title').textContent = models[index].name;
  document.querySelector('.card-img-top').setAttribute('src',models[index].image);
  document.querySelector('.card-link').setAttribute('href', models[index].link);
}




document.querySelector('.fa-arrow-circle-right').addEventListener('click',function()
{
    index++;
    console.log(index);
    showSlide(index);
});

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function() {
    index--;
    console.log(index);
    showSlide(index);

});


document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function() {
        clearInterval(interval); //döngüyü durdur.
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function() {
       init(settings);
    })
});