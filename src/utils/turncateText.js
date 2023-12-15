const turncateText = (str, len) => {
    return str.length <= len ? str : str.slice(0, len) + "...";
};

export default turncateText;
