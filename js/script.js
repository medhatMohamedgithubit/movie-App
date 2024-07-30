let moiveList=[];

$("#open").on("click",function(){
    $(".nav").animate( {width:"0"},500)
    $(".socil-icon").animate( {width:"0"},500)
    $("nav").animate({   left:"0"},500)
    $("#open").addClass("d-none")
    $("#close").removeClass("d-none")
    $(".nav").addClass( "d-none")
    $(".socil-icon").addClass("d-none")
})
$("#close").on("click",function(){
    $(".nav").animate( {width:"15.125rem"},500)
    $(".socil-icon").animate( {width:"15.125rem"},500)
    $("nav").animate({left:"15.125rem"},500)
    $("#close").addClass("d-none")
    $("#open").removeClass("d-none")
    $(".nav").removeClass( "d-none")
    $(".socil-icon").removeClass("d-none")
    $(".nav").addClass( "d-block")
    $(".socil-icon").addClass("d-block")
    
})
async function showMovie(){
    let res = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44")
    let finelRes = await res.json();
   console.log(finelRes );
   moiveList=finelRes.results
   display()
}

showMovie()


function display(){
    let displayMovie=``;
    for(let i =0;i<moiveList.length;i++){
        displayMovie+=`
        
     <div class="col-md-4 gy-4">
         <div class="inner position-relative overflow-hidden ">
              <figure>
                <img src="image/${moiveList[i].poster_path}" class="w-100 " alt>
              </figure>
              <figcaption >
                <h2 class="text-white " >${moiveList[i].original_title                }</h2>
                <p class="text-white fs-5">${moiveList[i].overview}</p>
                <p class="text-white fs-6">release_date: ${moiveList[i]. release_date}</p>
                <span>${moiveList[i].vote_average }</span>
              </figcaption>

            </div>
            
      </div>
        
  `
        
       
    }
    document.querySelector("#data").innerHTML= displayMovie;
}
async function nowPlaying(){
    let res = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44")
    let finelRes = await res.json();
   console.log(finelRes );
   moiveList=finelRes.results
   display()
}
let nowPlay = document.querySelector("#nowPlaying");
nowPlay.addEventListener('click',function(){
    nowPlaying()

})
async function PopularMovie(){
    let res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44")
    let finelRes = await res.json();
   console.log(finelRes );
   moiveList=finelRes.results
   display()
}
let Popular = document.querySelector("#Popular");
Popular.addEventListener('click',function(){
    PopularMovie()

})
async function ratedMovie(){
    let res = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44")
    let finelRes = await res.json();
   console.log(finelRes );
   moiveList=finelRes.results
   display()
}
let rated = document.querySelector("#rated");
rated.addEventListener('click',function(){
    ratedMovie()

})

async function UpcomingMovie(){
    let res = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44")
    let finelRes = await res.json();
   console.log(finelRes );
   moiveList=finelRes.results
   display()
}
let Upcoming = document.querySelector("#Upcoming");
Upcoming.addEventListener('click',function(){
    UpcomingMovie()

})

async function searchMovie(){
    let res = await fetch("https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44")
    let finelRes = await res.json();
   console.log(finelRes );
   moiveList=finelRes.results
   display()
}
let search = document.querySelector("#search");
search.addEventListener('keyup',function(){
    searchMovie()

})