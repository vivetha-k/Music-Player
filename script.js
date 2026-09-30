// ========================================
// PLAYLIST DATA
// ========================================

const songsData = [
    {
        id: 1,
        title: "Summer Vibes",
        artist: "Chill Beats",
        duration: "3:45",
        src: "assets/music/song1.mp3",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop"
    },
    {
        id: 2,
        title: "Night Drive",
        artist: "Neon Dreams",
        duration: "4:12",
        src: "assets/music/song2.mp3",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&h=500&fit=crop"
    },
    {
    id: 3,
    title: "Ocean Waves",
    artist: "Calm Collective",
    duration: "5:20",
    src: "assets/music/song3.mp3",
    cover: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=500&h=500&fit=crop"
},
    {
        id: 4,
        title: "Urban Jungle",
        artist: "Metro Sounds",
        duration: "3:58",
        src: "assets/music/song4.mp3",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop"
    },
    {
        id: 5,
        title: "Starlight",
        artist: "Cosmic Harmony",
        duration: "4:33",
        src: "assets/music/song5.mp3",
        cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=500&fit=crop"
    }
];

// ========================================
// DOM ELEMENTS
// ========================================

const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const currentTimeEl = document.getElementById('currentTime');
const totalTimeEl = document.getElementById('totalTime');
const volumeSlider = document.getElementById('volumeSlider');
const volumeFill = document.getElementById('volumeFill');
const volumeIcon = document.getElementById('volumeIcon');
const volumePercentage = document.getElementById('volumePercentage');
const albumArt = document.getElementById('albumArt');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const playlist = document.getElementById('playlist');
const searchInput = document.getElementById('searchInput');
const favoriteBtn = document.getElementById('favoriteBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const repeatBtn = document.getElementById('repeatBtn');
const equalizer = document.getElementById('equalizer');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const playlistCount = document.getElementById('playlistCount');
const themeToggle = document.getElementById('themeToggle');

// ========================================
// STATE VARIABLES
// ========================================

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let favorites = [];
let recentlyPlayedSongs = JSON.parse(
    localStorage.getItem('recentlyPlayedSongs')
) || [];

// ========================================
// INITIALIZATION
// ========================================

function init() {
    loadSong(currentSongIndex);
    renderPlaylist(songsData);
    setVolume(70);

    // Load saved theme
    loadSavedTheme();
    
    // Add event listeners
    addEventListeners();
    
    // Update playlist count
    updatePlaylistCount(songsData.length);
    renderRecentlyPlayed();
}

// ========================================
// EVENT LISTENERS
// ========================================

function addEventListeners() {
    // Playback controls
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', playPrevious);
    nextBtn.addEventListener('click', playNext);
    
    // Progress bar
    progressBar.addEventListener('input', seek);
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('loadedmetadata', setTotalTime);
    audioPlayer.addEventListener('ended', handleSongEnd);
    
    // Volume
    volumeSlider.addEventListener('input', handleVolumeChange);
    volumeIcon.addEventListener('click', toggleMute);
    
    // Search
    searchInput.addEventListener('input', handleSearch);
    
    // Favorite
    favoriteBtn.addEventListener('click', toggleFavorite);
    
    // Shuffle & Repeat
    shuffleBtn.addEventListener('click', toggleShuffle);
    repeatBtn.addEventListener('click', toggleRepeat);
    
    // Error handling
    audioPlayer.addEventListener('error', handleAudioError);

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    clearRecentBtn.addEventListener('click', clearRecentlyPlayed);
}

// ========================================
// LOAD & PLAY SONG
// ========================================

function loadSong(index) {
    const song = songsData[index];
    
    // Update audio source
    audioPlayer.src = song.src;
    
    // Update UI
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    albumArt.src = song.cover;
    
    // Update active state in playlist
    updateActivePlaylistItem(index);
    
    // Reset progress
    progressBar.value = 0;
    progressFill.style.width = '0%';
    currentTimeEl.textContent = '0:00';
    
    // Check if favorited
    updateFavoriteButton(song.id);
}

function playSong() {
    isPlaying = true;
    audioPlayer.play()
        .then(() => {
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
            albumArt.classList.add('playing');
            equalizer.classList.add('active');
            addToRecentlyPlayed(songsData[currentSongIndex]);
            showToast(`Now Playing: ${songsData[currentSongIndex].title}`);
        })
        .catch(error => {
            console.error('Playback error:', error);
            showToast('Unable to play audio file');
            isPlaying = false;
        });
}

function pauseSong() {
    isPlaying = false;
    audioPlayer.pause();
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
    albumArt.classList.remove('playing');
    equalizer.classList.remove('active');
}

function togglePlay() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

// ========================================
// NAVIGATION
// ========================================

function playNext() {
    if (isShuffle) {
        // Random song except current
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songsData.length);
        } while (randomIndex === currentSongIndex && songsData.length > 1);
        currentSongIndex = randomIndex;
    } else {
        currentSongIndex = (currentSongIndex + 1) % songsData.length;
    }
    
    loadSong(currentSongIndex);
    if (isPlaying) playSong();
}

