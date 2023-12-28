---
title: Two-way data binding using proxies
---

JavaScript [proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) have many applications. One of them is the implementation of two-way data binding similar to how it works in popular JavaScript frameworks like Angular or Vue.

Suppose we have a simple html form:

```html
<form>
	<div>
		<label>Name <input type="text" name="name" /></label>
	</div>
	<div>
		<label>Email <input type="email" name="email" /></label>
	</div>
	<div>
		<label>Male <input type="radio" name="sex" value="male" /></label>
		<label>Female <input type="radio" name="sex" value="female" /></label>
	</div>
	<button>Submit</button>
</form>
```

And we have a JavaScript object that represents the state of this form:

```js
const formData = {
	name: '',
	email: '',
	sex: 'male'
};
```
