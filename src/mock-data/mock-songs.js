const songs = `All Time Low - Jon Bellion.mp3
All Too Well - Against The Current.mp3
All We Got (feat. Kanye West & Chicago Children's Choir) - Chance The Rapper.mp3
All We Know - The Chainsmokers.mp3
America - Logic.mp3
American Pie - Don McLean.mp3
Amerika - Young the Giant.mp3
Am I Wrong - BTS.mp3
Amsterdam - Imagine Dragons.mp3
Animals - Maroon 5.mp3
An Immigrant - Jon Bellion.mp3
Anna Sun - Walk The Moon.mp3
Another One Bites The Dust - Queen.mp3
Another You (Another Way) - Against The Current.mp3
Anpanman - BTS.mp3
Answer _ Love Myself - BTS.mp3
Antisocial - Ed Sheeran.mp3
Any Way You Want It - Journey.mp3
As If It's Your Last - BLACKPINK.mp3
A Sky Full of Stars - Coldplay.mp3
A Supplementary Story_ You Never Walk Alone a reallly long title - BTS.mp3
A Thousand Years - Christina Perri.mp3
A Thousand Years (Glee Cast Version) - Glee Cast.mp3
Attention - Charlie Puth.mp3
Autumn Leaves - BTS.mp3
Awake - BTS.mp3
A Whole New World - From Aladdin & Soundtrack Version - Lea Salonga.mp3
Back To Back - Drake.mp3
Bad At Love - Halsey.mp3`.split('\n');
let id = 0;
const mockSongList = songs.map(song => {
  const songSplit = song.split(' - ');
  const title = songSplit[0];
  const artist = songSplit[songSplit.length - 1].split('.')[0];
  const duration = '3:00';
  return { id: id++, title, artist, picture: 'https://material.angular.io/assets/img/examples/shiba1.jpg', duration };
});
export default mockSongList;
