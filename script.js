// Game State dengan fitur produktif real-time
const gameState = {
    player: {
        name: "Petualang",
        level: 1,
        avatar: null,
        experience: 0,
        maxExperience: 100,
        health: 100,
        maxHealth: 100,
        skillPoints: 5,
        location: "desa",
        attack: 10,
        defense: 5,
        gold: 100,
        streak: 0,
        lastPlayed: null
    },
    inventory: [
        { id: 1, name: "💻 Laptop Basic", type: "tool", rarity: "common", description: "Alat kerja dasar untuk pemula", value: 50, productivity: 5 },
        { id: 2, name: "📚 Buku Produktivitas", type: "book", rarity: "uncommon", description: "Meningkatkan skill belajar +10", value: 30 },
        { id: 3, name: "🎧 Headphone Noise Cancelling", type: "tool", rarity: "rare", description: "Fokus maksimal saat bekerja", value: 80, productivity: 15 },
        { id: 4, name: "☕ Mesin Kopi Premium", type: "tool", rarity: "epic", description: "Energi +20% untuk quest produktif", value: 150, energy: 20 }
    ],
    achievements: [
        { id: 1, name: "🚀 Start Journey", description: "Memulai perjalanan produktif", unlocked: true, reward: "50 EXP" },
        { id: 2, name: "💪 Consistency King", description: "Login 7 hari berturut-turut", unlocked: false, reward: "100 Gold" },
        { id: 3, name: "📚 Learning Machine", description: "Menyelesaikan 10 quest belajar", unlocked: false, reward: "200 EXP" },
        { id: 4, name: "🏋️ Fitness Pro", description: "Menyelesaikan 15 quest olahraga", unlocked: false, reward: "150 Gold" },
        { id: 5, name: "🎯 Goal Crusher", description: "Menyelesaikan 5 quest produktif berturut-turut", unlocked: false, reward: "300 EXP" },
        { id: 6, name: "🛒 Smart Shopper", description: "Membeli 10 item dari toko", unlocked: false, reward: "200 Gold" },
        { id: 7, name: "⭐ All Star", description: "Mencapai Level 10", unlocked: false, reward: "500 EXP + 300 Gold" }
    ],
    quests: [
        { 
            id: 1, 
            name: "🎮 Tutorial Time", 
            description: "Pelajari semua fitur game dengan tutorial interaktif", 
            progress: 0, 
            maxProgress: 8, 
            completed: false, 
            reward: "100 EXP, Starter Pack",
            type: "tutorial"
        },
        { 
            id: 2, 
            name: "💼 Work Basics", 
            description: "Selesaikan 3 pekerjaan produktif berbeda", 
            progress: 0, 
            maxProgress: 3, 
            completed: false, 
            reward: "150 Gold",
            type: "work"
        },
        { 
            id: 3, 
            name: "🛍️ Shopping Spree", 
            description: "Beli 3 item dari toko untuk upgrade equipment", 
            progress: 0, 
            maxProgress: 3, 
            completed: false, 
            reward: "100 EXP, 50 Gold",
            type: "shop"
        },
        { 
            id: 4, 
            name: "📈 Level Up", 
            description: "Naik ke Level 5", 
            progress: 1, 
            maxProgress: 5, 
            completed: false, 
            reward: "300 EXP, Rare Item",
            type: "level"
        }
    ],
    productiveQuests: [
        {
            id: 1,
            name: "💻 Coding Session",
            description: "Selesaikan coding challenge atau belajar programming selama 30 menit",
            duration: 30, // dalam menit
            type: "learning",
            reward: "75 EXP + 40 Gold",
            active: false,
            completed: false,
            startTime: null,
            endTime: null,
            category: "tech"
        },
        {
            id: 2,
            name: "📖 Reading Time",
            description: "Baca buku atau artikel edukatif selama 25 menit",
            duration: 25,
            type: "learning",
            reward: "60 EXP + 30 Gold",
            active: false,
            completed: false,
            startTime: null,
            endTime: null,
            category: "study"
        },
        {
            id: 3,
            name: "🏃 Workout Session",
            description: "Olahraga ringan atau stretching selama 15 menit",
            duration: 15,
            type: "fitness",
            reward: "50 EXP + 25 Gold",
            active: false,
            completed: false,
            startTime: null,
            endTime: null,
            category: "fitness"
        },
        {
            id: 4,
            name: "🎨 Creative Time",
            description: "Buat desain, tulis konten, atau ekspresikan kreativitas selama 20 menit",
            duration: 20,
            type: "creative",
            reward: "65 EXP + 35 Gold",
            active: false,
            completed: false,
            startTime: null,
            endTime: null,
            category: "creative"
        },
        {
            id: 5,
            name: "🧠 Deep Work",
            description: "Fokus menyelesaikan tugas penting selama 45 menit tanpa gangguan",
            duration: 45,
            type: "productivity",
            reward: "100 EXP + 50 Gold",
            active: false,
            completed: false,
            startTime: null,
            endTime: null,
            category: "work"
        },
        {
            id: 6,
            name: "📝 Planning Session",
            description: "Buat rencana dan goals untuk hari/minggu ini selama 15 menit",
            duration: 15,
            type: "planning",
            reward: "40 EXP + 20 Gold",
            active: false,
            completed: false,
            startTime: null,
            endTime: null,
            category: "productivity"
        }
    ],
    skills: [
        { id: 1, name: "🚀 Focus Power", description: "Meningkatkan produktivitas saat bekerja", level: 0, maxLevel: 5, cost: 2, type: "productivity" },
        { id: 2, name: "💡 Learning Speed", description: "Mempercepat proses belajar", level: 0, maxLevel: 5, cost: 2, type: "learning" },
        { id: 3, name: "🏋️ Energy Boost", description: "Menambah energi untuk quest lebih banyak", level: 0, maxLevel: 3, cost: 3, type: "energy" },
        { id: 4, name: "💰 Gold Magnet", description: "Meningkatkan gold yang didapat", level: 0, maxLevel: 5, cost: 2, type: "economy" }
    ],
    shopItems: [
        { id: 1, name: "📱 Productivity App", price: 50, description: "Tools digital untuk meningkatkan efisiensi kerja", type: "tool", productivity: 10 },
        { id: 2, name: "🎵 Focus Music Pack", price: 30, description: "Koleksi musik untuk meningkatkan konsentrasi", type: "tool", focus: 15 },
        { id: 3, name: "📊 Progress Tracker", price: 80, description: "Monitor perkembangan skill dan goals", type: "tool", tracking: 20 },
        { id: 4, name: "⚡ Energy Drink", price: 20, description: "Tambah energi instant untuk quest", type: "consumable", energy: 25 },
        { id: 5, name: "📚 Skill Book Bundle", price: 150, description: "Paket lengkap belajar skill baru", type: "book", learning: 30 },
        { id: 6, name: "🎮 Gaming Break", price: 40, description: "Istirahat sejenak dengan mini-game", type: "consumable", relaxation: 20 }
    ],
    workOptions: {
        coding: { name: "Coding Challenge", reward: 50, time: 12000, description: "Selesaikan project programming", category: "tech" },
        design: { name: "Design Project", reward: 40, time: 10000, description: "Buat desain kreatif", category: "creative" },
        writing: { name: "Content Writing", reward: 35, time: 8000, description: "Tulis artikel atau konten", category: "creative" },
        research: { name: "Research Task", reward: 45, time: 15000, description: "Lakukan penelitian mendalam", category: "study" }
    },
    selectedAvatar: null,
    selectedWork: null,
    tutorialStep: 0,
    workCompleted: 0,
    itemsBought: 0,
    dailyStats: {
        completedQuests: 0,
        totalXP: 0,
        lastReset: new Date().toDateString()
    }
};

