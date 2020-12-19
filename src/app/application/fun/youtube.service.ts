import { Injectable } from '@angular/core';
import { PLAYLIST } from './myPlaylist';
import { YoutubeVideo } from './youtubeVideo';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  video: Array<YoutubeVideo>

  constructor() { }

  getVideos(year: number): Array<YoutubeVideo>{
    this.video = PLAYLIST[year - 1].items;
    return this.video;
  }
}
