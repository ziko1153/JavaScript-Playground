// center the calculator and the additional info
$(document).ready(function() {
  const calculatorWidth = $( '#calculator' ).width();
  let marginLeft = ($(window).width() - calculatorWidth) / 2;

  //$( '#calculator' ).css( { marginLeft : `${marginLeft}px` });

  let padding = $( '#additional-info' ).css('padding-left');
  let border  = $( '#additional-info' ).css('border-width');

  padding = parseInt(padding);
  border  = parseInt(padding);

  //$( '#additional-info' ).width(calculatorWidth - (border + padding));
  //$( '#additional-info' ).css( { marginLeft : `${marginLeft}px` });

  // sets the proper width of the points
  //$( '.head' ).css( { minWidth : $( '#longest-head' ).width() });

  // hide details of 7.
  $( '#detailsContainer' ).css( { 'display' : 'none' });

  // align the two View Details buttons of 7.
  marginLeft = $('#viewDetailsButtonTop').css('marginLeft');
  $( '#viewDetailsButtonBottom' ).css({ 'marginLeft': marginLeft });

  createStateSelectOptions();
})

// remove the `$ ` prefix and commas to get the dollar amount, convert to float
function valueOf(tag) {
  const dollars = $(tag).val().replace(/(\$\s|,)/g, '');
  return parseFloat(dollars);
}

// add commas for every 3 digits
function addCommas(number) {
  let result = Number(Math.ceil(number)).toLocaleString();
  return result;
}

function isCheckboxOff(tag) {
  return !$( tag ).prop('checked');
}

function isCheckboxOn(tag) {
  return $( tag ).prop('checked');
}

// make on the calculations that depend on the montly expense
function standardCalculations() {
  // 1. has been populated for the first time, mark default checkboxes
  const perPhone = $( '#perPhone' ).prop('checked');
  const perPhoneLongDistance = $( '#perPhoneLongDistance' ).prop('checked');
  if (isCheckboxOff('#perPhone') && isCheckboxOff('#allPhones')) {
    $( '#perPhone' ).prop('checked', true);
  }
  if (isCheckboxOff('#perPhoneLongDistance') && isCheckboxOff('#allPhonesLongDistance')) {
    $( '#perPhoneLongDistance' ).prop('checked', true);
  }

  const plansCount     = parseInt($( '#plansCount' ).val().replace(/,/g, ''));
  const monthlyPayment = valueOf('#monthlyPayment');
  const longDistance   = valueOf('#longDistance');

  let monthlyExpense = 0;
  monthlyExpense += perPhone ? plansCount * monthlyPayment : monthlyPayment
  monthlyExpense += perPhoneLongDistance ? plansCount * longDistance : longDistance

  $( '#monthlyExpense' ).text(`$ ${addCommas(monthlyExpense)}`);
  $( '#yearlyExpense' ).text(`$ ${addCommas(12 * monthlyExpense)}`);

  const nineYearExpense = 9 * 12 * monthlyExpense;
  $( '#nineYearExpense' ).text(`$ ${addCommas(nineYearExpense)}`);

  let newNineYearExpense
  if ($('#viewDetailsButtonBottom').css('display') === 'none') {
    newNineYearExpense = plansCount * 500;
    $( '#newNineYearExpense' ).text(`$ ${addCommas(newNineYearExpense)}`);

   
  } else {
    newNineYearExpense = $('#newNineYearExpense').text().replace(/(\s|\$|,)/g, '');
    newNineYearExpense = parseFloat(newNineYearExpense);

  }

  const nineYearSaving = nineYearExpense - newNineYearExpense;
  $( '#nineYearSaving' ).text(`$ ${addCommas(nineYearSaving)}`);

  $( '#yearlySaving' ).text(`$ ${addCommas(nineYearSaving / 9)}`);
}

function switchValuesOfCheckboxes(firstId, secondId) {
  const isChecked = isCheckboxOn(firstId);
  $( firstId ).prop('checked', isChecked);
  $( secondId ).prop('checked', !isChecked);
}