// Data Avatar
const avatarData = {
    tech: { 
        name: "Tech Enthusiast", 
        attack: 8, 
        defense: 6, 
        health: 100,
        bonus: "tech",
        description: "Ahli teknologi dan coding"
    },
    creative: { 
        name: "Creative Soul", 
        attack: 7, 
        defense: 7, 
        health: 90,
        bonus: "creative",
        description: "Seniman dan content creator"
    },
    fitness: { 
        name: "Fitness Warrior", 
        attack: 9, 
        defense: 8, 
        health: 120,
        bonus: "fitness",
        description: "Pecinta olahraga dan kesehatan"
    },
    study: { 
        name: "Study Master", 
        attack: 6, 
        defense: 9, 
        health: 95,
        bonus: "study",
        description: "Pembelajar dan akademisi"
    }
};

// Tutorial Steps dengan bahasa kekinian
const tutorialSteps = [
    {
        title: "🎮 Welcome to Raga Nusantara V4.0!",
        content: "Hai! Selamat datang di game petualangan yang bakal bikin hidupmu makin produktif! 💫 Kita bakal jalan-jalan bareng nih buat kenalin fitur keren yang bakal bantu kamu level up di dunia nyata! 🚀",
        highlight: null
    },
    {
        title: "👤 Pilih Karakter Kamu!",
        content: "Pertama, yuk pilih karakter yang cocok sama passion kamu! Setiap karakter punya bonus khusus buat aktivitas tertentu. Klik 'Mulai Petualangan' buat milih!",
        highlight: "#start-btn",
        action: "click",
        target: "#start-btn"
    },
    {
        title: "💼 Sistem Kerja Produktif",
        content: "Nih, fitur keren buat dapetin Gold! Kamu bisa pilih berbagai pekerjaan produktif yang relate sama skill di dunia nyata. Coba klik 'Kerja Produktif'!",
        highlight: "#work-btn",
        action: "click",
        target: "#work-btn"
    },
    {
        title: "⏰ Quest Real-Time!",
        content: "Ini nih yang paling seru! Quest produktif dengan timer real-time. Kamu beneran harus ngerjain aktivitasnya di dunia nyata! Coba liat di 'Quest Harian'!",
        highlight: "#productive-btn",
        action: "click",
        target: "#productive-btn"
    },
    {
        title: "🛒 Toko Upgrade",
        content: "Gold yang kamu dapet bisa dipake buat beli item-item keren di toko. Item-item ini bakal bantu kamu makin produktif! Cek 'Toko' yuk!",
        highlight: "#shop-btn",
        action: "click",
        target: "#shop-btn"
    },
    {
        title: "📈 Progress Tracking",
        content: "Kamu bisa liat perkembanganmu di panel sebelah kanan. Ada inventory, achievement, quest, sama quest produktif yang lagi aktif!",
        highlight: ".side-panels",
        action: "none"
    },
    {
        title: "💾 Auto-Save Feature",
        content: "Tenang, progress game kamu otomatis tersimpan! Jadi kapan aja bisa lanjut main tanpa takut progress hilang. Jangan lupa sesekali pencet 'Simpan' buat extra aman!",
        highlight: "#save-btn",
        action: "none"
    },
    {
        title: "🎉 Siap Bertualang!",
        content: "Yeay! Kamu udah siap buat mulai petualangan produktif! Jangan lupa, yang paling penting adalah konsistensi. Every small step counts! 💪",
        highlight: null
    }
];

