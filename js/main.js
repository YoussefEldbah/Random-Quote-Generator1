var quetes = [
    { quete: "“Be yourself; everyone else is already taken.” ", author: "--Oscar Wilde" },
    { quete: "“So many books, so little time.”", author: "--Frank Zappa " },
    { quete: "“Do not take life too seriously. You will not get out alive. “", author: "--Elbert Hubbard " },
    { quete: "The best revenge is massive success.    ”", author: " --Frank Sinatra  " },
    { quete: "“It's not what happens to you, but how you react to it that matters.”", author: "--Epictetus" },
    { quete: "“Be the change that you wish to see in the world.”", author: "--Mahatma Gandhi" },
    { quete: "“If you tell the truth, you don't have to remember anything.”", author: "-- Mark Twain" },
    { quete: "“It is better to be hated for what you are than to be loved for what you are not.”", author: "-- Andre Gide, Autumn Leaves    " },

]
//console.log(quetes);
function showQuete() {
    var x=Math.floor(Math.random()*quetes.length);
    document.getElementById("quete").innerHTML=quetes[x].quete;
    document.getElementById("author").innerHTML=quetes[x].author;

}