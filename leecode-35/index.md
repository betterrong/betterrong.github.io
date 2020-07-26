# leetcode 35. 搜索插入位置


给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:

```
输入: [1,3,5,6], 5
输出: 2
```
示例 2:
```
输入: [1,3,5,6], 2
输出: 1
```
示例 3:
```
输入: [1,3,5,6], 7
输出: 4
```
示例 4:
```
输入: [1,3,5,6], 0
输出: 0
```

Solution：

```c
int searchInsert(int* nums, int numsSize, int target){
    int location;
    for(int i = 0 ; i < numsSize; ++ i) {
        if(target == nums[i]) {
            location = i;
            break;
        } else if(target < nums[i]) {
            if(i == 0) {
                location = 0;
            } else {
            location = i;
            }
            break;
        }else if(i == numsSize-1) {
            location = i + 1;
            break;
        }
    }
    return location;
}
//二分法
// int searchInsert(int* nums, int numsSize, int target) {
// 	int left = 0, right = numsSize - 1, ans = numsSize;
// 	while (left <= right) {
// 			int mid = ((right - left) >> 1) + left;
// 			if (target <= nums[mid]) {
// 					ans = mid;
// 					right = mid - 1;
// 			} else {
// 					left = mid + 1;
// 			}
// 	}
// 	return ans;
// }

```

```go
func searchInsert(nums []int, target int) int {
    if target > nums[len(nums)-1] {
        return len(nums)
    }
    for i := 0; i < len(nums); i++ {
        if target == nums[i] || target < nums[i] {
            return i
        } 
    }
    return 0
}
//二分法
// func searchInsert(nums []int, target int) int {
// 	n := len(nums)
// 	left, right := 0, n - 1
// 	ans := n
// 	for left <= right {
// 			mid := (right - left) >> 1 + left
// 			if target <= nums[mid] {
// 					ans = mid
// 					right = mid - 1
// 			} else {
// 					left = mid + 1
// 			}
// 	}
// 	return ans
// }
```



---

[35. 搜索插入位置](https://leetcode-cn.com/problems/search-insert-position/)


