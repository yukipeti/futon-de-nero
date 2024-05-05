module.exports = async function (message) {
    //絵文字を取得(絵文字の正規表現)
    const moukonEmoji = message.content.match(/<:.+?:\d+>/g) ?? "[]";

    if (moukonEmoji[0].indexOf("moukon") !== -1) {
        message.reply("# 布団で寝ろ");
    }
};