// Initialize Game
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
});

function initializeGame() {
    loadGame();
    setupEventListeners();
    updateGameDisplay();
    checkDailyReset();
    updateProductiveQuests();
    
    // Start tutorial for new players
    if (!localStorage.getItem('ragaNusantaraSave') || gameState.tutorialStep < tutorialSteps.length) {
        setTimeout(() => {
            startTutorial();
        }, 1000);
    }
    
    // Update productive quests every second
    setInterval(updateProductiveQuests, 1000);
}

function loadGame() {
    const savedGame = localStorage.getItem('ragaNusantaraSave');
    if (savedGame) {
        try {
            const parsed = JSON.parse(savedGame);
            
            // Handle productive quests timer restoration
            if (parsed.productiveQuests) {
                parsed.productiveQuests.forEach(quest => {
                    if (quest.active && quest.startTime) {
                        const startTime = new Date(quest.startTime);
                        const elapsed = Date.now() - startTime.getTime();
                        const remaining = (quest.duration * 60000) - elapsed;
                        
                        if (remaining <= 0) {
                            quest.active = false;
                            quest.completed = true;
                        }
                    }
                });
            }
            
            Object.assign(gameState, parsed);
            showNotification('Game berhasil dimuat! 🎮', 'success');
        } catch (e) {
            console.error('Error loading game:', e);
            showNotification('Error memuat game, memulai baru...', 'error');
        }
    }
    
    renderInventory();
    renderAchievements();
    renderQuests();
    renderProductiveQuests();
    renderSkills();
    checkAchievements();
    updatePlayerDisplay();
    updateDailyStats();
}

function saveGame() {
    try {
        gameState.player.lastPlayed = new Date().toISOString();
        localStorage.setItem('ragaNusantaraSave', JSON.stringify(gameState));
        showNotification('Progress disimpan! 💾', 'success');
    } catch (e) {
        console.error('Error saving game:', e);
        showNotification('Error menyimpan game', 'error');
    }
}

function checkDailyReset() {
    const today = new Date().toDateString();
    if (gameState.dailyStats.lastReset !== today) {
        gameState.dailyStats = {
            completedQuests: 0,
            totalXP: 0,
            lastReset: today
        };
        resetDailyQuests();
        showNotification('Quest harian sudah direset! 📅', 'info');
    }
}

