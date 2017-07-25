$("#workStart").click(function() {
  startWorkCountDown();
});

$("#workPlus").click(function() {
  workTimerPlus();
  if (workSeconds % 60 < 10) {
    $("#workTime").html(
      Math.floor(workSeconds / 60) + ":" + "0" + workSeconds % 60
    );
  } else {
    $("#workTime").html(Math.floor(workSeconds / 60) + ":" + workSeconds % 60);
  }
});

$("#workMinus").click(function() {
  workTimerMinus();
  if (workSeconds % 60 < 10) {
    $("#workTime").html(
      Math.floor(workSeconds / 60) + ":" + "0" + workSeconds % 60
    );
  } else {
    $("#workTime").html(Math.floor(workSeconds / 60) + ":" + workSeconds % 60);
  }
});

$("#breakPlus").click(function() {
  breakTimerPlus();
  if (breakSeconds % 60 < 10) {
    $("#breakTime").html(
      Math.floor(breakSeconds / 60) + ":" + "0" + breakSeconds % 60
    );
  } else {
    $("#breakTime").html(
      Math.floor(breakSeconds / 60) + ":" + breakSeconds % 60
    );
  }
});

$("#breakMinus").click(function() {
  breakTimerMinus();
  if (breakSeconds % 60 < 10) {
    $("#breakTime").html(
      Math.floor(breakSeconds / 60) + ":" + "0" + breakSeconds % 60
    );
  } else {
    $("#breakTime").html(
      Math.floor(breakSeconds / 60) + ":" + breakSeconds % 60
    );
  }
});

var workSeconds = 1500;
var breakSeconds = 300;
var go = "";
var originalWorkTime = workSeconds; //records the starting time of timer
var originalBreakTime = breakSeconds; //records the starting time of timer
var going = 0; //flag for pause. 0 is default/paused. 1 is going.

//resets the timers and clears the tshards from the triforce
function resetCountDown() {
  workSeconds = 1500;
  breakSeconds = 300;
  $("#workTime").html(
    Math.floor(workSeconds / 60) + ":" + "0" + workSeconds % 60
  );
  $("#breakTime").html(
    Math.floor(breakSeconds / 60) + ":" + "0" + breakSeconds % 60
  );
  $("#tShard1").html("<div id='tShard1'></div>");
  $("#tShard2").html("<div id='tShard2'></div>");
  $("#tShard3").html("<div id='tShard3'></div>");
  $("#tShard4").html("<div id='tShard4'></div>");
  $("#tShard5").html("<div id='tShard5'></div>");
  $("#tShard6").html("<div id='tShard6'></div>");
  $("#tShard7").html("<div id='tShard7'></div>");
  $("#tShard8").html("<div id='tShard8'></div>");
}

//increases the work timer buy a minute and sets originalWorkTime to new time
function workTimerPlus() {
  workSeconds += 60;
  originalWorkTime = workSeconds;
}

//decreases the work timer buy a minute and sets originalWorkTime to new time
function workTimerMinus() {
  if (workSeconds > 0) {
    workSeconds -= 60;
    originalWorkTime = workSeconds;
  }
}

//increases the break timer buy a minute and sets originalBreakTime to new time
function breakTimerPlus() {
  breakSeconds += 60;
  originalBreakTime = breakSeconds;
}

//decreases the break timer buy a minute and sets originalBreakTime to new time
function breakTimerMinus() {
  if (breakSeconds > 0) {
    breakSeconds -= 60;
    originalBreakTime = breakSeconds;
  }
}

//starts the timer or pauses the timer if it's already going
function startWorkCountDown() {
  if (going == 0) {
    go = setInterval(workCountDown, 1000);
    going = 1;
  } else {
    clearInterval(go);
    going = 0;
  }
}

//begins the break timer
function startBreakCountDown() {
  go = setInterval(breakCountDown, 1000);
}

