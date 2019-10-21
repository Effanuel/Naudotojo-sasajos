const appendValue = element => {
  var value = $(element).val();
  $("#output").append(value);
};

const popValue = () => {
  $("#output").text((index, value) => {
    return value.substr(0, value.length - 1);
  });
};

const replaceValue = element => {
  popValue();
  appendValue(element);
};

function equal() {
  const current = $("#output").text();
  const answer = eval(current);
  $("#output").text(answer);
}

function root() {
  const current = $("#output").text();
  try {
    // Is a positve number and is it a number (handles symbols)
    if (current < 0 || !parseFloat(current)) throw "Error";
    const answer = Math.sqrt(current);
    $("#output").text(answer);
  } catch (err) {
    $("#output").text("");
    $("#error")
      .text(err)
      .fadeOut(2000);
  }
}

function findSymbolIndexMax(string) {
  const symbolsArr = ["+", "-", "/", "*"];

  symbolsArr.forEach(function(item, index, arr) {
    arr[index] = string.indexOf(item);
  });
  return Math.max(...symbolsArr);
}

$(function() {
  $('button[id^="input"]').click(function() {
    if ($("#output").text().length >= 20) return;
    appendValue(this);
  });
  $('button[id^="dot"]').click(function() {
    if ($("#output").text().length >= 20) return;
    const string = $("#output").text();
    const i = string.indexOf(".");

    const symbolIndexMax = findSymbolIndexMax(string);

    if (symbolIndexMax >= i) appendValue(this);
  });

  $('button[id^="clear"]').click(function() {
    $("#output").text("");
  });

  $('button[id^="pop"]').click(function() {
    popValue();
  });
  $('button[id^="symbol"]').click(function() {
    // if (this.id == 'pop') {
    //   popValue();
    // }
    const array = ["+", "-", "/", "*"];
    const lastElem = $("#output")
      .text()
      .slice(-1);

    if (array.includes(lastElem) && lastElem != $(this).val()) {
      replaceValue(this);
      return;
    } else if (array.includes(lastElem) && lastElem == $(this).val()) {
      return;
    }
    appendValue(this);
  });
});
