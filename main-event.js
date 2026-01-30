// --- Navbar Logic ---
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const menuIcon = document.getElementById('menu-icon');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('expanded');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
});

// --- Event Data with Detailed Descriptions ---
const eventData = {
    day1: [
        { 
            title: "Ibtida", 
            img: "media/Day-1/Ibtida.png", 
            formUrl: "https://forms.gle/placeholder1",
            highlights: [
                "Opening Ceremony & Kavi Sammelan (Poetry Event)",
                "Guest performances by 3 renowned poets (90 min total)",
                "6 student performers (5 min each)",
                "Lamp lighting ceremony & guest felicitation",
                "Venue: Main Auditorium | Time: 11:00 AM - 3:00 PM"
            ]
        },
        { 
            title: "Ruskin", 
            img: "media/Day-1/sargam.jpeg", 
            formUrl: "https://forms.gle/TRGGxLezbeGETgkV7",
            highlights: [
                "Blackout Poetry Competition - Transform text into art",
                "Create poems by blacking out words from printed pages",
                "Teams of 1-4 members | Online pre-registrations",
                "10-15 min creation + optional performance round",
                "Venue: Mini Auditorium | Time: 3:00 PM - 5:00 PM"
            ]
        },
        { 
            title: "Ghazal Night", 
            img: "media/Day-1/noor-ball.png", 
            formUrl: "https://forms.gle/placeholder3",
            highlights: [
                "Soulful evening of Ghazal & Sufi music",
                "Guest artist performance featuring renowned singers",
                "Live audience engagement & musical ambiance",
                "Celebrate poetry through melodious renditions",
                "Venue: Main Stage | Time: 4:30 PM - 7:00 PM"
            ]
        },
        { 
            title: "Sargam", 
            img: "media/Day-1/sufi-night.jpeg", 
            formUrl: "https://forms.gle/TRGGxLezbeGETgkV7",
            highlights: [
                "Singing Competition - Classical, Semi-Classical & Folk",
                "Solo & duet performances (150 sec performance time)",
                "Online prelims followed by offline finals",
                "Prizes: ₹2000, ₹1500, ₹1000 | Bring your own karaoke",
                "Venue: Admin Block | Time: 2:00 PM - 4:00 PM"
            ]
        },
        { 
            title: "Chaplin", 
            img: "media/Day-1/chaplin.jpeg", 
            formUrl: "https://forms.gle/j7Kv43FDmKPhp6iv6",
            highlights: [
                "Monologue Competition - Showcase your acting prowess",
                "Two rounds: Preliminary (7 min) & Finals",
                "25 participants | Focus on delivery, tone & literary resonance",
                "Prizes: ₹2000, ₹1500, ₹1000 | Solo performances only",
                "Venue: Admin Block | Time: 12:00 PM - 3:00 PM"
            ]
        }
    ],
    day2: [
        { 
            title: "Farzi Mushaira", 
            img: "media/Day-2/farzi-mushaira.jpeg", 
            formUrl: "https://forms.gle/placeholder6",
            highlights: [
                "Humorous poetry & comic shayari performances",
                "Open mic for witty poets & storytellers",
                "Audience participation & laughter guaranteed",
                "Celebrate the lighter side of Urdu literature",
                "Venue: TBD | Time: 2:00 PM - 4:00 PM"
            ]
        },
        { 
            title: "Tark-e-Chakra", 
            img: "media/Day-2/tark-e-chakra.jpeg", 
            formUrl: "https://forms.gle/3iWrqHW3mi6MJGMF6",
            highlights: [
                "Premier Debate Competition - Test your intellect",
                "4 rounds: Online prelims → Stance presentation → Subtopics → Rebuttal",
                "Teams of 2-4 | Critical thinking & public speaking",
                "Prizes: ₹2000, ₹1500, ₹1000 | Laptops allowed",
                "Venue: APJ11 | Time: 2:00 PM - 5:00 PM"
            ]
        },
        { 
            title: "Tales on the Ramp", 
            img: "media/Day-2/tales-on-the-ramp.jpeg", 
            formUrl: "https://forms.gle/joT1V3RFvijE77AF9",
            highlights: [
                "Literary Cosplay Event - Bring characters to life",
                "Dress as your favorite literary character",
                "Live runway walk with judges' interaction",
                "Prizes: ₹2000 + Crown, ₹1500, ₹1000 | Solo event",
                "Venue: NESCII Lawns | Time: 4:00 PM - 5:00 PM"
            ]
        },
        { 
            title: "Noor Ball", 
            img: "media/Day-2/ruskin.jpeg", 
            formUrl: "https://forms.gle/ad4gLK7mdFEPowvC7",
            highlights: [
                "Impromptu Dance Competition - Bring your partner",
                "Elegant evening gala with DJ & live performances",
                "Themed decorations & enchanting ambiance",
                "Showcase your grace & chemistry on the dance floor",
                "Venue: Main Stage | Time: 4:30 PM - 7:00 PM"
            ]
        }
    ]
};

let currentDay = 1;
let currentIndex = 0;

function renderCards() {
    const container = document.getElementById('event-carousel');
    const data = currentDay === 1 ? eventData.day1 : eventData.day2;
    
    container.innerHTML = data.map((event, index) => `
        <div class="card-flip-wrapper" id="card-${index}">
            <div class="card-flip-inner">
                <!-- Front Side -->
                <div class="card-front">
                    <div class="event-card" onclick="flipCard(${index}, event)">
                        <div class="card-image-container">
                            <img src="${event.img}" alt="${event.title}" class="event-poster">
                            <div class="register-btn-overlay">View Details</div>
                        </div>
                    </div>
                </div>
                
                <!-- Back Side -->
                <div class="card-back">
                    <h2 class="event-back-title">${event.title}</h2>
                    <ul class="event-highlights">
                        ${event.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                    </ul>
                    <div class="back-buttons">
                        <button class="btn-back" onclick="flipCard(${index}, event)">Back</button>
                        <a href="${event.formUrl}" target="_blank" class="btn-register">Register Now</a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    updateCardClasses();
}

function updateCardClasses() {
    const cards = document.querySelectorAll('.card-flip-wrapper');
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

function flipCard(index, event) {
    // Prevent flipping if not the active card
    if (index !== currentIndex) return;
    
    event.stopPropagation();
    const cardWrapper = document.getElementById(`card-${index}`);
    cardWrapper.classList.toggle('flipped');
}

function moveSlide(direction) {
    const data = currentDay === 1 ? eventData.day1 : eventData.day2;
    
    // Remove flip state from current card before moving
    const currentCard = document.getElementById(`card-${currentIndex}`);
    if (currentCard) {
        currentCard.classList.remove('flipped');
    }
    
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

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        moveSlide(-1);
    } else if (e.key === 'ArrowRight') {
        moveSlide(1);
    } else if (e.key === 'Escape') {
        // Close flipped card on ESC
        const currentCard = document.getElementById(`card-${currentIndex}`);
        if (currentCard && currentCard.classList.contains('flipped')) {
            currentCard.classList.remove('flipped');
        }
    }
});

// Set initial state
showDay(1);