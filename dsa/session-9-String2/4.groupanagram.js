function groupAnagrams(strs){
    let map={}

    for(let str of strs){
        let sorted= str.split('').sort().join()
        if(!map[sorted])
            map[sorted]=[]
        map[sorted].push(str)
    }
    console.log(map)
    console.log(Object.values(map))
}

groupAnagrams(["eat","tea","tan","nat","ate"])