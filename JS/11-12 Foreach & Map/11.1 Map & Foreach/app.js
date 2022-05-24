// Instructions
// You are getting an array of objects of the recent video releases from
// your database.(array below). We only care about the portion of data
// we are getting.
// 1.Create a function that will loop over the array with the forEach 
// method. Return from the function an array of objects. Each object 
// will contain the id and name of the specific movie.
// 2. Create another function that will do the same thing expect now 
// use the map method



//  1. ///

const newReleases = [
        {
          id: 70111470,
          title: "Die Hard",
          boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
          uri: "http://api.netflix.com/catalog/titles/movies/70111470",
          rating: [4.0],
          bookmark: [],
        },
        {
          id: 654356453,
          title: "Bad Boys",
          boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
          uri: "http://api.netflix.com/catalog/titles/movies/70111470",
          rating: [5.0],
          bookmark: [{ id: 432534, time: 65876586 }],
        },
        {
          id: 65432445,
          title: "The Chamber",
          boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
          uri: "http://api.netflix.com/catalog/titles/movies/70111470",
          rating: [4.0],
          bookmark: [],
        },
        {
          id: 675465,
          title: "Fracture",
          boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
          uri: "http://api.netflix.com/catalog/titles/movies/70111470",
          rating: [5.0],
          bookmark: [{ id: 432534, time: 65876586 }],
        },
      ];
      const findTitleAndId = (arr) =>{
      newArr = [];
      arr.forEach(movie => {
        newArr.push({name:movie.title, id:movie.id });
      });
      return newArr;
      }
  console.log(findTitleAndId(newReleases));

  
  const mapNameAndId = (arr) =>{
        
          const arrOfObj = arr.map(function (movie1) {
                  return {name: movie1.title, id:movie1.id} 
                });
          return arrOfObj;
  }
  console.log(mapNameAndId(newReleases));