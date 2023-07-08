const images = [{
    name: 'img1',
    path: './Assets/img1.png'
},{
    name: 'img2',
    path: './Assets/img2.png'
},{
    name: 'img3',
    path: './Assets/img3.png'
},{
    name: 'img4',
    path: './Assets/img4.png'
},{
    name: 'img5',
    path: './Assets/img5.png'
},{
    name: 'img6',
    path: './Assets/img6.png'
},{
    name: 'img1',
    path: './Assets/img1.png'
},{
    name: 'img2',
    path: './Assets/img2.png'
},{
    name: 'img3',
    path: './Assets/img3.png'
},{
    name: 'img4',
    path: './Assets/img4.png'
},{
    name: 'img5',
    path: './Assets/img5.png'
},{
    name: 'img6',
    path: './Assets/img6.png'
}]

const gridDisplay = document.querySelector('#grid')
const scoreboard = document.querySelector('#score')
const stagedCards = []
let score = 0

function createBoard() {
    for(i=0; i<images.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src','Assets/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }
}

function shuffledImages(images) {
    return images.sort(() => 0.5 - Math.random() )
}

function flipCard(){
    let selectedCardIndex = this.getAttribute('data-id')
    stagedCards.push(selectedCardIndex)
    this.setAttribute('src',images[selectedCardIndex].path)    
    if(stagedCards.length === 2){
        setTimeout(matchCards, 500)
    }
}

function matchCards(){
    const cards = document.querySelectorAll('#grid img')
    if(stagedCards[0] === stagedCards[1]){
        cards[stagedCards[0]].setAttribute('src','Assets/blank.png')
        stagedCards.splice(0,stagedCards.length)
        // alert('Oops you clicked on the same image!')
    }else if(images[stagedCards[0]].name === images[stagedCards[1]].name){        
        cards[stagedCards[0]].setAttribute('src','Assets/white.png')
        cards[stagedCards[1]].setAttribute('src','Assets/white.png')
        cards[stagedCards[0]].removeEventListener('click', flipCard)
        cards[stagedCards[1]].removeEventListener('click', flipCard)
        stagedCards.splice(0,stagedCards.length)
        score++;
        scoreboard.innerHTML = score
        if(score === images.length/2){
            alert('Congratulations! You Win!')
            location.assign('./index.html')
        }else{
            alert('Matched!')
        }        
    }else{        
        cards[stagedCards[0]].setAttribute('src','Assets/blank.png')
        cards[stagedCards[1]].setAttribute('src','Assets/blank.png')
        stagedCards.splice(0,stagedCards.length)
        alert('Not Matched. Keep trying!')
    }
}

shuffledImages(images)
createBoard()





