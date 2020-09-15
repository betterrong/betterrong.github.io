# leetcode 26. 删除排序数组中的重复项


有好几天没做 leetcode 了，这几天心里总感觉很不安，虽然 做leetcode 经常没有思路，写不出来，但是我 通过leetcode 多少还是能学到东西，想不出思路就看看别人的思路，然后理解消化，自己再实现，一方面能学到点算法，另一方面也能巩固语法知识，增加语言熟练度，避免因为长时间不使用而遗忘语法。

自己本来就很差劲了，一定要努力前进，好好学习，天天向上！怎么能停下自我改造的脚步呢？

给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O (1) 额外空间的条件下完成。

示例 1:

```

给定数组 nums = [1,1,2], 

函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 

你不需要考虑数组中超出新长度后面的元素。

```
示例 2:
```

给定 nums = [0,0,1,1,1,2,2,3,3,4],

函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

你不需要考虑数组中超出新长度后面的元素。

```

**Solutions:**

```c
int removeDuplicates(int* nums, int numsSize) {
  if (numsSize < 2) return numsSize;
  //双指针法
  //一个指针指向下一个不重复数字存放的位置(nums[++i])，一个指针遍历数组
  int i = 0, j = 1;
  //j 遍历数组
  while(j < numsSize) {
    if(nums[j] > nums[i]) {
      i++;
      nums[i] = nums[j];
    }
    j++;
  }
  return i+1;
}
```

```go
func removeDuplicates(nums []int) int {
	i := 0
	for j := 1; j < len(nums); j++ {
		if nums[j] > nums[i] {
			i++
			nums[i] = nums[j]
		}
	}
	return i + 1
}
```

当遇到有序数组时，应该优先想到`双指针`来解决问题，因两个指针的同时遍历会减少空间复杂度和时间复杂度。

官方说明：

数组完成排序后，我们可以放置两个指针 i 和 j，其中 i 是慢指针，而 j 是快指针。只要 nums[i] == nums[j]，我们就增加 j 以跳过重复项。

当我们遇到 nums[i] != nums[j] 时，跳过重复项的运行已经结束，因此我们必须把它（nums[j]）的值复制到 nums[i + 1]。然后递增 i，接着我们将再次重复相同的过程，直到 j 到达数组的末尾为止。

[26. 删除排序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)
