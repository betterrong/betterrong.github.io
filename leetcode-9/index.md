# leetcode 9. 回文数


判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

**示例 1:**

```
输入: 121
输出: true
```

**示例 2:**

```
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

**示例 3:**

```
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
```

**进阶:**

你能不将整数转为字符串来解决这个问题吗？

**Solution:**

```c
/*
 * @lc app=leetcode.cn id=9 lang=c
 *
 * [9] 回文数
 */

// @lc code=start

bool isPalindrome(int x) {
  // change x into string
  // char x_c[20];
  // char str[20];
  // char temp;
  //一开始的想法，反转字符串后再与原字符串比较

  // sprintf(str, "%d", x);
  // strcpy(x_c, str);
  // //反转字符串
  // for (int i = 0, j = strlen(x_c)-1; i < j; i++, j--) {
  //   temp = x_c[i];
  //   x_c[i] = x_c[j];
  //   x_c[j] = temp;
  // }
  // if (!strcmp(str, x_c)) {
  //   return true;
  // }
  // return false;

  char x_c[20];
  sprintf(x_c, "%d", x);
  int len = strlen(x_c);

  for (int i = 0; i < len / 2; i++) {
    if (x_c[i] != x_c[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

// @lc code=end
```

```go
/*
 * @lc app=leetcode.cn id=9 lang=golang
 *
 * [9] 回文数
 */

// @lc code=start
func isPalindrome(x int) bool {
	var	x_c string = strconv.Itoa(x)
	var le int = len(x_c)
	for i := 0;i < le/2; i++ {
		if x_c[i] != x_c[le-1-i] {
			return false
		}
	}
	return true
}
// @lc code=end


```

---

 [9. 回文数](https://leetcode-cn.com/problems/palindrome-number/)
