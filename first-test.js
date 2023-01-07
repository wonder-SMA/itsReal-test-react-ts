function bracketCount(string) {
  const stack = [];
  const result = {
    right: 0,
    wrong: 0,
  };

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
      stack.push(string[i]);
      continue;
    } else if (string[i] !== ')' && string[i] !== ']' && string[i] !== '}') {
      continue;
    }

    const bracket = stack.pop();

    if (
      (bracket === '(' && string[i] === ')') ||
      (bracket === '[' && string[i] === ']') ||
      (bracket === '{' && string[i] === '}')
    ) {
      result.right += 2;
      continue;
    }

    bracket ? result.wrong += 2 : result.wrong++;
  }

  if (stack.length) result.wrong += stack.length;

  return result;
}
