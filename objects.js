var playlist = {};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle
  return playlist
}

function removeFromPlaylist(list, artistName) {
  delete playlist.artistName
  return playlist
}
