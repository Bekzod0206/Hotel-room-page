
let hotelRoomCards = document.querySelectorAll(".hotel-room");
let clicked = false

hotelRoomCards.forEach((card) => {
  let button = card.querySelector('.price-btn-part')
  let nonReservedButton = card.querySelector('.non-reserved')
  let reservedButton = card.querySelector('.reserved')
  let reservedBlock = card.querySelector('.reserved-block-details')
  let priceBlock = card.querySelector('.room-price')
  let roomTitle = card.querySelector('.room-info__title')
  let clicked = false
  let reservedStatus = false
  const imageUrl = card.getAttribute('data-image');
  let discounBlock = card.querySelector('.hotel-room__discount')

  if(clicked == false){
    card.style.background = `linear-gradient(180deg, rgba(10, 34, 64, 0.1) 0%, #0A2240 100%), url('${imageUrl}')`;
  }

  button.addEventListener('click', ()=>{
    clicked = true  
    reservedStatus = true
    nonReservedButton.style.display = 'none'
    reservedButton.style.display = 'block'
  })

  card.addEventListener('mouseover', function() {
    if(reservedStatus == false){
      discounBlock.style.display = 'flex';  
    } else {
      discounBlock.style.display = 'none'
    }
  });
  
  card.addEventListener('mouseleave', ()=>{
    if(clicked == true){
      card.style.background = `linear-gradient(to right, rgba(189, 195, 199, 0.7), rgba(149, 165, 166, 0.7)), url('${imageUrl}')`;
      reservedBlock.style.display = 'flex'
      priceBlock.style.display = 'none'
      roomTitle.style.pointerEvents = 'none'
      roomTitle.classList.remove('link-pressed');
      card.style.cursor = 'pointer'
      reservedStatus = true
    } else {
      roomTitle.style.pointerEvents = 'default'
    }
    clicked = false
    nonReservedButton.style.display = 'block'
    reservedButton.style.display = 'none'
    discounBlock.style.display = 'none'
  })
  
  card.addEventListener('click', (e)=>{
    reservedStatus = false
    card.style.background = `linear-gradient(180deg, rgba(10, 34, 64, 0.1) 0%, #0A2240 100%), url('${imageUrl}')`;
    reservedBlock.style.display = 'none'
    priceBlock.style.display = 'flex'
    roomTitle.style.pointerEvents = ''
    card.style.cursor = 'initial'
  })

  if(clicked == false){
    roomTitle.addEventListener('click', function() {
      roomTitle.classList.toggle('link-pressed');
      roomTitle.classList.remove('hovered');
    });
      
    roomTitle.addEventListener('mouseover', function() {
      if (!roomTitle.classList.contains('link-pressed')) {
        roomTitle.classList.add('hovered');
      } 
    });
      
    roomTitle.addEventListener('mouseout', function() {
      if (!roomTitle.classList.contains('link-pressed')) {
        roomTitle.classList.remove('hovered');
      }
    });
  }
})