function playPrevious() {
    // If song has played more than 3 seconds, restart it
    if (audioPlayer.currentTime > 3) {
        audioPlayer.currentTime = 0;
    } else {
        // Go to previous song
        currentSongIndex = (currentSongIndex - 1 + songsData.length) % songsData.length;
        loadSong(currentSongIndex);
        if (isPlaying) playSong();
    }
}

function handleSongEnd() {
    if (isRepeat) {
        // Repeat current song
        audioPlayer.currentTime = 0;
        playSong();
    } else {
        // Play next song
        playNext();
    }
}

// ========================================
// PROGRESS BAR
// ========================================

function updateProgress() {
    const { currentTime, duration } = audioPlayer;
    
    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progressBar.value = progressPercent;
        progressFill.style.width = `${progressPercent}%`;
        currentTimeEl.textContent = formatTime(currentTime);
    }
}

function seek(e) {
    const seekTime = (e.target.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
}

function setTotalTime() {
    if (audioPlayer.duration) {
        totalTimeEl.textContent = formatTime(audioPlayer.duration);
    }
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// ========================================
// VOLUME CONTROL
// ========================================

function handleVolumeChange(e) {
    const volume = e.target.value;
    setVolume(volume);
}

function setVolume(volume) {
    audioPlayer.volume = volume / 100;
    volumeSlider.value = volume;
    volumeFill.style.width = `${volume}%`;
    volumePercentage.textContent = `${volume}%`;
    updateVolumeIcon(volume);
}

function updateVolumeIcon(volume) {
    const icon = volumeIcon.querySelector('i');
    icon.classList.remove('fa-volume-up', 'fa-volume-down', 'fa-volume-mute');
    
    if (volume == 0) {
        icon.classList.add('fa-volume-mute');
    } else if (volume < 50) {
        icon.classList.add('fa-volume-down');
    } else {
        icon.classList.add('fa-volume-up');
    }
}

function toggleMute() {
    if (audioPlayer.volume > 0) {
        audioPlayer.dataset.previousVolume = audioPlayer.volume;
        setVolume(0);
    } else {
        const previousVolume = audioPlayer.dataset.previousVolume || 0.7;
        setVolume(previousVolume * 100);
    }
}

// ========================================
// PLAYLIST
// ========================================

function renderPlaylist(songs) {
    playlist.innerHTML = '';
    
    if (songs.length === 0) {
        playlist.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>No songs found</p>
            </div>
        `;
        return;
    }
    
    songs.forEach((song, index) => {
        const playlistItem = document.createElement('div');
        playlistItem.classList.add('playlist-item');
        if (index === currentSongIndex) {
            playlistItem.classList.add('active');
        }
        
        playlistItem.innerHTML = `
            <img src="${song.cover}" alt="${song.title}" class="playlist-item-thumbnail">
            <div class="playlist-item-info">
                <div class="playlist-item-title">${song.title}</div>
                <div class="playlist-item-artist">${song.artist}</div>
            </div>
            <div class="playlist-item-duration">${song.duration}</div>
        `;
        
        playlistItem.addEventListener('click', () => {
            // Find actual index in original array
            const actualIndex = songsData.findIndex(s => s.id === song.id);
            currentSongIndex = actualIndex;
            loadSong(currentSongIndex);
            playSong();
            
            // Update active state
            document.querySelectorAll('.playlist-item').forEach(item => {
                item.classList.remove('active');
            });
            playlistItem.classList.add('active');
        });
        
        playlist.appendChild(playlistItem);
    });
}

function updateActivePlaylistItem(index) {
    const playlistItems = document.querySelectorAll('.playlist-item');
    playlistItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// ========================================
// SEARCH
// ========================================

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    const filteredSongs = songsData.filter(song => {
        return song.title.toLowerCase().includes(searchTerm) ||
               song.artist.toLowerCase().includes(searchTerm);
    });
    
    renderPlaylist(filteredSongs);
    updatePlaylistCount(filteredSongs.length);
}

function updatePlaylistCount(count) {
    playlistCount.textContent = `${count} song${count !== 1 ? 's' : ''}`;
}

// ========================================
// FAVORITE
// ========================================

function toggleFavorite() {
    const currentSongId = songsData[currentSongIndex].id;
    
    if (favorites.includes(currentSongId)) {
        favorites = favorites.filter(id => id !== currentSongId);
        favoriteBtn.classList.remove('active');
        showToast('Removed from favorites');
    } else {
        favorites.push(currentSongId);
        favoriteBtn.classList.add('active');
        showToast('Added to favorites');
    }
}

function updateFavoriteButton(songId) {
    if (favorites.includes(songId)) {
        favoriteBtn.classList.add('active');
        favoriteBtn.querySelector('i').classList.remove('far');
        favoriteBtn.querySelector('i').classList.add('fas');
    } else {
        favoriteBtn.classList.remove('active');
        favoriteBtn.querySelector('i').classList.remove('fas');
        favoriteBtn.querySelector('i').classList.add('far');
    }
}

// ========================================
// SHUFFLE & REPEAT
// ========================================

function toggleShuffle() {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle('active');
    showToast(isShuffle ? 'Shuffle enabled' : 'Shuffle disabled');
}

function toggleRepeat() {
    isRepeat = !isRepeat;
    repeatBtn.classList.toggle('active');
    showToast(isRepeat ? 'Repeat enabled' : 'Repeat disabled');
}

// ========================================
// DARK / LIGHT THEME
// ========================================

function toggleTheme() {
    document.body.classList.toggle('light-theme');

    const isLightTheme = document.body.classList.contains('light-theme');

    if (isLightTheme) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        themeToggle.setAttribute('aria-label', 'Switch to dark theme');
        showToast('Light theme enabled');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.setAttribute('aria-label', 'Switch to light theme');
        showToast('Dark theme enabled');
    }

    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
}

function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        themeToggle.setAttribute('aria-label', 'Switch to dark theme');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.setAttribute('aria-label', 'Switch to light theme');
    }
}
// ========================================
// RECENTLY PLAYED
// ========================================

function addToRecentlyPlayed(song) {

    // Remove duplicate song
    recentlyPlayedSongs = recentlyPlayedSongs.filter(
        item => item.id !== song.id
    );

    // Add latest song at the beginning
    recentlyPlayedSongs.unshift(song);

    // Keep only latest 6 songs
    recentlyPlayedSongs = recentlyPlayedSongs.slice(0, 6);

    // Save to localStorage
    localStorage.setItem(
        'recentlyPlayedSongs',
        JSON.stringify(recentlyPlayedSongs)
    );

    // Update UI
    renderRecentlyPlayed();
}

function renderRecentlyPlayed() {

    recentlyPlayed.innerHTML = '';

    if (recentlyPlayedSongs.length === 0) {
        recentlyPlayed.innerHTML = `
            <div class="no-recently-played">
                <i class="fas fa-clock"></i>
                <p>No recently played songs</p>
            </div>
        `;
        return;
    }

    recentlyPlayedSongs.forEach(song => {

        const recentItem = document.createElement('div');

        recentItem.classList.add('recent-item');

        recentItem.innerHTML = `
            <img
                src="${song.cover}"
                alt="${song.title}"
                class="recent-item-thumbnail">

            <div class="recent-item-info">

                <div class="recent-item-title">
                    ${song.title}
                </div>

                <div class="recent-item-artist">
                    ${song.artist}
                </div>

            </div>

            <i class="fas fa-play"></i>
        `;

        recentItem.addEventListener('click', () => {

            const actualIndex = songsData.findIndex(
                item => item.id === song.id
            );

            if (actualIndex !== -1) {

                currentSongIndex = actualIndex;

                loadSong(currentSongIndex);

                playSong();
            }
        });

        recentlyPlayed.appendChild(recentItem);
    });
}

function clearRecentlyPlayed() {

    recentlyPlayedSongs = [];

    localStorage.removeItem('recentlyPlayedSongs');

    renderRecentlyPlayed();

    showToast('Recently Played cleared');
}
// ========================================
// TOAST NOTIFICATION
// ========================================

function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// ERROR HANDLING
// ========================================

function handleAudioError(e) {
    console.error('Audio error:', e);
    
    let errorMessage = 'Unable to load audio file';
    
    switch (e.target.error.code) {
        case e.target.error.MEDIA_ERR_ABORTED:
            errorMessage = 'Audio playback aborted';
            break;
        case e.target.error.MEDIA_ERR_NETWORK:
            errorMessage = 'Network error while loading audio';
            break;
        case e.target.error.MEDIA_ERR_DECODE:
            errorMessage = 'Audio file is corrupted';
            break;
        case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
            errorMessage = 'Audio file not found. Please add MP3 files to assets/music/';
            break;
    }
    
    showToast(errorMessage);
    
    // Don't break the UI - user can still navigate
    isPlaying = false;
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
    albumArt.classList.remove('playing');
    equalizer.classList.remove('active');
}

// ========================================
// KEYBOARD SHORTCUTS
// ========================================

document.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'Space':
            e.preventDefault();
            togglePlay();
            break;
        case 'ArrowRight':
            playNext();
            break;
        case 'ArrowLeft':
            playPrevious();
            break;
        case 'ArrowUp':
            e.preventDefault();
            setVolume(Math.min(100, parseInt(volumeSlider.value) + 10));
            break;
        case 'ArrowDown':
            e.preventDefault();
            setVolume(Math.max(0, parseInt(volumeSlider.value) - 10));
            break;
    }
});

// ========================================
// INITIALIZE APP
// ========================================

init();