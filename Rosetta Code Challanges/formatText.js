// Given an array of many lines, where fields within a line are delineated by a single $ character,
// write a program that aligns each column of fields by ensuring that words in each column are separated by at least one space.
// Further, allow for each word in a column to be either left justified, right justified, or center justified within its column.

// Note that:
// - The example input texts lines may, or may not, have trailing dollar characters.
// - All columns should share the same alignment.
// - Consecutive space characters produced adjacent to the end of lines are insignificant for the purposes of the task.
// - Output text will be viewed in a mono-spaced font on a plain text editor or basic terminal. Lines in it should be joined using new line character (\n).
// - The minimum space between columns should be computed from the text and not hard-coded.
// - It is not a requirement to add separating characters between or around columns.

// Use the following text to test your programs:

const testText = [
  // 'aaaa$bbb',
  // 'qqqqqqq$dddddddd$',
  "Given$a$text$file$of$many$lines",
  "where$fields$within$a$line$",
  'are$delineated$by$a$single$"dollar"$character',
  "write$a$program",
  "that$aligns$each$column$of$fields$",
  "by$ensuring$that$words$in$each$",
  "column$are$separated$by$at$least$one$space.",
  "Further,$allow$for$each$word$in$a$column$to$be$either$left$",
  "justified,$right$justified",
  "or$center$justified$within$its$column.",
];

function paddWords(word, maxLength, justify, char) {
  char ||= " ";
  word ||= "";
  let toPad = maxLength - word.length;

  // Justify columns to the left
  if (justify === "left") return word + char.repeat(toPad);
  // Justify columns to the right
  else if (justify === "right") return char.repeat(toPad) + word;
  // Justify columns to the center
  else if (justify === "center") {
    let padLeft = Math.floor(toPad / 2);
    let padRight = toPad - padLeft;
    return char.repeat(padLeft) + word + char.repeat(padRight);
  }
}

function formatText(input, justification) {
  // First, map through the array of strings and delete all the dollar characters if any. The challange doesn't specify anything of removing other non-alphanumeric characters such as period and quotetions marks, so will leave those in place.

  // let noDollars = input.map((str) => str.replaceAll("$", " "));

  // Loop through this newly created noDollars array to...
  let wordsPerLines = input.map((str) =>
    str.replaceAll("$", " ").trimEnd().split(" ")
  );

  // To determine the number of columns, find out how many words are in the longest line.
  let highestLineWordCount = Math.max(
    ...wordsPerLines.map((line) => line.length)
  );

  // Return the padded lines of the text block
  let outputLines = new Array(input.length).fill("");

  // iterate through wordsPerLine and determine the longest word in each line at the same i position
  for (
    let currentColumnIndex = 0;
    currentColumnIndex < highestLineWordCount;
    currentColumnIndex++
  ) {
    // To determine the width of the column, find out the length of the longest word
    let longestWord = Math.max(
      ...wordsPerLines.map((line) =>
        line.length <= currentColumnIndex ? 0 : line[currentColumnIndex].length
      )
    );

    wordsPerLines.map((wordsInLine, currentLineIndex) => {
      let paddedWord = paddWords(
        wordsInLine[currentColumnIndex],
        longestWord,
        justification
      );
      outputLines[currentLineIndex] += `${paddedWord} `;
    });
  }

  return outputLines
    .map(
      (line, index) =>
        line.substring(0, line.length - 1) +
        (input[index].endsWith("$") ? " " : "")
    )
    .join("\n");
}

console.log(formatText(testText, "left"));
console.log(formatText(testText, "right"));
console.log(formatText(testText, "center"));
