# leetcode 7. 整数反转


给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

**示例 1:**

```
输入: 123
输出: 321
```

 **示例 2:**

```
输入: -123
输出: -321
```

**示例 3:**

```
输入: 120
输出: 21
```

**注意:**

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231, 231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

Solution:

```c
#define isOverLength 0

int reverse(int x){
    long lRet = 0;
    while(0 != x)
    {
        lRet = lRet * 10 + x % 10;
        x = x / 10;
    }

    if((int)lRet != lRet)
    {
        return isOverLength;
    }

    return (int)lRet;
}
```

```go
func reverse(x int) int {
	var ans int 
	for x != 0 {
		ans = ans * 10 + x % 10
		x = x / 10
	}
	if ans < math.MinInt32 || ans > math.MaxInt32 {
		return 0
	}
	return ans
}
```

[7. 整数反转](https://leetcode-cn.com/problems/reverse-integer/)
