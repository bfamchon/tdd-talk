# Conway


## STEP 1:
```javascript
  expectConwaySuite("22", "22", "22");
```

```javascript
  const drawSourceLine = (line) => {
    return line + LINE_JUMP;
  }

  const drawNextLine = (line) => {
    return line.length + line.charAt(0);
  }

  const draw = line => {
      return drawSourceLine(line) + drawNextLine(line);
  };
```

## STEP 2:

```javascript
  expectConwaySuite("21", "21", "1211");
```

```javascript
const countConsecutiveNumbers = line => {
    return line.length + line.charAt(0);
}

const drawNextLine = (line) => {
    if (line.length > 1 && line.charAt(0) !== line.charAt(1)) {
        return countConsecutiveNumbers("2") + countConsecutiveNumbers("1");
    }
    return countConsecutiveNumbers(line);
}
```


## STEP 3:

```javascript
  expectConwaySuite("213", "213", "121113");
```

```javascript
const drawLineChunks = (line, chunks = "") => {
    if (line.length > 1 && line.charAt(0) !== line.charAt(1)) {
        return drawLineChunks(
            line.substring(1),
            chunks + countConsecutiveNumbers(line.substring(0, 1))
        );
    }
    return chunks + countConsecutiveNumbers(line);
};

const drawNextLine = (line) => {
    return drawLineChunks(line);
}

## STEP 4:

```javascript
  expectConwaySuite("2331", "2331", "122312");
```

```javascript
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
```

## STEP 5:

```javascript
  expectConwaySuite("1", 3, "1", "11", "21", "1211");
```

```javascript
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
```