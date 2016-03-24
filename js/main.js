// Function to save the movies
function selectMovies() {
    //gets table
    var oTable = document.getElementById('movies');
    //gets rows of table
    var rowLength = oTable.rows.length;
    //set Movie List
    movies = [];

    //loops through rows    
    for (i = 1; i < rowLength; i++) {
        //gets cells of current row  
        var oCells = oTable.rows.item(i).cells;
        var check = oCells[1].childNodes[0].checked;
        var movie = oCells[2].innerHTML;
        var dir = oCells[4].childNodes[0].value;
//        console.log('dir= '+dir);

        // Add Unique ID
        var newDate = new Date();
        id = newDate.getTime();


//        var movieList = JSON.parse(localStorage.getItem('movies'));
        if (check) {
            // New Task Object
            var new_movie = {
                "id": id,
                "name": movie,
                "dir": dir
            };
            movies.push(new_movie);
            localStorage.setItem('movies', JSON.stringify(movies));
            console.log('Movies Added');
        }
        if (movies !== null)
            location.assign('movielist.html')
    }

}

function showMovieList() {
    var movieList = JSON.parse(localStorage.getItem('movies'));
    // Sort Tasks
    if (movieList != null) {
        movieList = movieList.sort(sortByName);
    }

    // Check movies
    if (localStorage.getItem('movies') != null) {
        // Loop through and display
        var qtd = 0;
        $.each(movieList, function (key, value) {
            qtd++;
            $('#movies').append('<tr id="' + value.id + '" ><th scope=row>' + qtd + '</th>' +
                    '<td>' + value.name + '</td>' +
                    '</tr>');
        })
        $('#movies').append('</tbody>');
    }

}
// Function to sort tasks
function sortByName(a, b) {
    var aName = a.name;
    var bName = b.name;
    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}



function getSubtitles() {
    $('#getsubtitles').remove();
    var movieList = JSON.parse(localStorage.getItem('movies'));
    // Sort Tasks
    if (movieList != null) {
        movieList = movieList.sort(sortByName);
    }

    // Check movies
    if (localStorage.getItem('movies') != null) {
        var i = 0;
        var qMovies = movieList.length;
        // Loop through and display
        $.each(movieList, function (key, value) {
            i++;
            var percent = (i / qMovies * 100);
            parse(value.name, value.dir);
        })
    }
    $('#fim').append('<h1>Fim da busca por legendas</h1>\n\ ');
    $('#fim').append('<h1></h1>\n\ ');
    $('#fim').append('<button id="final" class="btn btn-default" onclick="fim()" type="submit">Voltar ao Inicio</button>');

//    location.assign('index.html');

}

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

function setdir() {
    // save directory
    var dir = $('#directory').val();
    var virtual = document.getElementById('virtual').checked;
    var computer = document.getElementById('computer').value;
    var nolegends = document.getElementById('nolegends').checked;
    localStorage.setItem('dir', dir);
    localStorage.setItem('virtual', virtual);
    localStorage.setItem('computer', computer);
    localStorage.setItem('nolegends', nolegends);

    location.assign('searchmovies.html?dir=' + dir + '&computer=' + computer + '&nolegends=' + nolegends);
}

function index() {
    location.assign('index.html');
}

