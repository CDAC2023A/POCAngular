import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {
  song = new Audio();
  songs = [
    { url: 'assets/Raghava.mp3', names: "Best Song" },
    { url: 'assets/Raghava.mp3', names: "God Song" },
    { url: 'assets/HuaMain.mp3', names: "other Song" }
  ];
  constructor() { }

  ngOnInit(): void {
  }


  openSongs(song: any) {
    console.log('Opening song:', song);
    this.song.src = song;
    this.song.load();
    this.song.play();
  }
  playSong() {
    this.song.play();
  }
  pauseSong() {
    this.song.pause();
  }
  stopSong() {
    this.song.pause();
    this.song.currentTime=0;
  }

}
