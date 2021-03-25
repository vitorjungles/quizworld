// Exchanging year
var year = document.createElement("span");
year.textContent = ` ${new Date().getFullYear()}`;
document.querySelector("#copyright").after(year);

// Counting and validation variables
var total=co=co2=count=0, v2=v3=false;

// Function to exchange texts and colors
function exchange(variable, text, color='black') {
  variable.style.color=color;
  variable.textContent=text;
  return variable;
};

// First Interval
var interval1 = setInterval(questions, 1000);

// Analysis of unanswered questions
function questions() {
  var v=true;
  for (let c=1; c<8; c++) {
    for (let i=0; i<4; i++) {
      if (document.querySelectorAll(`input[name='question${c}'`).item(i).checked) {
        co+=1;
      };
      if (i==3&&co==0) {
        v=false;
        break;
      };
    };
    co=0;
    if (v==false) {
      break;
    };
  };

  // Exchanging permission text
  if (v) {
    var OldText = document.querySelector("#txt");
    OldText = exchange(OldText, 'Pronto para envio', '#1E8E3E');
    v2=true;
    clearInterval(interval1);
  };
};

// Button click function
document.querySelector("#validate").addEventListener('click', function() {

  // Reload page conditional
  if (v2&&v3) {
    location.reload();
  } else if (v2&&v3==false) {
    v3=true;

    // Exchanging texts and colors
    var Old = document.createElement("h1");
    Old.textContent = 'Analisando';
    document.querySelectorAll("input").item(document.querySelectorAll("input").length-1).after(Old);
    var Old4 = document.querySelector("#validate");
    Old4.value = 'Reiniciar quiz';
    var Old5 = document.querySelector("#txt");
    Old5.remove();

    // Second interval
    var interval2 = setInterval(e, 1000);

    // Arrays
    var correct = [2, 4, 11, 13, 19, 22, 24];

    // Shows final results
    function e() {
      co2+=1;
      if (co2==5) {
        clearInterval(interval2);

        // Validation and exchanging <label> text, <h1> color and <p> text and color
        for (let c=0; c<document.querySelectorAll("input").length-1; c++) {
          var title=title, points=points;
          if (c%4==0) {
            count+=1;
            title = document.querySelectorAll("h1").item(count);
            points = document.querySelector(`#q${count}`);
          };
          var label = document.querySelectorAll("label").item(c), input = document.querySelectorAll("input").item(c);
          if (correct.indexOf(c)!=-1) {

            // Verifying correct questions
            if (input.checked) {
              total+=2;
              title.style.color='#1E8E3E';
              points.textContent='2/2';
            };
            label.style.background='#E6F4EA';

            // Verifying wrong questions
          } else if (input.checked) {
            title.style.color='#D93025';
            label.style.background = '#FCE8E6';
            points.textContent='0/2';
          };
        };

        // Texts of the final results
        var Old2 = document.createElement("h1"), Old3 = document.createElement("h1");
        Old2.id = "txt3";
        Old.textContent = `Nota: ${total}/14 pontos.`;
        Old2.textContent = `Acertos: ${total/2}/7 questões.`;
        total>=8 ? Old.style.color = Old2.style.color = 'darkblue' : Old.style.color = Old2.style.color = '#D93025';
        total>=8 ? Old3.textContent = 'Parabéns! Mandou bem! :)' : Old3.textContent = 'Não foi desta vez... :(';
        document.querySelectorAll("section").item(1).querySelectorAll("h1").item(document.querySelectorAll("section").item(1).querySelectorAll("h1").length-1).after(Old2);
        document.querySelectorAll("section").item(1).querySelectorAll("h1").item(document.querySelectorAll("section").item(1).querySelectorAll("h1").length-1).after(Old3);
      } else {
        Old.textContent += '.';
      };
    };
  };
});