function resetDailyQuests() {
    gameState.productiveQuests.forEach(quest => {
        quest.active = false;
        quest.completed = false;
        quest.startTime = null;
        quest.endTime = null;
    });
}

function setupEventListeners() {
    // Main Action Buttons
    document.getElementById('start-btn').addEventListener('click', showStartModal);
    document.getElementById('work-btn').addEventListener('click', showWorkModal);
    document.getElementById('productive-btn').addEventListener('click', showProductiveModal);
    document.getElementById('shop-btn').addEventListener('click', showShopModal);
    document.getElementById('save-btn').addEventListener('click', saveGame);
    document.getElementById('help-btn').addEventListener('click', startTutorial);

    // Avatar Selection
    document.querySelectorAll('.avatar-option').forEach(option => {
        option.addEventListener('click', function() {
            selectAvatar(this.dataset.avatar);
        });
    });
    document.getElementById('confirm-avatar').addEventListener('click', confirmAvatarSelection);

    // Work Selection
    document.querySelectorAll('.work-option').forEach(option => {
        option.addEventListener('click', function() {
            selectWork(this.dataset.work);
        });
    });
    document.getElementById('start-work').addEventListener('click', startWork);

    // Modal Controls
    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Tutorial Navigation
    document.getElementById('tutorial-next').addEventListener('click', nextTutorialStep);
    document.getElementById('tutorial-prev').addEventListener('click', prevTutorialStep);
    document.getElementById('tutorial-skip').addEventListener('click', skipTutorial);

    // Panel Toggles
    document.querySelectorAll('.toggle-panel').forEach(button => {
        button.addEventListener('click', function() {
            const panel = this.closest('.panel');
            const content = panel.querySelector('.item-list');
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
            this.textContent = content.style.display === 'none' ? '+' : '−';
        });
    });
}

// Tutorial System
function startTutorial() {
    gameState.tutorialStep = 0;
    showTutorialStep();
}

function showTutorialStep() {
    const step = tutorialSteps[gameState.tutorialStep];
    const overlay = document.getElementById('tutorial-overlay');
    const title = document.getElementById('tutorial-title');
    const content = document.getElementById('tutorial-content');
    const prevBtn = document.getElementById('tutorial-prev');
    const nextBtn = document.getElementById('tutorial-next');
    const skipBtn = document.getElementById('tutorial-skip');
    const stepDisplay = document.getElementById('tutorial-step');
    const totalDisplay = document.getElementById('tutorial-total');
    const highlight = document.getElementById('tutorial-highlight');

    title.textContent = step.title;
    content.innerHTML = `<p>${step.content}</p>`;
    
    stepDisplay.textContent = gameState.tutorialStep + 1;
    totalDisplay.textContent = tutorialSteps.length;
    
    prevBtn.style.display = gameState.tutorialStep > 0 ? 'flex' : 'none';
    nextBtn.innerHTML = gameState.tutorialStep < tutorialSteps.length - 1 ? 
        'Lanjut <i class="fas fa-arrow-right"></i>' : 
        'Selesai <i class="fas fa-flag-checkered"></i>';
    
    skipBtn.style.display = gameState.tutorialStep < tutorialSteps.length - 1 ? 'flex' : 'none';

    if (step.highlight) {
        const element = document.querySelector(step.highlight);
        if (element) {
            const rect = element.getBoundingClientRect();
            highlight.style.width = `${rect.width + 20}px`;
            highlight.style.height = `${rect.height + 20}px`;
            highlight.style.top = `${rect.top - 10}px`;
            highlight.style.left = `${rect.left - 10}px`;
            highlight.style.display = 'block';
            
            if (step.action === 'click') {
                const handler = function() {
                    nextTutorialStep();
                    element.removeEventListener('click', handler);
                };
                element.addEventListener('click', handler);
            }
        }
    } else {
        highlight.style.display = 'none';
    }

    overlay.style.display = 'flex';
    updateQuestProgress(1, gameState.tutorialStep + 1);
}

function nextTutorialStep() {
    if (gameState.tutorialStep < tutorialSteps.length - 1) {
        gameState.tutorialStep++;
        showTutorialStep();
    } else {
        completeTutorial();
    }
}

function prevTutorialStep() {
    if (gameState.tutorialStep > 0) {
        gameState.tutorialStep--;
        showTutorialStep();
    }
}

function skipTutorial() {
    completeTutorial();
    showNotification('Tutorial dilewati! Kamu bisa buka lagi lewat tombol Bantuan.', 'info');
}