// make the calculation when Per Phone is clicked
$( '#perPhone' ).click(() => {
  switchValuesOfCheckboxes('#perPhone', '#allPhones');
  standardCalculations();
});

// make the calculation when All Phones is clicked
$( '#allPhones' ).click(() => {
  switchValuesOfCheckboxes('#allPhones', '#perPhone');
  standardCalculations();
});

 // make the calculation when Per Phone is clicked
$( '#perPhoneLongDistance' ).click(() => {
  switchValuesOfCheckboxes('#perPhoneLongDistance', '#allPhonesLongDistance');
  standardCalculations();
});

// make the calculation when All Phones is clicked
$( '#allPhonesLongDistance' ).click(() => {
  switchValuesOfCheckboxes('#allPhonesLongDistance', '#perPhoneLongDistance');
  standardCalculations();
});

// Add $ in front of the amount written
function addDollarSignFor(element) {
  const elementTag = `#${element}`;
  const value = $(elementTag).val();

  if (value.charAt(0) === '$') return;
  $(elementTag).val(`$ ${value}`);
}

// checks whether all fields necessary for calculation are valid?
function isCalculationsDue() {
  return $('#plansCount').val() && $('#monthlyPayment').val() && $('#longDistance').val();
}

function colorBackgroundOf(element, color) {
  $( element ).css( { backgroundColor : color });
}

function numberOrCap(number, cap) {
  const finalValue = parseInt(number) < cap ? number : cap;
  return Number(finalValue).toLocaleString();
}

$( '#plansCount' ).change(() => {
  const count = $( '#plansCount' ).val();
  if (count) return;

  $( '#plansCount' ).val('1');
  $( '#simCardsCount' ).val('1') && triggerDetailCount('simCards', 500); // recalculate simsCardsAmount
  refreshShippingCost();
  refreshCancelFees();
  refreshTransfer();
  refreshNewPhone();
  if (isCalculationsDue()) standardCalculations()
  colorBackgroundOf('#monthlyPayment', 'white');
  if (valueOf('#monthlyPayment')) {
    colorBackgroundOf('#longDistance', 'white');
    $('#longDistance').removeAttr('readonly')
  }
})

$( '#plansCount' ).keyup(() => {
  const originalValue = $( '#plansCount' ).val();
  // change monthly payment's background color
  if (!originalValue) {
    colorBackgroundOf('#monthlyPayment', '#eaeaea');
    return colorBackgroundOf('#longDistance', '#eaeaea');
  }

  let newValue = originalValue.replace(/\./g,'').replace(/,/g, ''); // remove dots, commas

  // set default value for plansCount to 0
  if (newValue.charAt(0) === '0') return $( '#plansCount' ).val('1');

  // check for invalid format
  if (!newValue.match(/^\d+$/)) {
    $( '#plansCount' ).val('');
    return colorBackgroundOf('#monthlyPayment', '#eaeaea');
  }

  // determine final numeric value and visualize it with commas
  const formattedValue = numberOrCap(newValue, 1000000);
  $( '#plansCount' ).val(formattedValue);
  $( '#simCardsCount' ).val(formattedValue) && triggerDetailCount('simCards', 500); // recalculate simsCardsAmount
  refreshShippingCost();
  refreshCancelFees();
  refreshTransfer();
  refreshNewPhone();

  // recalculate on update
  if (isCalculationsDue()) standardCalculations()

  // change monthly payment's background color
  colorBackgroundOf('#monthlyPayment', 'white');
  if (valueOf('#monthlyPayment')) {
    colorBackgroundOf('#longDistance', 'white');
    $('#longDistance').removeAttr('readonly') // unlock the field
  }
});

$( '#monthlyPayment' ).change(() => {
  if ($( '#monthlyPayment' ).val()) return;

  // value deleted, set default value
  $( '#monthlyPayment' ).val('$ 1');

  if (isCalculationsDue()) standardCalculations()
  colorBackgroundOf('#longDistance', 'white');
});

