
# Airbnb 🛅

## Contents
- Introduction
- Starter Code
- Deliverable
- LevelUp! (Extra Credit)
- Extra Help (If Needed)

## Introduction

You'll be working with the Airbnb development team to prototype a new and improved search and filter experience. Other developers on the team have written code that will add search results to the webpage. Your task is to make sure the *correct search results* are being added to the page based on the search term and filtering options. 

The final user experience should function [like this](https://i.imgur.com/xewHeDQ.mp4).

## Starter Code

There is existing code in `provided.js` that will implement the search feature and show results to the user. This code is wired to call the three functions included in `script.js`. The functions you complete in `script.js` will filter the search results based on the user's query and filtering options.

Note that you are writing a small bit of code that fits into a larger whole. This is oftentimes how the real world works. You won't always be familiar with the majority of code in a large project. The key is to understand how your piece fits in.  

> **🗒 Note:** The only file you'll need to edit to complete these tasks is `script.js`.

## Deliverable

Below are the two filtering functions you'll need to complete, as well as a Level Up you can try (number three)!

### 1. **`filterByCity(targetCity, listingCityArray)`**

| Parameter | Type | Example Argument |
| ---- | ---- | ---- |
| `targetCity` | String | `"San Diego"` |
| `listingCityArray` | Array | `["Lake Tahoe", "San Diego", "Chicago"]` |

This function should return an array with each index from `listingCityArray` where the city matches `targetCity` **ignoring capitalization/case**.

<hr>

### 2. **`filterByPrice(minPrice, maxPrice, listingPriceArray)`**
   
| Parameter | Type | Example Argument |
| ---- | ---- | ---- |
| `minPrice` | Number | `100` |
| `maxPrice` | Number | `300` |
| `listingPriceArray` | Array | `[132, 430, 73, 198]` |

This function should return an array with each index from `listingPriceArray` where the price is between the minimum and maximum price specified by the user. 


## LevelUp! (Extra Credit)
Feel like you want to keep going? Tackle the `filterByTypes` function to snag some extra credit:

### 3. **`filterByTypes(targetTypes, listingTypeArray)`**

| Parameter | Type | Example Argument |
| ---- | ---- | ---- |
| `targetTypes` | Array | `["entire-place", "private-room"]` |
| `listingTypeArray` | Array | `["entire-place", "private-room", "shared-room"]` |

This function should return an array with each index from `listingTypeArray` where the type of listing matches *ANY* of the `targetTypes`.


## Extra Help (If Needed)
You have everything you need to get started and complete this task. You should try it on your own first! Use your decomposition skills to break each task down into smaller steps and don't hesitate to practice your Google Fu. If you're still having trouble, check out `HINTS.md` for some extra help.
