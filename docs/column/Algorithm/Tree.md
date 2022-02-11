---
title: 一文了解树在前端中的应用，掌握数据结构中树的生命线
author: 周一
date: '2021-12-12'
categories:
  - 前端开发
tags:
  - 数构与前端
sidebar: 'auto'
---

![封面](https://img-blog.csdnimg.cn/2021071807453298.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

# 🏕️ 序言

在我们的日常生活中，无时无刻都会看到树。比如，在街上行走时，就有着一排排的树。那么，树在前端中，都有哪些应用呢？

事实上，前端在写页面时，每个页面就有它对应的 `DOM ` 树、 `CSSOM` 树等等。除此之外呢，像我们写**级联选择器**时，它也是一层叠一层的，就像一棵树一样。

在接下来的这篇文章中，将讲解树这个数据结构的一些基本操作，以及树在前端中的应用。

一起来学习叭~🧐

# 🌲 一、树是什么？

- 树是一种**具有分层数据功能**的抽象模型。
- 前端工作中常用的树包括： `DOM` 树、级联选择、树形空间……。
- `JS` 中没有树，但是可以用 `Object` 和 `Array` 构建树。
- 树的常用操作：深度/广度优先遍历、先中后序遍历。

# 🌴 二、深/广度优先遍历

## 1、深度优先遍历

### （1）定义

- 深度优先遍历，即**尽可能深的**搜索树的分支。

### （2）口诀

- 访问根节点。
- 对根节点的 `children` 挨个进行深度优先遍历。

### （3）代码实现

接下来用 `JS` 来实现树的深度优先遍历。**具体代码如下：**

```js
const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: [],
        },
        {
          val: 'e',
          children: [],
        },
      ],
    },
    {
      val: 'c',
      children: [
        {
          val: 'f',
          children: [],
        },
        {
          val: 'a',
          children: [],
        },
      ],
    },
  ],
};

const dfs = (root) => {
  console.log(root.val);
  // 使用递归
  root.children.forEach(dfs);
};

/*
打印结果：
a
b
d
e
c
f
a
*/
```

通过以上代码我们可以知道，首先我们先定义一棵树 `tree` ，之后使用递归的方法，对树的 `Children` 挨个进行遍历，最终得到 `abdecfa` 的打印结果。

这个顺序怎么理解会更为容易一点呢？

在上面的知识点我们谈到，树是往深了遍历。那在我们这道题的 `tree` 树当中，我们总得先对第一层的遍历完，才能遍历第二层的。而第一层的内容又有很多层，那就先把它往深了遍历，等到第一层的深度遍历结束后，我们才开始遍历第二层的。

所以，我们先在来看一下，最上面的是 `a` ，接着就是第一层，第一层有 `bde` ，接下来是第二层，第二层就有 `cfa` 。因此，最终的顺序为 `abdecfa` 。

## 2、广度优先遍历

### （1）定义

- 广度优先遍历，即先访问**根节点最近的节点**。

### （2）口诀

- 新建一个队列。
- 把队头出队并访问。
- 把队头的 `children` 挨个入队。
- 重复第二步和第三步，直到队列为空。

### （3）代码实现

接下来用 `JS` 来实现树的广度优先遍历。**具体代码如下：**

```js
const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: [],
        },
        {
          val: 'e',
          children: [],
        },
      ],
    },
    {
      val: 'c',
      children: [
        {
          val: 'f',
          children: [],
        },
        {
          val: 'a',
          children: [],
        },
      ],
    },
  ],
};

const bfs = (root) => {
  // 新建一个队列，并把根节点先放到队列里面
  const q = [root];
  while (q.length > 0) {
    // 不断进行出队，访问
    const n = q.shift();
    // 边出队边访问
    console.log(n.val);
    // 把队头的children挨个入队，退到队列里面
    n.children.forEach((child) => {
      q.push(child);
    });
  }
};

bfs(tree);

/*
打印结果：
a
b
c
d
e
f
a
*/
```

# 🌱 三、二叉树

## 1、定义

- 对于二叉树来说，树中的每个节点最多只能有**两个子节点**。
- `JS` 中没有二叉树，但通常用对象 `Object` 模拟二叉树。

## 2、二叉树的先/中/后序遍历

### （1）先序遍历

- 访问根节点。
- 对根节点的左子树进行先序遍历。
- 对根节点的右子树进行先序遍历。

### （2）中序遍历

- 对根节点的左子树进行中序遍历。
- 访问根节点。
- 对根节点的右子树进行中序遍历。

### （3）后序遍历

- 对根节点的左子树进行后序遍历。

- 对根节点的右子树进行后序遍历。
- 访问根节点。

## 3、JS 实现先中后序三种遍历

下面我们用代码来实现二叉树的这三种遍历。接下来开始讲解~

### （1）JS 实现二叉树的先序遍历

对于二叉树的先序遍历来说，是先访问根节点，之后再访问左子树，最后访问右子树。下面我们用两种方式来实现先序遍历，第一种是**递归版本**，第二种是**非递归版本**。

**先定义一棵树：**

```js
const bt = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};
```

**递归版本实现：**

```js
// 递归版本实现
const preOrder1 = (root) => {
  if (!root) {
    return;
  }
  console.log(root.val);
  preOrder1(root.left);
  preOrder1(root.right);
};

preOrder1(bt);
/**打印结果：
1
2
4
5
3
6
7
*/
```

**非递归版本实现：**

```js
// 非递归版实现
/**
 * 思路：
 * 1.新建一个栈模拟函数的调用堆栈；
 * 2.对于先序遍历来说，需要先把根节点取出，然后再遍历左子树了右子树；
 * 3.按照栈的先进后出特点，先把右子树放进栈里，再把左子树放进栈里，一一取出。
 */
const preOrder2 = (root) => {
  if (!root) {
    return;
  }
  // 新建一个stack代表函数的调用堆栈
  const stack = [root];
  // console.log(stack)
  while (stack.length) {
    // 将根节点从栈里弹出
    const n = stack.pop();
    console.log(n.val);
    if (n.right) {
      stack.push(n.right);
    }
    if (n.left) {
      stack.push(n.left);
    }
  }
};

preOrder2(bt);
/**打印结果：
1
2
4
5
3
6
7
*/
```

### （2）JS 实现二叉树的中序遍历

对于二叉树的中序遍历来说，是先访问**左**子树，之后访问**根**节点，最后再访问**右**子树。下面我们用两种方式来实现中序遍历，第一种是**递归版本**，第二种是**非递归版本**。

同样地，我们先来**先定义一棵树：**

```js
const bt = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};
```

**递归版本实现：**

```js
// 递归版本实现
const inOrder1 = (root) => {
  if (!root) {
    return;
  }
  inOrder(root.left);
  console.log(root.val);
  inOrder(root.right);
};

inOrder1(bt);
/**打印结果：
4
2
5
1
6
3
7
*/
```

**非递归版本实现：**

```js
// 非递归版实现
/**
 * 思路：
 * 1.新建一个栈模拟函数的调用堆栈；
 * 2.对于中序遍历来说，需要先把左子树全部丢到栈里面；那么需要每当遍历一个，就推到栈里面
 * 3.遍历完成之后，把最尽头的结点弹出，并访问它；此处最尽头的结点即尽头出的根节点，左根右
 * 4.访问完左结点后，需要访问右结点；
 */
const inOrder2 = (root) => {
  if (!root) {
    return;
  }
  let p = root;
  const stack = [];
  while (p || stack.length) {
    while (p) {
      // 先进栈
      stack.push(p);
      // 进栈完继续指向左子树
      p = p.left;
    }
    // 弹出最后一个
    const n = stack.pop();
    console.log(n.val);
    p = n.right;
  }
};

inOrder2(bt);
/**打印结果：
4
2
5
1
6
3
7
*/
```

### （3）JS 实现二叉树的后序遍历

对于二叉树的后序遍历来说，是先访问**左**子树，之后访问**右**子树，最后再访问**根**节点。下面我们用两种方式来实现后序遍历，第一种是**递归版本**，第二种是**非递归版本**。

首先同样地，**先来定义一棵树：**

```js
const bt = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};
```

**递归版本实现：**

```js
// 递归版本实现
const postOrder1 = (root) => {
  if (!root) {
    return;
  }
  postOrder1(root.left);
  postOrder1(root.right);
  console.log(root.val);
};

preOrder1(bt);
/**打印结果：
1
2
4
5
3
6
7
*/
```

**非递归版本实现：**

```js
// 非递归版实现
/**
 * 思路：
 * 1.建立一个空栈stack；
 * 2.分别把左子树，右子树分别放入stack栈
 * 3.建立一个倒序栈outputStack，先把根树放进，再一一放入右子树，右子树全部放完之后再放左子树
 */
const postOrder2 = (root) => {
  if (!root) {
    return;
  }
  // 倒序栈输出，放根右左的顺序，之后再一一取出
  const outputStack = [];
  // 先放左子树，再放右子树，方便后面取出
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    outputStack.push(n);
    if (n.left) {
      stack.push(n.left);
    }
    if (n.right) {
      stack.push(n.right);
    }
  }
  while (outputStack.length) {
    const n = outputStack.pop();
    console.log(n.val);
  }
};
preOrder2(bt);
/**打印结果：
1
2
4
5
3
6
7
*/
```

### （4）总结

看完上面的代码实现后，我们来做个总结。**为什么这里要展示递归版本和非递归版本呢？**

事实上，在我们的日常开发中，递归遍历是非常常见的。但试想一下，有时候我们的业务逻辑有可能很复杂，那这个时候前端从后端接收到的数据量是比较大的。这个时候如果用递归版本来处理的话，算法复杂度相对来说就会比较高了。

所以我们多了一种非递归版本的实现方式，非递归版本的实现方式，旨在**以空间来换时间**，减少代码的时间复杂度。

# ☘️ 四、leetcode 经典题目剖析

接下来我们引用几道经典的 `leetcode` 算法，来巩固树和二叉树的知识。

## 1、leetcode104 二叉树的最大深度（简单）

**（1）题意**

附上题目链接：[leetcode104 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

**说明:** 叶子节点是指没有子节点的节点。

**输入输出示例：**

- **输入**: 给定二叉树 `[3,9,20,null,null,15,7]`
- **输出**: 3

**（2）解题思路**

- 求最大深度，考虑使用深**度优先遍历**。
- 在深度优先遍历过程中，**记录每个节点所在的层级**，找出**最大的层级**即可。

**（3）解题步骤**

- 新建一个变量，记录最大深度。
- 深度优先遍历整棵树，并记录每个节点的层级，同时不断刷新最大深度的这个变量。
- 遍历结束返回最大深度的变量。

**（4）代码实现**

```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxDepth = function (root) {
  let res = 0;
  const dfs = (n, l) => {
    if (!n) {
      return;
    }
    if (!n.left && !n.right) {
      res = Math.max(res, l);
    }
    dfs(n.left, l + 1);
    dfs(n.right, l + 1);
  };
  dfs(root, 1);
  return res;
};
```

## 2、leetcode111 二叉树的最小深度（简单）

**（1）题意**

附上题目链接：[leetcode111 二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

**说明：**叶子节点是指没有子节点的节点。

**输入输出示例：**

- **输入**: root = `[3,9,20,null,null,15,7]`
- **输出**: 2

**（2）解题思路**

- 求最小深度，考虑使用广度优先遍历。
- 在广度优先遍历过程中，遇到叶子节点，停止遍历，返回节点层级。

**（3）解题步骤**

- 广度优先遍历整棵树，并记录每个节点的层级。
- 遇到叶子节点，返回节点层级，停止遍历。

**（4）代码实现**

```js
/**
 * @param {TreeNode} root
 * @return {number}
 */

let minDepth = function (root) {
  if (!root) {
    return 0;
  }

  const q = [[root, 1]];
  while (q.length) {
    const [n, l] = q.shift();

    if (!n.left && !n.right) {
      return l;
    }

    if (n.left) {
      q.push([n.left, l + 1]);
    }
    if (n.right) {
      q.push([n.right, l + 1]);
    }
  }
};
```

## 3、leetcode102 二叉树的层序遍历（中等）

**（1）题意**

附上题目链接：[leetcode102 二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

给你一个二叉树，请你返回其按 **层序遍历** 得到的节点值。 （即逐层地，从左到右访问所有节点）。

**输入输出示例：**

- **输入**: 二叉树：`[3,9,20,null,null,15,7]`

  ```js
      3
     / \
    9  20
      /  \
     15   7
  ```

- **输出**:

  ```js
  [[3], [9, 20], [15, 7]];
  ```

**（2）解题思路**

- 层序遍历顺序就是广度优先遍历。
- 不过在遍历时候需要记录当前节点所处的层级，方便将其添加到不同的数组中。

**（3）解题步骤**

- 广度优先遍历二叉树。
- 遍历过程中，记录每个节点的层级，并将其添加到不同的数组中。

**（4）代码实现**

```js
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 方法一
let levelOrder1 = function (root) {
  if (!root) {
    return [];
  }
  const q = [[root, 0]];
  const res = [];
  while (q.length) {
    const [n, level] = q.shift();
    if (!res[level]) {
      // 没有该层次的数组时先创建一个数组
      res.push([n.val]);
    } else {
      // 有数组时直接将值放进
      res[level].push(n.val);
    }
    if (n.left) {
      q.push([n.left, level + 1]);
    }
    if (n.right) {
      q.push([n.right, level + 1]);
    }
  }
  return res;
};

// 方法二
let levelOrder2 = function (root) {
  if (!root) {
    return [];
  }
  const q = [root];
  const res = [];
  while (q.length) {
    let len = q.length;
    res.push([]);
    while (len--) {
      const n = q.shift();
      res[res.length - 1].push(n.val);
      if (n.left) {
        q.push(n.left);
      }
      if (n.right) {
        q.push(n.right);
      }
    }
  }
  return res;
};
```

## 4、leetcode94 二叉树的中序遍历（简单）

**（1）题意**

附上题目链接：[leetcode94 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)

给定一个二叉树的根节点 `root` ，返回它的 **中序** 遍历。

**输入输出示例：**

- **输入**: root = `[1,null,2,3]`
- **输出**: `[1,3,2]`

**（2）解题思路&&解题步骤**

- 这里的解题思路和步骤和上方讲中序遍历时类似，所以不再做讲解，下面直接看代码实现。

**（3）代码实现**

```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 遍历版本
let inorderTraversal1 = function (root) {
  const res = [];
  const rec = (n) => {
    if (!n) {
      return;
    }
    rec(n.left);
    rec(n.val);
    rec(n.right);
  };
  rec(root);
  return res;
};

// 迭代版本——栈方法
let inorderTraversal2 = function (root) {
  const res = [];
  const stack = [];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const n = stack.pop();
    res.push(n.val);
    p = n.right;
  }
  return res;
};

inorderTraversal1(root);
inorderTraversal2(root);
```

## 5、leetcode112 路径总和（简单）

**（1）题意**

附上题目链接：[leetcode112 路径总和](https://leetcode-cn.com/problems/path-sum/)

给你二叉树的根节点 `root` 和一个表示目标和的整数 `targetSum` ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 `targetSum` 。

**叶子节点** 是指没有子节点的节点。

**输入输出示例：**

- **输入**: `root` = [5,4,8,11,null,13,4,7,2,null,null,null,1], `targetSum` = 22
- **输出**: true

**（2）解题思路**

- 在深度优先遍历的过程中，记录当前路径思维节点值的和。
- 在叶子节点处，判断当前路径的节点值的和是否等于目标值。

**（3）解题步骤**

- 深度优先遍历二叉树，在叶子节点处，判断当前路径路径的节点值的和是否等于目标值，是就返回 true。
- 遍历结束，如果没有匹配，就返回 false。

**（4）代码实现**

```js
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
// 递归法
let hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }

  let res = false;

  const dfs = (n, s) => {
    if (!n.left && !n.right && s === targetSum) {
      res = true;
    }
    if (n.left) {
      dfs(n.left, s + n.left.val);
    }
    if (n.right) {
      dfs(n.right, s + n.right.val);
    }
  };
  dfs(root, root.val);
  return res;
};
```

## 6、leetcode129 求根节点到叶节点数字之和（中等）

**（1）题意**

附上题目链接：[leetcode129 求根节点到叶节点数字之和](https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/)

给你一个二叉树的根节点 `root` ，树中每个节点都存放有一个 `0` 到 `9` 之间的数字。

每条从根节点到叶节点的路径都代表一个数字：

例如，从根节点到叶节点的路径 `1 -> 2 -> 3` 表示数字 `123` 。

计算从根节点到叶节点生成的 **所有数字之和** 。

**叶节点** 是指没有子节点的节点。

**输入输出示例：**

- **输入**: root = [1,2,3]
- **输出**: 25
- **解释**:
  - 从根到叶子节点路径 1->2 代表数字 12
  - 从根到叶子节点路径 1->3 代表数字 13
  - 因此，数字总和 = 12 + 13 = 25

**（2）解题思路**

- 在深度优先遍历的过程中，记录当前路径前面节点的值。
- 在叶子节点处，计算出当前路径值。

**（3）解题步骤**

- 深度优先遍历二叉树，直到每一棵树的叶子节点处结束。
- 遍历结束，返回所有路径值。

**（4）代码实现**

```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  // 深度优先遍历处理

  const dfs = (n, preNum) => {
    if (!n) {
      return 0;
    }

    const sum = preNum * 10 + n.val;
    if (!n.left && !n.right) {
      return sum;
    } else {
      return dfs(n.left, sum) + dfs(n.right, sum);
    }
  };

  return dfs(root, 0);
};
```

# 🎄 五、前端与树：遍历 JSON 的所有节点值

## 1、碎碎念

有时候，后端传过来的数据可能不是很友好，有可能一串数据里面又是对象又是数组的，这个时候前端拿到数据后，就需要稍微处理一下了。

因此，我们可以通过深度优先遍历来遍历 `JSON` 中的所有节点值。

接下来用一个例子来展示~

## 2、代码实现

### （1）制造数据

假设我们心在有一串 `json` 的数据，**代码如下：**

```js
const json = {
  a: {
    b: {
      c: 1,
    },
  },
  d: [1, 2],
};
```

### （2）遍历节点值

接下来，我们用深度优先遍历的方式，来遍历 `JSON` 中的所有节点值。**具体实现代码如下：**

```js
const dfs = (n, path) => {
  console.log(n, path);
  Object.keys(n).forEach((k) => {
    dfs(n[k], path.concat(k));
  });
};

dfs(json, []);
```

### （3）打印结果

**最终打印结果如下：**

```js
{ a: { b: { c: 1 } }, d: [ 1, 2 ] } []
{ b: { c: 1 } } [ 'a' ]
{ c: 1 } [ 'a', 'b' ]
1 [ 'a', 'b', 'c' ]
[ 1, 2 ] [ 'd' ]
1 [ 'd', '0' ]
2 [ 'd', '1' ]
```

大家看上面的打印结果可以发现，通过深度优先遍历的方式，数据都被一一遍历出来。因此，对于树这种数据结构来说，在前端当中出现的频率也是较高的~~

# 🏡 六、结束语

通过上文的学习，我们了解了树的两种遍历：**深度优先遍历和广度优先遍历**。同时，还有一种特殊的树，二叉树。二叉树在面试中，基本上是一大必考点。对于二叉树来说，要了解它的三种遍历方式：**先序、中序和后序遍历**，并且要掌握好这三者之间的区别以及常见的应用场景。

关于树在前端中的应用讲到这里就结束啦！希望对大家有帮助~

如有疑问或文章有误欢迎评论区留言或公众号后台加我微信提问~

# 🐣 彩蛋 One More Thing

## (:往期推荐

栈 👉[栈在前端中的应用，顺便再了解下深拷贝和浅拷贝！](https://blog.csdn.net/weixin_44803753/article/details/116375461)

队列 👉[详解队列在前端的应用，深剖 JS 中的事件循环 Eventloop，再了解微任务和宏任务](https://blog.csdn.net/weixin_44803753/article/details/117870706)

链表 👉[详解链表在前端的应用，顺便再弄懂原型和原型链！](https://blog.csdn.net/weixin_44803753/article/details/116855157)

字典和集合 👉[ES6 的 Set 和 Map 你都知道吗？一文了解集合和字典在前端中的应用](https://blog.csdn.net/weixin_44803753/article/details/118019431)

动态规则和分而治之算法 👉[一文了解分而治之和动态规则算法在前端中的应用](https://blog.csdn.net/weixin_44803753/article/details/118014494)

贪心算法和回溯算法 👉[一文了解贪心算法和回溯算法在前端中的应用](https://blog.csdn.net/weixin_44803753/article/details/118019581)

## (:番外篇

> - 关注公众号**星期一研究室**，第一时间关注学习干货，**更多精选专栏待你解锁**~
> - 如果这篇文章对你有用，记得**留个脚印 jio**再走哦~
> - 以上就是本文的全部内容！我们下期见！👋👋👋