// Add $ for 2., visualize errors regarding the format
$( '#monthlyPayment' ).keyup(() => {
  // validate amount
  const numberWithDotRegex = /^\d+(|\.\d{0,2})$/;
  let value = $( '#monthlyPayment' ).val();

  // change long distance's background color
  if (!value) return colorBackgroundOf('#longDistance', '#eaeaea');

  value = value.replace('$ ', '').replace(/,/g, '') // remove dollar sign, commas

  // set default value for plansCount to 0
  if (value.charAt(0) === '0') return $( '#monthlyPayment' ).val('');

  // invalid value
  if (!value.match(numberWithDotRegex)) {
    // 3rd decimal entered
    if (value.match(/^\d+\.\d{3,}$/)) {
      const trimmed3rdDecimal = value.substring(0, value.length - 1);
      return $( '#monthlyPayment' ).val('$ ' + trimmed3rdDecimal);
    }

    $( '#monthlyPayment' ).val('');
    return colorBackgroundOf('#longDistance', '#eaeaea');
  }

  // determine final numeric value and visualize it with commas
  let formattedFinal = numberOrCap(value, 1000000);
  formattedFinal += value.slice(-1) === '.' ? '.' : '';
  $( '#monthlyPayment' ).val(formattedFinal);

  // show the checkboxes
  $('#checkboxes, #checkboxesLongDistance').css({ 'display': 'block' });
  $('#checkboxesPlaceholder, #checkboxesLongDistancePlaceholder').css({ 'display': 'none' });

  // set default value for long distance to 0
  if (!$( '#longDistance' ).val() && $( '#plansCount' ).val()) $( '#longDistance' ).val('$ 0');

  // recalculate on update
  if (isCalculationsDue()) standardCalculations();

  // show view details of 7. and fix height
  $( '#viewDetailsButtonTop' ).css({ display: 'block' });
//  $('#viewDetailsLi').offset({ top: 515 }) // 6 * li + title + margins

  // add dollar sign
  addDollarSignFor('monthlyPayment');

  // change long distance's background color
  colorBackgroundOf('#longDistance', 'white');
  $('#longDistance').removeAttr('readonly') // unlock the field
});

// Add $ for 3.
$( '#longDistance' ).keyup(() => {
  const value = $( '#longDistance' ).val().replace(/(\$\s|,)/g, '') // remove dollar sign, commas

  // validate whether format is number/number with dot
  if (!value.match(/^\d+(|\.\d{0,2})$/)) {
    // 3rd decimal entered
    if (value.match(/^\d+\.\d{3,}$/)) {
      const trimmed3rdDecimal = value.substring(0, value.length - 1);
      $( '#longDistance' ).val('$ ' + trimmed3rdDecimal);
      if (isCalculationsDue()) standardCalculations();
      return;
    }

    if ($( '#monthlyPayment' ).val()) $( '#longDistance' ).val('$ 0');
    if (isCalculationsDue()) standardCalculations();
    return;
  }

  // determine final numeric value and visualize it with commas
  let formattedFinal = numberOrCap(value, 1000000);

  formattedFinal += value.slice(-1) === '.' ? '.' : '';
  $( '#longDistance' ).val(formattedFinal);
  // recalculate on update
  if (isCalculationsDue()) standardCalculations();

  // add dollar sign
  addDollarSignFor('longDistance');
});

$( '#viewDetailsButtonTop' ).click(() => {
  const isOpened = $( '#detailsContainer' ).is(':visible');

  // close
  if (isOpened) {
    $( '.viewDetailsButton' ).text('View details');
    $( '#detailsContainer' ).css( { 'display' : 'none' });
    $( '#viewDetailsButtonBottom' ).css({ 'display' : 'none' });
//    $( '#viewDetailsLi' ).css({ 'height': '70px' });
    return
  }
  // open
  $( '.viewDetailsButton' ).text('Hide details');
  $( '#detailsContainer' ).css( { 'display' : 'block' });
  $( '#viewDetailsButtonBottom' ).css({ 'display' : 'block' });

  const marginLeft = $( '#viewDetailsButtonTop' ).css('marginLeft');

  $( '#viewDetailsButtonBottom' ).css({ 'marginLeft' : marginLeft });

  // default the number of sims cards, transfers, new phones, shipping addresses and cancel fees to the plans count
  ['#simCardsCount', '#transferCount', '#newPhoneCount'].forEach(tag => {
    if (!$( tag ).val()) $( tag ).val($( '#plansCount' ).val());
  });

  // extend 7.'s height for browser interoperability
//  $( '#viewDetailsLi' ).css({ 'height': '300px' });

  // make calculations for sims cards
  triggerDetailCount('simCards', 500);
});

