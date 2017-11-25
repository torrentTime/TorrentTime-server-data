import fs from 'fs';

class TorrentTimeServerData{
    open(){
        if (fs.existsSync('data/data.json')) {
            return fs.readFileSync('data/data.json');
        }else{
            return {
                peers: {},
                torrents: {},
                peerFile: {}
            }
        }
    }

    save(json){
        if (fs.existsSync('data/data.json')) {
            fs.writeFileSync('data/data.json', JSON.stringify(json))
        }else{
            throw new Error("cant save the file");
        }
    }
}