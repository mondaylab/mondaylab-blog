---
title: 最小堆最大堆了解吗？一文了解堆在前端中的应用
author: 周一
date: '2021-08-01'
categories:
  - 前端开发
tags:
  - 数构与前端
sidebar: 'auto'
---

# ⚡ 序言

我们都知道树是一个数据结构，但可能很少听到堆这个数据结构。其实，堆就是一种**特殊的完全二叉树**。而对于前端来说，我们通常了解最大堆和最小堆，也经常用最大堆和最小堆来解决各种问题。比如，数组中的第 K 个最大元素、文档中前 K 个高频元素等等。

在下面的这篇文章中，将讲解堆的基础知识，并手动地用 `js` 来构建一个最小堆，同时剖析几道经典的 `leetcode` 算法题。

接下来开始进入本文的讲解~🔥

# 🦘 一、堆是什么？

- 堆是一种特殊的 **完全二叉树** ，完全二叉树意味着**每个节点都有两个孩子节点**。
- 最大堆：所有的节点都 **大于等于 ≥** 它的子节点；
- 最小堆：所有的节点都 **小于等于 ≤** 它的子节点。

# 🐥 二、JS 中的堆

- `JS` 通常用数组来表示堆。
- 左侧节点的位置是 `2*index+1` 。
- 右侧节点的位置是 `2*index+2` 。
- 父节点位置是 `(index - 1) / 2` 。

# 🐝 三、堆的应用

- 堆能够高效、快速地找出**最大值**和**最小值**，时间复杂度 `O(1)` 。
- 在开发中，有时候我们可能会想要找到一个数组中的最大或者最小元素，而堆，就可以**找出第 K 个最大（小）元素**。

# 🐈 四、构建一个最小堆

## 1. 定义

从上面的小知识中我们可以了解到，对于最小堆来说，它的所有节点都**小于等于**它的子节点。接下来我们来看堆这个数据结构的一些常见实现方法。

## 2. 方法

|       方法       |         含义         |
| :--------------: | :------------------: |
|      swap()      |  交换两个节点的位置  |
| getParentIndex() |   获取父节点的位置   |
|  getLeftIndex()  | 获取左侧子节点的位置 |
| getRightIndex()  | 获取右侧子节点的位置 |
|    shiftUp()     |     进行上移操作     |
|   shiftDown()    |     进行下移操作     |
|     insert()     |     插入节点的值     |
|      pop()       |     删除堆顶操作     |
|      peek()      |     获取堆顶的值     |
|      size()      |     获取堆的大小     |

## 3. 用 js 代码实现最小堆

### （1）初始化一个堆

首先我们需要先来定义一个空数组，这个数组用来存放一个堆。**具体代码如下：**

```js
class MinHeap {
  //创建一个构造器，存放一个堆
  constructor() {
    this.heap = [];
  }
}
```

### （2）交换位置 swap()

初始化完一个堆之后，如果想要实现上下移操作，我们时不时的还需要对两个节点进行位置交换。那么我们再来写一个交换节点位置的方法。**具体代码如下：**

```js
class MinHeap {
  //创建一个构造器，存放一个堆
  constructor() {
    this.heap = [];
  }
  //交换节点i1和i2之间的位置
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
}
```

### （3）获取父节点的位置 getParentIndex()

上面我们讲到，父节点的位置是在 `(index - 1) / 2` 。 因此，我们需要传入当前节点的值索引 `index` ，来进行一个地板除操作，获取具体的父节点位置。**具体代码如下：**

```js
class MinHeap {
  //创建一个构造器，存放一个堆
  constructor() {
    this.heap = [];
  }
  //交换节点i1和i2之间的位置
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  //获取父节点的位置
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
    //也可以用以下这种右移操作的方法
    //return (i - 1) >> 1;
  }
}
```

### （4）获取左侧子节点的位置 getLeftIndex()

对于**左侧子节点**来说，其索引为 `2 * index + 1` ，也就是说，它是 `当前节点的索引值的2倍 + 1` 。**具体实现代码如下：**

```js
class MinHeap {
  //创建一个构造器，存放一个堆
  constructor() {
    this.heap = [];
  }
  //交换节点i1和i2之间的位置
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  //获取父节点的位置
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
    //也可以用以下这种右移操作的方法
    //return (i - 1) >> 1;
  }

  //获取左侧子节点，i为当前节点的索引
  getLeftIndex(i) {
    return i * 2 + 1;
  }
}
```

