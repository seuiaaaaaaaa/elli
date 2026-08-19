const STORAGE_KEY = "elli-playlist-v3";
const HEART_KEY = "elli-heartbeats-v1";
const AUDIO_DB_NAME = "elli-audio-files";
const AUDIO_STORE = "files";

const defaultArtwork = [
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%23ffe1ec'/%3E%3Cstop offset='.56' stop-color='%23d97999'/%3E%3Cstop offset='1' stop-color='%23651d32'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' rx='28' fill='url(%23g)'/%3E%3Cpath d='M0 208h400' stroke='%23fff7f0' stroke-width='30' opacity='.45'/%3E%3Cpath d='M143 153c-35-32-83 26-34 62l91 66 91-66c49-36 1-94-34-62-24 22-33 22-57 0-24 22-33 22-57 0Z' fill='%23fff7f0' opacity='.82'/%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' rx='28' fill='%23261b20'/%3E%3Ccircle cx='205' cy='190' r='116' fill='%23ffd6e7' opacity='.95'/%3E%3Cpath d='M82 255c75-66 158-66 236 0' fill='none' stroke='%23a84d68' stroke-width='20' stroke-linecap='round'/%3E%3Cpath d='M155 136 82 95v92l73-51Zm90 0 73-41v92l-73-51Z' fill='%23d97999'/%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' rx='28' fill='%23fff7f0'/%3E%3Cpath d='M48 70h304v260H48z' fill='%23ffc0d7'/%3E%3Cpath d='M48 200h304M200 70v260' stroke='%23fff7f0' stroke-width='30'/%3E%3Cpath d='M142 141c-51-45-96 66-10 92l68 21 68-21c86-26 41-137-10-92-28 25-58 25-116 0Z' fill='%23651d32' opacity='.78'/%3E%3C/svg%3E",
];

const folderTracks = [
  ["frank ely songs", "Frank Ely", "Frank Ely", "Kailan Tayo Sasayaw", "frank-ely-frank-ely-kailan-tayo-sasayaw.m4a"],
  ["frank ely songs", "Frank Ely", "Frank Ely", "Kung Wala Ka Bukas", "frank-ely-frank-ely-kung-wala-ka-bukas.m4a"],
  ["frank ely songs", "Frank Ely", "Frank Ely", "Labyu", "frank-ely-frank-ely-labyu-official-video.m4a"],
  ["frank ely songs", "Frank Ely", "Frank Ely", "Minamahal", "frank-ely-frank-ely-minamahal-official-video.m4a"],
  ["frank ely songs", "Frank Ely", "Frank Ely", "Namimiss", "frank-ely-frank-ely-namimiss-official-lyric-video.m4a"],
  ["frank ely songs", "Frank Ely", "Frank Ely", "Pahingi Ako Ng Kiss", "frank-ely-pahingi-ako-ng-kiss.m4a"],
  ["frank ely songs", "Frank Ely", "Frank Ely", "Pwede Ka Ba", "frank-ely-pwede-ka-ba.m4a"],
  ["frank ely songs", "Frank Ely", "Frank Ely", "Kay Ganda Mo", "kay ganda mo.mp3"],
  ["IASIM", "It All Started in May", "It All Started in May", "Manila", "it-all-started-in-may-manila.m4a"],
  ["IASIM", "It All Started in May", "It All Started in May", "Naaalala", "it-all-started-in-may-naaalala.m4a"],
  ["IASIM", "It All Started in May", "It All Started in May", "O Kay Tamis", "it-all-started-in-may-o-kay-tamis.m4a"],
  ["IASIM", "It All Started in May", "It All Started in May", "Pasado", "it-all-started-in-may-pasado.m4a"],
  ["IASIM", "It All Started in May", "It All Started in May", "Di Ko Man Maamin", "universal_records_philippines_it_all_started_in_may_di_ko_man_ma.m4a"],
  ["the ridleys", "The Ridleys", "The Ridleys", "Be With You", "be with you.m4a"],
  ["the ridleys", "The Ridleys", "The Ridleys", "Germany and Rome", "germany and rome.mp3"],
  ["the ridleys", "The Ridleys", "The Ridleys", "Love Is", "love is.m4a"],
  ["the ridleys", "The Ridleys", "The Ridleys", "Meaningful Silence", "meaningful silence.mp3"],
  ["the ridleys", "The Ridleys", "The Ridleys", "Paraiso", "paraiso.mp3"],
  ["the ridleys", "The Ridleys", "The Ridleys", "Running Out of Songs", "running out of songs.mp3"],
  ["the ridleys", "The Ridleys", "The Ridleys", "Someday", "Someday - The Ridleys.mp3"],
  ["the ridleys", "The Ridleys", "The Ridleys", "Aphrodite", "The Ridleys - Aphrodite.flac"],
];

