---
title: 一文了解分而治之和动态规则算法在前端中的应用
author: 周一
date: '2021-06-18'
categories:
  - 前端开发
tags:
  - 数构与前端
sidebar: 'auto'
---

# 前言

众多周知，分而治之算法和动态规则算法是**前端面试中的“宠儿”**。而在我们的日常生活中，这两个场景的应用也相对比较广泛。比如，分而治之算法常用于翻转二叉树、快速搜索等场景中，而动态规则算法，则常用于最少硬币找零问题、背包问题等场景中。

在下面的这篇文章中，将讲解分而治之和动态规则的常用场景以及对 `leetcode` 的一些经典例题进行解析。

# 一、分而治之

## 1、分而治之是什么？

- 分而治之是**算法设计**中的一种方法。
- 它将一个问题**分**成多个和原问题相似的小问题，**递归解决**小问题再将结果**合并**以解决原来的问题。

## 2、应用场景

- 归并排序
- 快速搜索
- 二分搜索
- 翻转二叉树
- ……

## 3、场景剖析：归并排序和快速排序

**（1）场景一：归并排序**

- **分**：把数组从中间一分为二。
- **解**：递归地递归的对两个子数组进行归并排序。
- **合**：合并有序子数组。

**（2）场景二：快速排序**

- **分**：选基准，按照基准把数组分成两个子数组。
- **解**：递归地对两个子数组进行快速排序。
- **合**：对两个子数组进行合并。

# 二、动态规则

## 1、动态规则是什么？

- 动态规则是**算法设计**中的一种方法；
- 它将一个问题分解为**相互重叠**的子问题，通过反复求解子问题，来解决原来的问题。

> 看到这里，很多小伙伴会想着，动态规则和分而治之不是解决同样的问题吗？其实不是的。
>
> **注意：**
>
> - 动态规则解决**相互重叠**的子问题。
>
> - 分而治之解决的是**相互独立**的子问题。
>
> 这样说可能还有点抽象，稍后将在**第 3 点**的时候做详细解析。

## 2、应用场景

- 最少硬币找零问题
- 背包问题
- 最长公共子序列
- 矩阵链相乘
- ……

## 3、场景剖析：斐波那契数列

斐波那契数列是一个很典型的数学问题。**斐波那契数列**指的是这样一个数列：

![斐波那契数列](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202304151121159.png)

这个数列从第 3 项开始，每一项都等于前两项之和。即：

$$
Fibonacci[n]=
\begin{cases}
0,n=0 \\
1,n=1 \\
Fibonacci[n-1]+Fibonacci[n-2],n>1
\end{cases}
$$

那么我们来梳理一下，斐波那契数列是**怎么运用动态规则算法的**。主要有以下两点：

- **定义子问题**：F(n)=F(n - 1) + F(n - 2)；
- **反复执行**：从 2 循环到 n，执行上述公式。

## 4、动态规则 VS 分而治之

看完上面的内容，我们来梳理下动态规则和分而治之的区别。先用一张图展示两者的区别。

![动态规则和分而治之的区别](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202304151121360.png)

大家可以看到，**左边的斐波那契数列是**将所有问题分解为若干个相互重叠的问题，每个问题的解法都一样。

而**右边的翻转二叉树**，左右子树是相互独立的，需先翻转左右子树，且在翻转过程中，它们各自翻转，互不干扰，左子树干左子树的活，右子树干右子树的活。

不像斐波那契数列那样，每一层都是相互依赖的，一层嵌套一层，相互重叠。

这就是动态规则和分而治之的区别。

# 三、分而治之算法常见应用

引用 leetcode 的几道经典题目来强化**分而治之算法**。

## 1、leetcode 374：猜数字大小

**（1）题意**

