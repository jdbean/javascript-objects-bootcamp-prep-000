var playlist = {};

function updatePlaylist(list, artistName, songTitle) {
  playlist.artistName = songTitle
  return playlist
}

function removeFromPlaylist(list, artistName) {
  delete playlist.artistName
  return playlist
}