function gets(msg) {
    var r = [];
    var n = msg.search(/[/]en[/]subtitleserve[/]sub/i);
    while (n > 0) {
//    console.log('msg='+msg+'  n='+n);
        i++;
//    console.log('n='+n);
        var msg1 = msg.substr(n);
        n = msg1.search(/["]/);
        if (n) {
            r.push(msg1.substr(0, n));
            msg = msg1.substr(n);
        }
//    console.log(msg2+'   n='+n);
        n = msg.search(/[/]en[/]subtitleserve[/]sub/i);
        if (i > 200)
            n = -10;
    }
    return r;
}

function showComputer() {
    if (document.getElementById("virtual").checked) {
        if (document.getElementById("computer").value == '')
            document.getElementById("computer").value = "\\\\FLAVIO-PC\\Movies";
        document.getElementById("lcomputer").style.display = "inline";
        document.getElementById("computer").style.display = "inline";
    } else {
        document.getElementById("lcomputer").style.display = "none";
        document.getElementById("computer").style.display = "none";
    }


}


function lixo() {
    ;
//var i = 0;
//var msg = '    <a href="/en/subtitleserve/sub/6302967" onclick="reLink(event,"/en/subtitleserve/sub/6302967");">275x</a>';
//msg = msg + '    <a href="/en/subtitleserve/sub/xxxxxxX" onclick="reLink(event,"/en/subtitleserve/sub/6302967");">275x</a>';
//
//
//gets(msg);//
//
//
//<link rel="alternate" hreflang="en" href="http://www.opensubtitles.org/en/subtitles/6302982/6-years-pb" />
//
//<link rel="bookmark" href="/en/subtitles/6302982/6-years-pb" title="Subtitles 6 Years - subtitles portuguese (br) 1CD srt (pob) " />
//<meta name="robots" content="noindex,follow" />
//<link rel="alternate" type="application/xml" href="http://www.opensubtitles.org/en/subtitles/6302982/6-years-pb/xml" title="XML version" />
//<link rel="stylesheet" type="text/css" href="http://static.opensubtitles.org/style.css" /><title>Subtitles 6 Years - subtitles portuguese (br) 1CD srt (pob) </title>\n\
//
//<a href="/en/login/redirect-|en|subtitles|6302982|6-years-pb" onclick="Login('/en/subtitles/6302982/6-years-pb');return false;">Log-In</a>
//
//<a id="thank_you" href="javascript:void(0)" class="bt-dwl bt-th" rel="6302982" ret="/en/subtitles/6302982/6-years-pb">Thanks</a>
//
//<a onclick="reLink(event,'/en/subtitles/6302980/6-years-pb');" title="Legenda de Subpack, ripada por AlbustigriS. Sinopse: Um jovem casal, Dan (Ben Rosenfield) e Mel (Taissa Farmiga), se conhecem desde a infância e estão namorando há 6 anos. A princípio, eles parecem ter um amor ideal, mas a notícia de uma oportunidade de e" href="/en/subtitles/6302980/6-years-pb">6.Years.2015.WEB-DL.x264-RARBG</a>
//
//
//<fieldset>
//<legend>
//<span class="flag pb"></span>\n\
//<a class="none" href="/en/search/sublanguageid-pob/idmovie-354967" title="All subtitles for this movie in this language - Portuguese (BR) (pb)">6 Years subtitles Portuguese (BR) </a>\n\
//</legend>\n\
//<table style="width:100%;border-spacing: 1px;">
//<tr style="background:#d8d8d8;" class="head">
//<th>Release name</th>\n\
//<th>#CD	</th>\n\
//<th>Uploaded</th>\n\
//<th><img width="16" height="16" src="http://static.opensubtitles.org/gfx/icons/saveicon.gif" title="Downloaded" alt="Downloaded" /></th>\n\
//<th><img width="16" height="16" src="http://static.opensubtitles.org/gfx/icons/rating_sub.gif" title="Subtitle rating" alt="Subtitle rating" /></th>\n\
//<th><img width="16" height="16" src="http://static.opensubtitles.org/gfx/icons/comment_sm.gif" title="" alt="" /></th>\n\
//<th class="head">Uploader</th>\n\
//</tr>\n\
//<tr class="change even">
//<td style="width:400px;">
//<a onclick="reLink(event,'/en/subtitles/6302980/6-years-pb');" title="Legenda de Subpack, ripada por AlbustigriS. Sinopse: Um jovem casal, Dan (Ben Rosenfield) e Mel (Taissa Farmiga), se conhecem desde a infância e estão namorando há 6 anos. A princípio, eles parecem ter um amor ideal, mas a notícia de uma oportunidade de e" href="/en/subtitles/6302980/6-years-pb">6.Years.2015.WEB-DL.x264-RARBG</a>\n\
//<img style="margin-left:3px" src="http://static.opensubtitles.org/gfx/icons/from_trusted.gif" title="Subtitles from trusted source" alt="Subtitles from trusted source" /></td>\n\
//<td style="text-align:center;">1CD</td>\n\
//<td style="text-align:center;">
//<time class="timeago" datetime="2015-09-12T06:56:28+02:00" title="12/09/2015 06:56:28">12/09/2015</time></td>
//<td style="padding-right:10px;text-align:right;">
//<a href="http://dl.opensubtitles.org/en/download/sub/6302980">153x</a></td>
//<td style="text-align:right;padding-right:4px;">0.0</td>\n\
//<td style="text-align:center;">0</td>\n\
//<td style="width:50px">
//<a class="none" title="subtranslator" href="/en/profile/iduser-504116">noriegaRJ</a></td></tr>\n\
//<tr class="change odd">
//<td style="width:400px;">
//<a onclick="reLink(event,'/en/subtitles/6302967/6-years-pb');" title="Legenda de Subpack, ripada por AlbustigriS. Sinopse: Um jovem casal, Dan (Ben Rosenfield) e Mel (Taissa Farmiga), se conhecem desde a infância e estão namorando há 6 anos. A princípio, eles parecem ter um amor ideal, mas a notícia de uma oportunidade de e" href="/en/subtitles/6302967/6-years-pb">6.Years.2015.HDRip.XviD.AC3-EVO</a>\n\
//<img style="margin-left:3px" src="http://static.opensubtitles.org/gfx/icons/from_trusted.gif" title="Subtitles from trusted source" alt="Subtitles from trusted source" /></td>\n\
//<td style="text-align:center;">1CD</td>\n\
//<td style="text-align:center;">
//<time class="timeago" datetime="2015-09-12T06:55:08+02:00" title="12/09/2015 06:55:08">12/09/2015</time></td>
//<td style="padding-right:10px;text-align:right;">
//<a href="http://dl.opensubtitles.org/en/download/sub/6302967">275x</a></td>
//<td style="text-align:right;padding-right:4px;">0.0</td>\n\
//<td style="text-align:center;">0</td>\n\
//<td style="width:50px">
//<a class="none" title="subtranslator" href="/en/profile/iduser-504116">noriegaRJ</a></td></tr>\n\
//<tr class="change even">
//<td style="width:400px;"><a onclick="reLink(event,'/en/subtitles/6288183/6-years-pb');" title="" href="/en/subtitles/6288183/6-years-pb">6.Years.2015.HDRip.XviD.AC3-EVO</a></td>
//<td style="text-align:center;">1CD</td>\n\
//<td style="text-align:center;">
//<time class="timeago" datetime="2015-08-30T18:56:31+02:00" title="30/08/2015 18:56:31">30/08/2015</time></td><td style="padding-right:10px;text-align:right;">
//<a href="http://dl.opensubtitles.org/en/download/sub/6288183">1696x</a></td>
//<td style="text-align:right;padding-right:4px;">10.0</td>\n\
//<td style="text-align:center;">0</td><td style="width:50px"><a class="none" title="" href="/en/profile/iduser-0"></a></td></tr></table></fieldset>
//
//<a href="/en/subtitleserve/sub/xxxxxxx" onclick="reLink(event,'/en/subtitleserve/sub/6302967');">275x</a>
//
//    <a href="/en/subtitleserve/sub/6302967" onclick="reLink(event,"/en/subtitleserve/sub/6302967");">275x</a> 
//01234567890123456789012345678901234567890

//
//    $.support.cors = true;
//    $.ajax({
////    http://localhost:8080/legenda/cinu.html
//        url: "http://http://api.opensubtitles.org/en/search/sublanguageid-pob/tag-6.years.2015.720p.web-dl.600mb.mkvcage.mkv",
////    url: "http://www.opensubtitles.org/en/search/sublanguageid-pob/tag-Tenderness (2009) DvdRip [Xvid] {1337x}-X.avi",
////        url: "http://localhost:8080/legenda/cinu.html",
////        url: "http://localhost:8080/legenda/opensubtitles.html",
//        crossDomain: true,
//        dataType: "jsonp",
////        type: "POST",
//        contentType: 'application/jsonp; charset=utf-8',
////        contentType: 'text/javascript; charset=utf-8',
//        success: function (response) {
////            msg=JSON.stringify(response);
//            console.log('success------------------------------');
//            console.log(response);
////            var r = [];
////            var n = msg.search(/[/]en[/]subtitleserve[/]sub/i);
////            while (n > 0) {
////                var msg1 = msg.substr(n);
////                n = msg1.search(/["]/);
////                if (n) {
////                    r.push(msg1.substr(0, n));
////                    msg = msg1.substr(n);
////                }
////                n = msg.search(/[/]en[/]subtitleserve[/]sub/i);
////            }
////            console.log('Retrieved ' + r); // debug note
//
//        }
//        , complete: function (msg) {
//            console.log('complete------------------------------');
//            console.log(msg);
////            console.log(response); // server response
//        }
//        , error: function (jqXHR, textStatus, errorThrown) {
//            alert('meu erro: jqXHR=' + jqXHR + ' textStatus=' + textStatus + ' errorThrown=' + errorThrown)
//        }
//
//    });
////    $.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent('http://www.opensubtitles.org/en/search/sublanguageid-pob/tag-6.years.2015.720p.web-dl.600mb.mkvcage.mkv') + '&callback=?', function (data) {
//        
//        // go through each anchor on page and make ajax request to fetch html
////        data (function (idx, item) {
//                    var url = 'http://www.opensubtitles.org/en/search/sublanguageid-pob/tag-6.years.2015.720p.web-dl.600mb.mkvcage.mkv'; // get url
//                    console.log('Fetching: ' + url); // debug note
//
//                    // make ajax request (http://api.jquery.com/jQuery.ajax/)
//                    $.ajax({
//                        url: url,
//                        async: true,
//                    }).done(function (data) { // data variable contains fetched html
//        alert(data);
//                        var dataRetrieved = $('div', $(data)).html(); // get value we're looking for
//                        console.log('Retrieved ' + dataRetrieved); // debug note
//
//                        out += dataRetrieved + "\n"; // save retrieved value (+ separator)
//                    });
//        console.log("-----------------\nParsing done, output:\n" + out); // print out parsed values
////    })
//    $.support.cors = true;
//           $.ajax({
//            url: 'http://localhost:8080/legenda/json1.php',
//            data: {name: 'Chad'},
//            dataType: 'jsonp',
//            jsonp: 'callback',
//            jsonpCallback: 'jsonpCallback',
//            success: function(){
//                alert("success");
//            }
//        });


//}).done(function (data) { // data variable contains fetched html
//        alert(data);
//                        var dataRetrieved = $('div', $(data)).html(); // get value we're looking for
//                        console.log('Retrieved ' + dataRetrieved); // debug note
//
//                        out += dataRetrieved + "\n"; // save retrieved value (+ separator)
//                    });
//        console.log("-----------------\nParsing done, output:\n" + out); // print out parsed values;
//}
//;

//function myCallback(data) {
//            //data = JSON.parse(data):
//            alert(data);$("#divisionSelect").append($('<option></option>').val("-99").html("Select One"));
//        $.each(data, function(i, item){
//            $("#divisionSelect").append($('<option></option>').val(item.Name).html(item.Name));
//        });
//    }

// from http://stackoverflow.com/questions/14053484/uncaught-syntaxerror-unexpected-token-in-jquery-ajax
//function GetAllCategories() {
//   $.ajax({
//      url: "http://localhost:12015/myWebService.asmx/GetCategories",
//      type: "POST",
//      dataType: "jsonp",
//      data: "{}",
//      contentType: "application/jsonp; charset=utf-8",
//      success: function (data) {
//          var categories = data.d;
//          $.each(categories, function (index, category) {
//              alert(category.CategoryId);
//          });
//      },
//      error: function (e) {
//          alert(e.message);
//      }
//   });
//}

// function PopulateDivisions2(){
//$.support.cors=true;
//$.ajax({
//    type:'GET',
//    url:'http://IP/Service/api/DivisionSearch/GetAllDivisionsJsonP?callback=?',
//    data: {},
//    contentType: 'application/json; charset=utf-8',
//    dataType: 'jsonp',
//    jsonpCallback: "myJsonMethod" });
//
//
//function myJsonMethod(data) {
//            //data = JSON.parse(data):
//            alert(data);$("#divisionSelect").append($('<option></option>').val("-99").html("Select One"));
//        $.each(data, function(i, item){
//            $("#divisionSelect").append($('<option></option>').val(item.Name).html(item.Name));
//        });
//    }}

//var out = ''; // container for fetched values

//function parse() {
//    $('a').each(// go through each anchor on page and make ajax request to fetch html
//            function (idx, item) {
//                var url = $(item).attr('href'); // get url
//                console.log('Fetching: ' + url); // debug note
//
//                // make ajax request (http://api.jquery.com/jQuery.ajax/)
////   $.ajax({
////    url: url, 
////    async: false, // do it synchronously
////   }).done(function(data) { // data variable contains fetched html
////    var dataRetrieved = $('div',$(data)).html(); // get value we're looking for
////    console.log( 'Retrieved ' +  dataRetrieved); // debug note
////     
////    out += dataRetrieved + "\n"; // save retrieved value (+ separator)
////   });
//            }
//    );
//    console.log("-----------------\nParsing done, output:\n" + out); // print out parsed values
//}


//var parser=new DOMParser();
//var text = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?><profiles><profile id=\"1\"><pic>images/profiles/person1/x.jpg</pic><name>Joe Bloggs</name><nickname>J-Bloggs</nickname><age>21</age><email>j.blogs@me.com</email><role>Web Site Manager</role><likes><like1>Food</like1><like2>Drink</like2><like3>Computing</like3><like4>Music</like4></likes><dislikes><dislike1>Rude People</dislike1><dislike2>Rude People</dislike2></dislikes><favwebsite>http://www.facebook.com</favwebsite></profile></profiles>";
//var xml = parser.parseFromString(text,'text/xml');
//var profiles = xml.getElementsByTagName("profile");
//var arr = [];
//for (var key in profiles){
//    arr.push([]);
//    var nodes = profiles[key].childNodes;
//    for (var ele in nodes){  
//        if(nodes[ele]){
//          arr[key].push(nodes[ele]);
//        }
//    }
//
//}
//console.log(arr);




//var jsonData = JSON.parse(myMessage);
//for (var i = 0; i < jsonData.counters.length; i++) {
//    var counter = jsonData.counters[i];
//    console.log(counter.counter_name);
//}


//    console.log('results=' + JSON.stringify(results.parseXML()));
//    var parser=new DOMParser();
//    var arr = [];
//    var xml = parser.parseFromString(results.parseXML(),'text/xml');
//    var members = xml.getElementsByTagName("member");
//    for (var key in members) {
//        arr.push([]);
//        var nodes = members[key].childNodes;
//        for (var ele in nodes) {
//            if (nodes[ele]) {
//                arr[key].push(nodes[ele]);
//            }
//        }
//    }
//    console.log('arr=' + JSON.stringify(arr));


}


//JSON.stringify(obj);
function parse(movie, dir) {
    movie = movie.toLowerCase();

    //    ----- login no opensubtitles
    var loginRequest = new XmlRpcRequest("http://api.opensubtitles.org/xml-rpc", "LogIn");
    loginRequest.params = (['', '', 'eng', 'OSTestUserAgent']);
    loginRequest.setHeader("Content-type", "application/x-www-form-urlencoded");
    var response1 = loginRequest.send();
    var token = String(response1.parseXML().token);
//    console.log('token=' + token);



    var maxSubTitleFiles = 3;
    var SearchAnotherSubTitleFile = true;
    var movieToSearch = movie;
    var numberOfSearchesDone = 0;
    var numberOfTriesToFindSubTitle = 2;
    console.log('');
    while (SearchAnotherSubTitleFile) {

        //    ----- buscar filme
        var searchRequest = new XmlRpcRequest("http://api.opensubtitles.org/xml-rpc", "SearchSubtitles");
        searchRequest.addParam(token);
        searchRequest.addParam([{sublanguageid: 'pob', query: movieToSearch}]);
        searchRequest.setHeader("Content-type", "application/x-www-form-urlencoded");
        var results = searchRequest.send();



        // criar lista dos filmes
        var jsonData = results.parseXML();
        var subtitleFileList = [];
        if (numberOfSearchesDone > numberOfTriesToFindSubTitle)
            SearchAnotherSubTitleFile = false;
        numberOfSearchesDone++;
        if (jsonData.data.length < 1) {
            // tentar achar o filme com menos letras no nome
            console.log('Nao encontrou legenda para ' + movieToSearch);
            movieToSearch = movieToSearch.substring(0, movieToSearch.length - 10);
            console.log('verificar se tem ' + movieToSearch);

        } else {
            console.log('Encontrou legenda para ' + movieToSearch);
            SearchAnotherSubTitleFile = false;
        }
    }


    // pegar o IDSubtitleFile ecolocar na pilha
    var numberOfSubTitlesFound = 1;

    for (var i = 0; i < jsonData.data.length; i++) {
//    var counter = jsonData.member.name[i];
        var lang = JSON.stringify(jsonData.data[i].SubLanguageID.toString());
        if (lang == '"pob"') {
            subtitleFileList.push(jsonData.data[i].IDSubtitleFile.toString());

//            console.log(JSON.stringify(jsonData.data[i].SubFileName));
//            console.log(JSON.stringify(jsonData.data[i].LanguageName));
//            console.log(JSON.stringify(jsonData.data[i].SubLanguageID));
//            console.log(JSON.stringify(jsonData.data[i].SubDownloadLink));
//            console.log('na busca idSubtitleFile =' + JSON.stringify(jsonData.data[i].IDSubtitleFile));
            if (numberOfSubTitlesFound => maxSubTitleFiles)
                break;
            else
                numberOfSubTitlesFound++;
        }
    }


    // gravar arquivo --> o browser nao deixa. chamar um php no servidor
    // enviar dados do arquivo ao server

    for (var i = 0; i < subtitleFileList.length; i++) {
        moviename = movie.substr(0, movie.length - 4) + '.pob.' + i + '.srt';
        var IDSubtitleFile = subtitleFileList[i];
        console.log('pedir download de =  ' + moviename + '    IDSubtitleFile= ' + IDSubtitleFile);
        var xhr = new XMLHttpRequest();
        var url = 'http://localhost:8080/legenda/savefile.php';
        url = url + '?dir=' + dir;
        url = url + '&file=' + moviename;
        url = url + '&idSubtitleFile=' + IDSubtitleFile;
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                $('#fim').append(xhr.responseText);
//                console.log(xhr.responseText);
//                console.log('-------')
            }
        };
//        console.log('1-------')
        xhr.send(null);



//        console.log('estou no main.js again');
    }

}
;

function fim() {
    location.assign("index.html");
}

function clearvars() {
    localStorage.clear('dir');
    localStorage.clear('virtual');
    localStorage.clear('computer');
    localStorage.clear('nolegends');

    location.assign('index.html');

}