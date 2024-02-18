> **🗒 Note:** All the information you need to complete this Milestone is in the README. Try solving the problem on your own first! Below are some hints on breaking the problem down if you find yourself stuck.

## Step 1: Implementing `filterByCity()`
We recommend using a `for` loop to iterate over each element in `listingCityArray`. Compare each item with `targetCity`. If an item matches `targetCity`, you can `push()` its index to a new array to store it. Finally, you can return the array from the function once the loop is finished.

```js
// Example pseudocode

// define array to keep track of indices
// create loop with initialization, condition, and incrementer 
// for each listing city array, check if target city matches (account for capitalization)
// if they match, add the listing array index into indices array
// end loop and return indices array

```

> ### filterByCity Example 1
> `filterByCity("San Diego", ["Lake Tahoe", San Diego", "Chicago"])`
>
> If the `targetCity` is "San Diego" and `listingCityArray` is `["Lake Tahoe", San Diego", "Chicago"]` the function should return an array with one number: `[1]`. This is because "San Diego" is at `listingCityArray[1]`.
<hr>

> ### filterByCity Example 2 
> `filterByCity("San Diego", ["San Diego", "Lake Tahoe", "san diego"])`
> 
> If the `targetCity` is "San Diego" and `listingCityArray` is `["San Diego", "Lake Tahoe", "san diego"]` the function should return an array with two numbers: `[0, 2]`.  This is because the elements at `listingCityArray[0]` and `listingCityArray[2]` both match "San Diego" when capitalization/case is ignored.

## Step 2: Implementing `filterByPrice()`
We recommend using a `for` loop to loop over each element in `listingPriceArray`. Compare each item with `minPrice` and `maxPrice`. If an element is less than `maxPrice` and more than `minPrice`, you can add its index to a new array to hold on to it. Finally, you can return the array from the function once the loop is finished.

> ### filterByPrice Example
> `filterByPrice(100, 300, [50, 120, 500, 200])`
>
> If `minPrice` is `100`, `maxPrice` is `300`, and `listingPriceArray` is `[50, 120, 500, 200]` the function should return an array with two numbers: `[1,3]`.  This is because `120` and `200` are between the min and max price and at the 1st and 3rd index of `listingPriceArray`, respectively.

## Step 3: Implementing `filterByTypes()`
There are a few different ways you can go about solving this problem. One way is with nested `for` loops. The outer loop can loop over each element in `listingTypeArray` and the inner loop can loop over each element in `targetTypes`. Here is [some documentation on nested loops](https://www.freecodecamp.org/news/nesting-for-loops-in-javascript/).

> ### filterByTypes Example
> If `targetTypes` is `["entire-place", "private-room"]` and `listingTypeArray` is `["private-room", "shared-room", "shared-room", "private-room", "entire-place"]` the this function should return `[0, 3, 4]`.