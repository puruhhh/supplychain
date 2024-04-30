var QRCode = require('qrcode');

function generateQR() {
  var canvas = document.getElementById('qrCanvas');
  var textInput = document.getElementById('textInput');
  var text = textInput.value;

  if (text.trim() === '') {
    alert('Please enter some text!');
    return;
  }

  QRCode.toCanvas(canvas, text, function (error) {
    if (error) {
      console.error(error);
    } else {
      console.log('QR code generated successfully!');
    }
  });
}
