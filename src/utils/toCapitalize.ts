function toCapitalizeWord(word : string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function capitalizeStr(str : string) {
    return str.split(" ").map(toCapitalizeWord).join(" ")
}