//the main work timer
//decreases the workSeconds by one every second
//displays/updates the minutes and seconds every seconds
//compares current amount of seconds to the original amount and fills in the
//triforce in even increments
//begins the break timer at zero
function workCountDown() {
  if (workSeconds > originalWorkTime - originalWorkTime * 0.125) {
    workSeconds--;
    if (workSeconds % 60 < 10) {
      $("#workTime").html(
        Math.floor(workSeconds / 60) + ":" + "0" + workSeconds % 60
      );
    } else {
      $("#workTime").html(
        Math.floor(workSeconds / 60) + ":" + workSeconds % 60
      );
    }
  } else if (workSeconds > originalWorkTime - originalWorkTime * 0.25) {
    workSeconds--;
    $("#tShard1").html("<div id='tShard1' class='tShard1'></div>");
    if (workSeconds % 60 < 10) {
      $("#workTime").html(
        Math.floor(workSeconds / 60) + ":" + "0" + workSeconds % 60
      );
    } else {
      $("#workTime").html(
        Math.floor(workSeconds / 60) + ":" + workSeconds % 60
      );
    }
  } else if (workSeconds > originalWorkTime - originalWorkTime * 0.375) {
    workSeconds--;
    $("#tShard2").html("<div id='tShard2' class='tShard2'></div>");
    if (workSeconds % 60 < 10) {
      $("#workTime").html(
        Math.floor(workSeconds / 60) + ":" + "0" + workSeconds % 60
      );
    } else {
      $("#workTime").html(
        Math.floor(workSeconds / 60) + ":" + workSeconds % 60
      );
    }
  } else if (workSeconds > originalWorkTime - originalWorkTime * 0.5) {
    workSeconds--;
    $("#tShard3").html("<div id='tShard3' class='tShard3'></div>");
    if (workSeconds % 60 < 10) {
      $("#workTime").html(
        Math.floor(workSeconds / 60) + ":" + "0" + workSeconds % 60
      );
    } else {
      $("#workTime").html(
        Math.floor(workSeconds / 60) + ":" + workSeconds % 60
      );
    }
  } else if (workSeconds > originalWorkTime - originalWorkTime * 0.625) {
    workSeconds--;
    $("#tShard4").html("<div id='tShard4' class='tShard4'></div>");
    if (workSeconds % 60 < 10) {
      $("#workTime").html(
        Math.floor(workSeconds / 60) + ":" + "0" + workSeconds % 60
      );
    } else {
      $("#workTime").html(
        Math.floor(workSeconds / 60) + ":" + workSeconds % 60
      );
    }
  } else if (workSeconds > originalWorkTime - originalWorkTime * 0.75) {
    workSeconds--;
    $("#tShard5").html("<div id='tShard5' class='tShard5'></div>");
    if (workSeconds % 60 < 10) {
      $("#workTime").html(
        Math.floor(workSeconds / 60) + ":" + "0" + workSeconds % 60
      );
    } else {
      $("#workTime").html(
        Math.floor(workSeconds / 60) + ":" + workSeconds % 60
      );
    }
  } else if (workSeconds > originalWorkTime - originalWorkTime * 0.875) {
    workSeconds--;
    $("#tShard6").html("<div id='tShard6' class='tShard6'></div>");
    if (workSeconds % 60 < 10) {
      $("#workTime").html(
        Math.floor(workSeconds / 60) + ":" + "0" + workSeconds % 60
      );
    } else {
      $("#workTime").html(
        Math.floor(workSeconds / 60) + ":" + workSeconds % 60
      );
    }
  } else if (workSeconds > originalWorkTime - originalWorkTime * 1) {
    workSeconds--;
    $("#tShard7").html("<div id='tShard7' class='tShard7'></div>");
    if (workSeconds % 60 < 10) {
      $("#workTime").html(
        Math.floor(workSeconds / 60) + ":" + "0" + workSeconds % 60
      );
    } else {
      $("#workTime").html(
        Math.floor(workSeconds / 60) + ":" + workSeconds % 60
      );
    }
  } else if (workSeconds == 0) {
    $("#tShard8").html("<div id='tShard8' class='tShard8'></div>");
    if (workSeconds % 60 < 10) {
      $("#workTime").html(
        Math.floor(workSeconds / 60) + ":" + "0" + workSeconds % 60
      );
    } else {
      $("#workTime").html(
        Math.floor(workSeconds / 60) + ":" + workSeconds % 60
      );
    }
    clearInterval(go);
    startBreakCountDown();
  }
}

