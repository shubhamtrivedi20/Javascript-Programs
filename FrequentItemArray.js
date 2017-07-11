var count1 = {};    //  Count how many times item occur in a container
var items = ['Tomato','Onion','Cheese','Garlic','Tomato','Beans']; // Declared an array containing items

var FreqTimes; //Delare freqtimes to store most frequent item


var comp1 = 0; // Compare with items stored in a container initialized to 0


(function(dict1){ // Pass the dict1 as an argument

   len1=dict1.length;  // intitialize arr1.length to len1 

   for(var j = 0; j < len1; j++){  //loop statement for j=0  to len1 and will keep on incerementing

       var word1 = dict1[j] ;  //make dict1[j] initialize to variable word1
       
       if(count1[word1] === void 0)
       { //if count[word1] is not defined or null 

           count1[word1] = 1;  //make count[word1] value to 1

       }

       else //otherwise
       {
           count1[word1] = count1[word1] + 1;   //exiting values will be incremented
       }
       
       if(count1[word1] > comp1){  //if count1[word1] is greater than comp1 
             comp1 = count1[word1]; //make comp1 to count[word]
             FreqTimes = items[j]; //make FreqTimes value
       }
    }

  return FreqTimes; //return frequent times in a container

})(items); //Call (items)