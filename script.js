
            function product1(target) {
               let total = 0;
               
               const pbtn = document.getElementById('pur');
               const btn = document.getElementById('btn');
               const screen = document.getElementById('display');
               const getPrice = target.childNodes[3].childNodes[5].innerText.split(" ")[1];

               const productName = target.childNodes[3].childNodes[3].innerText;
            
            
               const li = document.createElement('li');
               li.innerText = productName;  
            
               
               screen.appendChild(li);
               
               const tPrice = document.getElementById('totalPrice');
               const pr = tPrice.innerText;
               total = parseFloat(pr) + parseFloat(getPrice);

            const totalTaka = document.getElementById('totalT');
            
               

               const discountPrice = document.getElementById('disPrice');

               if (total >= 200) {
                  btn.removeAttribute('disabled');




               
               }else{
               btn.setAttribute('disabled', true);
               }
               tPrice.innerText = total;
               
               if (total != 0) {
                  pbtn.removeAttribute('disabled');
               
               }else{
               pbtn.setAttribute('disabled', true);
               }



               btn.addEventListener('click', () => {
               
                  let couponInput = document.getElementById("in").value;
            if (couponInput === "SELL200") {
            
               const per = parseInt(total * 0.20);
               discountPrice.innerText = per;
               const finalTotal = parseInt(total - per);
               totalTaka.innerText = finalTotal;

            } else {
               alert("Invalid coupon code");
                  }


               couponInput = '';



            })
            
            
            }