function completeTutorial() {
    document.getElementById('tutorial-overlay').style.display = 'none';
    updateQuestProgress(1, tutorialSteps.length);
    showNotification('Yeay! Tutorial selesai! 🎉 Sekarang waktunya petualangan seru!', 'success');
}

// Avatar System
function selectAvatar(avatarType) {
    document.querySelectorAll('.avatar-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    const selectedOption = document.querySelector(`[data-avatar="${avatarType}"]`);
    selectedOption.classList.add('selected');
    gameState.selectedAvatar = avatarType;
}

function confirmAvatarSelection() {
    if (gameState.selectedAvatar) {
        const avatar = avatarData[gameState.selectedAvatar];
        gameState.player.avatar = gameState.selectedAvatar;
        
        gameState.player.attack = avatar.attack;
        gameState.player.defense = avatar.defense;
        gameState.player.maxHealth = avatar.health;
        gameState.player.health = avatar.health;
        
        updatePlayerDisplay();
        hideModal('start-modal');
        
        document.getElementById('scene-display').innerHTML = `
            <h2 class="scene-title">🎉 Karakter Dipilih!</h2>
            <div class="scene-content">
                <div class="welcome-message">
                    <p>Halo, <strong>${avatar.name}</strong>! 👋</p>
                    <p>Selamat bergabung di petualangan produktif Raga Nusantara!</p>
                    <p><strong>"${avatar.description}"</strong></p>
                    <div class="feature-highlights">
                        <div class="feature-item">
                            <i class="fas fa-bolt"></i>
                            <span>Attack: ${avatar.attack}</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-shield-alt"></i>
                            <span>Defense: ${avatar.defense}</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-heart"></i>
                            <span>Health: ${avatar.health}</span>
                        </div>
                    </div>
                    <p>Sekarang ayo mulai quest produktif pertama kamu! 🚀</p>
                </div>
            </div>
        `;
        
        showNotification(`Welcome, ${avatar.name}! 🎊`, 'success');
    } else {
        showNotification('Pilih karakter dulu ya! 👤', 'warning');
    }
}

// Work System
function selectWork(workType) {
    document.querySelectorAll('.work-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    const selectedOption = document.querySelector(`[data-work="${workType}"]`);
    selectedOption.classList.add('selected');
    gameState.selectedWork = workType;
}

function startWork() {
    if (gameState.selectedWork) {
        const work = gameState.workOptions[gameState.selectedWork];
        const btn = document.getElementById('start-work');
        
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Bekerja...';
        
        showNotification(`Memulai: ${work.name} 💼`, 'info');
        
        setTimeout(() => {
            gameState.player.gold += work.reward;
            gameState.workCompleted++;
            
            btn.disabled = false;
            btn.innerHTML = '<i class="fas fa-play"></i> Mulai Bekerja';
            
            showNotification(`Luar biasa! Kamu dapat ${work.reward} Gold! 💰`, 'success');
            updateGoldDisplay();
            hideModal('work-modal');
            
            gameState.selectedWork = null;
            document.querySelectorAll('.work-option').forEach(option => {
                option.classList.remove('selected');
            });
            
            updateQuestProgress(2, gameState.workCompleted);
            checkAchievements();
            
        }, work.time);
    } else {
        showNotification('Pilih pekerjaan dulu ya! 💼', 'warning');
    }
}

// Productive Quest System
function startProductiveQuest(questId) {
    const quest = gameState.productiveQuests.find(q => q.id === questId);
    
    if (quest && !quest.active && !quest.completed) {
        quest.active = true;
        quest.startTime = new Date().toISOString();
        quest.endTime = new Date(Date.now() + quest.duration * 60000).toISOString();
        
        showNotification(`Quest "${quest.name}" dimulai! ⏰`, 'success');
        renderProductiveQuests();
        saveGame();
    }
}

function completeProductiveQuest(questId) {
    const quest = gameState.productiveQuests.find(q => q.id === questId);
    
    if (quest && quest.active) {
        quest.active = false;
        quest.completed = true;
        
        // Calculate rewards
        const expMatch = quest.reward.match(/(\d+) EXP/);
        const goldMatch = quest.reward.match(/(\d+) Gold/);
        
        if (expMatch) addExperience(parseInt(expMatch[1]));
        if (goldMatch) {
            gameState.player.gold += parseInt(goldMatch[1]);
            updateGoldDisplay();
        }
        
        gameState.dailyStats.completedQuests++;
        gameState.dailyStats.totalXP += parseInt(expMatch[1]);
        
        showNotification(`Quest "${quest.name}" selesai! 🎉 Hadiah: ${quest.reward}`, 'success');
        renderProductiveQuests();
        updateDailyStats();
        checkAchievements();
        saveGame();
    }
}

function updateProductiveQuests() {
    gameState.productiveQuests.forEach(quest => {
        if (quest.active && quest.endTime) {
            const endTime = new Date(quest.endTime);
            const now = new Date();
            
            if (now >= endTime) {
                completeProductiveQuest(quest.id);
            }
        }
    });
    renderProductiveQuests();
}

// Display Functions
function updatePlayerDisplay() {
    const avatarDisplay = document.getElementById('avatar-display');
    const level = document.getElementById('level');
    const expFill = document.getElementById('exp-fill');
    const hpFill = document.getElementById('hp-fill');
    
    if (gameState.player.avatar) {
        const avatar = avatarData[gameState.player.avatar];
        avatarDisplay.innerHTML = `<i class="fas fa-${getAvatarIcon(gameState.player.avatar)}"></i>`;
    }
    
    level.textContent = gameState.player.level;
    
    const expPercent = (gameState.player.experience / gameState.player.maxExperience) * 100;
    expFill.style.width = `${expPercent}%`;
    
    const hpPercent = (gameState.player.health / gameState.player.maxHealth) * 100;
    hpFill.style.width = `${hpPercent}%`;
    
    updateGoldDisplay();
}

function updateGoldDisplay() {
    document.getElementById('gold-amount').textContent = gameState.player.gold;
    if (document.getElementById('shop-gold-amount')) {
        document.getElementById('shop-gold-amount').textContent = gameState.player.gold;
    }
}

function updateDailyStats() {
    document.getElementById('completed-today').textContent = gameState.dailyStats.completedQuests;
    document.getElementById('xp-today').textContent = gameState.dailyStats.totalXP;
}

function updateGameDisplay() {
    updatePlayerDisplay();
    renderInventory();
    renderAchievements();
    renderQuests();
    renderProductiveQuests();
    updateDailyStats();
}

// Render Functions
function renderInventory() {
    const list = document.getElementById('inventory-list');
    list.innerHTML = '';
    
    if (gameState.inventory.length === 0) {
        list.innerHTML = '<div class="inventory-item">Inventory kosong</div>';
        return;
    }
    
    gameState.inventory.forEach(item => {
        const element = document.createElement('div');
        element.className = 'inventory-item';
        element.innerHTML = `
            <div class="item-header">
                <span class="item-name">${item.name}</span>
                <span class="item-rarity rarity-${item.rarity}">${item.rarity}</span>
            </div>
            <div class="item-description">${item.description}</div>
            <div class="item-value">Nilai: ${item.value} gold</div>
        `;
        list.appendChild(element);
    });
    
    updateQuestProgress(3, gameState.inventory.length);
}

function renderAchievements() {
    const list = document.getElementById('achievements-list');
    list.innerHTML = '';
    
    gameState.achievements.forEach(achievement => {
        const element = document.createElement('div');
        element.className = 'achievement-item';
        element.innerHTML = `
            <div class="item-header">
                <span class="item-name">${achievement.name}</span>
                <span style="color: ${achievement.unlocked ? '#10b981' : '#ef4444'}">
                    ${achievement.unlocked ? '✓' : '✗'}
                </span>
            </div>
            <div class="item-description">${achievement.description}</div>
            <div class="item-reward">Hadiah: ${achievement.reward}</div>
        `;
        list.appendChild(element);
    });
}

function renderQuests() {
    const list = document.getElementById('quests-list');
    list.innerHTML = '';
    
    const activeQuests = gameState.quests.filter(quest => !quest.completed);
    
    if (activeQuests.length === 0) {
        list.innerHTML = '<div class="quest-item">Semua quest selesai! 🎉</div>';
        return;
    }
    
    activeQuests.forEach(quest => {
        const progressPercent = (quest.progress / quest.maxProgress) * 100;
        const element = document.createElement('div');
        element.className = 'quest-item';
        element.innerHTML = `
            <div class="item-header">
                <span class="item-name">${quest.name}</span>
                <span>${quest.progress}/${quest.maxProgress}</span>
            </div>
            <div class="item-description">${quest.description}</div>
            <div class="quest-progress">
                <div class="quest-bar">
                    <div class="quest-fill" style="width: ${progressPercent}%"></div>
                </div>
                <span>${Math.round(progressPercent)}%</span>
            </div>
            <div class="item-reward">Hadiah: ${quest.reward}</div>
        `;
        list.appendChild(element);
    });
}

function renderProductiveQuests() {
    const container = document.getElementById('productive-quests-container');
    const list = document.getElementById('productive-quests-list');
    
    if (container) {
        container.innerHTML = '';
        gameState.productiveQuests.forEach(quest => {
            const element = createProductiveQuestElement(quest);
            container.appendChild(element);
        });
    }
    
    if (list) {
        list.innerHTML = '';
        const activeQuests = gameState.productiveQuests.filter(q => q.active || !q.completed);
        
        if (activeQuests.length === 0) {
            list.innerHTML = '<div class="productive-quest-item">Tidak ada quest aktif</div>';
            return;
        }
        
        activeQuests.forEach(quest => {
            const element = createProductiveQuestElement(quest, true);
            list.appendChild(element);
        });
    }
}

function createProductiveQuestElement(quest, compact = false) {
    const element = document.createElement('div');
    element.className = `productive-quest ${quest.active ? 'active' : ''} ${quest.completed ? 'completed' : ''}`;
    
    let timerHTML = '';
    if (quest.active && quest.endTime) {
        const endTime = new Date(quest.endTime);
        const now = new Date();
        const diff = endTime - now;
        
        if (diff > 0) {
            const minutes = Math.floor(diff / 60000);
            const seconds = Math.floor((diff % 60000) / 1000);
            timerHTML = `
                <div class="quest-timer timer-active">
                    <i class="fas fa-clock"></i>
                    <span>${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}</span>
                </div>
            `;
        }
    }
    
    const actionsHTML = !compact && !quest.completed ? `
        <div class="quest-actions">
            ${!quest.active ? `
                <button class="btn btn-success btn-sm" onclick="startProductiveQuest(${quest.id})">
                    <i class="fas fa-play"></i> Mulai
                </button>
            ` : `
                <button class="btn btn-warning btn-sm" onclick="completeProductiveQuest(${quest.id})">
                    <i class="fas fa-check"></i> Selesai
                </button>
            `}
        </div>
    ` : '';
    
    element.innerHTML = `
        <div class="quest-header">
            <div class="quest-title">${quest.name}</div>
            <div class="quest-reward">${quest.reward}</div>
        </div>
        <div class="quest-description">${quest.description}</div>
        ${timerHTML}
        ${actionsHTML}
    `;
    
    return element;
}

function renderSkills() {
    const list = document.getElementById('skills-list');
    if (!list) return;
    
    list.innerHTML = '';
    gameState.skills.forEach(skill => {
        const element = document.createElement('div');
        element.className = 'skill';
        element.innerHTML = `
            <div class="skill-name">${skill.name} (Level ${skill.level}/${skill.maxLevel})</div>
            <div class="skill-description">${skill.description}</div>
            <div class="skill-cost">Biaya: ${skill.cost} skill point</div>
            <button class="btn btn-primary upgrade-skill" data-skill="${skill.id}" 
                ${gameState.player.skillPoints < skill.cost || skill.level >= skill.maxLevel ? 'disabled' : ''}>
                Upgrade
            </button>
        `;
        list.appendChild(element);
    });
}

function renderShopItems() {
    const container = document.getElementById('shop-items');
    if (!container) return;
    
    container.innerHTML = '';
    gameState.shopItems.forEach(item => {
        const element = document.createElement('div');
        element.className = 'shop-item';
        element.innerHTML = `
            <div class="shop-item-header">
                <span class="shop-item-name">${item.name}</span>
                <span class="shop-item-price">${item.price} Gold</span>
            </div>
            <div class="shop-item-description">${item.description}</div>
            <button class="btn btn-primary buy-btn" data-item='${JSON.stringify(item)}' 
                ${gameState.player.gold < item.price ? 'disabled' : ''}>
                <i class="fas fa-shopping-cart"></i> Beli
            </button>
        `;
        container.appendChild(element);
    });
    
    // Add event listeners
    document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', function() {
            const item = JSON.parse(this.dataset.item);
            buyItem(item);
        });
    });
}

