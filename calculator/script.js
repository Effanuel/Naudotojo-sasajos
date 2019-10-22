const appendValue = element => {
  var value = $(element).val();
  $('#output').append(value);
};

const popValue = () => {
  $('#output').text((index, value) => {
    return value.substr(0, value.length - 1);
  });
};

const replaceValue = element => {
  popValue();
  appendValue(element);
};

function equal() {
  const current = $('#output').text();
  const answer = eval(current);
  $('#output').text(answer);
}

function root(power) {
  const current = $('#output').text();
  try {
    // Is a positve number and is it a number (handles symbols)
    if (eval(current) < 0 || !parseFloat(current)) throw 'Error';
    //Eval before taking root so sqrt(9*9) is valid for example
    const answer = Math.pow(eval(current), 1 / power);
    $('#output').text(answer);
  } catch (err) {
    $('#output').text(err);
  }
}

function fact(num) {
  if (eval(num) < 0) throw 'Error';
  else if (eval(num) == 0) return 1;
  else {
    return num * fact(num - 1);
  }
}

function factorial() {
  const current = $('#output').text();
  try {
    // Is a positve number and is it a number (handles symbols)
    let val = fact(current);
    //Eval before taking root so sqrt(9*9) is valid for example

    $('#output').text(val);
  } catch (err) {
    $('#output').text(err);
  }
}

function isLastElementSymbol(array = ['+', '-', '/', '*', '.']) {
  const lastElem = $('#output')
    .text()
    .slice(-1);
  return array.includes(lastElem);
}

function PI() {
  if ($('#output').text().length >= 20) return;

  if (isLastElementSymbol(['+', '-', '/', '*'])) {
    $('#output').append(3.14);
    return;
  } else if (
    (array.includes(lastElem) && lastElem == $(this).val()) ||
    $('#output').text() == ''
  ) {
    return;
  }
}

function getIndicesOf(searchStr, str, caseSensitive = false) {
  var searchStrLen = searchStr.length;
  if (searchStrLen == 0) {
    return [];
  }
  var startIndex = 0,
    index,
    indices = [];
  if (!caseSensitive) {
    str = str.toLowerCase();
    searchStr = searchStr.toLowerCase();
  }
  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
    indices.push(index);
    startIndex = index + searchStrLen;
  }
  return indices;
}

function findSymbolIndexMax(string) {
  const symbolsArr = ['+', '-', '/', '*'];
  // const current = $('#output').text();

  // current.forEach(function(item, i, text) {
  //   symbolsArr.forEach(function(symbol, j, symbols) {
  //     text[i] = current.indexOf(item);
  //   });
  // });
  let allOccurences = [];
  let occurences = [];
  symbolsArr.forEach(function(item, index, arr) {
    occurences = getIndicesOf(item, string);
    allOccurences.push(...occurences);
  });
  return Math.max(...allOccurences);
}

$(function() {
  $('button[id^="input"]').click(function() {
    if ($('#output').text().length >= 20) return;
    appendValue(this);
  });
  $('button[id^="dot"]').click(function() {
    if ($('#output').text().length >= 20) return;
    const string = $('#output').text();

    const i = Math.max(...getIndicesOf('.', string));

    const symbolIndexMax =
      findSymbolIndexMax(string) < -1 ? -1 : findSymbolIndexMax(string);

    if (symbolIndexMax >= i) {
      if (!isLastElementSymbol(['1', '2', '3', '4', '5', '6', '7', '8', '9'])) {
        $('#output').append('0.');
      } else {
        appendValue(this);
      }
    }
  });

  $('button[id^="clear"]').click(function() {
    $('#output').text('');
  });

  $('button[id^="pop"]').click(function() {
    popValue();
  });
  $('button[id^="symbol"]').click(function() {
    const lastElem = $('#output')
      .text()
      .slice(-1);

    if (isLastElementSymbol() && lastElem != $(this).val()) {
      replaceValue(this);
      return;
    } else if (
      (isLastElementSymbol() && lastElem == $(this).val()) ||
      $('#output').text() == ''
    ) {
      return;
    }
    appendValue(this);
  });
});
