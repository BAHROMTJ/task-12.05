function volumeOfBox(sizes) {
    return	sizes.length*sizes.width*sizes.height
    }




    function absolute(n) {
        return n<0?-n:n
    }




    function isLastCharacterN(word) {
        return word.charAt(word.length-1)==="n"
    }




    function areTrue(a, b) {
        if (a == true) {
            if (b == true) {
                return "both";
            }
            else if(a==true) {
                return "first";
            }
        }
        else if (b == true) {
            return "second";
        }
        else if(a==false&&b==false){
            return "neither";
        }
    }





    function toNumberArray(arr) {
        return arr.map(x => +x);
    }




    function frontThree(str) {
        return str.slice(0,3).repeat(3)
    }




    function isPlural(word) {
        return word.charAt(word.length-1)=='s'
    }


    function firstLast(name) {
        let b=name.charAt(0)+name.charAt(name.length-1)
        return b
        }


        function equalSlices(total, people, each) {
            return people*each<=total
        }



        function stutter(word) {
            let b=word.slice(0,2)+"... "
            
            return b.repeat(2)+word+'?'
        }



        // Change the string so that it will evaluate to head = 1 and tail = [2, 3, 4] 
// Use the Rest element
const str = '[head, ...tail] = [1, 2, 3, 4]'




function greaterThanOne(frac) {
	let b=frac.split("/")
	return b[0]/b[1]>1
}





function moodToday(mood) {
    if(mood==undefined)return "Today, I am feeling neutral"
        else return `Today, I am feeling ${mood}`
    }







    writeyourcodehere = [first, second, third, ...other] = [
      1, 2, 3, 4, 5, 6, 7, 8,
    ];

    function validStrNumber(n) {
      return isNaN(n) == false;
    }

   

   
function newWord(str) {
    return str.slice(1);
  }
  


  function flipBool(b) {
    return Number(b != true);
  }


  
  const helloName = (name) => "Hello " + name + "!";
  
  function isEvenOrOdd(num) {
    return num % 2 == 0 ? "even" : "odd";
  }
  

  
  function isOdd(num) {
    return num % 2 !== 0;
  }

