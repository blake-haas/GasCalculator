$(function() {
	CalculateGallons();
});

function CalculateGallons(){
	var priceOfGas = parseFloat($("#priceOfGas").val());
	var cubRewardsAmount = parseFloat($("#cubRewards").val());
	var milesPerGallon = parseInt($("#milesPerGallon").val());
	var milesDriven = parseInt($("#milesDriven").val());

	var newPriceOfGas = (priceOfGas - cubRewardsAmount);

	var gallonsToFill = (milesDriven / milesPerGallon).toFixed(2);
	var amountToPay =  (gallonsToFill * newPriceOfGas).toFixed(2);
	
	$("#txtGallons").val(gallonsToFill);
	$("#txtAmountToPay").val(amountToPay);
	
}
