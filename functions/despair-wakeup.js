module.exports = async function (message){
    const despairWakeupText = message.content;
    const date = new Date();
    if(despairWakeupText === "絶起" && (date.getHours() >= 9 || date.getHours() <= 4)){
        message.reply("おはよう");
    }
}