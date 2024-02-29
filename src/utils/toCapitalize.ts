function toCapitalizeWord(word : string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function capitalizeStr(str : string, splitter = " ") {
    return str.split(splitter).map(toCapitalizeWord).join(" ")
}