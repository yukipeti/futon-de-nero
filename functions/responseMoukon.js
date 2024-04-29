module.exports = async function (message) {
    //絵文字を取得(絵文字の正規表現)
    //↓これ一致しなかったらnull吐いててわろたぁｗ
    const emojis = message.content.match(/<:.+?:\d+>/g);
    if (emojis && emojis.some(emoji => emoji.includes("moukon"))) {
        message.reply("# 布団で寝ろ");
    }
};