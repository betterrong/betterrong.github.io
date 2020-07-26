# leetcode 1. 两数之和


给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

 

示例:

```

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

```

**Solution：**

```c
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
//暴力法
int* twoSum(int* nums, int numsSize, int target, int* returnSize){
   int *ret = (int *)malloc(2*sizeof(int));
    for(int i = 0; i < numsSize; i++)
    {
        for(int j = i + 1; j < numsSize; j++)
        {
            if(nums[j] + nums[i] == target)
            {
                ret[0] = i;
                ret[1] = j;
                *returnSize = 2;
                return ret;
            }
        }
    }
    return 0;
}

//更好的解决方法：使用哈希表
```

```go
//暴力法
func twoSum(nums []int, target int) []int {
    for i := 0; i < len(nums); i++ {
        for j := i + 1; j < len(nums); j ++ {
            if nums[i] + nums[j] == target {
                return [] int {i,j}
            }
        }
    }
    return [] int {}
}

//map法
func twoSum(nums []int, target int) []int {
    length := len(nums)
    for i, v := range nums{

        for j:=i+1; j<length; j++ {
            if nums[j] == target - v{
                return []int{i, j}
            }
        }
    }
    return []int{}
}
```

---

[1. 两数之和](https://leetcode-cn.com/problems/two-sum/)
