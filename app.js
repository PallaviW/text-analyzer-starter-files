// your code here!

$('.js-form').submit(function(event){

 event.preventDefault();

 var userTextElement = $(event.currentTarget).find('#user-text').val().toLowerCase();
 console.log(userTextElement);
	
var totalWords =[];

totalwords = userTextElement.split(" ");

var wordCount = totalwords.length;

var uniqueArray =[];

totalwords.forEach(function(item){

	if(uniqueArray.indexOf(item) === -1){
		uniqueArray.push(item);
	}

});

var uniqueWordCount = uniqueArray.length;

var result = (userTextElement.split(" ").join("").length) / wordCount;

var avgWordLength = result.toFixed(2);


$('.js-display').removeClass('hidden');
$('.js-wordcount').text(wordCount);
$('.js-unique').text(uniqueWordCount);
$('.js-avg').text(avgWordLength);

});