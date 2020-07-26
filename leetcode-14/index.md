# leetcode 14 最长公共前缀



{{< admonition type=info title="忏悔" open=true >}}
昨天没有做 leetcode ，我在此进行深深地忏悔。
再难也不能放弃啊！
{{< /admonition >}}


编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 `""`。

**示例 1:**

```
输入: ["flower","flow","flight"]
输出: "fl"
```

**示例 2:**

```
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```

**说明:**

所有输入只包含小写字母 `a-z` 。

**Solution:**

```c

char* longestCommonPrefix(char** strs, int strsSize) {
  if(strsSize==0) return "";
  for (int col = 0; col < strlen(strs[0]); col++) {
    for (int row = 0; row < strsSize; row++) {
      if (strs[row][col] != strs[0][col]) {
        strs[0][col] = '\0';
        break;
      }
    }
  }
  return strs[0];
}
```

```go
func longestCommonPrefcolx(strs []strcolng) strcolng {
	if len(strs) == 0 {
			return ""
	}
	for col := 0; col < len(strs[0]); col++ {
			for row := 1; row < len(strs); row++ {
					if col == len(strs[row]) || strs[row][col] != strs[0][col] {
							return strs[0][:col]
					}
			}
	}
	return strs[0]
}
```


