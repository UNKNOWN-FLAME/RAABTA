// --- Navbar Logic ---
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const menuIcon = document.getElementById('menu-icon');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('expanded');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
});


const eventData = {
    day1: [
        { title: "Ibtida", img: "media/Day-1/Ibtida.jpeg", formUrl: "https://forms.gle/placeholder1" },
        { title: "Ghazal Night", img: "media/Day-1/Ghazal Night.jpeg", formUrl: "https://forms.gle/placeholder2" },
        { title: "Grand Masquerade", img: "media/Day-1/Grand Masquerade.jpeg", formUrl: "https://forms.gle/placeholder3" },
        { title: "Bass Warfare", img: "media/Day-1/Bass Warfare.jpeg", formUrl: "https://forms.gle/placeholder4" }
    ],
    day2: [
        { title: "Event 5", img: "media/Day-2/Chaplin.jpeg", formUrl: "https://forms.gle/placeholder5" },
        { title: "Event 6", img: "media/Day-2/Farzi Mushaira.jpeg", formUrl: "https://forms.gle/placeholder6" },
        { title: "Event 7", img: "media/Day-2/Ruskin.jpeg", formUrl: "https://forms.gle/placeholder7" },
        { title: "Event 8", img: "media/Day-2/Tark-e-chakra.jpeg", formUrl: "https://forms.gle/placeholder8" }
    ]
};

let currentDay = 1;
let currentIndex = 0;

function renderCards() {
    const container = document.getElementById('event-carousel');
    const data = currentDay === 1 ? eventData.day1 : eventData.day2;
    
    // Cards are wrapped in an anchor <a> tag for redirection
    container.innerHTML = data.map((event, index) => `
        <a href="${event.formUrl}" target="_blank" class="event-card" id="card-${index}">
            <img src="${event.img}" alt="${event.title}" class="event-poster">
            <div class="register-btn-overlay">Register Now</div>
        </a>
    `).join('');
    
    updateCardClasses();
}

function updateCardClasses() {
    const cards = document.querySelectorAll('.event-card');
    const data = currentDay === 1 ? eventData.day1 : eventData.day2;

    cards.forEach((card, index) => {
        card.classList.remove('active', 'prev', 'next');
        
        if (index === currentIndex) {
            card.classList.add('active');
        } else if (index === (currentIndex - 1 + data.length) % data.length) {
            card.classList.add('prev');
        } else if (index === (currentIndex + 1) % data.length) {
            card.classList.add('next');
        }
    });
}

function moveSlide(direction) {
    const data = currentDay === 1 ? eventData.day1 : eventData.day2;
    currentIndex = (currentIndex + direction + data.length) % data.length;
    updateCardClasses();
}

function showDay(day) {
    currentDay = day;
    currentIndex = 0;
    
    document.querySelectorAll('.day-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-day${day}`).classList.add('active');
    
    renderCards();
}

// Set initial state
showDay(1);