// Utility Functions
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function hideModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function showNotification(message, type) {
    const container = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${getNotificationIcon(type)}"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 4000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        warning: 'exclamation-triangle',
        error: 'times-circle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function getAvatarIcon(avatarType) {
    const icons = {
        tech: 'laptop-code',
        creative: 'palette',
        fitness: 'dumbbell',
        study: 'graduation-cap'
    };
    return icons[avatarType] || 'user';
}

function addExperience(exp) {
    gameState.player.experience += exp;
    let leveledUp = false;
    
    while (gameState.player.experience >= gameState.player.maxExperience) {
        gameState.player.experience -= gameState.player.maxExperience;
        gameState.player.level++;
        gameState.player.maxExperience = Math.floor(gameState.player.maxExperience * 1.3);
        gameState.player.skillPoints += 2;
        gameState.player.maxHealth += 15;
        gameState.player.health = gameState.player.maxHealth;
        gameState.player.attack += 2;
        gameState.player.defense += 2;
        
        leveledUp = true;
        showNotification(`Level Up! 🎉 Sekarang Level ${gameState.player.level}`, 'success');
        
        updateQuestProgress(4, gameState.player.level);
    }
    
    updatePlayerDisplay();
    if (leveledUp) {
        checkAchievements();
    }
}

