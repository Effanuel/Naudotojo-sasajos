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

$(function() {
  $('button[id^="input"]').click(function() {
    if ($('#output').text().length < 20) {
      appendValue(this);
    }
  });

  $('button[id^="equal"]').click(function() {
    const current = $('#output').text();
    const answer = eval(current);
    $('#output').text(answer);
  });

  $('button[id^="clear"]').click(function() {
    $('#output').text('');
  });

  $('button[id^="pop"]').click(function() {
    popValue();
  });
  $('button[id^="symbol"]').click(function() {
    // if (this.id == 'pop') {
    //   popValue();
    // }
    const array = ['+', '-', '/', '*'];
    const lastElem = $('#output')
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
