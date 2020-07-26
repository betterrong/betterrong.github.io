# leetcode 20. 有效的括号


给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串。

**示例 1:**

```
输入: "()"
输出: true
```

**示例 2:**

```
输入: "()[]{}"
输出: true
```

**示例 3:**

```
输入: "(]"
输出: false
```

**示例 4:**

```
输入: "([)]"
输出: false
```

**示例 5:**

```
输入: "{[]}"
输出: true
```

**Solution:**

```c
bool isValid(char* s) {
  //想法 数组模拟堆栈
  int len = 0;
  len = strlen(s);
  char *stack = (char *) malloc (sizeof(char) * len);
  // j = 栈顶+1
  int i = 0, j = 0;

  while (*(s + i) != '\0') {
    //第一个字符是 ')}]' ，有多余的 ')}]' 则返回false
    if ((*(s + i) == ')' || *(s + i) == '}' || *(s + i) == ']' )&& j == 0) {
      return false;
      //如果字符是 '({[' 则入栈
    } else if (*(s + i) == '(' || *(s + i) == '{' || *(s + i) == '[') {
      *(stack + j) = *(s + i);
      i++;
      j++;
      //字符是 ')}]'
    } else {
      if (*(s + i) == ')' && *(stack + j - 1) != '(') {
        return false;
      }
      if (*(s + i) == '}' && *(stack + j - 1) != '{') {
        return false;
      }
      if (*(s + i) == ']' && *(stack + j - 1) != '[') {
        return false;
      }
      i++;
      //配对成功，出栈
      j--;
    }
  }
  if (j == 0) {
    return true;
  } else {
    return false;
  }
}
```

```go
func isValid(s string) bool {
	if s == "" {
		return true
	}
	if len(s)%2 != 0 {
		return false
	}
	var stack []byte
	for i := 0; i < len(s); i++ {
		if s[i] == '(' || s[i] == '{' || s[i] == '[' {
			stack = append(stack, s[i])
		} else {
			if len(stack) == 0 {
				return false
			}
			topChar := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			if s[i] != ')' && topChar == '(' {
				return false
			}
			if s[i] != '}' && topChar == '{' {
				return false
			}
			if s[i] != ']' && topChar == '[' {
				return false
			}
		}
	}
	return len(stack) == 0
}
```

[20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)
