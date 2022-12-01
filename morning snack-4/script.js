
/**
 *
 * Data una lista di 20 numeri diversi.
 * generiamo una lista secondaria di
 * 10 numeri presi dalla lista, diversi tra loro.
 *
 */
 const startingList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
 

 const endList = [ ];


 for (let i = 0;  endList.length < 10; i++) {
   
   endList[i] = Math.floor(Math.random() * startingList[i]);

   if ( endList[i] !== startingList[i] ) {
      endList.push(endList[i]);
      console.log(endList)
   }

   
 }





