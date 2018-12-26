declare const lib2: string[];
declare class Main {
    input: string[];
    constructor(input: string[]);
    countInt: number;
    toggle(element: any): void;
    getRandomList(): any[];
    show(): void;
    getWord(): string;
    setCountdown(): void;
    setTimer(): void;
}
declare let mainClass: Main;
declare let btnBegin: HTMLElement;
declare let btnNext: HTMLElement;
declare let btnRestart: HTMLElement;
interface Audio {
    name: string;
    singer: string;
    filename: string;
}
declare class GuessSong implements Audio {
    audioList: string[];
    name: string;
    singer: string;
    filename: string;
    x: number;
    last: number;
    constructor(audioList: string[]);
    getOneAudio(): void;
    setAudioInfo(): void;
    gotoNext(): void;
}
declare let audioList: string[];
declare let audioClass: GuessSong;
declare let divSongsName: HTMLElement;
declare let btnShowAns: HTMLElement;
declare let btnNextSong: HTMLElement;
declare let audioTag: HTMLAudioElement;
