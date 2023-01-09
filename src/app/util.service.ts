import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class utilService {
    parseCSVData(data: any,headindex:number) {
        let heading = data.split(/[;\n]/g).splice(0, headindex)
        let index = 0, resarr = [], map: any = {}
        let maindata = data.split(/[;\n]/g).splice(headindex)
        for (let i = 0; i < maindata.length; i++) {
            if (index < headindex) {
                map[heading[index]] = maindata[i]
                index++
            } else {
                resarr.push(map)
                map = {},index = 0
                map[heading[index]] = maindata[i]
                index++
            }
        }
        return resarr
    }
}