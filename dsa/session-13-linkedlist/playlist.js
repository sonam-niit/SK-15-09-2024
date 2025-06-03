//Circular Linked List

class Song{
    constructor(name){
        this.name=name; //data
        this.next=null; // next song address
    }
}

class Playlist{
    constructor(){
        this.head=null;//by def playlist is empty
        this.current=null;//current playing song
    }

    addSong(name){
        const newSong= new Song(name);
        if(!this.head){
            this.head=newSong;
            this.head.next=this.head;
        }else{
            let temp=this.head;
            while(temp.next!==this.head){
                temp=temp.next;
            }
            temp.next=newSong;
            newSong.next=this.head;
        }
    }
    playNext(){
        if(!this.current){
            this.current=this.head
        }else{
            this.current=this.current.next;
        }
        // return this.current?.name ?? "No Songs";
        return (this.current? this.current.name : "No Songs")
         + " Playing" ;
    }
}

const sonamPlaylist= new Playlist();
console.log(sonamPlaylist.playNext())

sonamPlaylist.addSong("song1");
sonamPlaylist.addSong("song2");
sonamPlaylist.addSong("song3");

console.log(sonamPlaylist.playNext())
console.log(sonamPlaylist.playNext())
console.log(sonamPlaylist.playNext())
console.log(sonamPlaylist.playNext())
