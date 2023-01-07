function bracketCount(string) {
  const stack = [];
  const result = {
    right: 0,
    wrong: 0,
  };

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
      continue;
    } else if (char !== ')' && char !== ']' && char !== '}') {
      continue;
    }

    const bracket = stack.pop();

    if (
      (bracket === '(' && char === ')') ||
      (bracket === '[' && char === ']') ||
      (bracket === '{' && char === '}')
    ) {
      result.right += 2;
      continue;
    }

    bracket ? result.wrong += 2 : result.wrong++;
  }

  if (stack.length) result.wrong += stack.length;

  return result;
}