$( '#viewDetailsButtonBottom' ).click(() => {
  if ($( '#detailsContainer' ).is(':visible')) {
    $( '.viewDetailsButton' ).text('View details');
    $( '#detailsContainer' ).css( { 'display' : 'none' });
    $( '#viewDetailsButtonBottom' ).css({ 'display' : 'none' });
//    $( '#viewDetailsLi' ).css({ 'height': '70px' });
  }
});

function numberCapAtMillion(element) {
  let value = $(element).val().replace(/,/g, ''); // remove dots, commas

  if (!value.match(/^\d+$/)) {
    $( element ).val('');
    return
  }
  $(element).val(numberOrCap(value));

  return value;
}

function calculateDetailSumFor(element, sum) {
  $(element).text(sum ? '$ ' + Number(sum).toLocaleString() : '');
  if (isCheckboxOn('#stateCheckbox') && element.match(/^#(simCards|transfer|newPhone)Sum$/)) {
    calculateStateTaxes(parseFloat($('#stateSelect').val()))
  }
}

function triggerDetailCheckboxFor(element, amount) {
  const isChecked = isCheckboxOn(`#${element}Checkbox`);
  const additionalText = "";


  if (isChecked) {
    $(`#${element}Label`).text($(`#${element}Label`).text() + additionalText);
    $(`#${element}Count`).val($('#plansCount').val());
    $(`#${element}Count`).css({ 'display' : 'block' });

      if(element==='transfer'){

    $('#transferval').show();
      }else if(element==='newPhone'){
          $('#newPhoneval').show();
      }

  } else {
    $(`#${element}Label`).text( $(`#${element}Label`).text().replace(additionalText, ''));
    $(`#${element}Count`).css( { 'display' : 'none' });
      if(element==='transfer'){

    $('#transferval').hide();
        }else if(element==='newPhone'){
          $('#newPhoneval').hide();
      }
  }

  const sum = isChecked ? $(`#${element}Count`).val().replace(/,/g, '') * amount : '';
  calculateDetailSumFor(`#${element}Sum`, sum);
  detailsTotalSum();
}

$( '#transferCheckbox' ).click(() => triggerDetailCheckboxFor('transfer', 108));
$( '#newPhoneCheckbox' ).click(() => triggerDetailCheckboxFor('newPhone', 200));
$( '#shippingFeesCheckbox' ).click(() => {
  const isChecked = isCheckboxOn('#shippingFeesCheckbox');
  let count = $( '#plansCount' ).val(); // string, comma every 3 digits
  const additionalText = ` $100 x `;
  $('#shippingVal').text(additionalText);
  $("#shippingCount").text(count);

  if (isChecked) {
    $( '#shippingFeesLabel' ).text($( '#shippingFeesLabel' ).text());
    $('#shippingVal').show();
    $("#shippingCount").show();
  } else {
    $( '#shippingFeesLabel' ).text('Shipping & handling fees:');
    $('#shippingVal').hide();
    $("#shippingCount").hide();
  }

  count = parseInt(count.replace(/(,|\s|\$)/g, ''));
  const sum = isChecked ? count * 10 : '';

  calculateDetailSumFor( '#shippingFeesSum' , sum);
  detailsTotalSum();
});
$( '#stateCheckbox' ).click(() => {
  const isChecked = isCheckboxOn(`#stateCheckbox`);
$('#stateVal').text('State');
  if (isChecked) {
    $( '#stateLabel' ).text($( '#stateLabel' ).text());
    $('#stateVal').show();
    $( '#stateSelect' ).css({ 'display' : 'block' });
    $( '#stateSum' ).css({ 'display' : 'block' });
  } else {
    //$( '#stateLabel' ).text( $( '#stateLabel' ).text().replace('State', ' '));
    $( '#stateSelect' ).css( { 'display' : 'none' });
    $( '#stateSum' ).css( { 'display' : 'none' });
     $('#stateVal').hide();
  }
  calculateStateTaxes($( '#stateSelect' ).val());
  detailsTotalSum();
});
$( '#cancelFeesCheckbox' ).click(() => {
  const isChecked = isCheckboxOn(`#cancelFeesCheckbox`);

  // make visible
  const dispaly = isChecked ? 'block' : 'none';
  $( '#cancelFeesCount' ).css({ 'display' : dispaly });
  $( '#cancelFeesAmount' ).css({ 'display' : dispaly });
  $( '#cancelFeesAmountMultiplySign' ).css({ 'display' : dispaly });

  // copy the multiply value
  $( '#cancelFeesCount' ).text($( '#plansCount' ).val());


  let count = $( '#plansCount' ).val(); // string, comma every 3 digits
  count = parseInt(count.replace(/(,|\s|\$)/g, ''));
  let amount = $( '#cancelFeesAmount' ).val(); // string, comma every 3 digits
  amount = parseInt(amount.replace(/(,|\$|\s)/g, ''))
  const sum = isChecked ? count * amount : '';

  calculateDetailSumFor( '#cancelFeesSum' , sum);
  detailsTotalSum();
});

function numberCapAtPlansCount(element) {
  let value = $(element).val().replace(/,/g, ''); // remove dots, commas

  if (!value.match(/^\d+$/)) {
    $( element ).val('');
    return
  }

  const cap = $( '#plansCount' ).val().replace(/,/g, ''); // remove dots, commas
  const finalValue = numberOrCap(value, cap);

  $(element).val(finalValue);
  return finalValue;
}

function triggerDetailCount(element, amount) {
  let number = numberCapAtPlansCount(`#${element}Count`)

  if (!number) {
    calculateDetailSumFor(`#${element}Sum`, '');
  } else if (isCheckboxOn(`#${element}Checkbox`) || element === 'simCards') {
    number = parseInt(number.replace(/,/g, ''));
    calculateDetailSumFor(`#${element}Sum`, number * amount);
  }
  detailsTotalSum();
}

function refreshShippingCost() {
  $('#shippingFeesCheckbox').trigger('click');
  $('#shippingFeesCheckbox').trigger('click');
}

function refreshCancelFees() {
  $('#cancelFeesCheckbox').trigger('click');
  $('#cancelFeesCheckbox').trigger('click');
}

function refreshTransfer() {
  $('#transferCheckbox').trigger('click');
  $('#transferCheckbox').trigger('click');
}

function refreshNewPhone() {
  $('#newPhoneCheckbox').trigger('click');
  $('#newPhoneCheckbox').trigger('click');
}

// link plans and sim cards
$( '#simCardsCount' ).keyup(() => {
  let newValue = $( '#simCardsCount' ).val().replace(/(,|\s|\$)/g, '');

  if (!newValue || !newValue.match(/^\d+$/)) { // empty or not only digits
    newValue = 1;
    //$( '#simCardsCount' ).val(newValue)
  }

  newValue = parseInt(newValue) > 1000000 ? 1000000 : parseInt(newValue);

  $( '#plansCount' ).val( Number(newValue).toLocaleString() )
  if (isCalculationsDue()) standardCalculations();

  refreshShippingCost();
  refreshCancelFees();
  refreshTransfer();
  refreshNewPhone();

  triggerDetailCount('simCards', 500);
});

$('#simCardsCount').focusout(function(){
let newValue = $( '#simCardsCount' ).val().replace(/(,|\s|\$)/g, '');

if(!newValue||newValue==0){
  newValue = 1;
  newValue = parseInt(newValue) > 1000000 ? 1000000 : parseInt(newValue);
    $('#simCardsCount').val('1');
  $( '#plansCount' ).val( Number(newValue).toLocaleString() )
  if (isCalculationsDue()) standardCalculations();

  refreshShippingCost();
  refreshCancelFees();
  refreshTransfer();
  refreshNewPhone();

  triggerDetailCount('simCards', 500);

}

});

$( '#simCardsCount' ).keyup(() => triggerDetailCount('simCards', 500));
$( '#transferCount' ).keyup(() => triggerDetailCount('transfer', 108));
$( '#newPhoneCount' ).keyup(() => triggerDetailCount('newPhone', 200));
$( '#cancelFeesAmount' ).keyup(() => {
  let value = $( '#cancelFeesAmount' ).val().replace(/(,|\s|\$)/g, ''); // to plain number string
  value = parseInt(value)

  if(!value) {
    $( '#cancelFeesSum' ).text('');
    return detailsTotalSum();
  }

  if(value > 9999) value = parseInt(value / 10);
  $( '#cancelFeesAmount' ).val('$ ' + Number(value).toLocaleString());

  const count = $( '#cancelFeesCount' ).text().replace(/,/g, '');
  $( '#cancelFeesSum' ).text('$ ' + Number(value * count).toLocaleString());

  detailsTotalSum();
});

function calculateStateTaxes(percentage) {
  let base = 0;

  ['#simCardsSum', '#transferSum', '#newPhoneSum'].forEach(tag => {
    let value = $( tag ).text().replace(/(,|\s|\$)/g, ''); // get the amount as a string
    value = parseInt(value) || 0;
    base += value;
  });

  if (!base) return $( '#stateSum' ).text('');

  const finalAmount = Math.ceil(base * percentage / 100);
  $( '#stateSum' ).text(`\$ ${Number(finalAmount).toLocaleString()}`);
}

$( '#stateSelect' ).change(event => {
  calculateStateTaxes(event.target.value);
  detailsTotalSum();
});

function createStateSelectOptions() {
  const percantagesPerState = statePercentages();

  Object.keys(percantagesPerState).forEach(state => {
    $('#stateSelect').append($('<option>', { value: percantagesPerState[state], text: state }));
  });
}

function detailsTotalSum() {
  if (!$('#monthlyPayment').val()) return;

  let sum = 0;

  detailsSumFileds().forEach(tag => {
    let amount = $( tag ).text().replace(/(\$\s|,)/g, ''); // only a number string

    amount = parseFloat(amount || 0);

    if (amount) sum += amount;

    if (tag === '#stateSum' && isCheckboxOff('#stateCheckbox')) sum -= amount;
  });

  const finalValue = '$ ' + Number(sum).toLocaleString();
  $( '#detailsTotalSum' ).text(finalValue);
  $( '#newNineYearExpense' ).text(finalValue);
  if (isCalculationsDue()) standardCalculations();
}

function detailsSumFileds() {
  return ['#simCardsSum', '#transferSum', '#newPhoneSum', '#shippingFeesSum', '#stateSum', '#cancelFeesSum'];
}

function statePercentages() {
  return {
           AL: 9.10,
           AK: 1.76,
           AZ: 8.33,
           AR: 9.41,
           CA: 8.54,
           CO: 7.52,
           CT: 6.35,
           DE: 0.00,
           DC: 5.75,
           FL: 6.80,
           GA: 7.15,
           HI: 4.35,
           ID: 6.03,
           IL: 8.70,
           IN: 7.00,
           IA: 6.80,
           KS: 8.68,
           KY: 6.00,
           LA: 10.02,
           ME: 5.50,
           MD: 6.00,
           MA: 6.25,
           MI: 6.00,
           MN: 7.42,
           MS: 7.07,
           MO: 8.03,
           MT: 0.00,
           NE: 6.89,
           NV: 8.14,
           NH: 0.00,
           NJ: 6.60,
           NM: 7.66,
           NY: 8.49,
           NC: 6.95,
           ND: 6.80,
           OH: 7.15,
           OK: 8.91,
           OR: 0.00,
           PA: 6.34,
           RI: 7.00,
           SC: 7.37,
           SD: 6.40,
           TN: 9.46,
           TX: 8.17,
           UT: 6.77,
           VT: 6.18,
           VA: 5.63,
           WA: 9.18,
           WV: 6.37,
           WI: 5.42,
           WY: 5.46,
         }
}