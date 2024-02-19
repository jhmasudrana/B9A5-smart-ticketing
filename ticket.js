const allSet = document.getElementsByClassName('kbd');
let setCount = 40;
let setBook = 0;
let perSeat = 550;
let clickedCount = 0;
for (const set of allSet) {
    set.addEventListener('click', function (e) {
        if (clickedCount < 4) {
            setCount = setCount - 1;
            setBook = setBook + 1;
            setTnnerText('total-set', setCount)
            setTnnerText("Seat-count", setBook)
            set.style.backgroundColor = "lime";
            clickedCount++;
            // seat and price
            const SeatName = e.target.innerText;
            const seatId = document.getElementById('seat-name');
            const p = document.createElement('p');
            p.innerText = SeatName;
            seatId.appendChild(p)
            // Economoy
            const texts = 'Economoy'
            const text = document.getElementById('Economoy');
            const ptext = document.createElement('p');
            ptext.innerText = texts;
            text.appendChild(ptext)
            // tk appent
            const oneSetprice = 550;
            const price = document.getElementById('seat-price');
            const ptag = document.createElement('p');
            ptag.innerText = oneSetprice;
            price.appendChild(ptag)
            // total price        

            const prices = document.getElementById('total-prices');
            const pricestring = prices.innerText;
            const pricevalue = parseInt(pricestring);
            const pricefull = pricevalue + perSeat;
            const totalPriceElement = document.getElementById('total-prices');
            totalPriceElement.innerText = pricefull;

            //  grand-total

            const grandprice = document.getElementById('grand-total');
            const grandpricestring = prices.innerText;
            const grandpricevalue = parseInt(pricestring);
            const grandpricefull = pricevalue + perSeat;
            const grandpriceElement = document.getElementById('grand-total');
            grandpriceElement.innerText = grandpricefull;

            if (clickedCount === 4) {
                alert('tumi cupon code use kor')

            }

        } else {
            alert("You have already selected four Seats .");
        }


    })
}

function setTnnerText(id, value) {
    document.getElementById(id).innerText = value;
}

// input work 

function applyDiscount() {
    const inputvalue = document.getElementById('discount-id').value;
    const grandprice = document.getElementById('grand-total');
    const grandstring = grandprice.innerText;
    const grantvalue = parseInt(grandstring);
    if (inputvalue === "NEW15") {
        let percen = 15;
        const discountvalue = (percen / 100) * grantvalue;
        const finalvalue = grantvalue - discountvalue;
        const grandpriceElements = document.getElementById('grand-total');
        grandpriceElements.innerText = finalvalue;
        const value = document.getElementById('hidden')
        value.classList.add('hidden')


    }

    if (inputvalue === "Couple 20") {
        let percen = 20;
        const discountvalue = (percen / 100) * grantvalue;
        const finalvalue = grantvalue - discountvalue;
        const grandpriceElements = document.getElementById('grand-total');
        grandpriceElements.innerText = finalvalue;
        const value = document.getElementById('hidden')
        value.classList.add('hidden')
    }

}

function openModal() {
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('my_modal_1');
    modal.close();
}

