var playlist = {Beatles : "Yesterday"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.[artistName] = songTitle
  return playlist
}

delete playlist.artistName
function removeFromPlaylist(playlist, artistName) {
  return playlist.artistName
}
