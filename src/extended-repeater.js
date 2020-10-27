module.exports = function repeater(str, options) {
    if (options.repeatTimes == undefined) options.repeatTimes = 1;
    if (options.separator == undefined) options.separator = '+';
    if (typeof options.addition !== 'string' && options.addition == undefined && options.addition !== null) options.addition = '';
    if (options.additionRepeatTimes == undefined) options.additionRepeatTimes = 1;
    if (options.additionSeparator == undefined) options.additionSeparator = '|';
    let result = '';
    let additionSeparators = '';
    //addition repeat
    for (let i = 1; i <= options.additionRepeatTimes; i++) {
        if (i == options.additionRepeatTimes) additionSeparators += options.addition;
        else additionSeparators += options.addition + options.additionSeparator;
    }
    //separator + addition
    for (let i = 1; i <= options.repeatTimes; i++) {
        if (i == options.repeatTimes) result += str + additionSeparators;
        else
            result += str + additionSeparators + options.separator;
    }
    return result;
};