### （5）获取右侧子节点的位置 getRightIndex()

对于**右侧子节点**来说，其索引为 `2 * index + 2` ，也就是说，它是 `当前节点的索引值的2倍 + 2` 。**具体实现代码如下：**

```js
class MinHeap {
  //创建一个构造器，存放一个堆
  constructor() {
    this.heap = [];
  }
  //交换节点i1和i2之间的位置
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  //获取父节点的位置
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
    //也可以用以下这种右移操作的方法
    //return (i - 1) >> 1;
  }

  //获取左侧子节点，i为当前节点的索引
  getLeftIndex(i) {
    return i * 2 + 1;
  }

  //获取右侧子节点，i为当前节点的索引
  getRightIndex(i) {
    return i * 2 + 2;
  }
}
```

### （6）进行上移操作 shiftUp()

上面我们实现了获取父节点等获取各种索引的操作，现在，我们来实现上移操作。

对于**上移**操作来说，**实现思路如下：**

- 先判断当前节点的位置是否在堆的顶点处，如果是，则不进行上移操作；如果否，则继续进行比较；
- 获取父节点的位置索引，获取索引的目的是为了获取该索引的具体值；
- 将当前节点的值与父节点的值进行对比，如果父节点的值大于当前节点的值，则进行上移操作；
- 递归进行上移操作，直到到达堆顶为止。

**下面给出具体的代码实现方法：**

```js
class MinHeap {
  //创建一个构造器，存放一个堆
  constructor() {
    this.heap = [];
  }
  //交换节点i1和i2之间的位置
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  //获取父节点的位置
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
    //也可以用以下这种右移操作的方法
    //return (i - 1) >> 1;
  }

  //shiftUp进行上移操作
  shiftUp(index) {
    //如果在堆的顶点处，则不进行上移操作，直接返回结果
    if (index === 0) {
      return;
    }
    //获取父节点(即获取当前节点的父节点的值，且每个节点的父节点只有一个)
    const parentIndex = this.getParentIndex(index);
    //判断如果堆的父节点如果大于子节点，则进行位置交换
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      //交换完成之后，继续递归进行上移操作
      this.shinftUp(parentIndex);
    }
  }
}
```

### （7）进行下移操作 shiftDown()

对于**下移**操作来说，**实现思路如下：**

- 先获取左右侧节点；
- 将左侧子节点与当前节点进行比较，如果左侧子节点比当前节点小，则进行位置交换，之后将交换完的节点继续进行比较；
- 左侧节点比较完之后，接下来比较右侧节点；
- 将右侧子节点与当前节点进行比较，如果右侧子节点比当前节点小，则进行位置交换，之后将交换完的节点继续进行比较；
- 如此循环操作，直到最后一个节点为止。

**下面给出具体的代码实现方法：**

```js
class MinHeap {
  //创建一个构造器，存放一个堆
  constructor() {
    this.heap = [];
  }
  //交换节点i1和i2之间的位置
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  //获取左侧子节点，i为当前节点的索引
  getLeftIndex(i) {
    return i * 2 + 1;
  }

  //获取右侧子节点，i为当前节点的索引
  getRightIndex(i) {
    return i * 2 + 2;
  }

  // 进行下移操作
  shiftDown(index) {
    // 获取左右侧子节点
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    //  对左侧结点进行交换
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    //  对右侧结点进行交换
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
}
```

### （8）插入节点的值 insert()

对于**插入节点**操作来说，**实现思路如下：**

- 将值插入堆的底部，即数组的尾部。
- 然后**上移**：将这个值和它的父节点进行交换，直到父节点小于等于这个插入的值。
- 大小为 k 的堆中插入元素的时间复杂度为 `O(logK)` 。

**下面给出具体的代码实现方法：**