function updateQuestProgress(questId, progress) {
    const quest = gameState.quests.find(q => q.id === questId);
    if (quest && !quest.completed) {
        quest.progress = Math.min(progress, quest.maxProgress);
        
        if (quest.progress >= quest.maxProgress && !quest.completed) {
            quest.completed = true;
            completeQuest(quest);
        }
        
        renderQuests();
    }
}

function completeQuest(quest) {
    if (quest.reward.includes('EXP')) {
        const expMatch = quest.reward.match(/(\d+) EXP/);
        if (expMatch) addExperience(parseInt(expMatch[1]));
    }
    
    if (quest.reward.includes('Gold')) {
        const goldMatch = quest.reward.match(/(\d+) Gold/);
        if (goldMatch) {
            gameState.player.gold += parseInt(goldMatch[1]);
            updateGoldDisplay();
        }
    }
    
    if (quest.reward.includes('Starter Pack')) {
        gameState.inventory.push(
            { id: Date.now(), name: "💼 Starter Bag", type: "tool", rarity: "common", description: "Tas pertama untuk petualangan", value: 25 },
            { id: Date.now() + 1, name: "📝 Notebook", type: "tool", rarity: "common", description: "Untuk mencatat progress", value: 15 }
        );
        renderInventory();
    }
    
    showNotification(`Quest "${quest.name}" selesai! 🎉 Hadiah: ${quest.reward}`, 'success');
}

