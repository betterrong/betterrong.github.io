# leetcode 13. 罗马数字转整数


罗马数字包含以下七种字符: `I`， `V`， `X`， `L`，`C`，`D` 和 `M`。

```
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

例如， 罗马数字 2 写做 `II` ，即为两个并列的 1。12 写做 `XII` ，即为 `X` + `II` 。 27 写做 `XXVII`, 即为 `XX` + `V` + `II` 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 `IIII`，而是 `IV`。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 `IX`。这个特殊的规则只适用于以下六种情况：

- `I` 可以放在 `V` (5) 和 `X` (10) 的左边，来表示 4 和 9。
- `X` 可以放在 `L` (50) 和 `C` (100) 的左边，来表示 40 和 90。 
- `C` 可以放在 `D` (500) 和 `M` (1000) 的左边，来表示 400 和 900。

给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

**示例 1:**

```
输入: "III"
输出: 3
```

**示例 2:**

```
输入: "IV"
输出: 4
```

**示例 3:**

```
输入: "IX"
输出: 9
```

**示例 4:**

```
输入: "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
```

**示例 5:**

```
输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
```

**Solution:**

```c
int romanToInt(char* s) {
  int num = 0;
  char Roman_numbers[7] = {'I', 'V', 'X', 'L', 'C', 'D', 'M'};

  for (int i = 0; i < strlen(s); i++) {
    if (s[i] == 'I') {
      if (s[i + 1] == 'V' || s[i + 1] == 'X') {
        num -= 1;
      } else {
        num++;
      }
    }

    if (s[i] == 'X') {
      if (s[i + 1] == 'L' || s[i + 1] == 'C') {
        num -= 10;
      } else {
        num += 10;
      }
    }

    if (s[i] == 'C') {
      if (s[i + 1] == 'D' || s[i + 1] == 'M') {
        num -= 100;
      } else {
        num += 100;
      }
    }
    if (s[i] == 'V') num += 5;
    if (s[i] == 'L') num += 50;
    if (s[i] == 'D') num += 500;
    if (s[i] == 'M') num += 1000;
  }

  return num;
}
```

```go
//使用 map 存储字符和数字的对应关系，将字符串从右向左读，如果新的字符比原来的大，则加上，若比原来的小则减去。
func romanToInt(s string) int {
	m := map[byte]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}
	n := m[s[len(s) - 1]]
	for i := len(s) - 1; i > 0; i-- {
		preNum := m[s[i-1]]
		if m[s[i]] > preNum {
			n -= preNum
		}else {
			n += preNum
		}
	}
	return n
}
```

https://leetcode-cn.com/problems/roman-to-integer/
