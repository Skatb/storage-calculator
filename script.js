let storage = document.querySelector('.storage-range')
let storageValue = document.querySelector('.storage-value')
let transfer = document.querySelector('.transfer-range')
let transferValue = document.querySelector('.transfer-value')

let backblazePrice = document.querySelector('.backblaze-price')
let backblazeGraph = document.querySelector('.backblaze-graph')

let bunnyPrice = document.querySelector('.bunny-price')
let bunnyGraph = document.querySelector('.bunny-graph')

let scalewayPrice = document.querySelector('.scaleway-price')
let scalewayGraph = document.querySelector('.scaleway-graph')

let vultrPrice = document.querySelector('.vultr-price')
let vultrGraph = document.querySelector('.vultr-graph')


window.addEventListener('resize', () => {
  storageCount()
  transferCount()
})

storage.addEventListener('change', storageCount)
transfer.addEventListener('change', transferCount)


function storageCount() {
  storageValue.innerHTML = storage.value
  backblazeStorage()
  bunnyStorage()
  scalewayStorage()
  vultrStorage()
  lowPrice()
}
function transferCount() {
  transferValue.innerHTML = transfer.value
  backblazeStorage()
  bunnyStorage()
  scalewayStorage()
  vultrStorage()
  lowPrice()
}



function lowPrice() {
  let priceColor = document.querySelectorAll('.price-color')
  let priceValue = document.querySelectorAll('.price-value')

  const colors = ["red", "orange", "violet", "blue"];

  let min = +priceValue[0].innerHTML;
  let minIndex = 0;
  for (let i = 0; i < priceColor.length; i++) {
    if (+priceValue[i].innerHTML < min) {
      min = +priceValue[i].innerHTML;
      minIndex = i;
    }
  }

  for (let i = 0; i < priceColor.length; i++) {
    priceColor[i].style.backgroundColor = '#7e7e7e';
  }
  priceColor[minIndex].style.backgroundColor = colors[minIndex];

}

function backblazeStorage() {
  let backblazeTotal = (+storage.value * 0.005) + (+transfer.value * 0.01)

  if (window.outerWidth > 800) {
    if (backblazeTotal > 7) {
      backblazePrice.innerHTML = backblazeTotal.toFixed(1)
      backblazeGraph.style.height = 16 + 'px'
      backblazeGraph.style.width = (+backblazeTotal * 10) + 'px'
    } else if (backblazeTotal < 7) {
      backblazePrice.innerHTML = 7
      backblazeGraph.style.width = 70 + 'px'
      backblazeGraph.style.height = 16 + 'px'
    }
  } else {
    if (backblazeTotal > 7) {
      backblazePrice.innerHTML = backblazeTotal.toFixed(1)
      backblazeGraph.style.width = 16 + 'px'
      backblazeGraph.style.height = (+backblazeTotal * 10) + 'px'

    } else if (backblazeTotal < 7) {
      backblazePrice.innerHTML = 7
      backblazeGraph.style.width = 16 + 'px'
      backblazeGraph.style.height = 70 + 'px'
    }
  }

}

let radioBunny = document.getElementsByName('bunny-drive');
document.querySelector('.bunny-drive').addEventListener('click', storageCount)

function bunnyStorage() {
  let radioValue = ''
  for (let i = 0; i < radioBunny.length; i++) {
    if (radioBunny[i].checked) {
      radioValue = radioBunny[i].value
    }
  }

  let bunnyTotal = (+storage.value * (radioValue == 'ssd' ? 0.02 : 0.01)) + (+transfer.value * 0.01)

  if (window.outerWidth > 800) {
    if (bunnyTotal >= 10) {
      bunnyPrice.innerHTML = 10
      bunnyGraph.style.height = 16 + 'px'
      bunnyGraph.style.width = 100 + 'px'
    } else {
      bunnyPrice.innerHTML = bunnyTotal.toFixed(1)

      bunnyGraph.style.width = (+bunnyTotal * 10) + 'px'
    }

  }
  else {
    if (bunnyTotal >= 10) {
      bunnyPrice.innerHTML = 10
      bunnyGraph.style.width = 16 + 'px'
      bunnyGraph.style.height = 100 + 'px'
    } else {
      bunnyPrice.innerHTML = bunnyTotal.toFixed(1)
      bunnyGraph.style.width = 16 + 'px'
      bunnyGraph.style.height = (+bunnyTotal * 10) + 'px'
    }
  }
}

let radioScaleway = document.getElementsByName('scaleway-drive');
document.querySelector('.scaleway-drive').addEventListener('click', storageCount)


function scalewayStorage() {
  let radioValue = ''
  for (let i = 0; i < radioScaleway.length; i++) {
    if (radioScaleway[i].checked) {
      radioValue = radioScaleway[i].value
    }
  }

  let scalewayTotal = ((+storage.value - 75) * (radioValue == 'multi' ? 0.06 : 0.03)) + ((+transfer.value - 75) * 0.02)

  if (scalewayTotal < 0) scalewayTotal = 0
  
  if (window.outerWidth > 800) {
    if (+storage.value <= 75 && +transfer.value <= 75) {
      scalewayPrice.innerHTML = 0.00
      scalewayGraph.style.height = 16 + 'px'
      scalewayGraph.style.width = 0 + 'px'
    } else {
      scalewayPrice.innerHTML = scalewayTotal.toFixed(1)
      scalewayGraph.style.height = 16 + 'px'
      scalewayGraph.style.width = (+scalewayTotal * 10) + 'px'
    }

  }
  else {
    if (+storage.value <= 75 && +transfer.value <= 75) {
      scalewayPrice.innerHTML = 0.00
      scalewayGraph.style.width = 16 + 'px'
      scalewayGraph.style.height = 0 + 'px'
    } else {
      scalewayPrice.innerHTML = scalewayTotal.toFixed(1)
      scalewayGraph.style.width = 16 + 'px'
      scalewayGraph.style.height = (+scalewayTotal * 10) + 'px'
    }
  }
}

function vultrStorage() {

  let vultrTotal = (+storage.value * 0.01) + (+transfer.value * 0.01)
  if (window.outerWidth > 800) {
    if (vultrTotal > 5) {
      vultrPrice.innerHTML = vultrTotal.toFixed(1)
      vultrGraph.style.height = 16 + 'px'
      vultrGraph.style.width = (+vultrTotal * 10) + 'px'
    } else if (vultrTotal < 5) {
      vultrPrice.innerHTML = 5
      vultrGraph.style.width = 50 + 'px'
      vultrGraph.style.height = 16 + 'px'
    }
  } else {
    if (vultrTotal > 5) {
      vultrPrice.innerHTML = vultrTotal.toFixed(1)
      vultrGraph.style.width = 16 + 'px'
      vultrGraph.style.height = (+vultrTotal * 10) + 'px'

    } else if (vultrTotal < 5) {
      vultrPrice.innerHTML = 5
      vultrGraph.style.width = 16 + 'px'
      vultrGraph.style.height = 50 + 'px'
    }
  }

}