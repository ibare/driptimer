$(function() {
  var stopDripId;
  var stepHolder = ['step0', 'step1', 'step2', 'step3'];
  var stepIndex = -1;
  var dripTime = 20;
  var step0Time = 5;
  var step1Time = 5;
  var step2Time = 5;
  var step3Time = 5;

  $('#dripProgress').knob({
    value: 1,
    min: 1,
    max: dripTime,
    step: 1,
    width: 80,
    fgColor: '#00a053',
    inputColor: '#2b1b1b',
    skin: 'tron',
    thickness: '0.5',
    displayPrevious: true
  });

  $('#step0').knob({
    value: 1,
    min: 1,
    max: step0Time,
    step: 1,
    width: 150,
    fgColor: '#000',
    inputColor: '#2b1b1b',
    skin: 'tron',
    thickness: '0.5',
    displayPrevious: true
  });

  $('#step1').knob({
    value: 1,
    min: 1,
    max: step1Time,
    step: 1,
    width: 150,
    fgColor: '#2b1b1b',
    inputColor: '#2b1b1b',
    skin: 'tron',
    thickness: '0.5',
    displayPrevious: true
  });

  $('#step2').knob({
    value: 1,
    min: 1,
    max: step2Time,
    step: 1,
    width: 150,
    fgColor: '#463333',
    inputColor: '#2b1b1b',
    skin: 'tron',
    thickness: '0.5',
    displayPrevious: true
  });

  $('#step3').knob({
    value: 1,
    min: 1,
    max: step0Time,
    step: 1,
    width: 150,
    fgColor: '#865b5b',
    inputColor: '#2b1b1b',
    skin: 'tron',
    thickness: '0.5',
    displayPrevious: true
  });

  stopDripId = setInterval(function() {
    if(stepIndex >= stepHolder.length) {
      $('#dripComplate').addClass('show');
      clearInterval(stopDripId);
      return;
    }

    if(stepIndex == -1) {
      $('#step0').addClass('current');
      stepIndex = 0;
    }

    $('#dripProgress')
      .val(parseInt($('#dripProgress').val()) + 1)
      .trigger('change');

    switch(stepHolder[stepIndex]) {
      case 'step0':
        $('#step0')
          .val(parseInt($('#step0').val()) + 1)
          .trigger('change');
        if(parseInt($('#step0').val()) >= step0Time) {
          stepIndex++;
          $('#step0').removeClass('current');
          $('#step1').addClass('current');
        }
        break;
      case 'step1':
        $('#step1')
          .val(parseInt($('#step1').val()) + 1)
          .trigger('change');
        if(parseInt($('#step1').val()) >= step1Time) {
          $('#step1').removeClass('current');
          $('#step2').addClass('current');
          stepIndex++;
        }
        break;
      case 'step2':
        $('#step2')
          .val(parseInt($('#step2').val()) + 1)
          .trigger('change');
        if(parseInt($('#step2').val()) >= step2Time) {
          $('#step2').removeClass('current');
          $('#step3').addClass('current');
          stepIndex++;
        }
        break;
      case 'step3':
        $('#step3')
          .val(parseInt($('#step3').val()) + 1)
          .trigger('change');
        if(parseInt($('#step3').val()) >= step3Time) stepIndex++;
        break;
    }
  }, 1000);
});