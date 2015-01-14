function loadDict() {
if(localStorage.getItem("xiandai")=="loaded"){
alert("hehe");
return;
}
alert("hehe2");

//alert(this.dname);
$.ajaxSetup({  
    async : false  
}); 
    $.get('xiandai.xml',
    function(data) {
        //console.log(mythis.dname);
var wordlist =new Array();
var wordmap=new Array();
        var i = 0;
        $(data).find("entry").each(function() {
            
            //if (i > 10) {
            //    return false;
            //};

            var d = $(this).text();
            var w = $(this).attr("key");
            wordmap[w] = d;
	    wordlist[i]=w;
i++
localStorage.setItem("xiandai_"+w,d);
        });
        ///
        ///
        wordlist.sort(function(a, b) {
            var elementone = makePy(a.substring(0, 1))[0];
            var elementtwo = makePy(b.substring(0, 1))[0];
            var r = 0;
            if (elementone < elementtwo) r = -1;
            if (elementone > elementtwo) r = 1;
            return r;

        });
alert("sorted");
//w.wordlist=wordlist;
//w.wordmap=wordmap;
total="";
        for (w in wordlist) {
var str='<li pinyin="' + makePy(wordlist[w].substring(0, 1))[0] + '" class="ui-li-static ui-body-inherit">' + wordlist[w] + '</li>'
            //$("#g_words").append(str);
total=total+str;
//alert(str);
        }

localStorage.setItem("xiandai_total",total);
localStorage.setItem("xiandai","loaded");
//w.totallist=total;
/*
var a={
wordlist:wordlist,
wordmap:wordmap,
totallist:total
};
//alert(a);
return a;
*/
        //console.log(w.totallist);
        ///
        ///
    });


}
