

  var x,y;
  x= (Math.random() * 6) + 1;
  y= (Math.random() * 6) + 1;
  x= Math.floor(x);
  y= Math.floor(y);
  switch (x) {
    case 1:
      document.getElementsByClassName("img1")[0].src="images/dice1.png";
      break;
    case 2:
      document.getElementsByClassName("img1")[0].src="images/dice2.png";
                break;
    case 3:
    document.getElementsByClassName("img1")[0].src="images/dice3.png";
              break;
    case 4:
          document.getElementsByClassName("img1")[0].src="images/dice4.png";
           break;
    case 5:
            document.getElementsByClassName("img1")[0].src="images/dice5.png";
           break;
    case 6:
            document.getElementsByClassName("img1")[0].src="images/dice6.png";
           break;
    default:
    break;

  }
  switch (y) {
    case 1:
      document.getElementsByClassName("img2")[0].src="images/dice1.png";
      break;
    case 2:
      document.getElementsByClassName("img2")[0].src="images/dice2.png";
                break;
    case 3:
    document.getElementsByClassName("img2")[0].src="images/dice3.png";
              break;
    case 4:
          document.getElementsByClassName("img2")[0].src="images/dice4.png";
           break;
    case 5:
            document.getElementsByClassName("img2")[0].src="images/dice5.png";
           break;
    case 6:
            document.getElementsByClassName("img2")[0].src="images/dice6.png";
           break;
    default:
    break;

  }

  if(x>y)
  {
    document.getElementById("h1").innerHTML="Player 1 wins";
  }
  else if(x<y)
  {
    document.getElementById("h1").innerHTML="Player 2 wins";
  }
  else {

      document.getElementById("h1").innerHTML="It's a tie. Try again!";
    }
