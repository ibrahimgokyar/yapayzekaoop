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

function showSlide(i)
{
 index = i;
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