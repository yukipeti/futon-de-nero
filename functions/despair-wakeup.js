module.exports = async function (message){
    const despairWakeupText = message.content.match(/絶起/) ?? "[]";
    const date = new Date();

    if(despairWakeupText[0] === "絶起" && (date.getHours() >= 9 || date.getHours() <= 4)){
        message.channel.send("おはよう");
    }
}