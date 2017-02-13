(function() {    var questions = [{
question: "Which of the following pairs of declarations will cause an error?<br><br>I<br>&nbsp;&nbsp;&nbsp;&nbsp;double a = 13.2;<br>&nbsp;&nbsp;&nbsp;&nbsp;int b = a;<br><br>II<br>&nbsp;&nbsp;&nbsp;&nbsp;double a = 13.2;<br>&nbsp;&nbsp;&nbsp;&nbsp;int b = (int)a;<br><br>III<br>&nbsp;&nbsp;&nbsp;&nbsp;int a = 13;<br>&nbsp;&nbsp;&nbsp;&nbsp;double b = a;",
choices: ["None", "I only<br>", "II only<br>", "III only<br>", "I and III only"],
correctAnswer: 1
}, {
question: "Refer to the Date class to answer the question:<br><br>public class Date<br>{<br>&nbsp;&nbsp;&nbsp;&nbsp;private int day;<br>&nbsp;&nbsp;&nbsp;&nbsp;private int month;<br>&nbsp;&nbsp;&nbsp;&nbsp;private int year;<br><br>&nbsp;&nbsp;&nbsp;&nbsp;public Date()<br>&nbsp;&nbsp;&nbsp;&nbsp;{ /* implementation not shown */ }<br><br>&nbsp;&nbsp;&nbsp;&nbsp;public Date(int d, int m, int y)<br>&nbsp;&nbsp;&nbsp;&nbsp;{ /* implementation not shown */ }<br>&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;/**Resets date to day = d, month = m, year = y. */<br>&nbsp;&nbsp;&nbsp;&nbsp;public void resetTime(int d, int m, int y)<br>&nbsp;&nbsp;&nbsp;&nbsp;{ /* implementation not shown */ }<br><br>&nbsp;&nbsp;&nbsp;&nbsp;/**Advance date by one day */<br>&nbsp;&nbsp;&nbsp;&nbsp;public void increment()<br>&nbsp;&nbsp;&nbsp;&nbsp;{ /* implementation not shown */ }<br><br>&nbsp;&nbsp;&nbsp;&nbsp;/** @return true if this date equals d, false otherwise */<br>&nbsp;&nbsp;&nbsp;&nbsp;public boolean equals(Date d)<br>&nbsp;&nbsp;&nbsp;&nbsp;{ /* implementation not shown */ }<br><br>&nbsp;&nbsp;&nbsp;&nbsp;/** @return true if this date is earlier than d, false otherwise */<br>&nbsp;&nbsp;&nbsp;&nbsp;public boolean lessThan(Date d)<br>&nbsp;&nbsp;&nbsp;&nbsp;{ /* implementation not shown */ }<br><br>&nbsp;&nbsp;&nbsp;&nbsp;/** @return a String in the form of day:month:year */<br>&nbsp;&nbsp;&nbsp;&nbsp;public String toString()<br>&nbsp;&nbsp;&nbsp;&nbsp;{ /* implementation not shown */ }<br>}<br><br>Which statement about the methods in the Date class is false?",
choices: ["equals, lessThan, and toString are all accessor methods.<br><br><br><br>", "increment is a mutator method.<br><br>", "Date() is the default constructor.<br><br>", "The Date class has three constructors.", "There are no static methods in this class."],
correctAnswer: 3
}, {
question: "Refer to the Date class to answer the question:<br><br>public class Date<br>{<br>&nbsp;&nbsp;&nbsp;&nbsp;private int day;<br>&nbsp;&nbsp;&nbsp;&nbsp;private int month;<br>&nbsp;&nbsp;&nbsp;&nbsp;private int year;<br><br>&nbsp;&nbsp;&nbsp;&nbsp;public Date()<br>&nbsp;&nbsp;&nbsp;&nbsp;{ /* implementation not shown */ }<br><br>&nbsp;&nbsp;&nbsp;&nbsp;public Date(int d, int m, int y)<br>&nbsp;&nbsp;&nbsp;&nbsp;{ /* implementation not shown */ }<br>&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;/**Resets date to day = d, month = m, year = y. */<br>&nbsp;&nbsp;&nbsp;&nbsp;public void resetDate(int d, int m, int y)<br>&nbsp;&nbsp;&nbsp;&nbsp;{ /* implementation not shown */ }<br><br>&nbsp;&nbsp;&nbsp;&nbsp;/**Advance date by one day */<br>&nbsp;&nbsp;&nbsp;&nbsp;public void increment()<br>&nbsp;&nbsp;&nbsp;&nbsp;{ /* implementation not shown */ }<br><br>&nbsp;&nbsp;&nbsp;&nbsp;/** @return true if this date equals d, false otherwise */<br>&nbsp;&nbsp;&nbsp;&nbsp;public boolean equals(Date d)<br>&nbsp;&nbsp;&nbsp;&nbsp;{ /* implementation not shown */ }<br><br>&nbsp;&nbsp;&nbsp;&nbsp;/** @return true if this date is earlier than d, false otherwise */<br>&nbsp;&nbsp;&nbsp;&nbsp;public boolean lessThan(Date d)<br>&nbsp;&nbsp;&nbsp;&nbsp;{ /* implementation not shown */ }<br><br>&nbsp;&nbsp;&nbsp;&nbsp;/** @return a String in the form of day:month:year */<br>&nbsp;&nbsp;&nbsp;&nbsp;public String toString()<br>&nbsp;&nbsp;&nbsp;&nbsp;{ /* implementation not shown */ }<br>}<br><br>Which of the following code segments would be the correct implementation of the constructor with parameters?",
choices: ["day = 0;<br>month = 0;<br>year = 0;", "day = d;<br>month = m;<br>year = y;", "resetDate(day, month, year);", "d = day;<br>m = month;<br>y = year;", "Date = new Date(d, m, y);"],
correctAnswer: 1
}, {
question: "Refer to the Date class to answer the question:<br><br>public class Date<br>{<br>&nbsp;&nbsp;&nbsp;&nbsp;private int day;<br>&nbsp;&nbsp;&nbsp;&nbsp;private int month;<br>&nbsp;&nbsp;&nbsp;&nbsp;private int year;<br><br>&nbsp;&nbsp;&nbsp;&nbsp;public Date()<br>&nbsp;&nbsp;&nbsp;&nbsp;{ /* implementation not shown */ }<br><br>&nbsp;&nbsp;&nbsp;&nbsp;public Date(int d, int m, int y)<br>&nbsp;&nbsp;&nbsp;&nbsp;{ /* implementation not shown */ }<br>&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;/**Resets date to day = d, month = m, year = y. */<br>&nbsp;&nbsp;&nbsp;&nbsp;public void resetDate(int d, int m, int y)<br>&nbsp;&nbsp;&nbsp;&nbsp;{ /* implementation not shown */ }<br><br>&nbsp;&nbsp;&nbsp;&nbsp;/**Advance date by one day */<br>&nbsp;&nbsp;&nbsp;&nbsp;public void increment()<br>&nbsp;&nbsp;&nbsp;&nbsp;{ /* implementation not shown */ }<br><br>&nbsp;&nbsp;&nbsp;&nbsp;/** @return true if this date equals d, false otherwise */<br>&nbsp;&nbsp;&nbsp;&nbsp;public boolean equals(Date d)<br>&nbsp;&nbsp;&nbsp;&nbsp;{ /* implementation not shown */ }<br><br>&nbsp;&nbsp;&nbsp;&nbsp;/** @return true if this date is earlier than d, false otherwise */<br>&nbsp;&nbsp;&nbsp;&nbsp;public boolean lessThan(Date d)<br>&nbsp;&nbsp;&nbsp;&nbsp;{ /* implementation not shown */ }<br><br>&nbsp;&nbsp;&nbsp;&nbsp;/** @return a String in the form of day:month:year */<br>&nbsp;&nbsp;&nbsp;&nbsp;public String toString()<br>&nbsp;&nbsp;&nbsp;&nbsp;{ /* implementation not shown */ }<br>}<br><br>Another class has a method called printDate that prints the Date passed into the parameter.<br><br>/** Outputs the date d in form of day:month:year<br>*&nbsp;&nbsp;&nbsp;&nbsp;@param d for the Date<br>*/<br>public void printDate(Date d)<br>{ /* method implementation */ }<br><br>Which block of code is the best replacement for /* method implementation */?<br><br>I<br>&nbsp;&nbsp;&nbsp;&nbsp;Date D = new Date(d, m, y);<br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(D);<br><br>II<br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(d.day + “:” + d.month + “:” + d.year);<br><br>III<br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(d);",
choices: ["I only<br>", "II only<br>", "III only<br>", "II and III only<br>", "I, II, and III"],
correctAnswer: 2
}, {
question: "The following is an incomplete program with the purpose of calculating the value of a number raised to an exponent (x^n). The IO class reads input from the keyboard.<br><br>Double x = 0;<br>Double n = 0;<br><br>System.out.println(“Enter a base: ”);<br>x = IO.readDouble();<br>System.out.println(“Enter an exponent: ”);<br>n = IO.readDouble();<br><br>/* missing code */<br><br>System.out.print(x + “^” + n + “ = “ + result);<br><br>What is the best replacement for /* missing code */?<br><br>I<br>&nbsp;&nbsp;&nbsp;&nbsp;double result;<br>&nbsp;&nbsp;&nbsp;&nbsp;Math m = new Math();<br>&nbsp;&nbsp;&nbsp;&nbsp;result = m.pow(x, n);<br><br>II<br>&nbsp;&nbsp;&nbsp;&nbsp;double result;<br>&nbsp;&nbsp;&nbsp;&nbsp;result = Math.pow(x, n);<br><br>III<br>&nbsp;&nbsp;&nbsp;&nbsp;int result;<br>&nbsp;&nbsp;&nbsp;&nbsp;result = Math.pow(x, n);",
choices: ["I only<br>", "II only<br>", "III only<br>", "I and II only<br>", "I and III only"],
correctAnswer: 1
}, {
question: "A programmer was given the task to write a program to parse a user’s password. However, they were not given any specification about how to handle special characters. In that case, the programmer should",
choices: ["write the parser to accept all special characters.", "write the parser to accept no special characters.<br>", "check with the client to see what special characters are acceptable.<br>", "not worry about special characters since they were not initially mentioned.<br>", "treat all characters as special characters."],
correctAnswer: 2
}];
    var questionCounter = 0;   var selections = [];  var quiz = $('#quiz');    displayNext();    $('#next').on('click', function (e) {    e.preventDefault();        if(quiz.is(':animated')) {              return false;    }    choose();        if (isNaN(selections[questionCounter])) {      alert('Please make a selection!');    } else {      questionCounter++;      displayNext();    }  });    $('#prev').on('click', function (e) {    e.preventDefault();        if(quiz.is(':animated')) {      return false;    }    choose();    questionCounter--;    displayNext();  });    $('#start').on('click', function (e) {    e.preventDefault();        if(quiz.is(':animated')) {      return false;    }    questionCounter = 0;    selections = [];    displayNext();    $('#start').hide();  });    $('.button').on('mouseenter', function () {    $(this).addClass('active');  });  $('.button').on('mouseleave', function () {    $(this).removeClass('active');  });    function createQuestionElement(index) {    var qElement = $('<div>', {      id: 'question'    });        var header = $('<h2>Question ' + (index + 1) + ':</h2>');    qElement.append(header);        var question = $('<p>').append(questions[index].question);    qElement.append(question);        var radioButtons = createRadios(index);    qElement.append(radioButtons);        return qElement;  }    function createRadios(index) {    var radioList = $('<ul>');    var item;    var input = '';    for (var i = 0; i < questions[index].choices.length; i++) {      item = $('<li>');      input = '<input type="radio" name="answer" value=' + i + ' />';	  input += convertToLetter(i) + ':<br>';      input += questions[index].choices[i];      input += '<hr size=2>';      item.append(input);      radioList.append(item);    }    return radioList;  }  function choose() {    selections[questionCounter] = +$('input[name="answer"]:checked').val();  }    function displayNext() {    quiz.fadeOut(function() {      $('#question').remove();            if(questionCounter < questions.length){        var nextQuestion = createQuestionElement(questionCounter);        quiz.append(nextQuestion).fadeIn();        if (!(isNaN(selections[questionCounter]))) {          $('input[value='+selections[questionCounter]+']').prop('checked', true);        }                if(questionCounter === 1){          $('#prev').show();        } else if(questionCounter === 0){                    $('#prev').hide();          $('#next').show();        }      }else {        var scoreElem = displayScore();        quiz.append(scoreElem).fadeIn();        $('#next').hide();        $('#prev').hide();        $('#start').show();      }    });  }  function displayScore() {    var score = $('<p>',{id: 'question'});    var numCorrect = 0;    for (var i = 0; i < selections.length; i++) {      if (selections[i] === questions[i].correctAnswer) {        numCorrect++;      }    }	score.append('<br>You got ' + numCorrect + ' questions out of ' + questions.length + ' correct.<hr size=2>');    	for(var i = 0; i < questions.length; i++){				score.append('<br> Question: ' + (i + 1) + '<br>');		score.append('<br>' + questions[i].question + '<br>');				for(var j = 0; j < questions[i].choices.length; j++){			score.append(convertToLetter(j) + ":<br>" + questions[i].choices[j] + '<br>');		}				score.append('<br> Your Answer: ' + convertToLetter(selections[i]) + '<br>');		score.append('<br> Correct Answer: ' + convertToLetter(questions[i].correctAnswer) + "<hr size=2>");	}    return score;  }})();function convertToLetter(i){		var letter;		switch(i){			case 0: letter = 'A';					break; 			case 1: letter = 'B';					break;			case 2: letter = 'C';					break;			case 3: letter = 'D';					break;			case 4: letter = 'E';					break;		}		return letter;	}