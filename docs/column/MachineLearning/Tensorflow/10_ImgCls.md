---
title: 使用预测训练模型进行图片分类
author: 周一
date: '2023-08-05'
categories:
  - 人工智能
tags:
  - 机器学习
sidebar: 'auto'
---

# 一、任务简介

## 1、什么是预训练模型

- 已经事先训练好的模型，无需训练即可预测。也就是说我们无需训练，直接就可以拿来预测了。那么这些模型是谁训练好的？可能是一些大公司，比如说像谷歌，也有可能是一些研究机构、大学教授等等，即已经有人训练好了，并上传到了网上，我们只需要下载就行了。
- 在 `Tensorflow.js` 中可以调用 `Web` 格式的模型文件。当然还有其他类型的格式，比如，`Python`版本的`Tensorflow.js`， 它就有一个叫 `SavedModel` 的格式，这也是一个非常通用的格式。

## 2、操作步骤

- **加载MobileNet模型** —— MobileNet是一种卷积神经网络，且MobileNet这种卷积神经网络的特点就是**比较轻量**，它的模型文件非常的小，响应速度非常的快。但是它的缺点就是相比于更复杂的一些模型、或者更复杂的那些卷积神经网络的模型来比较的话，准确度就没有他们那么高，不过基本上也够用了。正如它的名字一样，这种模型通常被用于**移动端**。
- **进行预测** —— 之前我们的任务都是要**先准备数据**，然后构建复杂的神经网络，然后再进行训练，训练完之后才能预测。而使用了MobileNet模型之后，我们就可以直接进行预测了。

# 二、加载 MobileNet 模型

## 1、操作步骤

- 下载`MobileNet`模型文件
- 在本地开启静态文件服务器
- 使用`Tensorflow.js`的`loadLayersModel`方法加载模型

## 2、Coding Time

### （1）加载数据

首先我们，要先准备mobilenet的数据集，目录如下：

![img](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202407132155382.png)



更详细内容请见：https://pzfqk98jn1.feishu.cn/wiki/Khs4wuRfHiA29NkEdU7c8sXdnT0?from=from_copylink