```js
class MinHeap {
  //创建一个构造器，存放一个堆
  constructor() {
    this.heap = [];
  }
  //交换节点i1和i2之间的位置
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  //获取父节点的位置
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
    //也可以用以下这种右移操作的方法
    //return (i - 1) >> 1;
  }

  //shiftUp进行上移操作
  shiftUp(index) {
    //如果在堆的顶点处，则不进行上移操作，直接返回结果
    if (index === 0) {
      return;
    }
    //获取父节点(即获取当前节点的父节点的值，且每个节点的父节点只有一个)
    const parentIndex = this.getParentIndex(index);
    //判断如果堆的父节点如果大于子节点，则进行位置交换
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      //交换完成之后，继续递归进行上移操作
      this.shinftUp(parentIndex);
    }
  }

  //插入结点值的操作，value为被插入的值
  insert(value) {
    //把新的值放到数组的最后一位
    this.heap.push(value);
    //将值进行上移操作
    this.shiftUp(this.heap.length - 1);
  }
}
```

### （9）删除堆顶操作 pop()

对于**删除堆顶**操作来说，**实现思路如下：**

- 用数组尾部元素替换堆顶（因为直接删除堆顶会**破坏堆结构**）。
- 然后**下移**：将新堆顶和它的子节点进行交换，直到子节点大于等于这个新堆顶。
- 大小为 `k` 的堆中删除堆顶的时间复杂度为 `O(logK)` 。

**下面给出具体的代码实现方法：**

```js
class MinHeap {
  //创建一个构造器，存放一个堆
  constructor() {
    this.heap = [];
  }
  //交换节点i1和i2之间的位置
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  //获取左侧子节点，i为当前节点的索引
  getLeftIndex(i) {
    return i * 2 + 1;
  }

  //获取右侧子节点，i为当前节点的索引
  getRightIndex(i) {
    return i * 2 + 2;
  }

  // 进行下移操作
  shiftDown(index) {
    // 获取左右侧子节点
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    //  对左侧结点进行交换
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    //  对右侧结点进行交换
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }

  //删除堆顶操作
  pop() {
    //将尾部的值赋值给堆顶
    this.heap[0] = this.heap.pop();
    //进行下移操作
    this.shiftDown(0);
  }
}
```

### （10）获取堆顶的值 peek()

对于**获取堆顶的值**操作来说，实现思路较为简单，也就是**返回数组的头部**即可获取堆顶的值。**具体实现代码如下：**

```js
class MinHeap {
  //创建一个构造器，存放一个堆
  constructor() {
    this.heap = [];
  }

  //获取堆顶的值
  peek() {
    return this.heap[0];
  }
}
```

### （11）获取堆的大小 size()

对于**获取堆的大小**操作来说，实现思路其实就是获取**整个堆的长度**，也就是返回数组的长度。**具体实现代码如下：**

```js
class MinHeap {
  //创建一个构造器，存放一个堆
  constructor() {
    this.heap = [];
  }

  //获取堆的大小
  size() {
    return this.heap.length;
  }
}
```

### （12）结果展示

完成上面的操作以后，接下来，我们来对写一组测试用例，演示具体的结果。**具体代码如下：**

```js
const h = new MinHeap();
h.insert(3);
h.insert(2);
h.insert(1);
h.pop();
console.log(h); // MinHeap { heap: [ 2, 4, 3 ] }
h.peek();
h.size();
console.log(h.peek()); // 2
console.log(h.size()); // 3
```

# 🐤 五、leetcode 经典题目剖析

接下来我们引用几道经典的 `leetcode` 算法，来巩固树和二叉树的知识。

## 1. leetcode215 数组中的第 K 个最大元素（中等）

**（1）题意**

附上题目链接：[leetcode215 数组中的第 K 个最大元素](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)

给定整数数组 `nums` 和整数 `k`，请返回数组中第 `k` 个最大的元素。

请注意，你需要找的是数组排序后的第 `k` 个最大的元素，而不是第 `k` 个不同的元素。

**输入输出示例：**

- **输入**: `[3,2,1,5,6,4]` 和 `k = 2`
- **输出**: 5

**（2）解题思路**

- 看到“第 K 个最大元素”。
- 考虑选择使用最小堆。

**（3）解题步骤**

- 构建一个最小堆，并以此把数组的值插入堆中。
- 当堆的容量超过 K，就删除堆顶。
- 插入结束后，堆顶就是第 K 个最大元素。

**（4）代码实现**

依据上面我们构建的最小堆，接下来，我们用这个最小堆，来完成这道题。**具体代码如下：**

