// code your solution here
const saturdayFun = (activity = "roller-skate") => `This Saturday, I want to ${activity}!`;

const mondayWork = (activity = "go to the office") => `This Monday, I will ${activity}.`;

const wrapAdjective = (flair = "*") => {
    return function (string = "special") {
        return `You are ${flair}${string}${flair}!`
    }
}