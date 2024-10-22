
const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

sub_total = 0;
for (let element of cart) {
   let item = element.product;
   let quantity = element.quantity;
   full_price = calculateTotal(quantity, item.price);
   outputCartRow(element, full_price);
   sub_total += full_price;
}
document.write('<tr class=totals>');
document.write('<td colspan="4">Subtotal</td>');
document.write('<td>$' + sub_total.toFixed(2) + '</td>');
document.write('</tr>');

document.write('<tr class=totals>');
document.write('<td colspan="4">Tax</td>');
tax = tax_rate * sub_total;
document.write('<td>' + tax.toFixed(2) + '</td>');
document.write('</tr>');

document.write('<tr class=totals>');
document.write('<td colspan="4">Shipping</td>');

shipping = 0;
if (sub_total <= shipping_threshold) {
   shipping = 40;
}

document.write('<td>' + shipping.toFixed(2) + '</td');
document.write('</tr>');

document.write('<tr class=totals>');
document.write('<td colspan="4" class="focus">Grand Total</td>');
grand_total = (sub_total + tax + shipping);
document.write('<td class=focus>' + grand_total.toFixed(2) + '</td>');
document.write('</tr>');

