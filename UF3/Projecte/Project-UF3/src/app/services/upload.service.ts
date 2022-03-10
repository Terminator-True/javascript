import { Injectable } from "@angular/core";
import { Global } from "./global";


@Injectable({
    providedIn:'root'
})

export class UploadService{
    public url:string;
    constructor(){
        this.url = Global.url
    }
    makeFileRequest(url: string, params:Array<String>, files: Array<File>, name:string){
        return new Promise(function (res,re) {
            var formData:any = new FormData();

            var xhr = new XMLHttpRequest();

            for (let i = 0; i < files.length; i++) {
                formData.append(name, files[i], files[i].name)
                
            }
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        res(JSON.parse(xhr.response));
                    }else{
                        re(xhr.response)
                    }
                }
            }
            xhr.open('POST',url,true);
            xhr.send(formData);
        })
    }
}