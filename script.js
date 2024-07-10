const ranges = {
    '2': {low: '000-499', high: '500-999'},
    '5': {low: '000-199', high: '800-999'},
    '10': {low: '000-099', high: '900-999'},
    '20': {low: '000-049', high: '950-999'},
    '100': {low: '000-010', high: '990-999'},
    '1000': {low: '000', high: '999' }
};

/*-------------------------------------------------------------------------------------------------*/

$('.multiply-button').change(function() {
    $('.color-ck3fv').text($(this).val() + " times");
});

$('.multiply-button, .radio-button').change(function () {
    const multiplyValue = $('input[name = "multiply"]:checked').val();
    const rollValue = $('input[name = "roll"]:checked').attr('id');
    const range = ranges[multiplyValue][rollValue === 'roll-low' ? 'low' : 'high'];
    $('.color-c7gKa').text(range);
});

/*-------------------------------------------------------------------------------------------------*/



/*-------------------------------------------------------------------------------------------------*/