[这里附上原题链接](https://leetcode-cn.com/problems/guess-number-higher-or-lower/)

猜数字游戏的规则如下：

- 每轮游戏，我都会从 `1` 到 `n` 随机选择一个数字。 请你猜选出我选的是哪个数字。
- 如果你猜错了，我会告诉你，你猜测的数字比我选出的数字是大了还是小了。

你可以通过调用一个预先定义好的接口 int guess(int num) 来获取猜测结果，返回值一共有 3 种可能的情况（-1，1 或 0）：

- `-1` ：我选出的数字比你猜的数字小 `pick < num` 。
- `1` ：我选出的数字比你猜的数字大 `pick > num` 。
- `0` ：我选出的数字和你猜的数字一样。恭喜！你猜对了！`pick == num` 。

返回我选出的数字。

**（2）解题思路**

- 二分搜索，同样具备“分、解、合”的特性。
- 考虑选择分而治之。

**（3）解题步骤**

- **分**：计算中间元素，分割数组。
- **解**：递归地在较大或者较小的数组进行二分搜索。
- **合**：不需要此步，因为在子数组中搜到就返回了。

**（4）代码实现**

```js
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
let guessNumber = function (n) {
  const rec = (low, high) => {
    if (low > high) {
      return;
    }

    // 1.计算中间元素，分割数组
    const mid = Math.floor((low + high) / 2);

    // 2.与猜测的数字进行比较
    const res = guess(mid);

    // 3.递归地在较大或者较小子数组进行二分搜索
    if (res === 0) {
      return mid;
    } else if (res === 1) {
      return rec(mid + 1, high);
    } else {
      return rec(low, mid - 1);
    }
  };
  return rec(1, n);
};
```

## 2、leetcode 226：翻转二叉树

**（1）题意**

[这里附上原题链接](https://leetcode-cn.com/problems/invert-binary-tree/)

翻转一棵二叉树。

![翻转二叉树](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202304151121047.png)

**（2）解题思路**

- 先翻转左右子树，再将子树换个位置。
- 符合“分、解、合”特性。
- 考虑选择分而治之。

**（3）解题步骤**

- **分**：获取左右子树。
- **解**：递归地翻转左右子树。
- **合**：将翻转后的左右子树换个位置放到根节点上。

**（4）代码实现**

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return null;
  }
  return {
    //1.根节点值不变
    val: root.val,
    //2.递归地将左子树与右子树结点变换
    left: invertTree(root.right),
    //3.递归地将右子树与左子树结点变换
    right: invertTree(root.left),
  };
};
```

## 3、leetcode 100：相同的树

**（1）题意**

[这里附上原题链接](https://leetcode-cn.com/problems/same-tree/)

给你两棵二叉树的根节点 `p` 和 `q` ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

![相同的树](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202304151121350.png)

**（2）解题思路**

- 两棵树：根节点的值相同，左子树相同，右子树相同。
- 符合“分、解、合”特性。
- 考虑选择分而治之。

**（3）解题步骤**

- **分**：获取两棵树的左子树和右子树。
- **解**：递归地判断两棵树的左子树是否相同，右子树是否相同。
- **合**：将上述结果合并，如果根节点的值也相同，两棵树就相同。

**（4）代码实现**

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
let isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  }
  /**
   * 判断条件：
   * 1.p树和q树同时存在；
   * 2.每遍历一个节点，两棵树的节点值都存在；
   * 3.递归左子树，比较每个节点值；
   * 4.递归右子树，比较每个节点值。
   */
  if (
    p &&
    q &&
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  ) {
    return true;
  }
  return false;
};
```

## 4、leetcode 101：对称二叉树

**（1）题意**

