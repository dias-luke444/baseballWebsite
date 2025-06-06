function dropDownHandler() {
    var currentOptionIndex = document.getElementById("baseballPositions").selectedIndex;
    if (currentOptionIndex == 0) {
        document.getElementById("positionExplanation").innerText = ("The Pitcher is the person who starts every play in baseball. They do this by standing on the mound (see above) and throwing the ball to the Catcher. Their throws are meant to be deceptive to the hitter, causing them to either swing at the pitch and miss, or not swing at an hittable pitch. In order to decieve the hitters, the pitcher will throw different types of pitches. These pitch types are: the main pitch in baseball, fastballs, such as four seam fastballs and sinkers, known for their speed and lack of movement, breaking balls, such as sliders or curveballs, known for their vertical and horizontal break, and offspeed pitches, such as changeups and splitters, known for their deception, looking like fastballs, but actually being slower with more downward movement to befuddle hitters.");
    }
    else if (currentOptionIndex == 1) {
        document.getElementById("positionExplanation").innerText = ("The Catcher is the person who catches the baseball from the pitcher. Due to their proximity to the dangerous act of hitting a baseball, they wear protective gear to avoid getting hurt. They have four main jobs. First, they tell the pitcher which pitch to throw, making their decision based on the particular skills of the batter, and their knowledge of the pitcher they are working with. Second, they are trying to frame pitches, or take pitches that the batter does not swing at, and make them look like strikes for the umpire to give the hitters less opportunities to try and hit the ball. Thirdly, they are there to catch and control the baseballs thrown at them, to prevent any baserunners, or players on the hitting team who are on the bases, from advancing towards home plate. This is called blocking the ball in baseball parlance. Lastly, they are trying to throw out baserunners attempting to steal. Stealing is when a baserunner tries to advance to the next base without a ball being put in play, and the Catcher stops them from doing this by throwing the ball to the base where the baserunner is trying to go before they get there, so the baserunner gets tagged out. Due to the difficulty, importance, and sheer amount of these jobs, Catcher is considered the most important defensive position.");
    }
    else if (currentOptionIndex == 2) {
        document.getElementById("positionExplanation").innerText = ("The First Baseman is the person who is responsible for defending the area around first base. In addition to fielding any balls hit in the area around first base, the First Baseman's main responsibility is to catch balls thrown at him by other fielders who are attempting to get the ball to first base before the batter gets there. This often requires the first baseman to make difficult catches while keeping his foot on the first base bag, in a technique that is called scooping the baseball. Due to the fact that the First Baseman rarely needs to thrown the ball himself, and the infrequency with which balls are hit around the first base area, first base is often considered the easiest and least important defensive position.");
    }
    else if (currentOptionIndex == 3) {
        document.getElementById("positionExplanation").innerText = ("The Second Baseman is the person who is responsible for defending the area to the right of the second base bag. Second base is an important defensive position, even if it exists in the shadow of the more important and difficult shortstop, due to throws from the position being slightly easier, and opportunities to field the ball being slightly less frequent than at Shortstop. Still, it requires quickness and agility to play, as the Second Baseman is responsible for a larger portion of the infield than the Third or First Baseman.");
    }
    else if (currentOptionIndex == 4) {
        document.getElementById("positionExplanation").innerText = ("The Third Baseman is the person who is responsible for defending the area around first base. Since the throw from third to first base is the longest in the infield, the Third Baseman generally has the strongest throwing arm of any of the infield positions. In addition to that, the proximity of the Third Baseman to the hitter means that you have less time to react than the other non-first base infield positions, and also, since most hitters are right handed, the Third Baseman has to field more balls than the First Baseman. For these reasons, the position is often referred to as 'The Hot Corner'.");
    }
    else if (currentOptionIndex == 5) {
        document.getElementById("positionExplanation").innerText = ("The Shortstop is the person who is responsible for defending the area to the left of second base. The Shortstop is considered the most difficult infield position, due to its distance from first base, the amount of territory they are responsible for, and the frequency with which they have to field the ball. As such, to play Shortstop, one requires both the strong arm of a Third Baseman, and the quickness and agility of a Second Baseman, making Shortstop the most athletically demanding position. Due to the importance of the position and the skill required to play Shortstop, the Shortstop is generally considered the leader of the infield.");
    }
    else if (currentOptionIndex == 6) {
        document.getElementById("positionExplanation").innerText = ("The Left Fielder is the person who is responsible for defending the left part of the outfield. Left field is generally perceived as the easiest outfield position, because of the fact that they do not need to cover as much ground as the Center Fielder, and the distance from the two bases that outfielders most often throw to, home plate and third base, is not as long as it is for the Right Fielder. In general, to succeed as an outfielder, you need to be able to have better range and cover more ground than an infielder An outfielder also does not require as much handeye coordination as an infielder.");
    }
    else if (currentOptionIndex == 7) {
        document.getElementById("positionExplanation").innerText = ("The Center Fielder is the person who is responsible for defending the middle part of the outfield. The middle part of the outfield is much larger than the left and right parts generally, so Center Field is considered the hardest and most crucial defensive position in the outfield. Therefore, typically the Center Fielder is the fastest and most athletic outfielder on a baseball team.");
    }
    else if (currentOptionIndex == 8) {
        document.getElementById("positionExplanation").innerText = ("The Right Fielder is the person who is responsible for defending the right part of the outfield. The Right Fielder is generally notorious for having the strongest throwing arm on the team, due to the necessity of the Right Fielder to make long throws to home plate and third base in order to prevent baserunners from advancing bases and scoring runs. Depending on the stadium, some left fields are much larger than right fields, and so, while right field is generally considered the more difficult defensive position of the two, in those aforementioned stadiums, left field is considered more difficult than right field.");
    }
    
}
function softballButtonHandler() {
    document.location.href = 'https://www.baseballprospectus.com/news/article/92379/athletes-unlimited-and-a-new-model-for-pro-sports/';
}
function mlbWinner() {
    document.getElementById("MLBCaption").innerText = ("The World Series in 2024 was won by the Los Angeles Dodgers.");
    document.getElementById("MLBLogo").src = ("https://logos-world.net/wp-content/uploads/2020/05/Los-Angeles-Dodgers-Logo-1968-1971.png");
}
function mlbLeave() {
    document.getElementById("MLBCaption").innerText = ("The MLB Logo. From logodownload.org.");
    document.getElementById("MLBLogo").src = ("https://logodownload.org/wp-content/uploads/2020/07/mlb-logo.png");
}
function kboWinner() {
    document.getElementById("KBOCaption").innerText = ("The Korean Series in 2024 was won by the Kia Tigers.");
    document.getElementById("KBOLogo").src = ("https://vectorseek.com/wp-content/uploads/2023/10/Kia-Tigers-Baseball-Club-Logo-Vector.svg-.png");
}
function kboLeave() {
    document.getElementById("KBOCaption").innerText = ("The KBO Logo. From seeklogo.com");
    document.getElementById("KBOLogo").src = ("https://seeklogo.com/images/K/kbo-korea-baseball-organization-logo-5C5BB96096-seeklogo.com.png");
}
function npbWinner() {
    document.getElementById("NPBCaption").innerText = ("The Japan Series in 2024 was won by the Yokohama DeNA BayStars.");
    document.getElementById("NPBLogo").src = ("https://sp.baystars.co.jp/images/common/teams/2019/img_logo_baystars.png");
}
function npbLeave() {
    document.getElementById("NPBCaption").innerText = ("The NPB Logo. From sportslogos.net.");
    document.getElementById("NPBLogo").src = ("https://content.sportslogos.net/logos/75/2316/full/a6a8sz0eo3fbj75hhtsg.gif");
}
function lidomWinner() {
    document.getElementById("LIDOMCaption").innerText = ("The Champion of LIDOM in the 2024-2025 season was Leones del Escogido.");
    document.getElementById("LIDOMLogo").src = ("https://4.bp.blogspot.com/-yaSNPH6NSFI/WMiSoliiYoI/AAAAAAAAAuY/cu2dqnayIX0QSuU6abH05o9rB9wePWH2ACLcB/s1600/logo_leon_escogido.jpg");
}
function lidomLeave() {
    document.getElementById("LIDOMCaption").innerText = ("The LIDOM Logo. From 1000logos.net.");
    document.getElementById("LIDOMLogo").src = ("https://1000logos.net/wp-content/uploads/2018/11/Lidom-logo.png");
}
function fraudExposer() {
    document.getElementById("cartwright").src = ("https://i.ytimg.com/vi/5tCAtoqZuOY/maxresdefault.jpg");
    document.getElementById("cartwrightCaption").innerText = ("Nobody 'invented' Baseball. It naturally developed over time with the contributions of countless people over multiple centuries.");
    document.querySelector("#fraudExposerButton").style.display = "none";
}
function bestTeamShower() {
    document.querySelector("#bestTeam").src = ("https://purepng.com/public/uploads/medium/boston-red-sox-logo-0ue.png");
    document.querySelector("#bestTeamButton").style.display = "none";
    document.querySelector("#bestTeamText").innerText = "The best baseball team in the world is indisputably the Boston Red Sox."
}
function question1Correct() {
    document.querySelector("#question1").innerText = ("Barry Bonds is correct!");
    document.querySelector("#question1Buttons").style.display = "none";
}
function question1Wrong() {
    document.querySelector("#question1").innerText = ("Incorrect! The correct answer was Barry Bonds!");
    document.querySelector("#question1Buttons").style.display = "none";
}
function question2Correct() {
    document.querySelector("#question2").innerText = ("The Boston Red Sox is correct!");
    document.querySelector("#question2Buttons").style.display = "none";
}
function question2Wrong() {
    document.querySelector("#question2").innerText = ("Incorrect! The correct answer was the Boston Red Sox!");
    document.querySelector("#question2Buttons").style.display = "none";
}
function question3Correct() {
    document.querySelector("#question3").innerText = ("It was indeed a collective effort!");
    document.querySelector("#question3Buttons").style.display = "none";
}
function question3Wrong() {
    document.querySelector("#question3").innerText = ("Incorrect! Go and read the history page for more information.");
    document.querySelector("#question3Buttons").style.display = "none";
}
function question4Correct() {
    document.querySelector("#question4").innerText = ("Correct! There are 9 fielders in baseball.");
    document.querySelector("#question4Buttons").style.display = "none";
}
function question4Wrong() {
    document.querySelector("#question4").innerText = ("Incorrect! The fielding team has nine players, go read the rules page for more details.");
    document.querySelector("#question4Buttons").style.display = "none";
}
function question5Correct() {
    document.querySelector("#question5").innerText = ("Correct! Dustin Pedroia was a Second Baseman for the Boston Red Sox from 2006-2019.");
    document.querySelector("#question5Buttons").style.display = "none";
}
function question5Wrong() {
    document.querySelector("#question5").innerText = ("Incorrect! The baseball player was Dustin Pedroia, who was a Second Baseman for the Boston Red Sox from 2006-2019.");
    document.querySelector("#question5Buttons").style.display = "none";
}
function question6Correct() {
    document.querySelector("#question6").innerText = ("Correct! A sidewinder is not an actual baseball term.");
    document.querySelector("#question6Buttons").style.display = "none";
}
function question6Wrong() {
    document.querySelector("#question6").innerText = ("Wrong! All of these are actual baseball terms except a sidewinder.");
    document.querySelector("#question6Buttons").style.display = "none";
}
function yankeesWorldSeriesCalculator() {
    var yankeesWorldSeries = new Date("November 4, 2009, 23:50:00");
    var currentDate = new Date();
    document.getElementById("yWorldSeries").innerText = ("It has been " + Math.floor((currentDate.getTime() - yankeesWorldSeries.getTime()) / 86400000) + " days since the New York Yankees last won the World Series.")
}
function questionAdder() {
    var question = document.getElementById("questionsAboutBaseball").value
    if (document.querySelector("#theQuestions").childElementCount == 5) {
        alert("If you have a lot of questions in a way that is making information hard to find, type 'clear' into the question box and it will get rid of all of your questions.");
    }
    if (question == "") {
        alert("This textfield is empty, Please enter an question to have it show up on the page.");
        return false;
    }
    else if (question == "clear") {
        var theQuestionList = document.querySelector("#theQuestions");
        while (theQuestionList.hasChildNodes()) {
            theQuestionList.removeChild(theQuestionList.firstElementChild)
        }
    }
    else if (question.charAt(question.length - 1) != '?') {
        alert("That is not a question. Please enter a question with a ? at the end to have it show up on the page.");
        return false;
    }
    else if (question.toLowerCase() == "what is a homerun?" || question.toLowerCase() == "what is a home run?" || question.toLowerCase() == "what is a home-run?"){
        var li = document.createElement('li');
        li.innerText = (question + "\n" + "A homerun is when you hit the ball over the fence without it touching the ground first. This type of hit scores every single person on base, including the batter.");
        document.querySelector("#theQuestions").appendChild(li);
    }
    else if (question.toLowerCase() == "what are other versions of baseball?" || question.toLowerCase() == "what are similar sports to baseball?"){
        document.querySelector("#softballButton").style.display = "inline";
        var li = document.createElement('li');
        li.innerText = (question + "\n" + "The most commonly played alternate version of competetive baseball played is softball, which is played at both the collegiate level, at most major colleges, and professionally, through the Athletes Unlimited Softball League (click the button below for more details). More casually, two commonly played backyard versions of baseball are wiffleball and blitzball, and you could argue that kickball is a form of baseball as well.");
        document.querySelector("#theQuestions").appendChild(li);
    }
    else if (question.toLowerCase() == "what about softball?" || question.toLowerCase() == "what is softball?"){
        document.querySelector("#softballButton").style.display = "inline";
        var li = document.createElement('li');
        li.innerText = (question + "\n" + "Softball is played at both the collegiate level, at most major colleges, and professionally, through the Athletes Unlimited Softball League (click the button below for more details). Softball can also be played casually, and can be played by anybody, though it is traditionally played by women.");
        document.querySelector("#theQuestions").appendChild(li);
    }
    else if (question.toLowerCase() == "which team has won the most world series?" || question.toLowerCase() == "who won the most world series?" || question.toLowerCase() == "who has won the most world series?"){
        var li = document.createElement('li');
        li.innerText = (question + "\n" + "The New York Yankees with 28 World Series wins.");
        document.querySelector("#theQuestions").appendChild(li);
    }
    else if (question.toLowerCase() == "when is the super bowl?"){
        var li = document.createElement('li');
        li.innerText = (question + "\n" + "I don't know, this is a baseball website, not a football website.");
        document.querySelector("#theQuestions").appendChild(li);
    }
    else if (question.toLowerCase() == "who is the greatest baseball player of all time?"){
        var li = document.createElement('li');
        li.innerText = (question + "\n" + "That is a controversial question. Generally, people believe one of Babe Ruth, Willie Mays, Henry 'Hank Aaron, or (if you don't care about steroids) Barry Bonds to be the greatest player of all time, but it is a spirited and open-ended debate at the end of the day.");
        document.querySelector("#theQuestions").appendChild(li);
    }
     else if (question.toLowerCase() == "when is the world series?"){
        var li = document.createElement('li');
        li.innerText = (question + "\n" + "Generally in late October and early November.");
        document.querySelector("#theQuestions").appendChild(li);
    }
     else if (question.toLowerCase() == "who won last years college world series" || question.toLowerCase() == "who won the last college world series?" || question.toLowerCase() == "who won the pervious college world series?"){
        var li = document.createElement('li');
        li.innerText = (question + "\n" + "The Tennessee Volunteers.");
        document.querySelector("#theQuestions").appendChild(li);
    }
    else {
        var li = document.createElement('li');
        li.innerText = (question);
        document.querySelector("#theQuestions").appendChild(li);
    }
}
var angle = 0; // Global variable to track rotation
function rotate() { 
    document.getElementById("baseball").style.transform = "rotate(" + angle + "deg)"; 
} 
function baseballMover() { 
    var i = 0; var interval = setInterval(function() { 
        if (i < 3600) { 
            angle++; // Increment angle 
            rotate(); // Apply new angle
            i++; 
        } 
    }, 
    3); 
}
document.addEventListener('DOMContentLoaded', function() {
    dropDownHandler();
})
document.addEventListener('DOMContentLoaded', function() {
    yankeesWorldSeriesCalculator();
})


