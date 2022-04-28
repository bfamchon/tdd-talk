const LINE_JUMP = "\n";

const drawSourceLine = (line) => {
    return line + LINE_JUMP;
}
const countConsecutiveNumbers = line => {
    return line.length + line.charAt(0);
}

const findIndexOfNextDistinctNumber = (line, index) => {
    if (line.length === 1 || line.charAt(0) !== line.charAt(1)) return index;
    return findIndexOfNextDistinctNumber(line.substring(1), index + 1);
}

const drawLineChunks = (line, chunks = "") => {
    if (line.length === 0) {
        return chunks;
    }
    const indexOfNextDistinctNumber = findIndexOfNextDistinctNumber(line, 0);
    return drawLineChunks(
        line.substring(indexOfNextDistinctNumber + 1),
        chunks + countConsecutiveNumbers(line.substring(0, indexOfNextDistinctNumber + 1))
    );
}

const drawNextLine = (line) => {
    return drawLineChunks(line);
}

const drawSuite = (line, deep, conwaySuite = "") => {
    if (deep === 0) {
        return conwaySuite;
    }
    const nextLine = drawNextLine(line);
    return drawSuite(nextLine, deep - 1, conwaySuite ? conwaySuite + LINE_JUMP + nextLine : nextLine);
}

const draw = (line, deep) => {
    return drawSourceLine(line) + drawSuite(line, deep);
};


module.exports = { draw };