var price = prompt("Input price (in range 0 to 9999999)", '');
var discount = prompt("Input discount(in range 0 to 99)", '');
var rule1 = Boolean(isNaN(price) === false && isNaN(discount) === false && price !== '' && discount !== '');
if (rule1 && price >= 0 && price <= 9999999 && discount >= 0 && discount <= 99) {
    var priceD = discount / 100 * price;
    var fprice = parseFloat(price).toFixed(2);
    var fdiscount = parseFloat(discount).toFixed(2);
    var withdis = parseFloat(price - priceD).toFixed(2);
    var saved = parseFloat(priceD).toFixed(2);
    var string1 = "Price without discount: " + fprice + "\n" + "Discount: " + fdiscount;
    alert(string1 + "%" + "\n" + "Price with discount:" + withdis + "\n" + "Saved: " + saved);
} else {
    alert("Inalid data");
}