[这里附上原题链接](https://leetcode-cn.com/problems/symmetric-tree/)

给定一个二叉树，检查它是否是镜像对称的。

![对称二叉树](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202304151121833.png)

**（2）解题思路**

- 转化为：左右子树是否镜像。
- 分解为：树 1 的左子树和树 2 的右子树是否镜像，树 1 的右子树和树 2 的左子树是否镜像。
- 符合“分、解、合”特性，考虑选择分而治之。

**（3）解题步骤**

- **分**：获取两棵树的左子树和右子树。
- **解**：递归地判断树 1 的左子树和树 2 的右子树是否镜像，树 1 的右子树和树 2 的左子树是否镜像。
- **合**：如果上述成立，且根节点值也相同，两棵树就镜像。

**（4）代码实现**

```js
let isSymmetric = function (root) {
  if (!root) {
    return true;
  }

  const isMirror = (l, r) => {
    if (!l && !r) {
      return true;
    }

    /**
     * 判断条件：
     * 1.左子树和右子树同时存在；
     * 2.左子树和右子树的根节点相同；
     * 3.左子树的左节点和右子树的右节点镜像相同；
     * 4.左子树的右结点和右子树的左结点镜像相同
     */
    if (
      l &&
      r &&
      l.val === r.val &&
      isMirror(l.left, r.right) &&
      isMirror(l.right, r.left)
    ) {
      return true;
    }
    return false;
  };
  return isMirror(root.left, root.right);
};
```

# 四、动态规则算法常见应用

引用 leetcode 的几道经典题目来强化**动态规则算法**。

## 1、leetcode 70：爬楼梯

**（1）题意**

[这里附上原题链接](https://leetcode-cn.com/problems/climbing-stairs/)

假设你正在爬楼梯。需要 _n_ 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**注意：**给定 _n_ 是一个正整数。

**（2）解题思路**

- 爬到第 n 阶可以在第 n - 1 阶爬 1 个台阶，或者在第 n - 2 阶爬 2 个台阶。
- F(n) = F(n - 1) + F(n - 2)。
- 使用动态规则。

**（3）解题步骤**

- **定义子问题**：F(n) = F(n - 1) + F(n - 2)。
- **反复执行**：从 2 循环到 n，执行上述公式。

**（4）代码实现**

```js
/*
 * @param {number} n
 * @return {number}
 */
// 数组方法
var climbStairs = function (n) {
  if (n < 2) {
    return 1;
  }
  // 记录第0阶和第1阶可以走多少步
  const dp = [1, 1];
  // 从第2阶开始遍历，直至第5阶
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
```

如果 dp 用一维数组来记录的话，时间复杂度和空间复杂度都为 O(n)，这样子的话效率还是偏低的。

那么有什么方法可以来降低它的复杂度呢？

可以采用**变量**的方法。从上面的代码中我们可以看出，dp 的值用一个数组存着，一直在线性增长。那么这个时候我们可以考虑把这个一维数组变换成**单变量**的形式，不断进行替换，来**降低空间复杂度**。

下面用代码实现一遍。

```js
let climbStairs2 = function (n) {
  if (n < 2) {
    return 1;
  }
  //定义一个变量，记录 n - 2 时的台阶数
  let dp0 = 1;
  //定义一个变量，记录 n - 1 时的台阶数
  let dp1 = 1;
  for (let i = 2; i <= n; i++) {
    const temp = dp0;
    //每遍历一次，就让dp0指向下一个数的值，即dp1
    dp0 = dp1;
    //每遍历一次，就让dp1指向dp1下一个数的值，即前两个数的和，也就是dp1和原来dp0的值
    dp1 = dp1 + temp;
  }
  return dp1;
};
```

从上面的代码中可以看出，没有了数组或者像矩阵一样线性增长的数组，空间复杂度就变为了 O(1)。

## 2、leetcode 198：打家劫舍

**（1）题意**

[这里附上原题链接](https://leetcode-cn.com/problems/house-robber/)

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，**如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。**

给定一个代表每个房屋存放金额的非负整数数组，计算你 **不触动警报装置的情况下** ，一夜之内能够偷窃到的最高金额。

**（2）解题思路**

- f(k) = 从前 k 个房屋中能偷窃到的最大数额。
- Ak = 第 k 个房屋的钱数。
- f(k) = max(f(k - 2) + Ak, f(k - 1))。
- 考虑使用动态规则。

**（3）解题步骤**

- **定义子问题**：f(k) = max(f(k - 2) + Ak, f(k - 1))。
- **反复执行**：从 2 循环到 n，执行上述公式。

**（4）代码实现**

```js
/**
 * @param {number[]} nums
 * @return {number}
 */

let rob1 = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  // 前0个房屋和前1个房屋能劫持到的金钱数
  const dp = [0, nums[0]];
  for (let i = 2; i <= nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
  }
  return dp[nums.length];
};
```

与爬楼梯同样，如果 dp 用一维数组来记录的话，时间复杂度和空间复杂度都为 O(n)，这样子的话效率还是偏低的。

那这个时候就可以采用**单变量**的方法，来**降低空间复杂度**。

下面用代码实现一遍。

```js
let rob2 = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let dp0 = 0;
  let dp1 = nums[0];
  for (let i = 2; i <= nums.length; i++) {
    const dp2 = Math.max(dp0 + nums[i - 1], dp1);
    dp0 = dp1;
    dp1 = dp2;
  }
  return dp1;
};
```

此时空间复杂度自然也就变为 O(1)了。

## 3、leetcode 62：不同路径

**（1）题意**

[这里附上原题链接](https://leetcode-cn.com/problems/unique-paths/)

一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

**问总共有多少条不同的路径？**

![不用路径](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202304151121952.png)

**（2）解题思路**

- 每一步只能向下或者向右移动一步，因此想要走到(i,j)，如果向下走一步，那么从(i-1,j)走过来；如果向右走一步，那么从(i,j-1)走过来。
- f(i, j) = f(i-1, j) + f(i, j-1)。
- 使用动态规则。

**（3）解题步骤**

- **定义子问题**：f(i, j) = f(i-1, j) + f(i, j-1)。
- **反复执行**：从 2 循环到 n，执行上述公式。

**（4）代码实现**

```js
let uniquePaths = function (m, n) {
  const f = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    // 将第一列全部补上1
    f[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    // 将第一行全部补上1
    f[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      f[i][j] = f[i - 1][j] + f[i][j - 1];
    }
  }
  return f[m - 1][n - 1];
};
```

# 五、结束语

分而治之和动态规则算法在前端中的应用还是挺多的，特别是在面试或笔试的时候会经常出现这类题目，大家可以在此之外再继续多刷刷此类 `leetcode` 的题，做多了慢慢就能举一反三了~