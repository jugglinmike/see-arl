define(function() {
  return function (elem) {

    var timer;
    var messages = [
      [
        'who\'s this guy?',
        'mr balloons.',
        'mr balloon hands.',
        'no way.',
        'get real.'
      ].join(' '),
      [
        'mr walk-way.',
        'mr walk down me, i\'m a walk-way.',
        'lead me to the building.',
        'fuck you.'
      ].join(' '),
      [
        'who\'s chair is that?',
        'who brought that goddamn chair here?',
        'it\'s not my chair.',
        'not my chair, not my problem, that\'s what i say.',
        'no way.',
      ].join(' '),
      'i\'m gonna buy the hotel.'
    ];

    var createTyper = function (id) {
      var typer = document.createElement('div');
      typer.style.height = '40px';
      typer.style.lineHeight = '40px';
      typer.style.fontSize = '25px';
      typer.style.backgroundColor = '#000';
      typer.style.color = '#fff';
      typer.style.padding = '0 10px';
      typer.style.cursor = 'pointer';
      typer.style.position = 'fixed';
      typer.style.top = 0;
      typer.style.left = 0;
      typer.style.right = 0;
      typer.addEventListener('click', function () {
        typer.len = 0;
        clearInterval(timer);
        show({
          el: typer,
          msg: messages[Math.floor(Math.random()*messages.length)]
        });
      });
      document.body.appendChild(typer);
      return typer;
    }

    var show = function (opts) {
      var el = opts.el;
      var msg = opts.msg;

      el.innerHTML = [
        msg.substring(0, ++el.len-1),
        '<strong>',
        msg.substring(el.len-1, el.len),
        '</strong>_'
      ].join('');

      var nextLetterDelay = 50+(Math.random()*100);
      var text = el.innerText || el.textContent;
      var lastLetter = text.slice(-2)[0];
      var endOfSentence = ['.','?'].indexOf(lastLetter) !== -1;
      if (endOfSentence) {
        nextLetterDelay = 500;
      }
      if (text.length <= msg.length) {
        timer = setTimeout(show.bind(null, opts), nextLetterDelay);
      } else {
        el.innerHTML = text;
        timer = setInterval(flash.bind(null, opts), 450);
      }
    }

    var flash = function (opts) {
      var el = opts.el;
      var msg = opts.msg;
      var body = el.innerHTML;
      if (body.indexOf('_') === -1) {
        el.innerHTML = body += '_';
      } else {
        el.innerHTML = body.replace(/_/, '');
      }
    }

    var messageBox = createTyper();
    elem.style.fontSize = '100px';
    elem.innerHTML = 'e';
  };
});
