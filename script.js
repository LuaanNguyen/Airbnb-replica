function filterByCity(targetCity, listingCityArray) {
  let matchedCity = [];
  for (let i = 0; i < listingCityArray.length; i++) {
    if (targetCity.toLowerCase() === listingCityArray[i].toLowerCase()) {
      //return an index of listingCityArray to array matchedCity (not the actual place)
      matchedCity.push(i);
    }
  }
  console.log(matchedCity);
  return matchedCity;
}

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  let matchedPrice = [];
  for (let j = 0; j < listingPriceArray.length; j++) {
    if (listingPriceArray[j] >= minPrice && listingPriceArray[j] <= maxPrice) {
      matchedPrice.push(j);
      // console.log(matchedPrice);
    }
  }
  return matchedPrice;
}

// LevelUp!
function filterByTypes(targetTypes, listingTypeArray) {
  // hey, this will just let you test that your previous two functions work
  // comment this next line out if you'd like to keep working on this level up function
  // you are really close!
  
  // return [...listingTypeArray.keys()];
  
  // to test, you might need to comment out the code below as well
  // just make sure to comment out line 30 when you want to test your own code out below
  // does that make sense


  // that was my bad, I was using the wrong array, the error is gone! you should keep working on your version though because you're super close. I gotta go now though but now you can see that your two other functions work, nice job! 
  //Thank you!

  // that's on our end, I think it is set up to need all 3. your code above looks all correct, we should be able to test it now
  // sorry this just worked on mine lol one second
  // ok the search works now even though there is still an error

  let matchedListing = [];
  
  for (let i = 0; i < listingTypeArray.length; i ++) {
    for ( let j = 0; j < targetTypes.length ; j ++) {
      if ( targetTypes[j] === listingTypeArray[i]) {
        matchedListing.push(i);
      }
    }
  }
  return matchedListing;
  
}