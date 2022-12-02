function changeValue() {
  player.name = userNameInput.value;
}

function saveLocalStorageInfo(e) {
  e.preventDefault();
  localStorage.setItem(keyPlayer, JSON.stringify(player));
  keyPlayer++;
}
