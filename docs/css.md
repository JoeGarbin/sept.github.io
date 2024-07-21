# CSS Problems

## 1. 如何覆盖已有的变量
在 CSS 中，覆盖已有的变量通常是通过重新定义它们来实现的。如果你使用的是 CSS 变量（也称为自定义属性），可以通过简单地在需要的地方重新定义这些变量来覆盖它们。

假设你有这样一个 CSS 变量定义：

```css
:root {
  --primary-color: blue;
}
```

如果你想在某个特定的元素或选择器下覆盖 `--primary-color` 这个变量的值，可以这样做：

```css
.element {
  --primary-color: red;
}
```

这样，`.element` 元素及其内部的所有子元素将使用 `--primary-color: red;` 的值，而不是全局定义的 `--primary-color: blue;`。

需要注意的是，CSS 变量遵循层叠规则，就像其他 CSS 属性一样。如果在一个作用域内多次定义同一个变量，最后定义的值将覆盖之前的定义。

另外，如果你要覆盖的是普通的 CSS 属性（例如 `color`, `background-color` 等），则可以通过具体的选择器和更具体的规则来实现覆盖。例如：

```css
.element {
  color: green; /* 覆盖元素的颜色 */
}

.element p {
  color: purple; /* 覆盖 .element 元素内部段落的颜色 */
}
```

总结来说，要覆盖已有的变量，无论是 CSS 变量还是普通的 CSS 属性，关键是通过更具体的选择器和定义来确保新值能够应用到需要的地方。