
//6. Given the list of the following readers: [ { book: "Catcher in the Rye", readStatus: true, percent: 40}, { book: "Animal Farm", readStatus: true, percent: 20}, { book: "Solaris", readStatus: false, percent: 90 }, { book: "The Fall", readStatus: true, percent: 50 }, { book: "White Nights", readStatus: false, percent: 60 } , { book: "After Dark", readStatus: true, percent: 70 } ]; 
//Output the books sorted by the percent in descending order which readStatus is true.

var books =[
 {
    book: "Catcher in the Rye", 
    readStatus: true, 
    percent: 40
    },
  {
    book: "Animal Farm", 
    readStatus: true, 
    percent: 20
    },
  {
    book: "Solaris", 
    readStatus: false, 
    percent: 90 
    },
   {
     book: "The Fall", 
     readStatus: true, 
     percent: 50
    },
  {
     book: "White Nights", 
     readStatus: false, 
     percent: 60 
    },
  { book: "After Dark", 
   readStatus: true, 
   percent: 70
  }
]
var newArr = [];  
books.sort(function (a, b) {
  if (a.percent > b.percent) {
    return 1;
  }
  if (a.percent < b.percent) {
    return -1;
  }
  return 0;
});
for (var i=0; i<books.length; i++){
  var item =books[i];
 if(item.readStatus === true) {
  var k = newArr.push(item.book+ " "+ item.percent)
  }
}
console.log (newArr)