//the main break timer
//decreases the breakSeconds by one every second
//displays/updates the minutes and seconds every seconds
//compares current amount of seconds to the original amount and removes the
//triforce shards in even increments
//resets the timer at zero
function breakCountDown() {
  if (breakSeconds >= originalBreakTime - originalBreakTime * 0.125) {
    breakSeconds--;
    if (breakSeconds % 60 < 10) {
      $("#breakTime").html(
        Math.floor(breakSeconds / 60) + ":" + "0" + breakSeconds % 60
      );
    } else {
      $("#breakTime").html(
        Math.floor(breakSeconds / 60) + ":" + breakSeconds % 60
      );
    }
  } else if (breakSeconds > originalBreakTime - originalBreakTime * 0.25) {
    breakSeconds--;
    $("#tShard8").html("<div id='tShard8'></div>");
    if (breakSeconds % 60 < 10) {
      $("#breakTime").html(
        Math.floor(breakSeconds / 60) + ":" + "0" + breakSeconds % 60
      );
    } else {
      $("#breakTime").html(
        Math.floor(breakSeconds / 60) + ":" + breakSeconds % 60
      );
    }
  } else if (breakSeconds > originalBreakTime - originalBreakTime * 0.375) {
    breakSeconds--;
    $("#tShard7").html("<div id='tShard7'></div>");
    if (breakSeconds % 60 < 10) {
      $("#breakTime").html(
        Math.floor(breakSeconds / 60) + ":" + "0" + breakSeconds % 60
      );
    } else {
      $("#breakTime").html(
        Math.floor(breakSeconds / 60) + ":" + breakSeconds % 60
      );
    }
  } else if (breakSeconds > originalBreakTime - originalBreakTime * 0.5) {
    breakSeconds--;
    $("#tShard6").html("<div id='tShard6'></div>");
    if (breakSeconds % 60 < 10) {
      $("#breakTime").html(
        Math.floor(breakSeconds / 60) + ":" + "0" + breakSeconds % 60
      );
    } else {
      $("#breakTime").html(
        Math.floor(breakSeconds / 60) + ":" + breakSeconds % 60
      );
    }
  } else if (breakSeconds > originalBreakTime - originalBreakTime * 0.625) {
    breakSeconds--;
    $("#tShard5").html("<div id='tShard5'></div>");
    if (breakSeconds % 60 < 10) {
      $("#breakTime").html(
        Math.floor(breakSeconds / 60) + ":" + "0" + breakSeconds % 60
      );
    } else {
      $("#breakTime").html(
        Math.floor(breakSeconds / 60) + ":" + breakSeconds % 60
      );
    }
  } else if (breakSeconds > originalBreakTime - originalBreakTime * 0.75) {
    breakSeconds--;
    $("#tShard4").html("<div id='tShard4'></div>");
    if (breakSeconds % 60 < 10) {
      $("#breakTime").html(
        Math.floor(breakSeconds / 60) + ":" + "0" + breakSeconds % 60
      );
    } else {
      $("#breakTime").html(
        Math.floor(breakSeconds / 60) + ":" + breakSeconds % 60
      );
    }
  } else if (breakSeconds > originalBreakTime - originalBreakTime * 0.875) {
    breakSeconds--;
    $("#tShard3").html("<div id='tShard3'></div>");
    if (breakSeconds % 60 < 10) {
      $("#breakTime").html(
        Math.floor(breakSeconds / 60) + ":" + "0" + breakSeconds % 60
      );
    } else {
      $("#breakTime").html(
        Math.floor(breakSeconds / 60) + ":" + breakSeconds % 60
      );
    }
  } else if (breakSeconds > originalBreakTime - originalBreakTime * 1) {
    breakSeconds--;
    $("#tShard2").html("<div id='tShard2'></div>");
    if (breakSeconds % 60 < 10) {
      $("#breakTime").html(
        Math.floor(breakSeconds / 60) + ":" + "0" + breakSeconds % 60
      );
    } else {
      $("#breakTime").html(
        Math.floor(breakSeconds / 60) + ":" + breakSeconds % 60
      );
    }
  } else if (breakSeconds == 0) {
    $("#tShard1").html("<div id='tShard1'></div>");
    if (breakSeconds % 60 < 10) {
      $("#breakTime").html(
        Math.floor(breakSeconds / 60) + ":" + "0" + breakSeconds % 60
      );
    } else {
      $("#breakTime").html(
        Math.floor(breakSeconds / 60) + ":" + breakSeconds % 60
      );
    }
    clearInterval(go);
    resetCountDown();
  }
}