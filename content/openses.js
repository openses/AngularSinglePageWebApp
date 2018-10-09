// https://webdesign.tutsplus.com/tutorials/copy-to-clipboard-made-easy-with-clipboardjs--cms-25086

/* (function(){

    var pre = document.getElementsByTagName('pre');

    for (var i = 0; i < pre.length; i++) {
      var isLanguage = pre[i].children[0].className.indexOf('language-');
      if ( isLanguage === 0 ) {
          var button = document.createElement('button');
                  button.className = 'copy-button';
                  button.textContent = 'Copy';
                  pre[i].appendChild(button);
      }
    };

    var copyCode = new ClipboardJS('.copy-button', {
      target: function(trigger) {
        return trigger.previousElementSibling;
      }
    });
  })(); */


  // https://clipboardjs.com/

var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    e.clearSelection();
    e.trigger.textContent = 'Copied';
    // document.querySelector('data-clipboard-target="#bar"').value = 'Copied!';
    window.setTimeout(function() {
      e.trigger.textContent = 'Copy to clipboard';
  }, 2000);
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});