function buyItem(item) {
    if (gameState.player.gold >= item.price) {
        gameState.player.gold -= item.price;
        gameState.itemsBought++;
        
        const newItem = {
            id: Date.now(),
            name: item.name,
            type: item.type,
            rarity: "common",
            description: item.description,
            value: Math.floor(item.price * 0.7)
        };
        
        // Add item properties
        Object.keys(item).forEach(key => {
            if (!['id', 'name', 'price', 'description', 'type'].includes(key)) {
                newItem[key] = item[key];
            }
        });
        
        gameState.inventory.push(newItem);
        
        updateGoldDisplay();
        renderShopItems();
        renderInventory();
        
        showNotification(`Kamu beli ${item.name}! 🛍️`, 'success');
        updateQuestProgress(3, gameState.itemsBought);
        checkAchievements();
    } else {
        showNotification('Gold tidak cukup! 💰', 'warning');
    }
}

function checkAchievements() {
    // Consistency King - 7 day streak
    if (gameState.player.streak >= 7 && !gameState.achievements[1].unlocked) {
        gameState.achievements[1].unlocked = true;
        showAchievementNotification('Consistency King');
    }
    
    // Learning Machine - 10 learning quests
    const learningQuests = gameState.productiveQuests.filter(q => 
        q.completed && q.type === 'learning'
    ).length;
    if (learningQuests >= 10 && !gameState.achievements[2].unlocked) {
        gameState.achievements[2].unlocked = true;
        showAchievementNotification('Learning Machine');
    }
    
    // All Star - Level 10
    if (gameState.player.level >= 10 && !gameState.achievements[6].unlocked) {
        gameState.achievements[6].unlocked = true;
        showAchievementNotification('All Star');
    }
    
    renderAchievements();
}

function showAchievementNotification(achievementName) {
    showNotification(`🏆 Achievement Unlocked: ${achievementName}!`, 'success');
}

// Modal Show Functions
function showStartModal() {
    showModal('start-modal');
}

function showWorkModal() {
    showModal('work-modal');
}

function showProductiveModal() {
    showModal('productive-modal');
    renderProductiveQuests();
}

function showShopModal() {
    showModal('shop-modal');
    document.getElementById('shop-gold-amount').textContent = gameState.player.gold;
    renderShopItems();
}

// Auto-save when leaving
window.addEventListener('beforeunload', function() {
    saveGame();
});

// Export for global access
window.startProductiveQuest = startProductiveQuest;
window.completeProductiveQuest = completeProductiveQuest;