# sprintf()的用法（转载）


<!--more-->

{{< typeit >}}
C 库函数 **int sprintf(char \*str, const char \*format, ...)** 发送格式化输出到 **str** 所指向的字符串。
{{< /typeit >}}

sprintf函数的功能与printf函数的功能基本一样，只是它把结果输出到指定的字符串中。

## 0x00 简介

- 头文件

  ```c
  #include <stdio.h>
  ```

- 函数功能：格式化字符串，将格式化的数据写入字符串中。

- 函数原型：

  ```c
  nt sprintf(char *buffer, const char *format, [argument]…)
  ```


- 参数：
  - buffer：是char类型的指针，指向写入的字符串指针。
  - format：格式化字符串，即在程序中想要的格式，
  - argument：可选参数，可以为任意类型的数据，
- 函数返回值：buffer指向的字符串的长度。

## 用法

### 格式化数字字符串

sprintf和printf的用法一样，只是打印到的位置不同而已，前者打印给buffer字符串，后者打印给标准输出，所以sprintf也可以用来将整型转化为字符串，比itoa效率高且十分简便，例如：

```c
sprintf(buffer, “%d”, 123456);
//执行后buffer即指向字符串“123456”
```

### 连接字符

1. 连接以’\0’结束的字符串：

   ```c
   #include <stdio.h>
   int main(int argc, char *argv[]){
       char buffer[10];
       char *a = "1234";  
       char *b = "5678";  
       sprintf(buffer,"%s%s", a, b);  
       printf("%s\n", buffer);  
       return 0;  
   }
   ```

   运行结果：

   ![](https://betterrong.gitee.io/imagebed/imgs/blog/how-to-use-sprintf/00.png)

2. 连接结尾没有’\0’的字符数组或字符串缓冲区：

   ```c
   #include<stdio.h>  
   int main()  
   {  
       char a[] = {'0','1', '2', '3', '4'};  
       char b[] = {'5', '6', '7', '8'};  
       char buffer[10];  
       sprintf(buffer, "%.5s%.4s", a, b);  
       printf("%s\n", buffer);  
       return 0;  
   }  
   ```

   ![](https://betterrong.gitee.io/imagebed/imgs/blog/how-to-use-sprintf/01.png)

3. 如果我们想动态获取要处理的字符缓冲区长度，则将上面`sprintf`改为：

   ```c
   sprintf(buffer, "%.*s%.*s", sizeof(a), a, sizeof(b), b);
   ```

   

### 利用sprintf中的返回值

在”AOV网络和拓扑（二）——实现“篇中，有这样一行程序:

```c
pos += sprintf(output+pos, “%d “, j+1); 
```

   它的作用是什么呢？

   因为sprintf函数的返回值为output+pos所指向字符串的长度，所以对于pos来说，相当于执行了一次pos+=sizeof(output+pos)，如果这条语句放在一个循环里，则第二次执行sprintf时output+pos随即指向了当前缓冲区的末尾（注意不是output的末尾！否则会读取非法内存！），这样就可以生成一个具有一定规则的字符串了~写个例子：

   ```c
   #include <stdio.h>
   int main() {
     char buf[100];
     int pos = 0;
     for (int j = 0; j < 10; j++) pos += sprintf(buf + pos, "%d-", j);
     buf[pos - 1] = '\n';  //将最后一个字符'-'转换为'\n'
     printf(buf);
     return 0;
   }
   ```

   运行结果：

   ![](https://betterrong.gitee.io/imagebed/imgs/blog/how-to-use-sprintf/02.png)

   pos每次增加2，因为每次buf字符串后面都要加上两个字符j和‘-’。

---

[原文链接](https://blog.csdn.net/nopoppy/article/details/52589745)


