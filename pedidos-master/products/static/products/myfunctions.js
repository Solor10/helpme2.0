document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 117)) {
            return false;
        } else {
            return true;
        }
};

document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}





// Add event trigger to inputs with class auto-calc
$(document).on("keyup change paste", "td > input.auto-calc", function() {

  // Determine parent row
  row = $(this).closest("tr");

  // Get first and second input values
  first = row.find("td input.unit-price").val();
  second = row.find("td input.amount").val();

  // Print input values to output cell
  row.find(".total-cost").val(Math.round(first * second));


});


var total_ticket = 0;
var order_ticket = 'ticket 1';
var order = []
var res = 0
$(document).on("keyup change paste", "td > input.auto-calc", function() {
  // Determine parent row
  row = $(this).closest("tr");
  // Get first and second input values
  price = row.find("td input.unit-price").val();
  qty = row.find("td input.amount").val();
  name = row.find("td#name_product").text();
  unit_type = row.find("td#unit_product").text();
  // commit = row.find("td #commit").val();
  commit = '';
  subtotal = price*qty

  order = order.filter(function( obj ) {
    return obj.names !== name;
  });


  order.push({
                QTY:qty,
                u_type:unit_type,
                names:name,
                commit:commit,
                st:subtotal});

  order_total = ''
  order.forEach((element, index, array) => {
    order_total = order_total.concat(element.st, ' '); 
  });

  arry = (order_total).split(' ');
  res = arry.reduce(function(prev, curr){
    return (Number(prev) || 0) + (Number(curr) || 0);
  });
  $("#total-invoice").text(Math.round(res)).val();
});


// PARA UN SALTO DE LINEA EN whatsapp
// %0D%0A
// para un espacio 
// %20 

const frm = document.querySelector("#frm");

frm.addEventListener("submit", event => {
  event.preventDefault();
  const CSRFtoken = $('input[name=csrfmiddlewaretoken]').val();
  const frm = event.target;
  const total= Math.round(res);
  var space = '%0D%0A'

  var order_message = '';
  order.forEach((element, index, array) => {
    order_message = order_message.concat( element.names, ' cantidad: ', element.QTY, ' ', element.u_type,' ', element.commit, space); 
  });


  const formData = {
    phone: 'phone',    
    payment: frm.payment.value,
    name: frm.name.value,
    email: frm.email.value,
    adress: frm.adress.value,
    commit: frm.commit.value,
    message: frm.message.value,
    order:   order_message,
    csrfmiddlewaretoken: CSRFtoken,
    total: total
      };
    
  const URL = `https://api.whatsapp.com/send?phone=${formData.phone}&text=Pedidos%20Helpmi%0D%0A%0D%0ASoy%0D%0A${formData.name}%0D%0A%0D%0A${formData.email}%0D%0A%0D%0AMi%20pago%20es:%20%0D%0A${formData.payment}%0D%0A%0D%0AMi%20dirección%20de%20entrega%20es:%0D%0A${formData.adress}%0D%0A%0D%0AMi%20pedido%20es:%0D%0A${formData.order}%0D%0A%0D%0A..%0D%0AEspecificaciones%20Productos%0D%0A${formData.commit}%0D%0A..%0D%0A..%0D%0AOtros%20Productos%0D%0A${formData.message}%0D%0A..%0D%0ATotal%20a%20pagar:%0D%0A$${formData.total}&source=&data=`;

  window.open(URL, "_blank");




  $.ajax({
    type: "POST",
    url: 'orders/',
    data:formData,
    csrfmiddlewaretoken: CSRFtoken
   });
});
