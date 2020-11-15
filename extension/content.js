//alert('Spoiler alert')
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
    const re = new RegExp(' die', 'gi')
    //alert(re);
    const matches = document.documentElement.innerHTML.match(re)
    if (matches != null) {
    //alert(matches.length)
        sendResponse({count: matches.length});
    
    } else {
        alert("no spoilers!");
    }
   
      /*let ArrayDom = Array.from( document.getElementsByTagName('h1'));
      alert(ArrayDom);
      var allIDs = [];

        ArrayDom.forEach(element => {
            //alert(element);
            //alert(element.innerHTML);
            if (element.innerHTML.match("Bear")) {
                
                //alert("bear is found");
                //alert(allIDs);

                for (var i = 0, n = ArrayDom.length; i < n; ++i) {
                    var el = ArrayDom[i];
                    //alert(el);
                    
                    allIDs.push(el.id);        
                  
                }
            }
        })


*/


       abc = [];

        var texts = [].map.call( document.querySelectorAll("p,h1,div"), function(v){
            if(v.textContent.match(" die") || v.innerText.match(" die")){
                abc.push(v);
            }
        });
        console.log(abc);
        abc.forEach(element => {
            console.log(element);
            element.style.backgroundColor = "black";
        });
        
    //alert("foundit ");
    //alert(abc);

    
    //document.getElementById(allIDs).style.backgroundColor = "lightblue";



    //let paragraphs = node.innerText.includes('bear');
    /*let element = document.getElementById("firstHeading").textContent;
    alert(paragraphs);
    paragraphs.style.backgroundColor = "red";*/
    //element.originalBackgroundColor = window.getComputedStyle(element).backgroundColor;
   // element.style.backgroundColor = 'green';
   // element.backgroundColorChanged = true;

    //let paragraphs = someNode.textContent
    //someOtherNode.textContent = string
    //alert(paragraphs);
    //for(elt of paragraphs){
        //alert(re);
        //elt.style['background-color'] = 'green';
    //}
    //function ColorIt() {
        /*let element = document.getElementById("firstHeading").innerHTML;
        alert(element);
    paragraphs.style.backgroundColor = "red";*/
    //").style.backgroundColor = "lightblue";
    //function myFunction() {
        
        //document.getElementById("firstHeading").style.backgroundColor = "lightblue";
     // }
//}

        //ColorIt();

})







//document.body.innerHTML.replace(/Bear/g, "XYZ");
    //var allElements = document.getElementsByTagName('h1');
    //var allElements = $("div:contains('bear')" )
   
    //var allElements = $(" :contains('bear') ")
    //var allElements = $('div').filter ((i, e) => e.innerText.toLowerCase().indexOf("f")>-1)
    //var allElements = $("div:contains('bear')" )
    //alert(allElements);
    

    //function search_word(allElements, word) {
      //  alert("allIDs");}
