function UniqueCharacters(str1)//Make function called UniqueCharacters and pass str1 as an argument

{
  len=str1.length; // Initialize str1.lenth to len
    
    for(index=0; index<len; index++){ 
      //Use a for loop for an index that will run from from 1st character of str1 to last character of str1
    
       if(str1.lastIndexOf(str1[index]) == str1.indexOf(str1[index])){
         // Condition for checking that last character in the str1 is equal to any of the characters inside the str1  
    
            return false // then will return false
    
        }
        else
        
        {// otherwise
    
    return true
   }
  }
}
UniqueCharacters('Orange');// Passing Orange as a str1 to UniqueChaarcters