```js
class MinHeap {
  constructor() {
    this.heap = [];
  }
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
    // return (i - 1) >> 1;
  }
  getLeftIndex(i) {
    return i * 2 + 1;
  }
  getRightIndex(i) {
    return i * 2 + 2;
  }
  shiftUp(index) {
    if (index === 0) {
      return;
    }
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findKthLargest = function (nums, k) {
  const h = new MinHeap();
  nums.forEach((n) => {
    h.insert(n);
    if (h.size() > k) {
      h.pop();
    }
  });
  return h.peek();
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
```

## 2. leetcode347 前 K 个高频元素（中等）

**（1）题意**

附上题目链接：[leetcode347 前 K 个高频元素](https://leetcode-cn.com/problems/top-k-frequent-elements/)

给你一个整数数组 `nums` 和一个整数 `k` ，请你返回其中出现频率前 `k` 高的元素。你可以按 **任意顺序** 返回答案。

**输入输出示例：**

- **输入**: nums = [1,1,1,2,2,3], k = 2
- **输出**: [1,2]

**（2）解题思路**

- **字典解法**：将字典转换为数组，且堆数组进行排序；
- **堆解法**：构建一个最小堆，利用字典的键值关系，来记录元素出现的频率。

**（3）代码实现**

这道题我们用两种做法来实现，一种是**字典解法**，另外一种是**堆解法**。**具体如下：**

**1）字典解法：**

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 字典解法
let topKFrequent1 = function (nums, k) {
  //定义一个数组
  const map = new Map();
  //先将数组中的元素存放到字典中
  nums.forEach((n) => {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  });
  // 将字典转换为数组，且对数组进行排序
  // 对数组中的第二项进行降序（从大到小）排序，从大到小
  const list = Array.from(map).sort((a, b) => b[1] - a[1]);
  //使用map()方法，创建一个新数组，来存放前k个元素
  return list.slice(0, k).map((n) => n[0]);
};

console.log(topKFrequent1([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
```

**2）堆解法：**

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 堆解法
class MinHeap {
  constructor() {
    this.heap = [];
  }
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
    // return (i - 1) >> 1;
  }
  getLeftIndex(i) {
    return i * 2 + 1;
  }
  getRightIndex(i) {
    return i * 2 + 2;
  }
  shiftUp(index) {
    if (index === 0) {
      return;
    }
    const parentIndex = this.getParentIndex(index);
    if (
      this.heap[parentIndex] &&
      this.heap[parentIndex].value > this.heap[index].value
    ) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (
      this.heap[leftIndex] &&
      this.heap[leftIndex].value < this.heap[index].value
    ) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (
      this.heap[rightIndex] &&
      this.heap[rightIndex].value < this.heap[index].value
    ) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

let topKFrequent2 = function (nums, k) {
  //初始化一个字典
  const map = new Map();
  //对数组挨个进行遍历，并记录出现次数
  nums.forEach((n) => {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  });
  //实例化一个最小堆
  const h = new MinHeap();
  //对字典中的所有键值对进行遍历
  map.forEach((value, key) => {
    //每遍历一个，堆中就插入一个
    h.insert({ value, key });
    //判断当前堆的大小是否大于k值
    if (h.size() > k) {
      h.pop();
    }
  });
  //返回值，对字典进行遍历，得到遍历后的键即为结果；
  //并通过map()方法创建一个新数组，才存放具体的值。
  return h.heap.map((a) => a.key);
};

console.log(topKFrequent2([1, 1, 1, 2, 2, 3], 2)); // [2, 1]
```

## 3. leetcode23 合并 K 个排序链表（困难）

**（1）题意**

给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。

**输入输出示例：**

- **输入**: lists = `[[1,4,5],[1,3,4],[2,6]]`

- **输出**: [1,1,2,3,4,4,5,6]

- **解释**：

  ```js
  链表数组如下：
  [
    1->4->5,
    1->3->4,
    2->6
  ]
  将它们合并到一个有序链表中得到。
  1->1->2->3->4->4->5->6
  ```

**（2）解题思路**

- 新链表的下一个节点一定是 k 个链表头中的最小节点。
- 考虑选择使用最小堆。

**（3）解题步骤**

- 构建一个最小堆，并以此把链表头插入堆中。
- 弹出堆顶接到输出链表，并将堆顶所在链表的新链表头插入堆中。
- 等堆元素全部弹出，合并工作就完成了。

**（4）代码实现**

```js
class MinHeap {
  constructor() {
    this.heap = [];
  }
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
    // return (i - 1) >> 1;
  }
  getLeftIndex(i) {
    return i * 2 + 1;
  }
  getRightIndex(i) {
    return i * 2 + 2;
  }
  shiftUp(index) {
    if (index === 0) {
      return;
    }
    const parentIndex = this.getParentIndex(index);
    if (
      this.heap[parentIndex] &&
      this.heap[parentIndex].val > this.heap[index].val
    ) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (
      this.heap[leftIndex] &&
      this.heap[leftIndex].val < this.heap[index].val
    ) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (
      this.heap[rightIndex] &&
      this.heap[rightIndex].val < this.heap[index].val
    ) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  insert(val) {
    this.heap.push(val);
    this.shiftUp(this.heap.length - 1);
  }
  pop() {
    // 如果堆只有一个元素，直接返回结果
    if (this.size() === 1) {
      return this.heap.shift();
    }
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
    return top;
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  //实例化一个空链表
  const res = new ListNode(0);
  //定义一个p指针，指向空链表
  let p = res;
  //实例化一个最小堆
  const h = new MinHeap();
  //将题目给的链表，挨个进行遍历
  lists.forEach((l) => {
    //遍历后的链表如果不为空，则插入最小堆当中
    if (l) {
      h.insert(l);
    }
  });
  //判断堆中是否有内容
  while (h.size()) {
    //删除并返回堆顶
    const n = h.pop();
    //让p指针的next节点指向堆顶元素
    p.next = n;
    //p.next的值赋给p指针
    p = p.next;
    //如果堆顶元素有下一个节点，则将其插入堆中
    if (n.next) {
      h.insert(n.next);
    }
  }
  return res.next;
};
```

# 🐪 六、结束语

学完这个数据结构的时候，想到上回看面经时有一道算法题。那道题目问到说，假设现在有一个文件，里面有很多个单词，请找出前 10 个出现频率最高的词汇。

当时我的心里想的是：遍历？但其实今天学完这个数据结构以后，回想起来，这道题的做法就是用最小堆来实现。

所以，堆在日常的应用中都是相通的，只要明白了其中的思想，间接地，也将可以应用到对应的各种场景当中。

到这里，关于堆在前端中的应用的讲解就结束啦！希望对大家有帮助~

如文章有误或有不理解的地方，欢迎小伙伴们评论区留言撒 💬

# 🐣 彩蛋 One More Thing

## (：往期推荐

栈 👉[栈在前端中的应用，顺便再了解下深拷贝和浅拷贝！](https://blog.csdn.net/weixin_44803753/article/details/116375461)

队列 👉[详解队列在前端的应用，深剖 JS 中的事件循环 Eventloop，再了解微任务和宏任务](https://blog.csdn.net/weixin_44803753/article/details/117870706)

链表 👉[详解链表在前端的应用，顺便再弄懂原型和原型链！](https://blog.csdn.net/weixin_44803753/article/details/116855157)

字典和集合 👉[ES6 的 Set 和 Map 你都知道吗？一文了解集合和字典在前端中的应用](https://blog.csdn.net/weixin_44803753/article/details/118019431)

树 👉[一文了解树在前端中的应用，掌握数据结构中树的生命线](https://blog.csdn.net/weixin_44803753/article/details/118872784)

图 👉[太平洋大西洋水流问题如何解决？一文了解图在前端中的应用](https://blog.csdn.net/weixin_44803753/article/details/118872797)

动态规则和分而治之算法 👉[一文了解分而治之和动态规则算法在前端中的应用](https://blog.csdn.net/weixin_44803753/article/details/118014494)

贪心算法和回溯算法 👉[一文了解贪心算法和回溯算法在前端中的应用](https://blog.csdn.net/weixin_44803753/article/details/118019581)

## (：番外篇

> - 关注公众号**星期一研究室**，第一时间关注学习干货，**更多精选专栏待你解锁**~
> - 如果这篇文章对你有用，记得**留个脚印 jio**再走哦~
> - 以上就是本文的全部内容！我们下期见！👋👋👋
