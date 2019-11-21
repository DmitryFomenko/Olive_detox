import './styles.css';

$(document).ready(function() {
  $(".js-select").select2({
    width: "59vw",
    placeholder:"When do you need to be clean?",
    data: ['text','more text','and more', 'and more....']
  });
});

$(document).ready(function() {
  $(".js-select2").select2({
    width: "59vw",
    placeholder:"What’s your toxin exposure?",
    data: ['text','more text','and more', 'and more....']
  });
});

$(document).ready(function() {
  $(".js-select3").select2({
    width: "59vw",
    placeholder:"What’s your body weight?",
    data: ['text','more text','and more', 'and more....']
  });
});

$(document).ready(function() {
  $(".js-select4").select2({
    width: "59vw",
    placeholder:"More needs",
    data: ['text','more text','and more', 'and more....']
  });
});