const starterSongs = folderTracks.map(([folder, artist, album, title, file], index) => ({
  id: `local-${folder}-${file}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  title,
  artist,
  album,
  art: defaultArtwork[index % defaultArtwork.length],
  audio: `${folder}/${file}`,
}));

const messages = [
  "i miss you, elli - tin",
  "i miss you, elli - tin",
  "i miss you, elli - tin",
  "i miss you, elli - tin",
  "i miss you, elli - tin",
  "i miss you, elli - tin",
  "i miss you, elli - tin",
  "i miss you, elli - tin",
  "You’re doing better than you think.",
  "Keep going, softly.",
  "You are enough.",
  "Take your time.",
  "You’ve got this.",
  "It’s okay to rest.",
  "Better days are coming.",
  "Don’t give up on yourself.",
  "You survived every hard day before this.",
  "You deserve good things too.",
  "One step at a time.",
  "You are allowed to start again.",
];

let songs = loadSongs();
let currentIndex = songs.length ? 0 : -1;
let isPlaying = false;
let heartbeats = Number(localStorage.getItem(HEART_KEY) || 0);
const audioUrls = new Map();

const pages = document.querySelectorAll(".page");
const navItems = document.querySelectorAll(".nav-item");
const recentSongs = document.querySelector("#recentSongs");
const songList = document.querySelector("#songList");
const searchResults = document.querySelector("#searchResults");
const searchInput = document.querySelector("#searchInput");
const songCount = document.querySelector("#songCount");
const dialog = document.querySelector("#songDialog");
const form = document.querySelector("#songForm");
const audio = document.querySelector("#audio");
const playerArt = document.querySelector("#playerArt");
const playerTitle = document.querySelector("#playerTitle");
const playerArtist = document.querySelector("#playerArtist");
const playPauseBtn = document.querySelector("#playPauseBtn");
const playIcon = document.querySelector("#playIcon");
const progress = document.querySelector("#progress");
const currentTime = document.querySelector("#currentTime");
const duration = document.querySelector("#duration");
const volume = document.querySelector("#volume");
const deleteSong = document.querySelector("#deleteSong");
const audioFileInput = document.querySelector("#audioFileInput");
const heartButton = document.querySelector("#heartButton");
const heartMessage = document.querySelector("#heartMessage");
const heartbeatCounter = document.querySelector("#heartbeatCounter");

function loadSongs() {
  const saved = localStorage.getItem(STORAGE_KEY)
    || localStorage.getItem("elli-playlist-v2")
    || localStorage.getItem("elli-playlist-v1");
  if (!saved) return starterSongs;
  try {
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed) || !parsed.length) return starterSongs;
    const starterByAudio = new Map(starterSongs.map((song) => [song.audio, song]));
    const normalizedSongs = parsed.map((song) => {
      const starter = starterByAudio.get(song.audio);
      return starter ? { ...song, artist: starter.artist, album: starter.album } : song;
    });
    const savedAudios = new Set(normalizedSongs.map((song) => song.audio));
    const missingStarterSongs = starterSongs.filter((song) => !savedAudios.has(song.audio));
    const migratedSongs = [...normalizedSongs, ...missingStarterSongs];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(migratedSongs));
    return migratedSongs;
  } catch {
    return starterSongs;
  }
}

function saveSongs() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(songs));
}

function openAudioDb() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error("Audio file storage is not available in this browser."));
      return;
    }

    const request = indexedDB.open(AUDIO_DB_NAME, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(AUDIO_STORE);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function withAudioStore(mode, callback) {
  const db = await openAudioDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(AUDIO_STORE, mode);
    const store = transaction.objectStore(AUDIO_STORE);
    const request = callback(store);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
    transaction.oncomplete = () => db.close();
    transaction.onerror = () => reject(transaction.error);
  });
}

function saveAudioFile(id, file) {
  return withAudioStore("readwrite", (store) => store.put({
    blob: file,
    name: file.name,
    type: file.type,
  }, id));
}

function deleteAudioFile(id) {
  audioUrls.delete(id);
  return withAudioStore("readwrite", (store) => store.delete(id)).catch(() => {});
}

async function getStoredAudioUrl(id) {
  if (audioUrls.has(id)) return audioUrls.get(id);
  const record = await withAudioStore("readonly", (store) => store.get(id));
  if (!record?.blob) return "";
  const url = URL.createObjectURL(record.blob);
  audioUrls.set(id, url);
  return url;
}

async function getAudioSource(song) {
  if (song.audioStorage === "indexeddb") return getStoredAudioUrl(song.id);
  return song.audio || "";
}

function formatTime(value) {
  if (!Number.isFinite(value)) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function getSongArt(song, index = 0) {
  return song.art || defaultArtwork[index % defaultArtwork.length];
}

function setPage(target) {
  pages.forEach((page) => page.classList.toggle("active", page.dataset.page === target));
  navItems.forEach((item) => item.classList.toggle("active", item.dataset.target === target));
  if (target === "search") searchInput.focus();
}

function render() {
  songCount.textContent = `${songs.length} ${songs.length === 1 ? "song" : "songs"}`;
  recentSongs.innerHTML = songs.slice(-3).reverse().map(renderCard).join("");
  songList.innerHTML = renderAlbumSections();
  renderSearch();
  updatePlayer();
}

function renderAlbumSections() {
  return getAlbumGroups(songs).map((group) => `
    <section class="album-block">
      <div class="album-head">
        <img src="${getSongArt(group.songs[0], songs.findIndex((song) => song.id === group.songs[0].id))}" alt="" />
        <span class="album-copy">
          <strong>${escapeHTML(group.album)}</strong>
          <span>${escapeHTML(group.artist)} · ${group.songs.length} ${group.songs.length === 1 ? "song" : "songs"}</span>
        </span>
      </div>
      <div class="album-songs">
        ${group.songs.map(renderRow).join("")}
      </div>
    </section>
  `).join("");
}

function getAlbumGroups(collection) {
  const groups = new Map();
  collection.forEach((song) => {
    const key = song.album || song.artist || "Elli";
    if (!groups.has(key)) groups.set(key, { album: key, artist: song.artist || key, songs: [] });
    groups.get(key).songs.push(song);
  });
  return [...groups.values()];
}

function renderCard(song) {
  const index = songs.findIndex((item) => item.id === song.id);
  return `
    <article class="song-card" data-song-id="${song.id}">
      <img src="${getSongArt(song, index)}" alt="" />
      <strong>${escapeHTML(song.title)}</strong>
      <span>${escapeHTML(song.artist)}</span>
      <div class="card-actions">
        <button class="tiny-button" type="button" data-action="play" data-id="${song.id}" aria-label="Play ${escapeHTML(song.title)}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor" stroke="none" /></svg>
        </button>
        <button class="tiny-button" type="button" data-action="edit" data-id="${song.id}" aria-label="Edit ${escapeHTML(song.title)}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" /></svg>
        </button>
      </div>
    </article>
  `;
}

function renderRow(song, index) {
  const globalIndex = songs.findIndex((item) => item.id === song.id);
  return `
    <article class="song-row" data-song-id="${song.id}">
      <img src="${getSongArt(song, globalIndex >= 0 ? globalIndex : index)}" alt="" />
      <div>
        <strong>${escapeHTML(song.title)}</strong>
        <span>${escapeHTML(song.artist)}${song.album ? ` · ${escapeHTML(song.album)}` : ""}</span>
      </div>
      <div class="row-actions">
        <button class="tiny-button" type="button" data-action="up" data-id="${song.id}" aria-label="Move up">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m18 15-6-6-6 6" /></svg>
        </button>
        <button class="tiny-button" type="button" data-action="down" data-id="${song.id}" aria-label="Move down">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
        </button>
        <button class="tiny-button" type="button" data-action="play" data-id="${song.id}" aria-label="Play">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor" stroke="none" /></svg>
        </button>
        <button class="tiny-button" type="button" data-action="edit" data-id="${song.id}" aria-label="Edit">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" /></svg>
        </button>
      </div>
    </article>
  `;
}

function renderSearch() {
  const term = searchInput.value.trim().toLowerCase();
  const matches = songs.filter((song) => {
    return [song.title, song.artist, song.album].some((value) => value.toLowerCase().includes(term));
  });
  searchResults.innerHTML = matches.length
    ? matches.map(renderRow).join("")
    : `<p>No soft little matches yet.</p>`;
}

function escapeHTML(value) {
  return String(value || "").replace(/[&<>"']/g, (char) => {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char];
  });
}

function openSongDialog(song = null) {
  document.querySelector("#dialogTitle").textContent = song ? "Edit Song" : "Add Song";
  document.querySelector("#songId").value = song?.id || "";
  document.querySelector("#titleInput").value = song?.title || "";
  document.querySelector("#artistInput").value = song?.artist || "";
  document.querySelector("#albumInput").value = song?.album || "";
  document.querySelector("#artInput").value = song?.art?.startsWith("data:") ? "" : song?.art || "";
  document.querySelector("#audioInput").value = song?.audioStorage === "indexeddb" ? "" : song?.audio || "";
  audioFileInput.value = "";
  deleteSong.hidden = !song;
  dialog.showModal();
}

async function saveSongFromForm(event) {
  event.preventDefault();
  const id = document.querySelector("#songId").value || crypto.randomUUID();
  const existingIndex = songs.findIndex((song) => song.id === id);
  const audioFile = audioFileInput.files[0];
  const typedAudio = document.querySelector("#audioInput").value.trim();
  const song = {
    id,
    title: document.querySelector("#titleInput").value.trim(),
    artist: document.querySelector("#artistInput").value.trim(),
    album: document.querySelector("#albumInput").value.trim(),
    art: document.querySelector("#artInput").value.trim() || getSongArt(songs[existingIndex] || {}, songs.length),
    audio: typedAudio,
  };

  try {
    if (audioFile) {
      await saveAudioFile(id, audioFile);
      song.audio = audioFile.name;
      song.audioStorage = "indexeddb";
    } else if (typedAudio) {
      if (songs[existingIndex]?.audioStorage === "indexeddb") await deleteAudioFile(id);
      delete song.audioStorage;
    } else if (songs[existingIndex]?.audioStorage === "indexeddb") {
      song.audio = songs[existingIndex].audio;
      song.audioStorage = "indexeddb";
    }

    if (existingIndex >= 0) songs[existingIndex] = song;
    else songs.push(song);
    saveSongs();
    dialog.close();
    render();
  } catch {
    alert("Hindi na-save yung audio file. Try a smaller file or another browser.");
  }
}

async function playSong(id) {
  const index = songs.findIndex((song) => song.id === id);
  if (index < 0) return;
  currentIndex = index;
  updatePlayer();
  const song = songs[currentIndex];
  const source = await getAudioSource(song).catch(() => "");
  if (!source) {
    isPlaying = false;
    updatePlayIcon();
    openSongDialog(song);
    return;
  }
  if (audio.src !== source) audio.src = source;
  audio.play().then(() => {
    isPlaying = true;
    updatePlayIcon();
  }).catch(() => {
    isPlaying = false;
    updatePlayIcon();
  });
}

function updatePlayer() {
  const song = songs[currentIndex];
  if (!song) return;
  playerArt.src = getSongArt(song, currentIndex);
  playerTitle.textContent = song.title;
  playerArtist.textContent = song.artist;
  updatePlayIcon();
}

async function togglePlay() {
  const song = songs[currentIndex];
  if (!song) return;
  const source = await getAudioSource(song).catch(() => "");
  if (!source) {
    openSongDialog(song);
    return;
  }
  if (audio.src !== source) audio.src = source;
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.play().then(() => {
      isPlaying = true;
      updatePlayIcon();
    });
  }
  updatePlayIcon();
}

function updatePlayIcon() {
  playIcon.innerHTML = isPlaying
    ? `<path d="M7 5h4v14H7zM13 5h4v14h-4z" />`
    : `<path d="M8 5v14l11-7z" />`;
}

function skip(direction) {
  if (!songs.length) return;
  currentIndex = (currentIndex + direction + songs.length) % songs.length;
  playSong(songs[currentIndex].id);
}

function moveSong(id, direction) {
  const index = songs.findIndex((song) => song.id === id);
  const nextIndex = index + direction;
  if (index < 0 || nextIndex < 0 || nextIndex >= songs.length) return;
  const [song] = songs.splice(index, 1);
  songs.splice(nextIndex, 0, song);
  currentIndex = songs.findIndex((item) => item.id === song.id);
  saveSongs();
  render();
}

function handleSongAction(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const id = button.dataset.id;
  const song = songs.find((item) => item.id === id);
  if (button.dataset.action === "play") playSong(id);
  if (button.dataset.action === "edit" && song) openSongDialog(song);
  if (button.dataset.action === "up") moveSong(id, -1);
  if (button.dataset.action === "down") moveSong(id, 1);
}

function pumpHeart() {
  heartbeats += 1;
  localStorage.setItem(HEART_KEY, String(heartbeats));
  heartbeatCounter.textContent = `Heartbeats: ${heartbeats}`;

  heartButton.classList.remove("pumping");
  void heartButton.offsetWidth;
  heartButton.classList.add("pumping");

  const current = heartMessage.textContent;
  let next = messages[Math.floor(Math.random() * messages.length)];
  if (messages.length > 1) {
    while (next === current) next = messages[Math.floor(Math.random() * messages.length)];
  }
  const card = heartMessage.closest(".message-card");
  card.classList.remove("changing");
  setTimeout(() => {
    heartMessage.textContent = next;
    card.classList.add("changing");
  }, 120);
}

navItems.forEach((item) => item.addEventListener("click", () => setPage(item.dataset.target)));
document.querySelector("#addSongTop").addEventListener("click", () => openSongDialog());
document.querySelector("#playFeatured").addEventListener("click", () => songs[0] && playSong(songs[0].id));
document.querySelector("#closeDialog").addEventListener("click", () => dialog.close());
form.addEventListener("submit", saveSongFromForm);
deleteSong.addEventListener("click", async () => {
  const id = document.querySelector("#songId").value;
  await deleteAudioFile(id);
  songs = songs.filter((song) => song.id !== id);
  currentIndex = Math.min(currentIndex, songs.length - 1);
  saveSongs();
  dialog.close();
  render();
});
recentSongs.addEventListener("click", handleSongAction);
songList.addEventListener("click", handleSongAction);
searchResults.addEventListener("click", handleSongAction);
searchInput.addEventListener("input", renderSearch);
playPauseBtn.addEventListener("click", togglePlay);
document.querySelector("#prevBtn").addEventListener("click", () => skip(-1));
document.querySelector("#nextBtn").addEventListener("click", () => skip(1));
volume.addEventListener("input", () => {
  audio.volume = volume.value;
});
audio.addEventListener("timeupdate", () => {
  progress.value = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
  currentTime.textContent = formatTime(audio.currentTime);
});
audio.addEventListener("loadedmetadata", () => {
  duration.textContent = formatTime(audio.duration);
});
audio.addEventListener("ended", () => skip(1));
progress.addEventListener("input", () => {
  if (audio.duration) audio.currentTime = (progress.value / 100) * audio.duration;
});
heartButton.addEventListener("click", pumpHeart);
heartButton.addEventListener("animationend", () => heartButton.classList.remove("pumping"));

audio.volume = volume.value;
heartbeatCounter.textContent = `Heartbeats: ${heartbeats}`;
render();
